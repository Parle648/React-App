import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ActivitiesModule } from './activities/activities.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [DatabaseModule, ActivitiesModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
