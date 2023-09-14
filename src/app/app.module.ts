import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SwitchTableComponent } from './components/switch-table/switch-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SwitchTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
