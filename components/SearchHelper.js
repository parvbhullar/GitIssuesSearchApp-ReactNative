'use strict';

var events = require('events');
var util = require('util');

const token = '9f1d9040745dc12b173af8a726c7c340507e6688' //API TOKEN
var SearchHelper = function(urlP, options) {
  var url = urlP;
  var opts = options || {};
}

util.inherits(SearchHelper, events.EventEmitter);

SearchHelper.prototype.setUrl= function(newUrl) {
  this.url = newUrl;
  return this;
};

SearchHelper.prototype.search = function(query) {
  this.query = query;
  var url = 'https://api.github.com/search/issues?q=label:bug+repo:'+query+'&sort=created&order=asc';
			fetch(url, {
				headers: {
          'Authorization' : 'token '+token
        }
			})
			.then((response)=> response.json())
			.then((responseData)=>{
				this.searchResults = responseData;
        this.emit('result', responseData);
			})
      .catch((err)=>{
        this.emit('error', err);
      });
  return this;
};

module.exports = SearchHelper;

