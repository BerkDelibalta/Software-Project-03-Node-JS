# Auth

## Creating a new client

{% swagger baseUrl="http://localhost:3000" method="post" path="/api/v1/auth/register" summary="Create Client and register." %}
{% swagger-description %}
Creates a new pet.
{% endswagger-description %}

{% swagger-parameter in="body" name="name" required="true" type="string" %}
The name of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="owner_id" required="false" type="string" %}
The 

`id`

 of the user who owns the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="species" required="false" type="string" %}
The species of the pet
{% endswagger-parameter %}

{% swagger-parameter in="body" name="breed" required="false" type="string" %}
The breed of the pet
{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```javascript
{
    	"clientId": "OMY77H45HG4D",
    	"name":"George",
    	"surname":"Brighton",
    	"email":"berkdelibalta@gmail.com",
    	"password":"secret",
    	"budget":"1000000"
}
```
{% endswagger-response %}

{% swagger-response status="401" description="" %}
```javascript
{
    "msg":"Invalid Credentials"
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    { "msg": "Provide all parameters" }
}
```
{% endswagger-response %}
{% endswagger %}

## Login a client

{% swagger method="post" path="/login" baseUrl="http://localhost:3000/api/v1/auth" summary="Login into account and get your Client token" %}
{% swagger-description %}
This operation enables you to send CRUD operation requests to other API endpoints in the Software as it sends the created user token inside a cookie to the server, and other API end points are mostly taking this token, unpacking it and using your credentials to answer your requests
{% endswagger-description %}

{% swagger-parameter in="body" name="email" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "client": {
        "Item": {
            "password": "secret",
            "role": "admin",
            "surname": "Brighton",
            "budget": "1000000",
            "id": "OMY77H45HG4D",
            "email": "george@gmail.com",
            "name": "George"
        }
    }
}
```
{% endswagger-response %}

{% swagger-response status="500: Internal Server Error" description=""msg": "Invalid Credentials"" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}
{% endswagger %}

## Logout a client

{% swagger method="get" path="/logout" baseUrl="http://localhost:3000/api/v1/auth" summary="Logout the client and delete the cookie from server" %}
{% swagger-description %}
This operation enables you to logout from your account and delete the cookie that's been sent along with the JWT token generated with your registration information from the server.
{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    message: `client logged out` 
}
```
{% endswagger-response %}
{% endswagger %}
