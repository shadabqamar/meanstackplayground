import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderTaskbarComponent } from './header/header-taskbar/header-taskbar.component';
import { MenuitemComponent } from './sideitem/menuitem/menuitem.component';
import { HeaderComponent } from './header/header.component';
import { SideitemComponent } from './sideitem/sideitem.component';
import { HeaderDetailsComponent } from './header/header-details/header-details.component';
import { WindowComponent } from './window/window.component';
import { StatComponent } from './window/stat/stat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTaskbarComponent,
    MenuitemComponent,
    HeaderComponent,
    SideitemComponent,
    HeaderDetailsComponent,
    WindowComponent,
    StatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
