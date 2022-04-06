import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DesignComponent } from './design/design.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { TecnologyComponent } from './tecnology/tecnology.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DesignComponent,
    FacilitiesComponent,
    TecnologyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
