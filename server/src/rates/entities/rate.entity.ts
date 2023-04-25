import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rates')
export class RatesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromLocation: number;

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
}
