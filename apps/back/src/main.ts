import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
  console.log('\n Backend is running at:');
  console.log('Users API       → http://localhost:3000/users');
  console.log('Templates API   → http://localhost:3000/templates\n');
}
bootstrap();


