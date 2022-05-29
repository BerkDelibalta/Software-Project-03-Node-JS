# Dealer

## Create Dealer

{% swagger method="post" path="/" baseUrl="http://localhost:3000/api/v1/dealers" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="email" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="cars" type="List" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "id": "3acac160-df65-11ec-85aa-5583bee3dc72",
    "name": "Aston Martin London",
    "email": "astonmartin@lagonda.uk",
    "cars": [
        {
            "id": "TYO13GSI8QN",
            "model": "DB11",
            "engineType": "Benzin",
            "year": "Aug 9, 2022",
            "price": "600000"
        },
        {
            "id": "ZCK94LMF4SW",
            "model": "Valkyrie",
            "engineType": "Hybrid",
            "year": "Dec 26, 2022",
            "price": "1800000"
        },
        {
            "id": "ZJW44KLB1GQ",
            "model": "Vantage V12",
            "engineType": "Benzin",
            "year": "Feb 3, 2022",
            "price": "750000"
        }
    ]
}
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
{
    'msg':'Provide all required parameters'
}
```
{% endswagger-response %}
{% endswagger %}

## Update Dealer



{% swagger method="patch" path="/:id" baseUrl="http://localhost:3000/api/v1/dealers" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="dealerId" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Item": {
        "cars": [
            {
                "engineType": "Benzin",
                "model": "DB11",
                "id": "TYO13GSI8QN",
                "year": "Aug 9, 2022",
                "price": "600000"
            },
            {
                "engineType": "Hybrid",
                "model": "Valkyrie",
                "id": "ZCK94LMF4SW",
                "year": "Dec 26, 2022",
                "price": "1800000"
            },
            {
                "engineType": "Benzin",
                "model": "Vantage V12",
                "id": "ZJW44KLB1GQ",
                "year": "Feb 3, 2022",
                "price": "750000"
            }
        ],
        "id": "3acac160-df65-11ec-85aa-5583bee3dc72",
        "email": "astonmartin@AMR.uk",
        "name": "Aston Martin London"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
   'msg':'No such dealer found with id'
}
```
{% endswagger-response %}
{% endswagger %}

## Delete Dealer

{% swagger method="delete" path="/:id" baseUrl="http://localhost:3000/api/v1/dealers" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="dealerId" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    'msg':'The dealer has been successfully deleted'
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
    'msg':'No such dealer found with id'
}
```
{% endswagger-response %}
{% endswagger %}

## Get Dealers

{% swagger method="get" path="/" baseUrl="http://localhost:3000/api/v1/dealers" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "dealers": {
        "Items": [
            {
                "cars": [
                    {
                        "engineType": "Benzin",
                        "model": "DB11",
                        "id": "TYO13GSI8QN",
                        "year": "Aug 9, 2022",
                        "price": "600000"
                    },
                    {
                        "engineType": "Hybrid",
                        "model": "Valkyrie",
                        "id": "ZCK94LMF4SW",
                        "year": "Dec 26, 2022",
                        "price": "1800000"
                    },
                    {
                        "engineType": "Benzin",
                        "model": "Vantage V12",
                        "id": "ZJW44KLB1GQ",
                        "year": "Feb 3, 2022",
                        "price": "750000"
                    }
                ],
                "id": "3acac160-df65-11ec-85aa-5583bee3dc72",
                "email": "astonmartin@AMR.uk",
                "name": "Aston Martin London"
            },
            {
                "cars": [
                    {
                        "engineType": "Benzin",
                        "model": "DB11",
                        "id": "TYO13GSI8QN",
                        "year": "Aug 9, 2022",
                        "price": "600000"
                    },
                    {
                        "engineType": "Hybrid",
                        "model": "Valkyrie",
                        "id": "ZCK94LMF4SW",
                        "year": "Dec 26, 2022",
                        "price": "1800000"
                    },
                    {
                        "engineType": "Benzin",
                        "model": "Vantage V12",
                        "id": "ZJW44KLB1GQ",
                        "year": "Feb 3, 2022",
                        "price": "750000"
                    }
                ],
                "email": "astonmartin@lagonda.uk",
                "id": "884a8d00-dea5-11ec-a4d2-3d16aa41bbc8",
                "name": "Aston Martin London"
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
    'msg':'No such dealers found'
}
```
{% endswagger-response %}
{% endswagger %}

## Get A Single Dealer

{% swagger method="get" path="/:id" baseUrl="http://localhost:3000/api/v1/dealers" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="orderId" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Item": {
        "cars": [
            {
                "engineType": "Benzin",
                "model": "DB11",
                "id": "TYO13GSI8QN",
                "year": "Aug 9, 2022",
                "price": "600000"
            },
            {
                "engineType": "Hybrid",
                "model": "Valkyrie",
                "id": "ZCK94LMF4SW",
                "year": "Dec 26, 2022",
                "price": "1800000"
            },
            {
                "engineType": "Benzin",
                "model": "Vantage V12",
                "id": "ZJW44KLB1GQ",
                "year": "Feb 3, 2022",
                "price": "750000"
            }
        ],
        "id": "3acac160-df65-11ec-85aa-5583bee3dc72",
        "email": "astonmartin@AMR.uk",
        "name": "Aston Martin London"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
    'msg':'No such dealer found with id 3acac160-df65-11ec-85aa-5583bee3dc72'
}
```
{% endswagger-response %}
{% endswagger %}
