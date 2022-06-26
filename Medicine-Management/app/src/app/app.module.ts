import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderTaskbarComponent } from './header/header-taskbar/header-taskbar.component';
import { MenuitemComponent } from './sideitem/menuitem/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTaskbarComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
