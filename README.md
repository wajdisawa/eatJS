# EatJS #

>This documentation will take you from total beginner to the power of JavaScript.
This is a client side javascript framework works with your smart browser in the most efficient way to get you the ultimate performance and takes the complexity out of client-side web programming.



## Who do I talk to? ##

> Repo owner or admin: 
> - zaidsa3sa3@gmail.com 
> - wajdee.sawaf@gmail.com

## Features
- Cross Browser Support
- DOM Ready
- Light Core
- IE 7/8 Fallback is seperated from the core
- Getting The element magic funtions out of the box
- Create custom Murkup Languages
- Create Object Oriented Classes
- Intelligent Menu
- Animations
- Seamless Javascript using Behavioural tags For Non javascript Developers

___


### DOM Ready ###

You can now detect when the dom is ready

#### For Example ####
```javascript
e(function(){
    
    // Code will be executed when the DOM is ready
    
});
```
#### Advanced : using diffrent scope ####
```javascript
// Create A new object and use it as your new scope
another_scope = new function(){
    this.test = function(){
        return 'hello';  
    };
}
e(function(){
    
    // Code will be executed when the DOM is ready
    
    // this will be transleted to another_sope object
    var result = this.test();
    
},another_scope);
```

#### Advanced : using diffrent scope with arguments ####
```javascript
// Create A new object and use it as your new scope
var another_scope = new function(){
    this.test = function(name,gender){
        return 'hello ' + name + ' your gender is ' + gender;  
    };
}
var args = ['Zaid','Male'];
e(function(name,gender){
    
    // Code will be executed when the DOM is ready
    
    // this will be transleted to another_sope object
    var result = this.test(name,gender);
    
},another_scope,args);
```

### Magic Functions ###
- show()
- hide()
- addClass()
- removeClass()
- append()
- html()
- click()
- attach()
- find()

___

#### How To use the Magic Functions ####

```html
<!--Html Sample Code -->
<html>
    <head>
    </head>
    <body>
        <div id='block1'>
            <div id='block2'></div>
        </div>
    </body>
</html>
```

```javascript
//Execute when the DOM is ready
e(function(){
    // Using the raw javascript to get Element 
    var block1 = document.getElementById('block1');
    // OR you can use 
    // var block1 = eat('#block1');
    
    // To Hide
    block1.hide();
    
    // To Show 
    block1.show();
    
    // To find elements Under The element
    var block2 = block1.find('block2');
    
    // To inject the element
    block1.html('I am inside the Block');
    
    // To read what is inside the element
    var what_is_inside = block1.html();
    
    // To Append
    var block3 = document.createElement('div');
    block3.html('hello');
    block1.append(block3, 'upper'); // it can be upper or lower and the default is lower
    
    // For click event usage
    block1.click(function(){
        // Code you want to execute after clicking
    });
    
    // For All events you can use
    block1.attach('click',function(){
        // Code to be executed after the event
    });
    
    // To Add Class to an element
    block1.addClass('sample-class-name');
    
    // To Remove Class from an element
    block1.removeClass('sample-class-name');
    
});
```

### Intelligent Menu ###

```html
<html>
  <head>
  	<script type="text/javascript" >
  		e(function(){
  		    // Define the menus
            e('.menu').menu();
  		});

  	</script>
    <title></title>
    <meta content="">
    <style>
      #menu1 .selected{color: red}
      #menu2 .selected{background: red}
    </style>
  </head>
  <body>
    <ul id='menu1' class='menu'>
      <li><a class='selected'>item1</a></li>
      <li><a >item2</a></li>
      <li><a >item3</a></li>
      <li><a >item4</a></li>
    </ul>

    <ul id='menu2' class='menu'>
      <li><div><div class='selected'>item1</div></div></li>
      <li><div ><div >item2</div></div></li>
      <li><div ><a><div >item3</div></a></div></li>
      <li><div ><div >item4</div></div></li>
    </ul>
```

### Animations ###
```html
    var block1 = document.getElementById('block1');
    // Animate Width
    block1.animate({width:'-=100'});
    // Animate Height
    block1.animate({height:'+=100px'});
    // Group Animate 
    block1.animate({width:'-=100em',height:'+=100'});
    
 // Other examples Will be added soon
```
### Ajax ###
```javascript
       e.ajax({
           // Default is window
    		'scope': window, 
    		// Url you need to call
            'url':'http://sample-url.com', 
            // Default value is json , options are json || jsonp || xml || text
            'type' : 'json', 
            // Data need to be send to the server 
            'data' : {}, 
            // Defualt is true , Call Synchronous or ASynchronous , options are true || false
    		'async' : true, 
            'failure':function(){
                // Code in case of failure
            },
            'success':function(data){
                // Code in case of success
            }
      });
	  
```
### Create Custom Markup languages with event control ###
```html
 // Example Will be added soon
```

### Create Object Oriented Classes ###
```javascript
    // Class Sturcture
    e.developer.addClass('testClass', // Class Name
        // Class     
        {
            'public':{ // Public functions
                testPublic:function(val){
                   return this.testPrivate(val);
                    
                }
            },
            'private':{ // Private Functions
                testPrivate:function(val){
                   return 'Hello '+ val;
                }
            }
        }
    );
    
    // Usage
    var testObject = new e.testClass();
    testObject.testPrivate('Me'); // undefined function because it is private
    testObject.testPublic('Me'); // will return Hello Me because it is public
    
 
```

### Seamless JavaScript using Behavioral tags ###
```html
 // Example Will be added soon
```