
# Ecommerce API Software

Advanced design and feature showcasing as a whole range API model pattern along with AWS DynamoDB integration for those interested.


## Acknowledgement


- The main idea of the project is proposing a general idea regarding How the things are going behind the scenes of a Web Ecommerce Application

- The advance desing and new feature integrations are always going to be provided and the project is going to be updated time by time
# API Reference


## Auth API (register / login / logout)

#### Register
----

```http
  POST  |  http://localhost:5000/api/v1/auth/register 
```

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Client id |
| `name` | `string` | **Required**. Client name |
| `surname` | `string` | **Required**. Client surname |
| `email` | `string` | **Required**. Client email |
| `password` | `string` | **Required**. Client password |
| `budget` | `string` | **Required**. Client budget |

#### Returns the created and registered Client object with 201 OK code
----
#### Login

---
```http
  POST |  http://localhost:5000/api/v1/auth/login 
```

| Body request Parameter  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Client email |
| `password`      | `string` | **Required**. Client password |

#### Logs the Client in and send a cookie attachted a jwt token contains encrypted Client information to the server along with 200 OK code
----

#### Logout

----

```http
  GET |  http://localhost:5000/api/v1/auth/logout
```

#### Logs the Client out, delete the cookie from server and send a 200 OK code


####
-----

## Client API (Update / Delete / Get )


#### Update Client

```http
  PATCH  |  http://localhost:5000/api/v1/clients/updateClient 
```

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Client email |
| `password` | `string` | **Required**. Client password |
| `budget` | `string` | **Required**. Client budget |

#### Returns update Client object with new budget with 200 OK code

----

#### Delete Client

```http
  DELETE |  http://localhost:5000/api/v1/clients/deleteClient 
```

| Body request Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Client email |
| `password` | `string` | **Required**. Client password |

#### Returns a success message with 200 OK code

---

#### Get All Clients

```http
  GET |  http://localhost:5000/api/v1/clients/ 
```

---
#### Returns Client objects with 200 OK code


#### Get a Client

```http
  GET  |  http://localhost:5000/api/v1/clients/getClient 
```

| Body request Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. Client email |


#### Returns a Client object with 200 OK code



####
-----

## Car API (Create / Update / Delete / Get)


#### Create a car

```http
  POST  |  http://localhost:5000/api/v1/cars 
```

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `model` | `string` | **Required**. Car model |
| `year` | `string` | **Required**. Car production year |
| `engineType` | `string` | **Required**. Car engine type(Diesel/Benzine/Hybrid/Electric) |
|`price` | `string` | **Required**. Car price |

#### Returns a car object with 201 OK code

----

#### Update a Car

```http
  PATCH  |  http://localhost:5000/api/v1/cars/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Car id |


| Body request Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `price` | `string` | **Required**. Updated Car price |


#### Returns an update car object message with 200 OK code

---

#### Get All Cars

```http
  GET  |  http://localhost:5000/api/v1/cars/ 
```

---
#### Returns all car objects with 200 OK code

---
#### Get a Car

```http
  GET  |  http://localhost:5000/api/v1/cars/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Car id |


#### Returns a car object with 200 OK code


---
#### Delete a Car

```http
  DELETE  |  http://localhost:5000/api/v1/cars/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Car id |


#### Returns a success message with 200 OK code


-----


####
-----

## Dealer API (Create / Update / Delete / Get)


#### Create a dealer

```http
  POST  |  http://localhost:5000/api/v1/dealers
```

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Dealer name |
| `email` | `string` | **Required**. Dealer email |
| `cars` | `List<Car>` | **Required**. List of cars that the dealer holding|


#### Returns a dealer object with 201 OK code

----

#### Update a dealer

```http
  PATCH  |  http://localhost:5000/api/v1/dealers/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Dealer id |

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Dealer name |
| `email` | `string` | **Required**. Dealer email |



#### Returns an updated dealer object message with 200 OK code

