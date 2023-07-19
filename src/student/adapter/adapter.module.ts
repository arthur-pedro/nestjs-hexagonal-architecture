import { Module, forwardRef } from '@nestjs/common';
import { ApplicationModule } from '../application/application.module';
import { ServicesOut } from './out';
import { SaveStudentController } from './in/web/save-student.controller';

@Module({
  imports: [forwardRef(() => ApplicationModule)],
  providers: [...ServicesOut],
  exports: [...ServicesOut],
  controllers: [SaveStudentController],
})
export class AdapterModule {}
