# Client

## Update Client

{% swagger method="patch" path="/updateClient" baseUrl="http://localhost:3000/api/v1/clients" summary="Update a client's information" %}
{% swagger-description %}
Send this request if you want to make an update on the budget of a client. You should send the corresponding client's email and password for authentication reasons. This extra layer of authentication comes out as an extra layer of validation of Client credentials.
{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="budget" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="Client JSON object along with updated budget" %}
```javascript
{
    "Item": {
        "password": "secret",
        "role": "user",
        "surname": "Brighton",
        "budget": "100000",
        "id": "OMY77H45HG4D",
        "email": "george@gmail.com",
        "name": "George"
    }
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="" %}
```javascript
{
    "msg": "invalid credentials"
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
   "msg": "No such budget update"
}
```
{% endswagger-response %}
{% endswagger %}

## Delete Client

{% swagger method="delete" path="/deleteClient" baseUrl="http://localhost:3000/api/v1/clients" summary="Delete a client" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="password" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "email": "george@gmail.com",
    "password": "secret"
}

```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
    'msg':'No such client with id OMY77H45HG4D'  
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="" %}
```javascript
{
    'msg' : 'Invalid credentials'
}
```
{% endswagger-response %}
{% endswagger %}

## Get Clients

{% swagger method="get" path="/" baseUrl="http://localhost:3000/api/v1/clients" summary="get all clients stored in database" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "clients": {
        "Items": [
            {
                "password": "secret",
                "role": "user",
                "surname": "Brighton",
                "budget": "300000",
                "id": "OMY77H45HG4D",
                "email": "george@gmail.com",
                "name": "George"
            },
            {
                "password": "secret",
                "role": "user",
                "surname": "Harrison",
                "budget": "600000",
                "id": "OIFGY77436G4D",
                "email": "charlotte@gmail.com",
                "name": "Charlotte"
            }
        ],
        "Count": 2,
        "ScannedCount": 2
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
    'msg':'No clients'
}
```
{% endswagger-response %}
{% endswagger %}

## Get A Single Client

{% swagger method="get" path="/getClient" baseUrl="http://localhost:3000/api/v1/clients" summary="get a single client from database" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Item": {
        "password": "secret",
        "role": "user",
        "surname": "Brighton",
        "budget": "300000",
        "id": "OMY77H45HG4D",
        "email": "george@gmail.com",
        "name": "George"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
    'msg': 'No such client with id'
}
```
{% endswagger-response %}
{% endswagger %}
