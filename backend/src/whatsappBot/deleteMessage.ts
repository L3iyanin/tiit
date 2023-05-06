var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
    "token": "ib9ybx23896kscn8",
    "msgId": "false_120363133172946194@g.us_3AC0E13B25483881A58D_212608204019@c.us"
});

var config = {
  method: 'post',
  url: 'https://api.ultramsg.com/instance46026/messages/delete',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
