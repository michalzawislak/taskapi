import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnapiproService } from './ownapipro.service';
import { CreateOwnapiproDto } from './dto/create-ownapipro.dto';
import { useTools } from './helpers/ownapipro.helpers';

@Controller('ownapipro')
export class OwnapiproController {
  constructor(private readonly ownapiproService: OwnapiproService) {}

  @Post()
  async create(@Body() createOwnapiproDto: CreateOwnapiproDto) {
    const clasificationResuls = await this.ownapiproService.create(createOwnapiproDto.questionOrInfo);
    const use = await useTools(clasificationResuls);
    return use;
  }

}
