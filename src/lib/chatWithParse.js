$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader(
    "X-Parse-Application-Id",
    "2745f6eedad1770c6ebaf03f8a97cf0cc2f66706"
  );
  jqXHR.setRequestHeader(
    "X-Parse-REST-API-Key",
    "4f44a6835e581124936858b658e8ea99e278d371"
  );
});

var getFromParse = () => {
  $.ajax({
    url:'http://parse.sfm6.hackreactor.com/',
    key: 'realized this was too similar to chatterbox',
    type: 'GET',
    data: "order-=createdAt",
    type: 'JSON',
    success: function (data) {
      console.log(data);
      console.log('success');
      
    },
    failure: function (data) {
      console.log('fail');
    }

    });
};

var sendToParse = () => {
  $.ajax({
    type: 'POST',
    data: JSON.stringify(message),
    success: function (data) {
      console.log('success');

      
    },
    failure: function (data) {
      
    }
  });
};

export sendToParse;
export getFromParse;
