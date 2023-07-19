import { IsNotEmpty } from 'class-validator';
import { SaveStudentCommand } from 'src/student/application/ports/in/save-student.command';

export class SaveStudentRequest {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly cpf: string;

  toCommand(): SaveStudentCommand {
    return new SaveStudentCommand(this.name, this.cpf);
  }
}
