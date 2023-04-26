import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatesEntity } from './entities/rate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RatesService {
  constructor(
    @InjectRepository(RatesEntity)
    private ratesRepository: Repository<RatesEntity>,
  ) {}

  async create(createRateDto: any) {
    const rate: RatesEntity = {
      isDelete: false,
      ...createRateDto,
    };
    const rates = this.ratesRepository.create(rate);
    await this.ratesRepository.save(rate);
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

  async update(id: number, updateRateDto: any) {
    const rate: RatesEntity = {
      isDelete: false,
      ...updateRateDto,
    };
    return await this.ratesRepository.update({ id }, rate);
  }

  async remove(id: number) {
    return await this.ratesRepository.delete({ id });
  }
}
