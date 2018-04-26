import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular modules
import { FormsModule } from '@angular/forms';

// Core flp module
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { RndComponent } from './rnd/rnd.component';


@NgModule({
  declarations: [
    AppComponent,
    RndComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
