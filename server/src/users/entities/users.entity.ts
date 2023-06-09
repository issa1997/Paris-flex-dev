import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: null })
  firstName: string;

  @Column()
  email: string;

  @Column()
  phone: number;

  @Column()
  password: string;

  @Column()
  userRole: string;

  @Column({ default: false })
  isDelete: boolean;
}
