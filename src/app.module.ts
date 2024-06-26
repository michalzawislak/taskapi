import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { OwnapiController } from './ownapi/ownapi.controller';
import { OwnapiService } from './ownapi/ownapi.service';
import { OwnapiproModule } from './ownapipro/ownapipro.module';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule, OwnapiproModule],
  controllers: [AppController, OwnapiController],
  providers: [AppService, OwnapiService],
})
export class AppModule {}
