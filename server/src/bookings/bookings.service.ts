import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingsEntity } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { PassengersService } from '../passengers/passengers.service';
import _ = require('lodash');
import { UsersService } from 'src/users/users.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(BookingsEntity)
    private readonly bookingRepositoy: Repository<BookingsEntity>,
    private readonly smtpService: MailerService,
    private readonly passengerService: PassengersService,
    private readonly userService: UsersService,
  ) {}

  async create(createBookingDto: any) {
    try {
      if (
        !_.isEmpty(createBookingDto) &&
        _.has(createBookingDto, 'passengerId')
      ) {
        const passenger =
          await this.passengerService.getPassengerAndExtrasDetailsById(
            createBookingDto.passengerId,
          );

        const bookings = this.bookingRepositoy.create(createBookingDto);
        await this.bookingRepositoy.save(createBookingDto);

        const user = await this.userService.findOneByRole('ADMIN');

        if (!_.isEmpty(bookings)) {
          const customerEmail = await this.smtpService.sendMail({
            to: passenger[0].email,
            subject: 'Booking Summary',
            template: './customer-booking-summery',
            context: {
              bookingRef: createBookingDto.bookingRefId,
              dateAndTime: `${createBookingDto.pickUpDate} - ${createBookingDto.PickUpTime}`,
              pickUpLocation: createBookingDto.pickUpLocation,
              dropOffLocation: createBookingDto.dropOffLocation,
              passengers: passenger[0].passengerCount,
              suitCases: createBookingDto.luggagePieces,
              name: passenger[0].name,
              email: passenger[0].email,
              contactNumber: passenger[0].phone,
              flightNumber: passenger[0].travelNumber,
              flightFrom: passenger[0].travelFrom,
              childSeats: passenger[0].childSeats,
              boosterSeats: passenger[0].boosterSeats,
              extras: passenger[0].extrasDescription,
              tripType: 'one-way',
              price: `€ ${createBookingDto.price}`,
            },
          });

          if (!_.isEmpty(user) && !_.isEmpty(customerEmail)) {
            return await this.smtpService.sendMail({
              to: user.email,
              subject: 'New Booking',
              template: './admin-booking-summery',
              context: {
                bookingRef: createBookingDto.bookingRefId,
                dateAndTime: `${createBookingDto.pickUpDate} - ${createBookingDto.PickUpTime}`,
                pickUpLocation: createBookingDto.pickUpLocation,
                dropOffLocation: createBookingDto.dropOffLocation,
                passengers: passenger[0].passengerCount,
                suitCases: createBookingDto.luggagePieces,
                name: passenger[0].name,
                email: passenger[0].email,
                contactNumber: passenger[0].phone,
                flightNumber: passenger[0].travelNumber,
                flightFrom: passenger[0].travelFrom,
                childSeats: passenger[0].childSeats,
                boosterSeats: passenger[0].boosterSeats,
                extras: passenger[0].extrasDescription,
                tripType: 'one-way',
                price: `€ ${createBookingDto.price}`,
              },
            });
          }
        }
      }
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    return await this.bookingRepositoy.find();
  }

  async findOne(id: number) {
    return await this.bookingRepositoy.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updatePassengerDto: any) {
    const passenger: BookingsEntity = {
      isDelete: false,
      ...updatePassengerDto,
    };
    return await this.bookingRepositoy.update({ id }, passenger);
  }

  async remove(id: number) {
    return await this.bookingRepositoy.delete({ id });
  }

  async getBookingsAndPassengers() {
    const query =
      'SELECT ' +
      'passengers.name, passengers.lastName,' +
      'passengers.phone, passengers.email,' +
      'passengers.passengerCount, passengers.travelNumber,' +
      'passengers.travelFrom, bookings.pickUpDate,' +
      'bookings.PickUpTime,bookings.luggagePieces,' +
      'bookings.bookingRefId,bookings.returnLocation,' +
      'bookings.returnDropLocation,bookings.returnTime,' +
      'bookings.returnDate,passengerExtras.extrasDescription,' +
      'passengerExtras.childSeats,passengerExtras.boosterSeats ' +
      'FROM bookings ' +
      'LEFT JOIN passengers ON bookings.passengerId = passengers.id ' +
      'LEFT JOIN passengerExtras ON passengerExtras.passengerId = passengers.id;';
    return await this.bookingRepositoy.query(query);
  }
}
