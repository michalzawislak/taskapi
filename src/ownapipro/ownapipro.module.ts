import { Module } from '@nestjs/common';
import { OwnapiproService } from './ownapipro.service';
import { OwnapiproController } from './ownapipro.controller';

@Module({
  controllers: [OwnapiproController],
  providers: [OwnapiproService],
})
export class OwnapiproModule {}
