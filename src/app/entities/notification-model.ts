import { randomUUID } from 'crypto';
import { Replace } from '../../helpers/replace';
import { BaseEntityModel } from './base-model';
import { ContentModel } from './content-model';

export interface INotificationProps {
  recipientId: string;
  content: ContentModel;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class NotificationModel extends BaseEntityModel {
  private props: INotificationProps;

  constructor(props: Replace<INotificationProps, { createdAt?: Date }>) {
    super(randomUUID());

    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public set content(content: ContentModel) {
    this.props.content = content;
  }

  public get content(): ContentModel {
    return this.props.content;
  }

  public set catergory(category: string) {
    this.props.category = category;
  }

  public get catergory(): string {
    return this.props.category;
  }
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
