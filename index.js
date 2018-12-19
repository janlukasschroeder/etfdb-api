const h = require('./helpers');
const config = require('./config');

/**
 * List all ETFs. Manipulate the order by using parameters.
 * @param {number} [perPage=25]
 * @param {number} [page=1]
 * @param {string} [sort='ytd']
 * @param {string} [order='desc']
 */
module.exports.getData = (perPage=25,
                          page = 1,
                          sort='ytd',
                          order='desc') => {

  const path = `api/screener/`;

  const body = {
    "page": page,
    "per_page": perPage,
    "sort_by": sort,
    "sort_direction": order,
    "only": [
      "meta",
      "data"
    ]
  };

  const url = config.etfdb.baseUrl + path;

  return h.fetch(url, body);
};