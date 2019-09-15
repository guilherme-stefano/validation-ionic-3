import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ValidationPage } from './validation';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ValidationPage,
    ReactiveFormsModule
  ],
  imports: [
    IonicPageModule.forChild(ValidationPage),
  ],
})
export class ValidationPageModule {}
