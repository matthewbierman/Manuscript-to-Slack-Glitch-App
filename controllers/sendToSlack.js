
const getFormattedMessage = (data)=>
{
   
   var message = "Update to *(Case " + data.casenumber + ") " + data.title + "* "
    + " *Event:* " + data.eventtype
    + " *Status:* " + data.statusname
    + " *Project:* " + data.projectname;
  
    return message;
};

const sendToSlack = (request, response)=>
{
  
  var hasSlackURL = false;
 
  var slackWebHookURL= request.query.slackWebHookURL;
  
  if(slackWebHookURL)
  {
    const clientRequest = require("request");

    var data = request.body;

    var message = getFormattedMessage(data);

    const requestData = {
        text: message,
    };

    const handleResponse = (error, clientResponse, body) =>
    {
        if (error)
        {
            console.log("error");
            console.log(error);

            response.status(500).send('something went wrong :(, is your slack webhook url correct?')
        }
        else
        {
            response.status(200).send();
        }

    };

     clientRequest(slackWebHookURL, { json: true, method:"post", body: requestData }, handleResponse);
  }
  else
  {
    response.status(500).send("need slack incoming webhook url");
  }
  
};

module.exports = sendToSlack;