const request = require('request');

module.exports.fetch = (url = ``, method = 'GET', payload = null) => {
  const options = {
    url,
    method,
    body: payload,
    json: true
  };

  return new Promise((res, rej) => {
    request(options, (err, response, body) => {
      if (err) {
        return rej(err);
      }
      res(body);
    });
  });
};
