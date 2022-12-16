import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SendNotificationUseCase } from './../../app/use-cases/send-notification-uc';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotificationUseCase],
})
export class HttpModule {}
