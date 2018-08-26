const h = require('./helpers');
const config = require('./config');

/**
 * Get ETFdb data
 * @param limit
 * @param offset
 * @param sort
 * @param order
 * @returns {Promise}
 */
module.exports.getData = (limit=25,
                          offset=0,
                          sort='ytd_percent_return',
                          order='desc') => {

  const path = `data_set/?tm=1885&no_null_sort=true&` +
                `count_by_id=&` +
                `sort=${sort}&` +
                `order=${order}&` +
                `limit=${limit}&` +
                `offset=${offset}`;

  const query = config.etfdb.baseUrl + path;

  return h.fetch(query);
};