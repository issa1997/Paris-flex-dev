import {
  IsDefined,
  IsEmpty,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { TripType } from 'src/bookings/entities/booking.entity';

export class RateDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  fromLocation: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  toLocation: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  packageName: string;

  @IsNumber()
  @IsNotEmpty()
  passengerCount: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsDefined()
  @IsEnum([TripType.ONE_WAY, TripType.ROUND_TRIP])
  tripType: TripType;
}

export class RatesParamsDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}

export class RatesFromLocationParamsDto {
  @IsString()
  @IsNotEmpty()
  toLocation: string;

  @IsString()
  @IsNotEmpty()
  fromLocation: string;

  @IsNumber()
  @IsNotEmpty()
  passengerCount: number;

  @IsNumber()
  @IsNotEmpty()
  pickUpTime: string;
}
