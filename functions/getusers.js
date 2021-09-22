const axios = require("axios");
 
exports.handler = async function (event, context, callback) {
  const data = await axios("https://api.publicapis.org/entries");
  
  console.log(context, "Muhammad Ahsan");
  if (event.httpMethod == "GET") {
  
      callback(null, {
      statusCode: 200, 
      body: JSON.stringify({
        msg: "Following is the api response from the public animal names apis ",
        data: data.data,
      }),
    });
  } else if (event.httpMethod == "POST") {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        msg: "This was a POST request",
      }),
    });
  } else if(event.httpMethod == "PUT") {
    callback(null, {
      statusCode: 500,
      body: "This was a  PUT request ",
    });
  }
  else if(event.httpMethod == "DELETE") {
    callback(null, {
      statusCode: 200,
      body: "This was a DELETE  request ",
    });
  }
};