import { ContentModel } from './content-model';
import { NotificationModel } from './notification-model';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new NotificationModel({
      content: new ContentModel('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'test-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
