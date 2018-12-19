const request = require('request');


module.exports.fetch = (url = ``, payload = null) => {
  const options = {
    url,
    method: 'POST',
    "User-Agent": 'Mozilla/4.2 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
    body: payload,
    json: true
  };

  return new Promise((res, rej) => {
    request.post(options, (err, response, body) => {
      if (err) {
        return rej(err)
      }
      res(body)
    })
  })
};