import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ActivitiesModule } from './activities/activities.module';
import { TasksModule } from './tasks/tasks.module';
import { ListsModule } from './lists/lists.module';

@Module({
  imports: [DatabaseModule, ActivitiesModule, TasksModule, ListsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
