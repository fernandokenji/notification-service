import { NotificationModel } from '../entities/notification-model';

export abstract class NotificationsRepository {
  abstract create(notification: NotificationModel): Promise<void>;
}
