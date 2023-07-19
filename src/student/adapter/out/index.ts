import { Provider } from '@nestjs/common';
import { StudentPersistencePort } from 'src/student/application/ports/out/student-persistence.port';
import { StudentPersistenceAdapter } from './student-persistence.adapter';
import { StudentMapper } from './student.mapper';

export const ServicesOut: Provider[] = [
  {
    provide: StudentPersistencePort,
    useClass: StudentPersistenceAdapter,
  },
  StudentMapper,
];
