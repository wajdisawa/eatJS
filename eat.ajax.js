(function(){

//Generate Url with params
function generateUrl(url,data){
	isQuestionMaakExist = url.indexOf('?') ==-1 ?false:true;
	if(isQuestionMaakExist && (url.indexOf('&')+1 != url.length)) url +='&';   
	return isQuestionMaakExist ? url + data: url +'?' + data;
}

//Convert Data object to a string concated with &
function convertDatatoParams(data){
var params = "";
for(param in data)
	params+= param +'=' +data[param]+'&';
return params;
}

//Main function to execute an ajax request
function ajax(config){
//Headers
var headers= {
			"*": "*/".concat("*"),
			'text': "text/plain",
			'html': "text/html",
			'xml': "application/xml, text/xml",
			'json': "application/json, text/javascript"
		}
var conf = config;
var scope = conf['scope'] ?conf['scope']: window;
var type = conf['type'] ?conf['type']:"json";
var async = typeof(conf['async']) == 'boolean' ?conf['async']:true;

if(type != 'jsonp'){
var method = conf['method'] ?conf['method']: "GET";
var req =  new XMLHttpRequest();
var isExecuted = false;
req.onreadystatechange = function () {

    if (req.readyState != 4) return;  //exit if the xhr is not ready
	if (isExecuted) return; //exit if it was called twice 
	isExecuted = true;
    if (req.status != 200 && req.status != 304) { // execute failure if the the status is  not "SUCCESS" or "NOT Modified"
    	conf['failure'].call(scope,null,'failed',req);
        return;
    }
    
    try{
		data = type == "json" ? JSON.parse(req.responseText) : req.responseText;
    	conf['success'].call(scope,data,'success',req); // execute when data is recived
    }
    catch(e){ // execute failure when we cannot parse string to json
    	conf['failure'].call(scope,null,'failed',req);
    }

}
if (req.readyState == 4) return; // exit if the XHR is not ready
var generatedUrl = '';
var generatedData = '';
if(method =='GET'){
	generatedUrl = generateUrl(conf['url'],convertDatatoParams(conf['data']));
	generatedData = null;
}
else{
	generatedUrl = conf['url'];
	generatedData = convertDatatoParams(conf['data']);
}
req.open(method,generatedUrl,async);
req.setRequestHeader("Content-Type",headers[type]);
req.send(generatedData);

}
else{
var script = document.createElement('script');
var callbackfunc = config['callback']?config['callback']:("e" + Date.now());
var head = document.getElementsByTagName('head')[0];
var status = 'failed';
function callback(data){
	head.removeChild(script);
	status = 'success';
	conf['success'].call(scope,data,status);
}

window[callbackfunc] = function(obj){
	callback(obj);
}
script.setAttribute('src',generateUrl(conf['url'],convertDatatoParams(conf['data'])) + '&jsoncallback=' + callbackfunc);
script.async = async;

script.addEventListener('error',function(){
head.removeChild(script);
	conf['failure'].call(scope,null,status);
},false);
if (e['browser']['msie'] && e['browser']['version'] == 8)
script.attachEvent('onerror',function(){
	head.removeChild(script);
	conf['failure'].call(scope,null,status);
});

head.appendChild(script); 
}

};

e['ajax']= function(){
	ajax.apply(this,arguments);
};
})();
