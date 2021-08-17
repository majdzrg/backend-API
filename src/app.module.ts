import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherModule } from './teacher/teacher.module';
import { UserWaitingModule } from './user-waiting/user-waiting.module';



@Module({
  imports: [ UserWaitingModule,
             TeacherModule,
    MongooseModule.forRoot('mongodb+srv://majd:majdzrg123@cluster0.1jkjz.mongodb.net/backend?retryWrites=true&w=majority')],
  controllers: [AppController],
})
export class AppModule {}
