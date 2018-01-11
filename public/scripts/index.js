
const requestReadyStateChange = (request)=>
{
  if (request.readyState === XMLHttpRequest.DONE) 
  {
    if(request.status === 200)
    {
      alert("delivered");
    }
    else if (request.status == 500)
    {
      alert("failed to update slack :(");
    }
    else if (request.status == 401)
    {
      alert("not authorized :(, invalid key?");
    }
  }
};

const btnSendTestClick = ()=>
{
    var host = location.protocol + '//' + location.hostname;
    var url = host + "/api/sendToSlack";
    var slackWebHookURL = document.getElementById("txtSlackURL").value;
  
    url += "?slackWebHookURL=" + slackWebHookURL;
  
    var data = {title:"test from page", casenumber:1000, eventtype:"test event", statusname:"Active", projectname:"Test project", eventtext:"Sample body"};
    var request = new XMLHttpRequest();
   
    request.open("POST", url, true); 
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function(){requestReadyStateChange(request);}; 
    request.send(JSON.stringify(data));
};

const getQueryStringValue = (name) => {

    var url = window.location.search.substring(1);
    var valuePairs = url.split("&");
    var value = null;
  
    for (var index=0;index<valuePairs.length;index++) 
    {
        var valuePair = valuePairs[index].split("=");
        if (valuePair[0] == name) 
        {
            value = valuePair[1];
            break;
        }
    }
  
  return value;
}

const documentReady = ()=>
{
  document.getElementById("btnSendTest").onclick = btnSendTestClick;
  document.getElementById("txtSlackURL").value = getQueryStringValue("slackWebHookURL");
};



documentReady();