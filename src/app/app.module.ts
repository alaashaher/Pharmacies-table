import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PharmaciesTableComponent } from './components/pharmacies-table/pharmacies-table.component';
import { AppProvider } from './app-provider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PharmaciesTableProvider } from './components/pharmacies-table/pharmacies-table.provider';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    PharmaciesTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [AppProvider, PharmaciesTableProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
