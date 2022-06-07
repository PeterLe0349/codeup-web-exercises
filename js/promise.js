"use strict";
$(document).ready(function(){
   let info;

   //get user last event based on string username
   function getLastResolve(userName){
      return fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_KEY}})
          .then(response => response.json()) //Converting the response to a JSON object
          // .then( data => {info = data[0].created_at})
          .catch( error => console.error(error))
   }

    function getLastCommitOfUser(userName){
        return fetch(`https://api.github.com/users/${userName}/events/public`, {headers: {'Authorization': GITHUB_KEY}})
            .then(response => response.json()).then( data => {
                console.log(`Last commit of ${userName} is ${data[0].created_at}`);
                console.log(data);
            })
            .catch( error => console.error(error))
    }
    getLastCommitOfUser('PeterLe0349');



   function wait(seconds, userName) {
         return new Promise((resolve, reject) => {
               setTimeout(() => {
                  waitTime = seconds;
               resolve(getLastResolve(userName));
               console.log(`Waiting for ${seconds} ms.`);
            }, seconds);
         })
   }
   let waitTime;
   //
   const myPromise = wait(3000, 'PeterLe0349');
     myPromise.then(data => {
        console.log(`After ${waitTime} ms... the data is..`);
        console.log("Latest Commit was: " + data[0].created_at)});



      // getLastResolve('PeterLe0349').then ( data => {
      //    console.log(data[0]);
      // })

    // end jquery
});