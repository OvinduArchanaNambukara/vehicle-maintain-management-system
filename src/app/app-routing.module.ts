import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AccountRegisterComponent} from './account-register/account-register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserInterfaceComponent} from './user-interface/user-interface.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {QrcodeComponent} from './qrcode/qrcode.component';
import {VehiListComponent} from './vehi-list/vehi-list.component';
import {VehicleDetailsComponent} from './vehicle-details/vehicle-details.component';
import {NewVehiFormComponent} from './new-vehi-form/new-vehi-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'acc', component: AccountRegisterComponent},
  {path: 'interface', component: UserInterfaceComponent},
  {path: 'user_details', component: UserDetailsComponent},
  {path: 'qr', component: QrcodeComponent},
  {path: 'vehi_list', component: VehiListComponent},
  {path: 'vehi_details', component: VehicleDetailsComponent},
  {path: 'new_vehi', component: NewVehiFormComponent},
  {path: 'reg', component: RegisterFormComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponets = [HomePageComponent, AccountRegisterComponent];
