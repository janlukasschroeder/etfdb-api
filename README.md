# ETFdb.com API
Fetches data of all 3114 ETFs listed on [ETFdb.com](https://www.ETFdb.com)

Indicators: returns (YTD, 1-week, etc.), AUM, expense ratio, dividend yield, 3-month avg. volume, price, etc.

## Example Script
```javascript
const etfdb = require('etfdb-api');

etfdb.getData(perPage=50, page=1, sort='ytd', order='desc')
  .then(result => {
    console.log('Total ETFs:', result.meta.total_records);

    result.data.forEach(etf => {
      console.log(etf.symbol.text, etf.ytd);
    })
  }).catch(err => console.log(err));
```

## Example Response
```json
{
    "meta": {
        "page": 2,
        "per_page": 25,
        "sort_direction": "desc",
        "sort_by": "assets",
        "order": {
            "assets": "desc"
        },
        "total_pages": 90,
        "total_records": 2245,
        "filter": {}
    },
    "data": [
        {
            "symbol": {
                "type": "link",
                "text": "XLF",
                "url": "/etf/XLF/"
            },
            "name": {
                "type": "link",
                "text": "Financial Select Sector SPDR Fund",
                "url": "/etf/XLF/"
            },
            "mobile_title": "XLF - Financial Select Sector SPDR Fund",
            "price": "$24.00",
            "assets": "$23,740.88",
            "average_volume": "73,474,031",
            "ytd": "-12.95%",
            "overall_rating": {
                "type": "restricted",
                "url": "/members/join/"
            },
            "asset_class": "Equity"
        },
        {
            "symbol": {
                "type": "link",
                "text": "VO",
                "url": "/etf/VO/"
            },
            "name": {
                "type": "link",
                "text": "Vanguard Mid-Cap Index ETF",
                "url": "/etf/VO/"
            },
            "mobile_title": "VO - Vanguard Mid-Cap Index ETF",
            "price": "$141.39",
            "assets": "$21,782.58",
            "average_volume": "571,031",
            "ytd": "-7.61%",
            "overall_rating": {
                "type": "restricted",
                "url": "/members/join/"
            },
            "asset_class": "Equity"
        },
        {
            ...
        }
    ]
}
```


## Raw API Query
Use Postman or `curl`.


URL: https://etfdb.com/api/screener/

Method: POST

Headers:
 - Content-Type: application/json
 - User-Agent: Your User Agent

Payload:
```json
{
    "page": 2,
    "per_page": 25,
    "sort_by": "ytd",
    "sort_direction": "desc",
    "only": [
        "meta",
        "data"
    ]
}
```
