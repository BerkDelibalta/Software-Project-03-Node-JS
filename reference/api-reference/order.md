# Order

{% hint style="info" %}
**Good to know:** All the methods shown below are synced to an example Swagger file URL and are kept up to date automatically with changes to the API.
{% endhint %}

## Create Order

{% swagger method="post" path="/" baseUrl="http://localhost:3000/api/v1/order" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="email" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="carId" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="dealerId" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{

    "email":"george@gmail.com",
    "carId":"TYO13GSI8QN",
    "dealerId":"884a8d00-dea5-11ec-a4d2-3d16aa41bbc8"

}
```
{% endswagger-response %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    // Response
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'Prodive both car and client ids'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'No such car existing'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'Client budget isnt sufficient to order'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'No such dealer found'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg' : 'The dealer doesnt have the requested car!'
}
```
{% endswagger-response %}
{% endswagger %}

## Update Order

{% swagger method="patch" path="/:id" baseUrl="http://localhost:3000/api/v1/order" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="orderId" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="updatePrice" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Order": {
        "message": "Order no:09076c80-deae-11ec-9747-17c501c79b1b updated successfully"
    },
    "Car": {
        "updatedCar": "Vantage V12",
        "newPrice": "400000"
    }
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'Order id or update price doesnt exist'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
   'msg':'No such order not found'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
     'msg':'No such car found'
}
```
{% endswagger-response %}
{% endswagger %}

## Delete Order

{% swagger method="delete" path="/:id" baseUrl="http://localhost:3000/api/v1/order" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="orderId" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    'msg':'Order successfully deleted'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'No such orderId'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'No such order'
}
```
{% endswagger-response %}
{% endswagger %}

## Get Orders

{% swagger method="get" path="/" baseUrl="http://localhost:3000/api/v1/order" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Orders": {
        "Items": [
            {
                "date": "Sat, 28 May 2022 17:45:59 GMT",
                "carId": "884a8d00-dea5-11ec-a4d2-3d16aa41bbc8",
                "email": "george@gmail.com",
                "orderId": "09076c80-deae-11ec-9747-17c501c79b1b"
            },
            {
                "date": "Sat, 28 May 2022 17:48:26 GMT",
                "carId": "790a8d00-dtk3-09rp-asf23-34er8fhjiea54",
                "email": "george@gmail.com",
                "orderId": "60a080d0-deae-11ec-b4ed-51279668f677"
            }
        ],
        "Count": 2,
        "ScannedCount": 2
    }
}
```
{% endswagger-response %}
{% endswagger %}

## Get A Single Order

{% swagger method="get" path="/:id" baseUrl="http://localhost:3000/api/v1/order" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="orderId" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Item": {
        "date": "Sat, 28 May 2022 17:45:59 GMT",
        "carId": "884a8d00-dea5-11ec-a4d2-3d16aa41bbc8",
        "email": "george@gmail.com",
        "orderId": "09076c80-deae-11ec-9747-17c501c79b1b"
    }
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'No such orderId'
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'No such order'
}
```
{% endswagger-response %}
{% endswagger %}

