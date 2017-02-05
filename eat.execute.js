e['execute'] = function(options){
  var method =options['method'] ,
  type = options['type'],
  cssClass = options['class'],
  _options = options;
  if(type == 'data' && method){
    _options['val'] = method.split('=>')[1];
    method = method.split('=>')[0];

  }
  if (e['execute']['methods'][method])
     e['execute']['methods'][method].apply(this,[_options]);
   else
    eval(method);
}
e['execute']['methods']= {
  'refresh':function(){window.location.reload();},
  'goto':function(arg){window.location.href =arg['val'];},
  'text':function(arg){
    var _el = this['find']('div.text');
    if(_el.length == 0){
     _el = document.createElement('div');
    _el['addClass']('text');
    _el['addClass'](arg['class']);
    this['append'](_el);
    }
    _el['html'](arg['val']);
  }
}

e['execute']['events'] = [
'auto'
]
