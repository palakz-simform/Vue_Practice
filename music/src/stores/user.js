import { defineStore } from "pinia";
import { auth, usersCollection } from "../includes/firebase"
export default defineStore("user", {
    state: () => ({
        userLoggedIn: false,
    }),
    actions: {
        async registerUser(values) {
            console.log(values)
            // userCred = await firebase.auth().createUserWithEmailAndPassword(
            const userCred = await auth.createUserWithEmailAndPassword(
                values.email, values.password,)

            //doc function will create a document if it does not exist. 
            //  It gives us oppournity to assign id to the document.
            //  It takes 1 argument which is the name of the Id 
            // Firebase will store the document with the Id we passed in
            // This is done to make id of document same as id generated by authentication
            // await usersCollection.add({  
            await usersCollection.doc(userCred.user.uid).set({
                name: values.name,
                email: values.email,
                age: values.age,
                country: values.country,
            });
            await userCred.user.updateProfile({
                displayName: values.name,
            })

            this.userLoggedIn = true
        },
        async authenticate(values) {
            await auth.signInWithEmailAndPassword(values.email, values.password);
            this.userLoggedIn = true
        },
        async signOut() {
            await auth.signOut();
            this.userLoggedIn = false;
        }
    }
})


