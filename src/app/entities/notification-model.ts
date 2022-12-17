import { Replace } from '../../helpers/replace';
import { BaseModel } from './base/base-model';
import { ContentModel } from './content-model';

export interface INotificationProps {
  recipientId: string;
  content: ContentModel;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class NotificationModel extends BaseModel {
  private props: INotificationProps;

  constructor(
    props: Replace<INotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    super(id);

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

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
