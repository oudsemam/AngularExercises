import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PetInfoComponent } from './pet-info/pet-info.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { FormsModule } from '@angular/forms';
import { UpDownCounterComponent } from './up-down-counter/up-down-counter.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [
    AppComponent,
    PetInfoComponent,
    ExerciseTwoComponent,
    UpDownCounterComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
