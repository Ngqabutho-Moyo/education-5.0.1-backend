import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SchoolsModule } from './schools/schools.module';
import { AdministratorSchoolsModule } from './administrator-schools/administrator-schools.module';
import { DepartmentsModule } from './departments/departments.module';
import { ClassesModule } from './classes/classes.module';
import { StudentClassesModule } from './student-classes/student-classes.module';
import { SubjectSyllabusModule } from './subject-syllabus/subject-syllabus.module';
import { SyllabusAssignmentsModule } from './syllabus-assignments/syllabus-assignments.module';
import { TeacherClassesModule } from './teacher-classes/teacher-classes.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { DepartmentSubjectsModule } from './department-subjects/department-subjects.module';
import { SyllabusResourcesModule } from './syllabus-resources/syllabus-resources.module';
import { TeacherSubjectsModule } from './teacher-subjects/teacher_subjects.module';
import { StudentParentsGuardiansModule } from './student-parents-guardians/student-parents-guardians.module';
import { ParentGuardianModule } from './parents-guardians/parents-guardians.module';
import { StudentSubjectsModule } from './student-subjects/student-subjects.module';
import { SyllabusModule } from './syllabi/syllabi.module';
import { ResourcesModule } from './resources/resources.module';
import { ConfigModule } from '@nestjs/config';
import { DepartmentTeachersModule } from './department-teachers/department-teachers.module';
import { SchoolDepartmentsModule } from './school-departments/school-departments.module';
import { SchoolSubjectsModule } from './school-subjects/school-subjects.module';
import { SchoolTeachersModule } from './school-teachers/school-teachers.module';
import { SchoolStudentsModule } from './school-students/school-students.module';
import { SchoolAdministratorsModule } from './school-administrator/school-administrator.module';

@Module({
  imports: [
    AuthModule,
    AdministratorsModule,
    AssignmentsModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    SubjectsModule,
    SchoolsModule,
    AdministratorSchoolsModule,
    DepartmentsModule,
    ClassesModule,
    StudentClassesModule,
    SubjectSyllabusModule,
    SyllabusAssignmentsModule,
    TeacherClassesModule,
    TeachersModule,
    StudentsModule,
    DepartmentSubjectsModule,
    SyllabusResourcesModule,
    TeacherSubjectsModule,
    StudentParentsGuardiansModule,
    ParentGuardianModule,
    StudentSubjectsModule,
    SyllabusModule,
    ResourcesModule,
    DepartmentTeachersModule,
    SchoolDepartmentsModule,
    SchoolSubjectsModule,
    SchoolTeachersModule,
    SchoolStudentsModule,
    SchoolAdministratorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
