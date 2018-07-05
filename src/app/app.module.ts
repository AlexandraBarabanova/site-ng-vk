import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { LoginComponent } from "./login/login.component";
// import { AppRoutingModule} from "./app-routing.module";
// import { FriendsRoutingModule } from "./friends/friends-routing.module";
// import { LoginRoutingModule } from "./login/login-routing.module";
import { AppService} from "./shared/app.service";

const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'friends', component: FriendsComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      // FriendsComponent,
      // LoginComponent
  ],
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes),
      // AppRoutingModule,
      // FriendsRoutingModule,
      // LoginRoutingModule,
      HttpModule,
      HttpClientModule
  ],
  exports: [RouterModule],
  providers: [AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
