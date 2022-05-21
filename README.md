# WebShop

<table>
<tr>
<td>
 
My first full stack project i made from scratch. It is simple web shop. It's been created to learn Javascript and data flow between back end and front.
</td>
</tr>
</table>

## Technologies

Project is created with:

- node version: v16.13.0
- react version: ^17.0.2
- redux version: ^4.1.2
- react-router-dom version: ^5.2.0
- styled-components version: 5.3.0
- express version: ^4.17.1
- mysql2 version: ^2.3.0
- nodemon version: ^2.0.12"
- passport version ^0.5.0

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash

###notice my default branch is main ###
# Clone this repository
$ git clone https://github.com/SqCodeJs/shop

# Go into the repository
## 1. Frontend
$ cd shop/client

# Install dependencies
$ npm install

# Run the app
$ npm start
### You can use just frontend, becouse i set up temperary database for products.

## 2. Backend
### Go back
$ cd ..
$ cd client
# Install dependencies
$ npm install
# Run the app
$ npm run shop
### You can check package.json and find out how to run app if you've got any issue.

#Next step is setting up your Database.
###Check out db.js file in shop/server/config . You gonna find out how i called my datebase and what password i used.You can fallow my way or configure on your own. I use MySql Workbench for create my table. Create table and call it "ShopUsers" .

Table schemate:

| Columns       | Dataype       |
| ------------- |:-------------:|
| id            | int AI PK     |
| name          | varchar(45)   |
| lastName      | varchar(45)   |
| mail          | varchar(45)   |
| password      | varchar(255)  |


```

1. Features
   ⋅⋅* shopping
   ⋅⋅* create account
   ⋅⋅\* searching products
2. To Do
   ⋅⋅* create all routes
   ⋅⋅* finish mediaQueries
   ⋅⋅* add payment sort products
   ⋅⋅* customers web chat
   ⋅⋅\* users panel
