import Student from 'src/student/domain/Student';

export abstract class StudentPersistencePort {
  abstract persistStudent(student: Student): Promise<void>;
}
