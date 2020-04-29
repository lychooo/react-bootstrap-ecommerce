import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-lQKBZTVcM1dAFBDECXegwvQZ1t6CSG8",
    authDomain: "ecommerce-db-4629c.firebaseapp.com",
    databaseURL: "https://ecommerce-db-4629c.firebaseio.com",
    projectId: "ecommerce-db-4629c",
    storageBucket: "ecommerce-db-4629c.appspot.com",
    messagingSenderId: "504414870901",
    appId: "1:504414870901:web:0abbb346e1fa309891c73c",
    measurementId: "G-QR414BEQ1B"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exsist) {
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            });

        } catch (error) {
            console.log('Error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;