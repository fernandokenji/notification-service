import { SendNotificationUseCase } from '@app/use-cases/send-notification-uc';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotificationUserCase: SendNotificationUseCase) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotificationUserCase.execute({
      content,
      category,
      recipientId,
    });

    return {
      notification,
    };
  }
}
