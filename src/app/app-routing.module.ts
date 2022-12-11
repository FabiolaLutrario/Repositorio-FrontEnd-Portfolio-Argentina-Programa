import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { IndexComponent } from './componentes/index/index.component';

const routes: Routes =[
  {path: 'index', component:IndexComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '', redirectTo: '/index', pathMatch:'full'},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule { }
