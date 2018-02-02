'use strict';

const T = require('lwt')

// fetch twitter credentials
let params = require('./data/twitter-keys.json')

let t = new T(params)

exports.handler = (event, context, callback) => {
  // use t.post('statuses/update', {status}) or just t.tweet(status)
  t.post('statuses/update', { status: 'Hello World' }, function(err, status) {
    callback(err, status)
  })

}
