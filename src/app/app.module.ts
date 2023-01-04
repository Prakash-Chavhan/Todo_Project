import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, NgModel } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { TokenInterceptorService } from './_services/token-interceptor.service';
import { AuthGuard } from './_auth/auth.guard';
import { UserserviceService } from './_services/userservice.service';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ProductserviceService } from './_services/productservice.service';
import { ImportanttaskComponent } from './importanttask/importanttask.component';
import { EdittaskComponent } from './_services/edittask/edittask.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    LoginComponent,
    AddComponent,
    ImportanttaskComponent,
    EdittaskComponent
   
  ],
  imports: [
MatGridListModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },
  ProductserviceService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
