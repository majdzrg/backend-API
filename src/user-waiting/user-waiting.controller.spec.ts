import { Test, TestingModule } from '@nestjs/testing';
import { UserWaitingController } from './user-waiting.controller';

describe('UserWaitingController', () => {
  let controller: UserWaitingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWaitingController],
    }).compile();

    controller = module.get<UserWaitingController>(UserWaitingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
