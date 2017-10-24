import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DayPage } from '../pages/day/day';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp, AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './firebase.config';
import { SigninPage } from '../pages/signin/signin';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { SettingsPage } from '../pages/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DayPage,
    SigninPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { mode: 'ios' }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DayPage,
    SigninPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DayPage,
    AngularFireAuth,
    AuthService,
    AngularFireDatabase
  ]
})
export class AppModule {}
