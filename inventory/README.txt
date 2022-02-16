INVENTORY MANAGEMENT SYSTEM

# HOW TO OPEN
 - Open the inventory folder in your IDE (such as Visual Studio Code)
 - Type "cd .\inventory\" in the terminal
 - Then type "npm start"
 - This should open http://localhost:3000
 - Then open a new terminal and type "cd .\inventory\"
 - Then type "json-server db.json" in that new terminal
 - Open another new terminal and type "cd .\inventory\"
 - Then type "npm start" in that one
 - This should prompt a message saying something is already running on port 3000 and if you would like to run the app on another port instead
 - Type "Y" for yes
 - It will go to your default web browser and open the tab http://localhost:3001
 - Close http://localhost:3000 and use the Inventory Mangement System on the tab http://localhost:3001

# HOW TO USE
 - Add new items at the bottom of the screen where you can input product name, price, type, and brand
 - The added items should appear at the top of the screen in a table
 - You can then search for items in the middle of the screen, which filters the table above
 - If you want to see all the items again, search with an empty name, price, type, and brand
 - You can also delete items from the inventory by clicking on delete on the right side of each row of an item in the table

# HOW TO CLOSE
 - Go to the second terminal (the one running the server) and type Ctrl + C
 - This should prompt a message which asks you if you want to close the server
 - Type Y for Yes
 - Close your IDE and the http://localhost:3001 tab

# CREATED BY SRIRAM GADDAM