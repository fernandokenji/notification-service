import { ContentModel } from '../entities/content-model';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new ContentModel('você recebeu uma notificação de amizade');

    expect(content).toBeTruthy();
  });

  it('should be not able to create a notification content with less than 5 characters', () => {
    expect(() => new ContentModel('111')).toThrow();
  });

  it('should be not able to create a notification content with more than 240 characters', () => {
    expect(() => new ContentModel('1'.repeat(241))).toThrow();
  });
});
