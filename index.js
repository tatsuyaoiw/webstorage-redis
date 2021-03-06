'use strict';

var redis = require('redis');

/**
 * Persistent local file storage
 *
 * @constructor
 */
function RedisStorage() {
  if (!(this instanceof RedisStorage)) {
    return new RedisStorage(arguments);
  }
  var args = Array.prototype.slice.call(arguments, 0);
  this.client = redis.createClient.apply(redis, args);

  this.client.on('error', function (err) {
    console.log(err.message);
  });
}

/**
 * Returns all keys stored.
 *
 * @return {String[]} keys
 */
RedisStorage.prototype.keys = function() {
  return [];
};

/**
 * Returns the value associated with the given key.
 *
 * @param  {String} key
 * @return {String} value
 */
RedisStorage.prototype.getItem = function(key) {
  return this.client.get(key);
};

/**
 * Adds or updates the key/value pair.
 *
 * @param {String} key
 * @param {String} value
 */
RedisStorage.prototype.setItem = function(key, value) {
  this.client.set(key, value);
};

/**
 * Removes the item with the given key.
 *
 * @param  {String} key
 */
RedisStorage.prototype.removeItem = function(key) {
};

module.exports = RedisStorage;