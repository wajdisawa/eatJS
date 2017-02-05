(function(){

/**
 * eatClassBuilder is a function to Create encapsulated classes with the inheritance feature
 * @param name
 * @param obj
 * @param base_class(optional)
 * @return encapsulated class and it will be added under eat namespace
 */
function eatClassBuilder(name,_class,base_class){
	// eat Class
	function eatClass(){

		// create new object and save it in memory
	    var obj = {};
	    obj['public'] = _class['public'];
	    obj['private'] = _class['private'];

	    // Do if base_class exists
	    if(base_class){
	    	// create new object and save it in memory
		   	var base_obj = {};
		    base_obj['public'] = base_class['public'];
		    base_obj['private'] = base_class['private'];

		    // initialize the base class
	    	obj['_super'] = base_obj;
	    	// Go throw all public properties and functions in the base class
    		for( fn in base_obj['public']){
    			// Hide the code if it is a function type
	        	if(typeof base_obj['public'][fn] == 'function'){
		            this[fn] = function(){
		            	return base_obj['public'][arguments.callee.fn].apply(base_obj,arguments);
		            };
		            // Add functions for public usage
		            this[fn].fn = fn;
		            continue;
		        }
		        // Add properties for public usage 
		        this[fn] = base_obj['public'][fn];    
	        }	
	    }

	    // validate obj of type object
	    if(typeof obj == "object"){
	    	// validagte public list of type object
	    	if(typeof obj['public'] == "object" ){
	    		// Go throw all public sub class functions and properties
		        for( fn in obj['public']){
		        	// Hide the code if it is a function type
		        	if(typeof obj['public'][fn] == 'function'){
			            obj[fn] = this[fn] = function(){
			            	return obj['public'][arguments.callee.fn].apply(obj,arguments);
			            };
			            // Override the base class function if exist , and add it for public Usage
			            this[fn].fn = fn;
			            continue;
			        }
			        // Override the base class properties if exist , and add it for public Usage
			         this[fn] = obj['public'][fn];    
		        }
	        }
	        //validate private list of type object
	     	if(typeof obj['private'] == "object" ){
	     		// Go throw all private list functions and properties
		        for( fn in obj['private']){
		        	// add private functions
		            obj[fn] = obj['private'][fn];
		        }
	        }
	    }
	    //Call constructor if it is public
	    if(obj && obj['public'] && obj['public']['__construct']){obj['public']['__construct'].apply(obj,arguments)};
	}


	// bind to namespace and return the encapsualted class
	return bindToNamespace(name,function(){
		return eatClass.apply(this,arguments);
	})
	// 
	/**
	 * subClass is a static function to support inheritance
	 * @param name
	 * @param obj
	 * @return encapsulated class and it will be added under eat namespace
	 */
	.subClass =  function(name,_class){
		var base_class = _class;
		return eatClassBuilder(name,_class,base_class);
	};
}


function tagClass(tagObject,tags,tagName){

if(typeof tagObject['config']  !='object'){tagObject['config'] ={}}
tagObject['config']['tags'] = tags;
tagObject['config']['tag'] = tagName;
var _tagName = tagName.split('.');
tagObject['config']['name'] = _tagName.length == 1 ? _tagName[0] : _tagName[1]; 
tagObject['config']['namespace'] = document.createElementNS && _tagName.length > 1?_tagName[0]:'';
tagObject['getTags'] = function (){ 
return this['config']['tags'];
},
tagObject['validateTags'] = function (){ 
	var tags = this['config']['tags'];
	var validatedTags = [];
	for(i=0;i<tags.length;i++){
    	if((tags[i].outerHTML.indexOf('<?xml:namespace prefix = '+namespace==''?'':namespace+':')==0 && e['browser']()['version'] < 9) || e['browser']()['version']>=9 || !e['browser']()['msie']){
    		validatedTags.push(tags[i]);    
    	}
	}
	this['config']['tags'] = validatedTags;
};
tagObject['getTag'] = function (){ return this['config']['tag']};
tagObject['attach'] = function(action,eventHandler){
        function _attach(element,action,eventHandler){
            if (element['addEventListener']){
                element['addEventListener'](action,eventHandler,false);
            }
            else{
                element['attachEvent']('on'+action,eventHandler);
            }
        }
        for(var i =0;i < tags.length;i++){
            _attach(tags[i],'click',d1g['util']['bind'](this,eventHandler));
        }
    }
return tagObject;
}

//bind objects to eat Namespace
function bindToNamespace(name,obj){
	var ns = name.split('.'),
	o = window['e'],
	i,
	len;
	for(i = 0, len = ns.length; i < len; i++){
	    o[ns[i]] = o[ns[i]] ||{}
	    if( i == len -1){
	        o[ns[i]] = obj;
	    break;  
	    }
	    o =  o[ns[i]]
	}
	return obj;

}

//create a class and add it eat namespace
function addClass(name,obj,base_class){
	return eatClassBuilder(name,obj,base_class);
   //return bindToNamespace(name, eatClassBuilder(name,classObj));
};


//create a custom Murkup Language
function addTag(tagName,tagObj){
			// Grap all tags

	function getTags(tagName){
		var _tagName = tagName.split('.');
		var namespace = document.createElementNS && _tagName.length > 0?_tagName[0]:'';
		var name = _tagName.length == 1 ? _tagName[0] : _tagName[1];
		return document.getElementsByTagName(namespace +(namespace == ''?'':':')+ name);
	}

	//Initalize Tag this is used as a fix for IE
	document.createElement(tagName);

	//Execute when the page is ready
	e(function(config){

	var tags = getTags(tagName);

    var _tag = new tagClass(tagObj||{},tags,tagName);
    
    if(_tag['constructor']){_tag['constructor'](tagName)};

    for(var i =0;i < tags.length;i++){
        if(_tag['init']){_tag['init'](tagName,tags[i])};
    }
    bindToNamespace(tagName,_tag);

	},this,{'tagName':tagName,'tagObj':tagObj});
};
//create a plugin to be used by eat elements
function addPlugin(pluginName,plugin){


};

e['developer']={
'addClass':function(){return addClass.apply(this,arguments)},
'addTag':function(){return addTag.apply(this,arguments)},
'addPlugin':function(){return addPlugin.apply(this,arguments)}
}

})();