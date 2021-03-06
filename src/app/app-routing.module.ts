import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {AccountRegisterComponent} from './account-register/account-register.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'acc', component: AccountRegisterComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponets = [HomePageComponent, AccountRegisterComponent];
