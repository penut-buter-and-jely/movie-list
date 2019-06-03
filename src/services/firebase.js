const config = {
    apiKey: 'AIzaSyA6RxBX8djKLMMxLsjzZdnQBgaSWBvaN4g',
    authDomain: 'movie-list-eccfe.firebaseapp.com',
    databaseURL: 'https://movie-list-eccfe.firebaseio.com',
    projectId: 'movie-list-eccfe',
    storageBucket: 'movie-list-eccfe.appspot.com',
    messagingSenderId: '325662716464',
    appId: '1:325662716464:web:c3570bfa657346cf'
};

firebase.initializeApp(config);

export const auth = firebase.auth();