---

#### Get All Dealers

```http
  GET  |  http://localhost:5000/api/v1/dealers 
```

---
#### Returns all dealer objects with 200 OK code

---
#### Get a Dealer

```http
  GET  |  http://localhost:5000/api/v1/dealers/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Dealer id |


#### Returns a dealer object with 200 OK code


---
#### Delete a Dealer

```http
  DELETE  |  http://localhost:5000/api/v1/dealers/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Dealer id |


#### Returns a success message with 200 OK code




-----


####
-----

## Order API (Create / Update / Delete / Get)


#### Create Order

```http
  POST  |  http://localhost:5000/api/v1/order
```

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `carId` | `string` | **Required**. Car Id|
| `email` | `string` | **Required**. Client email |
| `dealerId` | `List<Car>` | **Required**. dealer Id|


#### Returns an order object with 201 OK code

----

#### Update Order

```http
  PATCH  |  http://localhost:5000/api/v1/order/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Order id |

| Body request Parameter  | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `update price` | `string` | **Required**. Update car price |



#### Returns an updated order object message with 200 OK code

---

#### Get All Orders

```http
  GET  |  http://localhost:5000/api/v1/order
```

---
#### Returns all order objects with 200 OK code

---
#### Get Order

```http
  GET  |  http://localhost:5000/api/v1/order/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Order id |


#### Returns an order object with 200 OK code


---
#### Delete Order

```http
  DELETE  |  http://localhost:5000/api/v1/order/:id
```

| Path Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Dealer id |


#### Returns a success message with 200 OK code

-----

##### 

-----
## Appendix

#### The project is working in the following way:

1) A client user should register (him/her)self into the system by the assistance of the auth/register API endpoint, this is essentially a key point to be    able use and send requests to the other API end points in the Software as a consequence of the authentication and authorization middlewares existince.

2) In order to be able to trip around the project without having issues, its necessary to log into your account after registration, as this process        enables the API to send the encrypted and tokenized information (JWT) in a cookie to the server. (If you call the logout API end point, it will simply    delete and remove your token attached into a cookie from server, so you should once again login later on to be able use the Software) 

3) The second point should be, creating car(s) and populating the database for cars to be used later to populate the dealer table's car list items with      the respected car models. 

4) The third point is, calling the right dealer API end points to create dealer(s) with different car models that they can sell.


5) Finally, you are able to call the Order API and create an order, if your order is successful, the algorithm lets you make the order and sends
   you a notification mail(the email you indicated during registration) Notice: The dealer email is going to be the source email address that will 
   send you the notification email, so please carefully choose the dealer email to make sure you can use this account under your control.
   

 ##### Extra information regarding the Client API

  This API is basically enabling you to do CRUD operations on the profile(s) you have created, there is not so many updates are allowed, though if you want an extensive update features, please let me know, or you can simply come along with your own idea(s) to contribute to the project to add new     features,upgrade the Software,increase performace and many more! Looking forward to hear from you, Thanks for your time and energy you spend to look at this project dear visiter!


## Authors

- [@BerkDelibalta](https://www.github.com/BerkDelibalta)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV` `PORT` 

`aws_sdk_load_config`

`aws_access_key_id`
`aws_secret_access_key`
`region`

`JWT_SECRET`
`JWT_LIFETIME`

`SENDGRID_API_KEY`


## Installation

Install the project dependencies in the project root folder with npm

```bash
  npm install 
```
    
## Run Locally

Clone the project

```bash
  git clone https://github.com/BerkDelibalta/Software-Project-03-Node-JS.git
```

Go to the project directory

```bash
  cd Software-Project-03-Node-JS/
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack


![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E")  
---
![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
--
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
--
![image](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
--
![image](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
--
![image](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
--
![image](https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=Twilio&logoColor=white)
---
![image](https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white)



## Running Tests

To run tests, run the following command in root directory from terminal

```bash
  npm test
```
