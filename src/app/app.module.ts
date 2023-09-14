import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule

import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { SwitchTableComponent } from './components/switch-table/switch-table.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SwitchTableComponent,
    FiltersComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule // <-- Include it in our app module
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
