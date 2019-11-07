// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
   //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  // used split to create array from the sring so i can litrate throgh and  map to generate new array 
  function wordLengths(str) {
    
    var array = str.split(" "); 

    return map (array ,function(element) {

        return element.length ;
      })  
     
    }
         // TODO: your code here 
  
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3

  // I used each to litaret through the the string and in every time the condition is right will add one to count 
  
  function countOccurrences(string, character) {
    var count = 0 ; 
    each(string, function(element) {
      if (element ===  character) {
        count ++;
      }
    }) 
    return count ;
      // your code is here
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]

  // i splited the sting then used the filter function to meet the right condition so in the end will return a new array with the result 
  
  function wordsLongerThanThree(str) {

    var array = str.split(' ');

     return filter(array , function(element){

      return element.length > 3;

    })
      // TODO: your code here 
  }
  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

  // its a recursion :)) im still wondering how i solve it :)) 
  
  function repeatString(str, count) { 
    
    if (count === 0 ) {


      return ""
    }

    else if (count > 0) {

      // here is where the call of the funcation agin happen and reduce the count by one every time 
      return str + repeatString(str, count-1) 
    }

  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();

  function makePizza(crust, size, numberOfSlice) {
    var curst = crust
    var size = size
    var ingredients =""
    var numberOfSlice = numberOfSlice

     //var ingredients  = "curst :"+crust+","+"size :"+size+","+"number of Slice :"+numberOfSlice
     return {
      addIngredients : function(str){

        ingredients = ingredients +str+","

      },
      displayIngredaints: function(){

         return " The ingredients are : "+ingredients
      },
      bakePizza : function(){

         setTimeout(function(){ console.log( "Your "+crust+" "+size+" "+numberOfSlice+" slice pizza is done")},2000)

      },
      eatSlice : function(){

        if(numberOfSlice > 0 ){

          numberOfSlice--
        }
        else{

          return "Sorry no more pizza for you"
        }

      }

     }
  }
  
  // Write your code here .....
  
  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  // Yes  I am 

  function ReadingList() {

    var readingList = {};
    readingList.read = 0;
    readingList.unRead = 0;
    readingList.toRead = [];
    readingList.currentRead = undefined;
    readingList.readBooks = [];
    readingList.addBook = addBook;
    readingList.finishCurrentBook = finishCurrentBook

    return readingList ;

  }

  // this function will add the book to the array

  var addBook = function(name){

    this.toRead.push(name);
    this.unRead++;
    
  }

  // i stucked here in this function problem with the courrentrRead in first time you add a book to the readingList.toRead 

  var finishCurrentBook = function(){

    // if(this.currentRead === "") {

    //  this.currentRead = this.toRead[0];
    // }
    if (this.currentRead !== undefined)

      this.read++
      this.unRead--
      this.readBooks.push(this.currentRead)
      this.currentRead = this.toRead[0];

  }

  

  // Write your code here .....
  
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"



  function makeSafe(init) {

    var init = init 
    var str = '';

    // return the function with 

    return function(item, itemSize){

      //coverting the string names to numbers 

      if (itemSize === "small" ) {
        itemSize = 1;
      }
      else if (itemSize === "medium" ) {
        itemSize = 2;
      }
      else if ( itemSize === "big" ) {
        itemSize = 3;
      }

      if (itemSize <=init) {

        str = str + item ;
        init = init - itemSize  
        
      }
      else if ( init < 0 ) {

        return str ; 
      }

      else if ( itemSize > init) {

        return "Can't fit"
      }
        
    }
  }
  
  // Write your code here .....
  
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  // we use closures when need to declare a globel variable outside the funtion  
  
  // 2- In OOP, what does "this" refer to ?
  // when we need to grap the globel varabile in class we use this in the outter function 
  // so we can access the opject properties 
  
  // 3- What is jQuery?
  // it a javascript libary that simplfy the using of document object model 
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
  // the the passing arrgemnt in the clousers will be a globle scope to inner funcation 
  //and it will use it , in oop all the method functions will be refered out side the class 
  // so we dont use more sapce for each instence that we create by the class . 
  


