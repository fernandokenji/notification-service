import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNoitificationRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNoitificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
