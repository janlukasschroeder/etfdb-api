const h = require('./helpers');
const config = require('./config');

/**
 * getData
 * @returns {Promise}
 */
module.exports.getData = ({limit=25, offset=0}) => {

  const path = `data_set/?tm=1885&no_null_sort=true&` +
                `count_by_id=&` +
                `sort=ytd_percent_return&` +
                `order=desc&` +
                `limit=${limit}&` +
                `offset=${offset}`;

  const query = config.etfdb.baseUrl + path;

  return h.fetch(query);
};