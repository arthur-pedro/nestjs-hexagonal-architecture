import { SaveStudentCommand } from './save-student.command';

export abstract class SaveStudentUseCase {
  abstract saveStudent(command: SaveStudentCommand): Promise<void>;
}
