import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum TripType {
  ROUND_TRIP = 'round_trip',
  ONE_WAY = 'one_way',
}

@Entity('bookings')
export class BookingsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pickUpLocation: string;

  @Column()
  dropOffLocation: string;

  @Column()
  passengerId: number;

  @Column()
  pickUpDate: string;

  @Column()
  PickUpTime: string;

  @Column()
  rateId: number;

  @Column({
    type: 'enum',
    enum: TripType,
    default: TripType.ONE_WAY,
  })
  tripType: TripType;

  @Column()
  luggagePieces: number;

  @Column()
  bookingRefId: string;

  @Column()
  price: number;

  @Column()
  isDelete: boolean;
}
