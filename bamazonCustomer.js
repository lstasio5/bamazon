var mysql = require("mysql");
var inquirer = require("inquirer");
//var prompts = new Rx.Subject();
//inquirer.prompt(prompts);
//var check = require('syntax-error');

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password2",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });
  
  function runSearch() {
    inquirer
      .prompt({
        name: "productId",
        type: "list",
        message: "Please provide the ID of the item you would like to purchase",
        choices: ["1","2","3","4","5","6","7","8","9","10",]
        })
    
//check if they answered the first question then trigger next question
        .then(function(answer) {
        if(answer.productID === "1" ) {
        nextQuestion();
      }
    });
     
    }

//ask next question- Read DB to see if there are enough remaining

      function nextQuestion() {
        inquirer
        .prompt({
          name: "quantity",
          type: "input",
          message: "How many would you like to purchase?",
        })
           
      }

  

//check if there are enough left
//Read- "Select "stock_quantity" where "product= "userSelection"

//.then(function(answer) {
  //connection.query(
    //"SELECT stock_quantity FROM products where ?", 
    // {
    // item_id: answer.productID,
    // },
  

    //If stock_quantity is greater than zero proceed
    //If stock_quantify is less than zero display "Insufficient Quantity"


//if not show error "Insufficient Quantity"

//If enough, place order and reduce total available
