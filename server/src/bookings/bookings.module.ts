import { Logger, Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsEntity } from './entities/booking.entity';
import { PassengersModule } from 'src/passengers/passengers.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService, Logger],
  imports: [
    TypeOrmModule.forFeature([BookingsEntity]),
    PassengersModule,
    UsersModule,
  ],
})
export class BookingsModule {}
