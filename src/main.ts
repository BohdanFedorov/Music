import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT || 3000
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('musicQueue')
    .setDescription('The musicQueue API')
    .setVersion('1.0.0')
    .addTag('musicQueue')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(port,() => console.info(`
  The server has been started on http://localhost:${port}/
  You can see API doc on http://localhost:${port}/api/
  `)).catch(e=>console.error(e));
}
bootstrap();
