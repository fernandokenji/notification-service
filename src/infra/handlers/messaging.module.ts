import { SendNotification } from '@app/use-cases/send-notification';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { NotificationsController } from './kafka/controllers/notifications-controlles';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
