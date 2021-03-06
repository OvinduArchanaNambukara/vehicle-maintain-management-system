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
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import {QRCodeModule} from 'angularx-qrcode';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { NewVehiFormComponent } from './new-vehi-form/new-vehi-form.component';
import { VehiListComponent } from './vehi-list/vehi-list.component';


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
    UserInterfaceComponent,
    QrcodeComponent,
    UserDetailsComponent,
    VehicleDetailsComponent,
    NewVehiFormComponent,
    VehiListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
