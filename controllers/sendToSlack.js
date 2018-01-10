
const getFormattedMessage = (data)=>
{
   var caseLink = process.env.MANUSCRIPTURL + "cases/" + data.casenumber;
  
   var message = "Updates to *Case #:(" + data.casenumber + ") <" +  caseLink + "|" + data.title + ">* "
    + " *Event:* " + data.eventtype
    + " *Status:* " + data.statusname
    + " *Project:* " + data.projectname;
  
    if(data.eventtext)
    {
      message += " ```" + data.eventtext + "```";
    }
  
   
  
  //<https://alert-system.com/alerts/1234|Click here>
  

  
    return message;
};

const sendToSlack = (request, response)=>
{
  
  var validKey = false;
 
  var apiKey = request.query.apikey;
  
  if(apiKey)
  {
    if(apiKey == process.env.APIKEY)
    {
      validKey = true;
    }
  }
  
  if(validKey)
  {
    const clientRequest = require("request");

    var data = request.body;

    var message = getFormattedMessage(data);

    const requestData = {
        text: message,
    };

    var destinationURL = process.env.SLACKURL

    const handleResponse = (error, clientResponse, body) =>
    {
        if (error)
        {
            console.log("error");
            console.log(error);

            response.status(500).send('Something went wrong :(')
        }
        else
        {
            response.status(200).send();
        }

    };

     clientRequest(destinationURL, { json: true, method:"post", body: requestData }, handleResponse);
  }
  else
  {
    response.status(401).send("nice try");
    console.log("nice try");
  }
  
};

module.exports = sendToSlack;