import { Provider } from '@nestjs/common';
import { SaveStudentService } from './save-student.service';
import { SaveStudentUseCase } from '../ports/in/save-student.use-case';

// importar mais fácil no módulo application.
export const Services: Provider[] = [
  {
    provide: SaveStudentUseCase,
    useClass: SaveStudentService,
  },
];
