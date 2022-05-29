---
description: Introduction to the API software and how it works on different ways
---

# 🏴󠁧󠁢󠁥󠁮󠁧󠁿 Quick Start



{% hint style="info" %}
**Good to know:** This page is fundamentally designed to be giving you a quick overview regarding how the rest of the Software works. This is just an introduction, so if you wanna go further and see more about the project, I highly recommend you keep reading!
{% endhint %}

## Get your API token

Your API requests are authenticated using API keys. Any request that doesn't include an API token will return an authentication error.

You can generate an API login token from your login endpoint at any time.

## Install the library

The best way to interact with our API is to use one of our official libraries:

{% tabs %}
{% tab title="Node" %}
```
# Install via NPM
npm install
npm start
```
{% endtab %}

{% tab title="API " %}
\#These commands will download the project in your local machine and direct you

\#automatically into the corresponding folder

git clone [https://github.com/BerkDelibalta/Software-Project-03-Node-JS.git](https://github.com/BerkDelibalta/Software-Project-03-Node-JS.git)

cd [Software-Project-03-Node-JS](https://github.com/BerkDelibalta/Software-Project-03-Node-JS.git)/
{% endtab %}

{% tab title="Test" %}
\#This command will execute and run all the defined unit and integration tests

npm test
{% endtab %}

{% tab title="DynamoDB" %}
In order to be able to use this API effectively without any issues, you should be able to interact with AWS DynamoDB, therefore you need to create a .env folder in the root repository after installation has been completed. In this file, you should identify your AWS account access credentials and the region where you would like to connect, or where you created your tables.&#x20;



After initialization of  all your environment variables, the corresponding tables with the "right " partition keys should be created at DynamoDB table create section. Later, the database could be populated with the mock data that's been provided in the project in a couple of ways;



First, manually creation of the objects on the DynamoDB,



Second, you can send create object requests to various endpoints of the API and just let it do what it's supposed to be.(In this case, usage of Postman, or curl + terminal couple recommended)



Finally, Go ahead and have a look at the dynamoDB Node JS SDK documentation where you can find out all the information regarding how to create tables and populate them in your own software rather than using an external resource on 3 different levels.
{% endtab %}

{% tab title="AWS account" %}
<mark style="color:red;">You should have an AWS account!</mark>&#x20;

Follow the link for account creation please : [https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
{% endtab %}
{% endtabs %}

<mark style="color:red;"></mark>





{% hint style="info" %}
**Good to know:**&#x20;

Open your terminal/shell on your local environment and install the software on your machine with the commands provided above in "API" section.

Install the dependencies and then run the Application by executing the commands shown above under "Node" header.

For testing,  it's enough to execute the single command provided in "Test" part.
{% endhint %}



## Make your first request

To make your first request, send an authenticated request to the register endpoint. This will create a new `user`, which is nice.

{% swagger baseUrl="http://localhost:3000" method="post" path="/api/v1/register" summary="Register a Client" %}
{% swagger-description %}
Creates a new pet.
{% endswagger-description %}

{% swagger-parameter in="body" name="clientId" required="true" type="string" %}
The name of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="name" required="true" type="string" %}
The 

`id`

 of the user who owns the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="surname" required="true" type="string" %}
The species of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" required="true" type="string" %}
The breed of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="passwotd" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="budget" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200" description="Created Client object" %}
```javascript
 {
	"clientId": "OMY77H45HG4D",
    	"name":"George",
    	"surname":"Brighton",
    	"email":"george@gmail.com",
    	"password":"secret",
    	"budget":"300000"
    }
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="{     "msg": "Provide all parameters" }" %}

{% endswagger-response %}
{% endswagger %}

Take a look at how you might call this method using our official libraries via `curl`:

{% tabs %}
{% tab title="curl" %}
```
curl -d 'clientId=OMY77H45HG4D \
         &name=George \
         &surname=Brighton \
         &email=george@gmail.com \
         &password=secret \
         &budget=300000' \
         http://localhost:3000/api/v1/auth/register
```
{% endtab %}
{% endtabs %}
