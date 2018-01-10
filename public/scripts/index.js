
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
      alert("it broked :(");
    }
    else if (request.status == 401)
    {
      alert("JP is not authorized :(");
    }
  }
};

const btnSendTestClick = ()=>
{
    var host = location.protocol + '//' + location.hostname;
    var url = host + "/api/sendToSlack";
    var apikey = document.getElementById("txtAPIKey").value;
  
    url += "?apikey=" + apikey;
  
    var data = {title:"test from page", casenumber:1000, eventtype:"test event", statusname:"Active", projectname:"Test project", eventtext:"Sample body"};
    var request = new XMLHttpRequest();
   
    request.open("POST", url, true); 
    request.setRequestHeader("Content-type", "application/json");
    request.onreadystatechange = function(){requestReadyStateChange(request);}; 
    request.send(JSON.stringify(data));
};

const documentReady = ()=>
{
  document.getElementById("btnSendTest").onclick = btnSendTestClick;
};

const getQueryStringValue = (name) => {

    var url = window.location.search.substring(1);
    var valuePairs = url.split("&");
    var value = null;
  
    for (index=0;index<values.length;i++) 
    {
        var valuePair = valuePairs[i].split("=");
        if (valuePair[0] == name) 
        {
            value = valuePair[1];
            break;
        }
    }
  
  return value;
}

documentReady();