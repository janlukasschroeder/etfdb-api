const etfdb = require('./index');

etfdb
  .listEtfs((perPage = 50), (page = 1), (sort = 'ytd'), (order = 'desc'))
  .then(result => {
    console.log('Total ETFs:', result.meta.total_records);
    result.data.forEach(etf => console.log(etf.symbol.text, etf.ytd));
  })
  .catch(err => console.log(err));

// first 15 holdings of TQQQ, sorted by weighting (DESC)
etfdb.listHoldings('TQQQ').then(holdings => console.log(holdings));

// page 3 of TQQQ holdings
etfdb.listHoldings('TQQQ', 3).then(holdings => console.log(holdings));
