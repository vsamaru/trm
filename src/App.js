import React from 'react';
import Printer from './Printer';
  var config = {
    apiKey: "AIzaSyC9XbSODqvt16w24GYIlHs6fk7yObrgyF8",
    authDomain: "v-vv-v.firebaseapp.com",
    databaseURL: "https://v-vv-v-default-rtdb.firebaseio.com"
        }
        firebase.initializeApp(config)
        var database = firebase.database()
export default () => (
  <Printer>
    {async ({ print, println }) => {
        // database.ref().on("child_added", async function(snapshot, prevChildKey) {
        //     var newPost = snapshot.val()
        //     await println(JSON.stringify(newPost), 500)
        // })
                database.ref().on("child_changed", async function(snapshot, prevChildKey) {
            var newPost = snapshot.val()
          await println(JSON.stringify(newPost), 1000)            
        })
                               database.ref().on("child_removed", async function(snapshot, prevChildKey) {
            var newPost = snapshot.val()
          await println(JSON.stringify(newPost), 1000)            
        })
      // print('hello ');
      // await print('world', 1000);
      // await print('!', 500);
      // await print('!', 500);
      // await println('!', 500);
      // await println('this is my cool console', 1000);
      // await println('using render props', 1000);
      // println('and async/await');
    }}
  </Printer>
);
