import { Routes } from '@angular/router';
import { SearchStudentComponent } from './search-student/search-student.component';
import { SearchSubjectComponent } from './search-subject/search-subject.component';

export const routes: Routes = [
    {path: 'estudiantes', component: SearchStudentComponent},
    {path: 'asignaturas', component: SearchSubjectComponent},
];
