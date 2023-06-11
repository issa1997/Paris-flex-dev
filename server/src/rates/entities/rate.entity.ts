import { TripType } from 'src/bookings/entities/booking.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rates')
export class RatesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromLocation: string;

  @Column()
  toLocation: string;

  @Column()
  packageName: string;

  @Column()
  passengerCount: number;

  @Column()
  price: number;

  @Column()
  isDelete: boolean;

  @Column({
    type: 'enum',
    enum: TripType,
    default: TripType.ONE_WAY,
  })
  tripType: TripType;
}
