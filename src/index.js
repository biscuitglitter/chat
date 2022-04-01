import "./style.css"

import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBfbxzloMK-ctTCN_wfv0zld0fuXs_v1PI",
    authDomain: "testlib-dfa02.firebaseapp.com",
    projectId: "testlib-dfa02",
    storageBucket: "testlib-dfa02.appspot.com",
    messagingSenderId: "934022224688",
    appId: "1:934022224688:web:b9c5df23aa7acec45286f5"
};

const app = initializeApp(firebaseConfig)

// this constant represents the database
const db = getFirestore()

// get collection reference
const colRef = collection(db, "magazines")

// 1st argument says we want the database to look for the collection, 2nd argument references the collection 

getDocs(colRef)
    .then((snapshot) => {
        let magazines = []
        snapshot.docs.forEach((doc) => {
            magazines.push({ ...doc.data(), id: doc.id })
        })
        console.log(magazines)
    })
    .catch((err) => {
        console.log(err)
    })

const addMagazine = document.querySelector(".addMagazine")
addMagazine.addEventListener("submit", (e) => {
    e.preventDefault()
    addDoc(colRef, {
        title: addMagazine.title.value,
        editors: addMagazine.editors.value
    })
        .then(() => {
            addMagazine.reset()
        })
})

const deleteMagazine = document.querySelector(".deleteMagazine")
deleteMagazine.addEventListener("submit", (e) => {
    e.preventDefault()

    const docRef = doc(db, "magazines", deleteMagazine.id.value)
    deleteDoc(docRef)
        .then(() => {
        deleteMagazine.reset()
    })
})