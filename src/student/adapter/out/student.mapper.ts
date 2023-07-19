import { Injectable } from '@nestjs/common';
import { StudentEntity } from './student-entity';
import Student from 'src/student/domain/Student';

@Injectable()
export class StudentMapper {
  toEntity(student: Student): StudentEntity {
    return new StudentEntity();
    // student.name, student.cpf
  }
}
