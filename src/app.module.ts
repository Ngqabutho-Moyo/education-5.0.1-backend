import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SchoolsModule } from './schools/schools.module';
import { AdministratorSchoolsModule } from './administrator_schools/administrator_schools.module';
import { DepartmentsModule } from './departments/departments.module';
import { ClassesModule } from './classes/classes.module';
import { StudentClassesModule } from './student_classes/student_classes.module';
import { SubjectSyllabusModule } from './subject_syllabus/subject_syllabus.module';
import { SyllabusAssignmentsModule } from './syllabus_assignments/syllabus_assignments.module';
import { TeacherClassesModule } from './teacher_classes/teacher_classes.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { DepartmentSubjectsModule } from './department_subjects/department_subjects.module';
import { SyllabusResourcesModule } from './syllabus_resources/syllabus_resources.module';
import { TeacherSubjectsModule } from './teacher_subjects/teacher_subjects.module';
import { StudentParentsGuardiansModule } from './student_parents_guardians/student_parents_guardians.module';
import { ParentsGuardiansModule } from './parents_guardians/parents_guardians.module';
import { StudentSubjectsModule } from './student_subjects/student_subjects.module';
import { SyllabiModule } from './syllabi/syllabi.module';
import { ResourcesModule } from './resources/resources.module';

@Module({
  imports: [
    AuthModule,
    AdministratorsModule,
    AssignmentsModule,
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
    ParentsGuardiansModule,
    StudentSubjectsModule,
    SyllabiModule,
    ResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
