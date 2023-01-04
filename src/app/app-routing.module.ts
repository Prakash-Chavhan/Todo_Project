import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImportanttaskComponent } from './importanttask/importanttask.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './_auth/auth.guard';
import { EdittaskComponent } from './_services/edittask/edittask.component';
import { TaskresolverService } from './_services/taskresolver.service';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'important', component: ImportanttaskComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { roles: ['USER'] } },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'edittask', component: EdittaskComponent ,canActivate:[AuthGuard],data:{roles:['USER']}},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: ['ADMIN'] }, },
  { path: 'add', component: AddComponent, canActivate: [AuthGuard], data: { roles: ['USER'] } },
  { path: 'registration', component: RegistrationComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
