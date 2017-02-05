(function(){
HTMLElement.prototype.animate = animate;
NodeList.prototype.animate = animate;
// WS
function animate(options) {
	
var opt = {};
var speed = options['speed']||10;
var ids ={};

for (var option in options){
	if(option === "speed")
	{
		continue;
	}
	var typeMager = options[option].indexOf('em') == -1 ? 'px' : 'em' ;
	opt[option] = {
		value: this.style[option] == "" ? 0 : this.style[option].replace(typeMager,''),
		reverse : false,
		stop: null,
		Mstyle: null,
		typeMager: typeMager
	}
	opt[option]['Mstyle'] = this.style[option].split(" ");
	opt[option]['Mstyle'][0] = "";
	opt[option]['Mstyle'] = opt[option]['Mstyle'].join(" ");
	
	if(options[option].indexOf("+=") != -1){
		opt[option]['stop'] = parseInt(options[option].replace("+=",'').replace(typeMager,'')) + parseInt(opt[option]['value']);
	}
	if(options[option].indexOf("-=") != -1)
	{
		opt[option]['stop'] = options[option].replace("-=",'').replace(typeMager,'');
		opt[option]['stop'] = opt[option]['value'] - opt[option]['stop'];
		opt[option]['reverse'] = true;
	}
	if(opt[option]['value'] > parseInt(options[option].replace(typeMager,''))){
		opt[option]['stop'] = parseInt(options[option].replace(typeMager,''));
		opt[option]['reverse'] =true;
	}
	if(opt[option]['value'] < parseInt(options[option].replace(typeMager,'')))
	{
		opt[option]['stop'] = parseInt(opt[option]['value']) + parseInt(options[option].replace(typeMager,''));	
	}
 
  	ids[option]= setInterval(moveSide, speed,this,option);
}




function moveSide(elem,option) {
		if(opt[option]['value'] != opt[option]['stop'] && !opt[option]['reverse'])
		{
			opt[option]['value']++;
		}
		if(opt[option]['value'] != opt[option]['stop'] && opt[option]['reverse'] ){
			opt[option]['value']--;
		}
		elem.style[option] = opt[option]['value'] + opt[option]['typeMager'] + opt[option]['Mstyle'];
		if(opt[option]['value'] == opt[option]['stop'])
			clearInterval(ids[option]);
	
    // elem.style[dir] = side + 'px' ;
    // if (side == 100)
    //   clearInterval(id);
  }
  //var id = setInterval(moveSide, speed,this);

}




})();


