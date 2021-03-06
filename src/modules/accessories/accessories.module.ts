import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AccessoriesService } from './accessories.service';
import { AccessoriesGateway } from './accessories.gateway';
import { ConfigModule } from '../../core/config/config.module';
import { LoggerModule } from '../../core/logger/logger.module';
import { AccessoriesController } from './accessories.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    ConfigModule,
    LoggerModule,
  ],
  providers: [
    AccessoriesService,
    AccessoriesGateway,
  ],
  controllers: [
    AccessoriesController,
  ],
})
export class AccessoriesModule { }
