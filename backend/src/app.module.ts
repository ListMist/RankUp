import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { User} from './auth/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: 'rankup_db',
      entities: [User],
      autoLoadEntities: true,
      synchronize: true,

    }),
    AuthModule,
  ],
})
export class AppModule {}