import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {API_BASE_URL, ConfigFactory, ConfigService} from './service/config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ConfigService,
    {provide: 'CONFIG.JSON', useValue: './assets/config.json'},
    {provide: 'BASE-URL-VARIABLE', useValue: 'API_URL'},
    {provide: API_BASE_URL, useFactory: ConfigFactory, deps: [ConfigService, 'CONFIG.JSON', 'BASE-URL-VARIABLE']}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
