import { NotificationModel } from '@app/entities/notification-model';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNoitificationRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: NotificationModel): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.catergory,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
