import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './Entity/user.entity';
import { VideoModule } from './video/video.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'mydb',
      entities: [User],
      synchronize: true,
      logging: ['error'],
    }),
    AuthModule,
    VideoModule,
    TypeOrmModule.forFeature([User]),
    MulterModule.register({
      dest: './upload', //ชื่อไฟล์ที่จะบันทึก
    }),
  ],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
