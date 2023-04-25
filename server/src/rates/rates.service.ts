import { Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RatesEntity } from './entities/rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(RatesEntity)
    private ratesRepository: Repository<RatesEntity>,
  ) {}

  async create(createRateDto: CreateRateDto) {
    const rates = this.ratesRepository.create(createRateDto);
    await this.ratesRepository.save(createRateDto);
    return rates;
  }

  async findAll() {
    return await this.ratesRepository.find();
  }

  async findOne(id: number) {
    return await this.ratesRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateRateDto: UpdateRateDto) {
    return await this.ratesRepository.update({ id }, updateRateDto);
  }

  async remove(id: number) {
    return await this.ratesRepository.delete({ id });
  }
}
