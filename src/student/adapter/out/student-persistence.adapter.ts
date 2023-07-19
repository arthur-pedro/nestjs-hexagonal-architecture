import { Injectable } from '@nestjs/common';
import { StudentPersistencePort } from 'src/student/application/ports/out/student-persistence.port';
import Student from 'src/student/domain/Student';
import { StudentMapper } from './student.mapper';
import { StudentEntity } from './student-entity';

@Injectable()
export class StudentPersistenceAdapter implements StudentPersistencePort {
  constructor(private studentMapper: StudentMapper) {}
  async persistStudent(student: Student): Promise<void> {
    const studentEntity: StudentEntity = this.studentMapper.toEntity(student);

    // studentEntity.save();
  }
}
