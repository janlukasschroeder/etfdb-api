# ETFdb.com API
Fetches data of all 3114 ETFs listed on [ETFdb.com](ETFdb.com)

Indicators: returns (YTD, 1-week, etc.), AUM, expense ratio, dividend yield, 3-month avg. volume, price, etc.

# Quick Start
```javascript
const etfdb = require('./index');

etfdb.getData({limit: 50, offset: 0}).then(result => {
  console.log('Total ETFs:', result.total);
  console.log('Returned ETFs:', result.rows.length);

  result.rows.forEach(row => {
    console.log(row._ytd_percent_return_data.th, row.ytd_percent_return);
  })
});
```