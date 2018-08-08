const request = require('request');

/**
 * HTTPS GET API
 * resolve returns JSON-parsed response
 *
 * @param query
 * @returns {Promise}
 */
module.exports.fetch = (query) => {
  return new Promise((resolve, reject) => {
    request(query, (error, response, body) => {
      try {
        resolve(JSON.parse(body));
      }
      catch (err) {
        reject(err);
      }
    });
  });
};