import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateInncidentComponent } from './create-inncident/create-inncident.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'create' },
  { path: 'create', component: CreateInncidentComponent },
];

@NgModule({
  declarations: [CreateInncidentComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class IncidentModule {}
