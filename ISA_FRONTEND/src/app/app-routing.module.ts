import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { LoginComponent } from './modules/homepage/login/login.component';
import { RegisterComponent } from './modules/homepage/register/register.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomepageComponent,
  LoginComponent,
  RegisterComponent,
]
