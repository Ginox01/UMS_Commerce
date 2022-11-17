# EseUMSComplex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

# Before testing the App
For testing the app you need to install the packages , run `npm install` to install all the packages

## Database with json-server
This App works with the json-server database , you need to run the following code to turn on the database `json-server --watch db.json`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## How it works
You can manage the users from the database , you can see the table with the users , in the actions column , you have three buttons :

+ Button red : delete user
+ Button green : Update the user
+ Button blue : Add to cart the user


If you click on the update button or in the link "NEW USER" in the Navbar , you will come redirect in the form for update or create the user.

By clicking the blue button , you will add an user in the basket , you can notice that the basket page will have the user with its price.

You can add as many as users you want in the basket page. 

