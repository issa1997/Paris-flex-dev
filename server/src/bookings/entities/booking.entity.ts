import { PassengersEntity } from 'src/passengers/entities/passenger.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

export enum TripType {
  ROUND_TRIP = 'round_trip',
  ONE_WAY = 'one_way',
}

export enum TripStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
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

  @Column({ default: false })
  isDelete: boolean;

  @Column({
    type: 'enum',
    enum: TripStatus,
    default: TripStatus.PENDING,
  })
  tripStatus: TripStatus;

  @Column()
  pickUpLandMark: string;
}
