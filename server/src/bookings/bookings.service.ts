import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingsEntity } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(BookingsEntity)
    private readonly bookingRepositoy: Repository<BookingsEntity>,
    private readonly smtpService: MailerService,
  ) {}

  async create(createBookingDto: any) {
    // const email = await this.smtpService.sendMail({
    //   to: 'yohanperera27@gmail.com',
    //   subject: 'Greetings from IdK',
    //   template: './email',
    //   context: {
    //     bookingRef: 'WTH34LTL',
    //     dateAndTime: '2023/12/03 - 14:25',
    //     pickUpLocation: 'CDGF',
    //     dropOffLocation: 'PARISS',
    //     passengers: 14,
    //     suitCases: 30,
    //     name: 'JhonN',
    //     email: 'Jhonn@gmail.com',
    //     contactNumber: '+33345865221123',
    //     flightNumber: '1jghtk444',
    //     flightFrom: 'PARISSS',
    //     childSeats: 10,
    //     boosterSeats: 10,
    //     extras: 'Bring a wineeee bottle',
    //   },
    // });
    console.log(createBookingDto);
    // const passenger: BookingsEntity = {
    //   isDelete: false,
    //   ...createPassengerDto,
    // };
    // const bookings = this.bookingRepositoy.create(passenger);
    // await this.bookingRepositoy.save(passenger);
    // return bookings;
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
