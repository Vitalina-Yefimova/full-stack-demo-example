import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
  console.table({
  'Users API': 'http://localhost:3000/users',
  'Templates API': 'http://localhost:3000/templates',
  'Inputs API': 'http://localhost:3000/inputs',
});
}
bootstrap();


