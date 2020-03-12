import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Feature Modules
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './feature/home/home.module';
import { RegistrationModule } from './feature/registration/registration.module';
import { NavbarModule } from './feature/navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
// import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    // NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    RegistrationModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
