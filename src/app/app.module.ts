import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routing 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Materials 
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Material
    BrowserAnimationsModule, 
    MatSidenavModule, 
    MatListModule, 
    MatButtonModule, 
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
