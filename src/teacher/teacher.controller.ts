import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
    constructor(private TeacherService: TeacherService) {}

    @Get()
    public getTeachers() {
        return this.TeacherService.getTeachers();
    }

    @Post()
    public postTeacher(@Body() teacher: TeacherDto) {
       return this.TeacherService.postTeacher(teacher);
    }

    @Get(':id')
    public getTeacherById(@Param('id') id:number) {
        return this.TeacherService.getTeacherById(id);
    }

    @Delete(':id')
    public deleteTeacherById(@Param('id') id:number) {
        this.TeacherService.deleteTeacherById(id);
    }

    @Put(':id')
    public putTeacherById(@Param('id') id:number, @Query() query) {
        const propertyName = query.property_name;
        const propertyValue = query.property_value;
        return this.TeacherService.putTeacherById(id, propertyName, propertyValue);

    }


}
