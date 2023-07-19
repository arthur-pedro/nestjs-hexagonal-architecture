import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { AdapterModule } from './adapter/adapter.module';

@Module({
  imports: [ApplicationModule, AdapterModule],
})
export class StudentModule {}
