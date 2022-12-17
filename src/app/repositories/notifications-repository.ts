import { NotificationModel } from '../entities/notification-model';

export abstract class NotificationsRepository {
  abstract findById(notificationId: string): Promise<NotificationModel | null>;
  abstract countManyByrecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(
    recipientId: string,
  ): Promise<NotificationModel[]>;
  abstract create(notification: NotificationModel): Promise<void>;
  abstract save(notification: NotificationModel): Promise<void>;
}
