import { ContentModel } from '@app/entities/content-model';
import { NotificationModel } from '@app/entities/notification-model';
import { Notification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: NotificationModel) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(notification: Notification): NotificationModel {
    return new NotificationModel(
      {
        category: notification.category,
        content: new ContentModel(notification.content),
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        canceledAt: notification.canceledAt,
        createdAt: notification.createdAt,
      },
      notification.id,
    );
  }
}
