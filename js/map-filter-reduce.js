"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const usersWithThreeLanguages = users.filter((user) => user.languages.length >= 3);
console.log(usersWithThreeLanguages);

const arrayOfEmails = users.map( user => user.email);
console.log(arrayOfEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalOfAllUsersExperience = users.reduce( (total, user) => {
    return total + user.yearsOfExperience;
},0);
console.log(totalOfAllUsersExperience);

//     Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce ((longest, user) => {
    if( user.email.length > longest.length ){
        longest = user.email;
    }else{
    }
        return longest;
}, users[0].email )
console.log(longestEmail);

//     Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const stringListOfNames = users.reduce ( (listString, user, index) => {
    if(index !== (users.length-1)){
        listString += ` ${user.name},`;
    }else{
        listString += ` ${user.name}.`;
    }
    return listString;
}, 'Your instructors are:');
console.log(stringListOfNames);