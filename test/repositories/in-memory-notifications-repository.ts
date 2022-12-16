import { NotificationModel } from '../../src/app/entities/notification-model';
import { NotificationsRepository } from '../../src/app/repositories/notifications-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: NotificationModel[] = [];

  async create(notification: NotificationModel) {
    this.notifications.push(notification);
  }
}
