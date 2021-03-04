import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { FooterCaptionComponent } from './footer/footer-caption/footer-caption.component';
import { FooterIconsComponent } from './footer/footer-icons/footer-icons.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import {FormsModule} from '@angular/forms';
import { BookingFromComponent } from './booking-from/booking-from.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
    FooterCaptionComponent,
    FooterIconsComponent,
    RegisterFormComponent,
    BookingFromComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
