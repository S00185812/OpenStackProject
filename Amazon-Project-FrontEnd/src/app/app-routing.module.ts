import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //CLI imports router
import {AmazonMonitorListComponent} from '../app/Components/Amazon-Parts/Amazon-Monitors/amazon-monitor-list/amazon-monitor-list.component';
import {PartFinderComponent} from '../app/Components/part-finder/part-finder.component';
import { AmazonCasesListComponent } from './Components/Amazon-Parts/Amazon-Cases/amazon-cases-list/amazon-cases-list.component';
import { AmazonCpuListComponent } from './Components/Amazon-Parts/Amazon-CPUs/amazon-cpu-list/amazon-cpu-list.component';
import { AmazonGpuListComponent } from './Components/Amazon-Parts/Amazon-GPUs/amazon-gpu-list/amazon-gpu-list.component';

import {HomeComponent} from './Components/home/home.component';

import {MonitorListComponent} from './Components/Internal-API-Parts/monitor/monitor-list/monitor-list.component';
import {GpuListComponent} from './Components/Internal-API-Parts/gpu/gpu-list/gpu-list.component';
import {CpuListComponent} from './Components/Internal-API-Parts/cpu/cpu-list/cpu-list.component';

import {UserListComponent} from './Components/user-list/user-list.component';

import {CpuHomeComponent} from './Components/regex/cpu/cpu-home/cpu-home.component';
import {GpuHomeComponent} from './Components/regex/gpu/gpu-home/gpu-home.component';

import {LoginComponent} from './Components/login/login.component';
import {LogoutComponent} from './Components/logout/logout.component';

import { AnonymousGuard } from './RouteGuards/anonymous.guard';
import { AuthGuard } from './RouteGuards/auth.guard';

//firebase authentication routes
import { SignInComponent } from './Components/Firebase-Login/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Firebase-Login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './Components/Firebase-Login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './Components/Firebase-Login/verify-email/verify-email.component';
import { ProfileComponent } from './Components/Firebase-Login/profile/profile.component';
import { GpuCreateComponent } from './Components/regex/gpu/gpu-create/gpu-create.component';

const routes: Routes = [

 {path: '', component: HomeComponent},
 {path: 'part-finder', component: PartFinderComponent, canActivate: [AuthGuard]},
 { path: 'amazon-monitor-list-component', component: AmazonMonitorListComponent, canActivate: [AuthGuard]},
 {path: 'amazon-cases-list-component', component: AmazonCasesListComponent, canActivate: [AuthGuard]},
 {path: 'amazon-cpu-list-component', component: AmazonCpuListComponent, canActivate: [AuthGuard]},
 {path: 'amazon-gpu-list-component', component: AmazonGpuListComponent, canActivate: [AuthGuard]},
 { path: 'monitor-list-component', component: MonitorListComponent, canActivate: [AuthGuard]},
 { path: 'gpu-list-component', component: GpuListComponent, canActivate: [AuthGuard]},
 { path: 'cpu-list-component', component: CpuListComponent, canActivate: [AuthGuard]},
 { path: 'regex-gpu-list-component', component: GpuHomeComponent, canActivate: [AuthGuard]},
 { path: 'regex-cpu-list-component', component: CpuHomeComponent, canActivate: [AuthGuard]},
 {path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},

 
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent, },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent }
  
  
]; //sets up routes constant where you define your routes

//configures NGModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
