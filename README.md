# bamazon

This is a node application which is connected to a MySQL DB called Bamazon.

User is able to search via command prompt to see all products available.

https://github.com/lstasio5/bamazon/blob/master/searchresults.mp4

DB data includes the following:

item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)

https://github.com/lstasio5/bamazon/blob/master/connected.png



Bamazon application will prompt the user with two messages:
The first prompt asks them to provide the user ID of the item they want to purchase.

https://github.com/lstasio5/bamazon/blob/master/firstpromptworking.png


The second message should ask how many units of the product they would like to buy.
I am having trouble getting the second function to display after the first is answered.

https://github.com/lstasio5/bamazon/blob/master/nextquestionnotprompting.png

Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.

If not, the app will log a messagem "Insufficient quantity!" and then prevent the order from going through.

However, if the store does have enough of the product, the order will be fulfilled.

Once the update goes through, the customer will see the total cost of their purchase.




