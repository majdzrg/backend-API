import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherModule } from './teacher/teacher.module';
import { UserWaitingModule } from './user-waiting/user-waiting.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ UserWaitingModule,
             TeacherModule,
    MongooseModule.forRoot('mongodb+srv://majd:majdzrg123@cluster0.1jkjz.mongodb.net/backend?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true
    }),
    UserModule,
    AuthModule,
    
  ],
  controllers: [AppController],
})
export class AppModule {}
