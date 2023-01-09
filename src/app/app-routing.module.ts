import { RegisterComponent } from './layout/dashboard/pages/register/register.component';
import { IllnessComponent } from './layout/dashboard/pages/illness/illness.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { IllnessesComponent } from './layout/dashboard/pages/illnesses/illnesses.component';
import { HomeComponent } from './layout/dashboard/pages/home/home.component';
import { SourcesComponent } from './layout/dashboard/pages/sources/sources.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: { backRoute: '' },
      },
      {
        path: 'sources',
        component: SourcesComponent
      },
      {
        path: 'illnesses',
        component: IllnessesComponent,
        data: { backRoute: '' },
      },
      {
        path: 'illness/:id',
        component: IllnessComponent,
        data: { backRoute: 'illnesses' },
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: { backRoute: 'illnesses' },
      },

      {
        path: 'register/:id',
        component: RegisterComponent,
        data: { backRoute: 'illnesses' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
