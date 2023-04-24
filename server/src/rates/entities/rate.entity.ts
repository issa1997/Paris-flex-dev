import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Rate {
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

}
