import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SaveStudentService } from 'src/student/application/services/save-student.service';
import { SaveStudentRequest } from './save-student.request';
import { SaveStudentCommand } from 'src/student/application/ports/in/save-student.command';

@Controller('save-student')
export class SaveStudentController {
  constructor(private saveStudentService: SaveStudentService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async save(@Body() request: SaveStudentRequest): Promise<void> {
    const command: SaveStudentCommand = request.toCommand();
    await this.saveStudentService.saveStudent(command);
  }
}
