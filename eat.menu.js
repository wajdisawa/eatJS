(function(){
NodeList.prototype.menu  = function(arg){
	for(var i=0;i<this.length;i++)
		menu.call(this[i],arg);

}

HTMLElement.prototype.menu =  function(arg){
	menu.call(this,arg);
}

if(e['browser']['msie']){
	extend("menu",function(arg){
		if(this.length)
			for(var i=0;i<this.length;i++)
				menu.call(this[i],arg);
		else
			menu.call(this,arg);
	});
}

function menu(arg) {
	var selectedItem = this['find']('.selected')[0];
	var path = findPath(selectedItem);
	var items = document.querySelectorAll(path);
	items['click'](event(selectedItem));
	return this;
}
function event(selectedItem){
	var _selectedItem = selectedItem;
	return function(){
	_selectedItem.removeClass('selected');
	_selectedItem = this;
	this['addClass']('selected');
	}
}
function findPath(item){
	var _node =item, _this = item;
	var path = '',_this_id = _node.id;
	_node.id = 'e' + Math.floor(Math.random(Math.pow(10,10))*Math.pow(10,10));
	do{
		
		path = _node.tagName+' ' + path;
		_node = _node.parentNode;
	}
	while(_node != document);
	_this.id = _this_id;
	return path;
}
})();