import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Responsive layout module
import { FlexLayoutModule } from '@angular/flex-layout';

// Core flp components here
import { NavComponent } from './nav/nav.component';

// Angular Material modules here
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatRippleModule } from '@angular/material/core';

// whats this
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatRippleModule,
    ObserversModule,
    PlatformModule
  ]
})
export class CoreModule { }
