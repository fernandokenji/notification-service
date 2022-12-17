import { NotificationModel } from '@app/entities/notification-model';

export class NotificationViewMapper {
  static toHttp(notification: NotificationModel) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
    };
  }
}
