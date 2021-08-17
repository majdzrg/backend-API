import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TeacherModule } from './teacher/teacher.module';
import { UserWaitingModule } from './user-waiting/user-waiting.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ╔═╗╦ ╦╔═╗╔═╗╔═╗╔═╗╦═╗
  // ╚═╗║║║╠═╣║ ╦║ ╦║╣ ╠╦╝
  // ╚═╝╚╩╝╩ ╩╚═╝╚═╝╚═╝╩╚═
  const config = new DocumentBuilder()
  .setTitle('API')
  .setDescription(' API description')
  .setVersion('1.0')
  .addTag('API')
  .build();
const document = SwaggerModule.createDocument(app, config, {
  include: [
    TeacherModule,
    UserWaitingModule,
  ],
});
SwaggerModule.setup('api', app, document);








  await app.listen(3000);
}
bootstrap();
