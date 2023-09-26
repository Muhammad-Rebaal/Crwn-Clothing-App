import { initializeApp } from "firebase/app"; //This initialize app function creates an app instance for you based of some type of config ,this config is an object that allows us to this Firebase app instance to that instance that we've online bcoz now we've the library installed , but there's no way of us telling Firebase.Oh this instance that you're using should be referring to the on that you have created inside of Firebase Console,specifically this one here

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore, // It is also an Instance and also a separate service so we import it like this
  doc, // It is an Instance (Doc)
  getDoc, // Get the Doc data
  setDoc, // Set the Doc data
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlcD5_VYEPUOJfe99ZzDEKR2N0q37d6p4",
  authDomain: "crwn-clothing-db-8733a.firebaseapp.com",
  projectId: "crwn-clothing-db-8733a",
  storageBucket: "crwn-clothing-db-8733a.appspot.com",
  messagingSenderId: "846230104919",
  appId: "1:846230104919:web:70d9c2262b1cad54492c12",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig); // Used to initialize the firebase

const googleprovider = new GoogleAuthProvider(); //used to provide the GoogleAuthentication
// which then give me the Provider instance.

googleprovider.setCustomParameters({
  // This will take some custom Parameters which then take somekind
  // of config object acc to which we can use the Google Auth.
  prompt: "select_account", // jo hume chahye wo sirf abhi jo hai prompt jo lega 'select_account'
});
// Is ka mtlb jb bhi koi interact krega humare provider se to wo us ko lazmi select krna hoga koi na koi account

export const auth = getAuth(); // we need to create an instance which is our auth instance

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

// ab jo sign in pr pop up khole to wo zaror auth aur provider le...

// ab mene yaha pr sirf GoogleAuthProvider new k sth use kia lekin auth ko s simple as funciton use kia jbke dono
// class hain q k provider sirf instruction dene k lie hai aur main do aur teen provider bhi use kr skta hon lekin
// mene auth ek hi dfa use krna hai wo authentication k lie that's y I use it s function

const db = getFirestore(); //Once we instantiated we can access it to use the dbase
// and communicate with it to get or set data to dbase.
export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db)
  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef,object.title.toLowerCase())
    batch.set(docRef,object)
  })
  await batch.commit()
  console.log("done!")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db,'categories');
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc,docsSnapshot)=>{
    const {title,items} = docsSnapshot.data()
    acc[title.toLowerCase()] = items;
    return acc;
  },{})
return categoryMap
}



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation //jese humne dekha k agr hum submit krte hain by email_password we get a null name of user so to fix this
) => {
  // we add additional information prop k humne display name apne pas se dala hai jo
  // is se neeche wale try block main spread hojaye ga initially mere ps prop = {} wo then is additional information is k andr ajaye ga
  // jese additionalInformation = {displayName : Mike} aur ye overwrite krdega null value and I've my final display name
  //
  if (!userAuth) return; // yahan pr bs null safety lagai hai
  const userDocRef = doc(db, "user", userAuth.uid);
  // console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  // console.log(userSnapshot.exists()) // exists bs ye btaye ga exists karta ya nh database main aur humen allow krta hai k data access kr sken
  // doc takes 3 argument one is the dbase , collection and the last is the unique
  // identifier

  // if user dataa does not exist
  // create / set the document with the data from userAuth in my collection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(`Error creating the user is ${error.message}`);
    }
  }
  // if user data exists

  // return userDocRef
  return userDocRef;
};
export const AuthwithPasswordemail = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const SigninAuthwithPasswordemail = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
export const SignOutUser = async () => await signOut(auth);

export const OnAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
