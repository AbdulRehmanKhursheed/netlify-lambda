const axios = require("axios");

exports.handler = async function (event, context, callback) {
  const data = await axios("https://api.publicapis.org/entries");
  if (event.httpMethod == "GET") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "Following is the api response from the public animal names apis ",
        data: data.data,
      }),
    });
  } if (event.httpMethod == "POST") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "This was a POST request . .",
      }),
    });
  } 
   else {
    callback(null, {
      statusCode: 500,
      body: "Some error occured in server!.",
    });
  }
};
