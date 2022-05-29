# Car

## Create Car

{% swagger method="post" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="body" name="model" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="year" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="engineType" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="price" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="201: Created" description="" %}
```javascript
The car has been created successfully
```
{% endswagger-response %}

{% swagger-response status="400: Bad Request" description="" %}
```javascript
'Please provide all the required fields required
```
{% endswagger-response %}
{% endswagger %}

## Update Car

{% swagger method="patch" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="id" required="true" %}

{% endswagger-parameter %}

{% swagger-parameter in="body" name="updatePrice" required="true" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Item": {
        "id": "QCS543TG1ZN",
        "price": "90000"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
 No such car found with id
```
{% endswagger-response %}
{% endswagger %}

## Delete Car

{% swagger method="delete" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="id" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{ 'msg':'The car has been deleted successfully' }
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{
    'msg':'No such car found with id'
}
```
{% endswagger-response %}
{% endswagger %}

## Get Cars

{% swagger method="get" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "cars": {
        "Items": [
            {
                "model": "Ghibili",
                "year": "Apr 6, 2023",
                "engineType": "Diesel",
                "id": "e85203c0-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "85000"
            },
            {
                "model": "Serie 5",
                "year": "Feb 1, 2022",
                "engineType": "Benzin",
                "id": "c9eb9310-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "80000"
            },
            {
                "model": "S",
                "year": "Aug 23, 2022",
                "engineType": "Diesel",
                "id": "02266930-dea3-11ec-a8c1-cbbc07910f3f",
                "price": "120000"
            },
            {
                "model": "La Ferrari",
                "year": "Dec 20, 2021",
                "engineType": "Benzin",
                "id": "175c4040-dea3-11ec-a8c1-cbbc07910f3f",
                "price": "900000"
            },
            {
                "model": "Quattroporte",
                "year": "Oct 3, 2022",
                "engineType": "Hybrid",
                "id": "d077e7b0-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "128000"
            },
            {
                "model": "Grecale",
                "year": "Apr 18, 2022",
                "engineType": "Hybrid",
                "id": "400779b0-dea3-11ec-a8c1-cbbc07910f3f",
                "price": "72000"
            },
            {
                "model": "X5",
                "year": "Jan 25, 2023",
                "engineType": "Hybrid",
                "id": "efa6b170-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "75000"
            },
            {
                "model": "Stradale",
                "year": "Dec 23, 2022",
                "engineType": "Hybrid",
                "id": "e3c50190-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "1200000"
            },
            {
                "model": "Serie 3",
                "year": "Oct 11, 2022",
                "engineType": "Benzin",
                "id": "c27098b0-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "45000"
            },
            {
                "model": "DB11",
                "year": "Aug 9, 2022",
                "engineType": "Benzin",
                "id": "TYO13GSI8QN",
                "price": "600000"
            },
            {
                "model": "X3",
                "year": "Nov 29, 2022",
                "engineType": "Hybrid",
                "id": "f742a150-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "55000"
            },
            {
                "model": "A",
                "year": "Apr 10, 2023",
                "engineType": "Hybrid",
                "id": "043e73c0-dea3-11ec-a8c1-cbbc07910f3f",
                "price": "32000"
            },
            {
                "model": "XF",
                "year": "Nov 12, 2022",
                "engineType": "Electric",
                "id": "edaf8300-df6b-11ec-917d-c19474107c32",
                "price": "89000"
            },
            {
                "model": "Vantage V12",
                "year": "Feb 3, 2022",
                "engineType": "Benzin",
                "id": "884a8d00-dea5-11ec-a4d2-3d16aa41bbc8",
                "price": "750000"
            },
            {
                "model": "E",
                "year": "Aug 15, 2021",
                "engineType": "Hybrid",
                "id": "2b8fc280-dea3-11ec-a8c1-cbbc07910f3f",
                "price": "60000"
            },
            {
                "model": "M5",
                "year": "Jan 4, 2022",
                "engineType": "Benzin",
                "id": "ded8c860-dea2-11ec-a8c1-cbbc07910f3f",
                "price": "850000"
            }
        ],
        "Count": 17,
        "ScannedCount": 17
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
No cars found
```
{% endswagger-response %}
{% endswagger %}

## Get A Single Car

{% swagger method="get" path="" baseUrl="" summary="" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="path" name="id" %}

{% endswagger-parameter %}

{% swagger-response status="200: OK" description="" %}
```javascript
{
    "Item": {
        "model": "Ghibili",
        "year": "Apr 6, 2023",
        "engineType": "Diesel",
        "id": "e85203c0-dea2-11ec-a8c1-cbbc07910f3f",
        "price": "85000"
    }
}
```
{% endswagger-response %}

{% swagger-response status="404: Not Found" description="" %}
```javascript
{ 'msg': 'No car found with id e85203c0-dea2-11ec-a8c1-cbbc07910f3f'}
```
{% endswagger-response %}
{% endswagger %}
