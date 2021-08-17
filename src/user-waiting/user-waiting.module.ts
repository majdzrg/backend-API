import { Module } from '@nestjs/common';
import { UserWaitingController } from './user-waiting.controller';
import { UserWaitingService } from './user-waiting.service';

@Module({
  controllers: [UserWaitingController],
  providers: [UserWaitingService]
})
export class UserWaitingModule {}
