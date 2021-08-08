import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: 'let-me-ask-2cccf.firebaseapp.com',
    databaseURL: 'https://let-me-ask-2cccf-default-rtdb.firebaseio.com',
    projectId: 'let-me-ask-2cccf',
    storageBucket: 'let-me-ask-2cccf.appspot.com',
    messagingSenderId: '753873672431',
    appId: '1:753873672431:web:aac08de7202fff7e99a31a'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()
