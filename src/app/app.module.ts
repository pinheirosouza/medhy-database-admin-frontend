import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider'

import { HomeComponent } from './layout/dashboard/pages/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeSelectorCardComponent } from './shared/components/home-selector-card/home-selector-card.component';
import { IllnessesComponent } from './layout/dashboard/pages/illnesses/illnesses.component';
import { SiteMapToolbarComponent } from './shared/components/site-map-toolbar/site-map-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { IllnessSearchListComponent } from './shared/components/illness-search-list/illness-search-list.component';
import { IllnessComponent } from './layout/dashboard/pages/illness/illness.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RegisterComponent } from './layout/dashboard/pages/register/register.component';
import { IllnessFormComponent } from './layout/dashboard/pages/register/components/illness-form/illness-form.component';
import { SignAndSymptomsFormComponent } from './layout/dashboard/pages/register/components/sign-and-symptoms-form/sign-and-symptoms-form.component';
import { TreatmentFormComponent } from './layout/dashboard/pages/register/components/treatment-form/treatment-form.component';

import { MatStepperModule } from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AlphabeticalScrollBarModule } from 'alphabetical-scroll-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    HomeSelectorCardComponent,
    IllnessesComponent,
    SiteMapToolbarComponent,
    IllnessSearchListComponent,
    IllnessComponent,
    RegisterComponent,
    IllnessFormComponent,
    SignAndSymptomsFormComponent,
    TreatmentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatTooltipModule,
    MatStepperModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    AlphabeticalScrollBarModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
