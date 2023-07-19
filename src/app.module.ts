import { Module } from '@nestjs/common';
import { SaveStudentController } from './student/adapter/in/web/save-student.controller';
import { StudentModule } from './student/student.module';

@Module({
  imports: [StudentModule],
  controllers: [SaveStudentController],
  providers: [],
})
export class AppModule {}
