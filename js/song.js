var api = require('./api.js');

function Song(name){
  this.name = name;
  this.score = 3;
  this.onList = true;
}

Song.prototype.getSentiment = function(text,target,callback){
  $.ajax({
    url: 'http://access.alchemyapi.com/calls/text/TextGetTargetedSentiment',
    method: 'GET',
    data:{
      apikey: api.alchemy,
      text: text,
      target: target,
      outputMode: 'json',
    },
    success: function(response, status){
      this.score += parseFloat(response);
      console.log(parseFloat(response));
    }
  });
};

// module.exports = Song;
//I’m trying to use an ajax call to update variables in an array of objects. I was hoping to do this.variable = result, but I can’t use ‘this’ in the callback function and I don’t think I can pass ‘this' into the callback. Is there a way to do this or am I barking up the wrong tree?
