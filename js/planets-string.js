
    "use strict";
//REMOVED IIFE to test html code in HTML file
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
let planetsStringBreak = planetsArray.join('<br>');
console.log(planetsStringBreak);
//br prints each planet per line

    let stringUnorderedList = '';
    function createUnList(arr){
        stringUnorderedList = '<ul>';
        arr.forEach(function(planet){
            stringUnorderedList += '<li>'+ planet;
        })
        return stringUnorderedList+'</ul>';
    }



    function getData(){
        document.getElementById('test').innerHTML = createUnList(planetsArray);
        //document.getElementById('test').innerHTML = planetsStringBreak;
    }

