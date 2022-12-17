import { ContentModel } from '@app/entities/content-model';
import {
  INotificationProps,
  NotificationModel
} from '@app/entities/notification-model';

type Override = Partial<INotificationProps>;

export function makeNotification(override: Override = {}) {
  return new NotificationModel({
    category: 'social',
    content: new ContentModel('Nova solicitação de amizade!'),
    recipientId: 'recipient-1',
    ...override,
  });
}
