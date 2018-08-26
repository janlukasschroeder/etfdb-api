const etfdb = require('./index');

etfdb.getData(limit=50, offset=0, sort='ytd_percent_return', order='desc')
  .then(result => {
  console.log('Total ETFs:', result.total);
  console.log('Returned ETFs:', result.rows.length);

  result.rows.forEach(row => {
    console.log(row._ytd_percent_return_data.th, row.ytd_percent_return);
  })
});