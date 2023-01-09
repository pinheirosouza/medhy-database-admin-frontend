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
import {MatDividerModule} from '@angular/material/divider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';

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
import { SymptomsModalComponent } from './shared/components/symptoms-modal/symptoms-modal.component';
import { SignsModalComponent } from './shared/components/signs-modal/signs-modal.component';
import { ExamModalComponent } from './shared/components/exam-modal/exam-modal.component';
import { SourcesComponent } from './layout/dashboard/pages/sources/sources.component';
import { SourcesToolbarComponent } from './shared/components/sources-toolbar/sources-toolbar.component';
import { NewSourceModalComponent } from './shared/components/new-source-modal/new-source-modal.component';

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
    SymptomsModalComponent,
    SignsModalComponent,
    ExamModalComponent,
    SourcesComponent,
    SourcesToolbarComponent,
    NewSourceModalComponent,
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
    MatDividerModule,
    MatAutocompleteModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
