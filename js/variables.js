"use strict";
let blogObjects = [
    {
        "title": "My First Blog Post",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "categories": [
            "greek"
        ],
        "date": "January 25, 2015"
    }, {
    "title": "The Second Post",
    "content": "Cupcake ipsum dolor sit amet gummies. Cake chocolate sweet ice cream oat cake biscuit bear claw dessert. Jujubes marzipan toffee apple pie pastry dragée jujubes marshmallow. Dragée chocolate gingerbread liquorice chocolate bar jujubes. Sweet chocolate bar jelly-o chocolate cake candy carrot cake cotton candy macaroon marzipan. Sweet roll biscuit sweet gummies topping sesame snaps tootsie roll sugar plum pie. Sweet muffin croissant chocolate cake chupa chups. Donut croissant gummies donut powder ice cream. Chupa chups halvah apple pie topping jelly beans donut candy canes donut. Bonbon cake gummi bears cheesecake tart topping powder liquorice gummi bears.",
    "categories": [
        "family",
        "candy",
        "sweets",
        "sugar"
    ],
    "date": "February 14, 2015"
}
    , {
    "title": "The Third Post",
    "content": "Cupcake ipsum dolor sit amet gummies. Cake chocolate sweet ice cream oat cake biscuit bear claw dessert. Jujubes marzipan toffee apple pie pastry dragée jujubes marshmallow. Dragée chocolate gingerbread liquorice chocolate bar jujubes. Sweet chocolate bar jelly-o chocolate cake candy carrot cake cotton candy macaroon marzipan. Sweet roll biscuit sweet gummies topping sesame snaps tootsie roll sugar plum pie. Sweet muffin croissant chocolate cake chupa chups. Donut croissant gummies donut powder ice cream. Chupa chups halvah apple pie topping jelly beans donut candy canes donut. Bonbon cake gummi bears cheesecake tart topping powder liquorice gummi bears.",
    "categories": [
        "fruits",
        "cherry",
        "apple"
    ],
    "date": "March 24, 2015"
}
    , {
    "title": "The Fourth Post",
    "content": "Cupcake ipsum dolor sit amet gummies. Cake chocolate sweet ice cream oat cake biscuit bear claw dessert. Jujubes marzipan toffee apple pie pastry dragée jujubes marshmallow. Dragée chocolate gingerbread liquorice chocolate bar jujubes. Sweet chocolate bar jelly-o chocolate cake candy carrot cake cotton candy macaroon marzipan. Sweet roll biscuit sweet gummies topping sesame snaps tootsie roll sugar plum pie. Sweet muffin croissant chocolate cake chupa chups. Donut croissant gummies donut powder ice cream. Chupa chups halvah apple pie topping jelly beans donut candy canes donut. Bonbon cake gummi bears cheesecake tart topping powder liquorice gummi bears.",
    "categories": [
        "chocolate",
        "geneva",
        "snickers",
        "mars"
    ],
    "date": "June 4, 2015"
}
];

let toolObjects = [
    {
        "title": "Hammer",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 20
    }, {
        "title": "Drill",
        "quantity": 5,
        "categories": [
            "tool",
            "powered"
        ],
        "price": 100
    }, {
        "title": "Mower",
        "quantity": 5,
        "categories": [
            "tool",
            "gas",
            "outdoor"
        ],
        "price": 200
    }, {
        "title": "Screwdrivers",
        "quantity": 25,
        "categories": [
            "tool"
        ],
        "price": 10
    }
];

let numArray = [1, 324, 4, 23423, 234, 2343];

let stringArray = ['Peter', 'Pierre', 'Pedro', 'Piotr'];

let apostleArray = ["Peter", "Andrew", "James","John","Philip", "Bartholomew", "Thomas", "Matthew", "Thadeus",  "Simon", "Judas" ];

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

let chaoticArray = ['Petrus', 10, true, NaN, undefined, 'true', 324.43];

function makeRandomNumArray(amount, highestNumber){
    const arr = [];
    for(let i = 0; i < amount; i++){
        arr.push(Math.floor(Math.random() * highestNumber));
    }
    return arr;
}

function makeRandomNumber(max, min){
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random()* (max-min + 1) + min); // max and min are inclusive
}


