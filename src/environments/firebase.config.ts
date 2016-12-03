import {AuthMethods, AuthProviders} from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyAQvNKCXHLbTSbAmmPwcEIlsr-UlITpQko',
    authDomain: 'angular-uni.firebaseapp.com',
    databaseURL: 'https://angular-uni.firebaseio.com',
    storageBucket: 'angular-uni.appspot.com',
    messagingSenderId: '431771823433'

};



export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
