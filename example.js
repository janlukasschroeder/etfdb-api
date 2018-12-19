const etfdb = require('./index');

etfdb.getData(perPage=50, page=1, sort='ytd', order='desc')
  .then(result => {
    console.log('Total ETFs:', result.meta.total_records);

    result.data.forEach(etf => {
      console.log(etf.symbol.text, etf.ytd);
    })
  }).catch(err => console.log(err));