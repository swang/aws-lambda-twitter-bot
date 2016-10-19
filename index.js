'use strict';

const T = require('lwt')

let params = {
  accessToken: '', // INSERT CRED,
  accessSecret: '', // INSERT CRED,
  consumerKey: '', // INSERT CRED,
  consumerSecret: '', // INSERT CRED,
}

let t = new T(params)

exports.handler = (event, context, callback) => {
  // use t.post('statuses/update', {status}) or just t.tweet(status)
  t.post('statuses/update', { status: 'Hello World' }, function(err, status) {
    callback(err, status)
  })

}
