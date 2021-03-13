import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule, routingComponets} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {FooterComponent} from './footer/footer.component';
import {FooterCaptionComponent} from './footer/footer-caption/footer-caption.component';
import {FooterIconsComponent} from './footer/footer-icons/footer-icons.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {FormsModule} from '@angular/forms';
import {BookingFromComponent} from './booking-from/booking-from.component';
import {UserInterfaceComponent} from './user-interface/user-interface.component';
import {QRCodeModule} from 'angularx-qrcode';
import {QrcodeComponent} from './qrcode/qrcode.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import {NewVehiFormComponent} from './new-vehi-form/new-vehi-form.component';
import {VehiListComponent} from './vehi-list/vehi-list.component';
import {NgQrScannerModule} from 'angular2-qrscanner';
import {QrCodeScannerComponent} from './qr-code-scanner/qr-code-scanner.component';
import {HomePageComponent} from './home-page/home-page.component';
import {MiddleContentComponent} from './home-page/middle-content/middle-content.component';
import {AccountRegisterComponent} from './account-register/account-register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {CustomerService} from '../services/customer.service';
import {HttpClientModule} from '@angular/common/http';


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
    QrCodeScannerComponent,
    HomePageComponent,
    MiddleContentComponent,
    AccountRegisterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    QRCodeModule,
    NgQrScannerModule,
    HttpClientModule,
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
