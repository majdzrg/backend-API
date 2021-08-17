import { HttpException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ITeacher } from './interfaces/teacher.interface';
import { TeacherDto } from './teacher.dto';

const teacherProjection = {
    __v: false,
    _id: false,
}

@Injectable()
export class TeacherService {

 constructor(@InjectModel('Teacher') private readonly teacherModel:Model<ITeacher>) {}

    public async getTeachers(): Promise<TeacherDto[]> {
        const teachers = await this.teacherModel.find({}, teacherProjection).exec();
        if(!teachers || !teachers[0]) {
            throw new HttpException('Not Found', 404);
        }
        return teachers;
    }

    public async postTeacher(newTeacher: TeacherDto) {
       const teacher = await new this.teacherModel(newTeacher);
       return teacher.save();
    }

    public async getTeacherById(id: number): Promise<TeacherDto> {
        const teacher = await this.teacherModel.findOne( { id }, teacherProjection).exec();
        if(!teacher ) {
            throw new HttpException('Not Found', 404);
        }
        return teacher;
    }

    public async deleteTeacherById(id: number): Promise<any> {
        const teacher = await this.teacherModel.deleteOne( { id }).exec();
        if(teacher.deletedCount === 0 ) {
            throw new HttpException('Not Found', 404);
        }
        return teacher;
    }
    
    public async putTeacherById(id: number,
        propertyName: string,
        propertyValue: string,
        ): Promise<TeacherDto> {
            const teacher = await this.teacherModel.findOneAndUpdate(
                { id },
            {
               [propertyName]: propertyValue,
            },
            )
            .exec();
          if(!teacher) {
              throw new HttpException('Not Found', 404);
          }  
        return teacher;
    }










}
