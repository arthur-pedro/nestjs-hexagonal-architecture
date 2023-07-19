import { Injectable } from '@nestjs/common';
import Student from '../../domain/Student';
import { SaveStudentCommand } from '../ports/in/save-student.command';
import { StudentPersistencePort } from '../ports/out/student-persistence.port';
import { SaveStudentUseCase } from '../ports/in/save-student.use-case';

@Injectable()
export class SaveStudentService implements SaveStudentUseCase {
  constructor(private studentPersistencePort: StudentPersistencePort) {}

  async saveStudent(student: SaveStudentCommand): Promise<void> {
    const studentToSave = new Student(student.name, student.cpf);
    await this.studentPersistencePort.persistStudent(studentToSave);
  }
}
