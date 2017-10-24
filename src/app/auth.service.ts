import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthInfo } from './auth.info';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController, NavController } from "ionic-angular";
import { SigninPage } from '../pages/signin/signin';



@Injectable()
export class AuthService {

    static UNKNOWN_USER = new AuthInfo(null, null);

    authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER);

    constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private alertCtrl: AlertController) { }

    signin(): Observable<AuthInfo> {
        return this.fromFirebaseAuthPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
    }

    fromFirebaseAuthPromise(promise): Observable<any> {
        const subject = new Subject<any>();

        promise
            .then(res => {
                const authInfo = new AuthInfo(this.afAuth.auth.currentUser.uid, this.afAuth.auth.currentUser.email);
                this.authInfo$.next(authInfo);
                subject.next(res);
                subject.complete();
            },
            err => {
                this.authInfo$.error(err);
                subject.error(err);
                subject.complete();
            });

        return subject.asObservable();
    }

    


    logout() {
        this.afAuth.auth.signOut();
        this.authInfo$.next(AuthService.UNKNOWN_USER);
    }

    showToast(err: string) {
        let alert = this.alertCtrl.create({
            title: 'Not Allowed',
            subTitle: err,
            buttons: ['Dismiss']
        });
        alert.present();
    }

}
