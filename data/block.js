e(function(){
  e('[block-url]')['each'](function(){
    var _event = this.getAttribute('block-event');
    var _url = this.getAttribute('block-url');
    var _ajaxData = this.getAttribute('block-ajax-data');
    var _ajaxType = this.getAttribute('block-ajax-type');
    var _ajaxFailure = this.getAttribute('block-on-failure');
    var _ajaxSuscess = this.getAttribute('block-on-success');
    var _pushNotifaction = this.getAttribute('block-push-notification');
    var _container = this;
    e(_event.split('=>')[0])['attach'](_event.split('=>')[1],function(){
      e['ajax']({
        'url':_url,
        'type' : _ajaxType,
        'data' : _ajaxData,
        'failure':function(){
          e['execute']['apply'](_container,[{method:_ajaxFailure,type:'data','class':'failure'}]);
        },
        'success':function(data){
          if(_pushNotifaction){
            var _el = document.createElement('div');
            _el.className = "block-push-notification";
            _el['html'](data);
            _container['append'](_el,_pushNotifaction);
          }
          e['execute']['apply'](_container,[{method:_ajaxSuscess,type:'data','class':'failure'}]);
        }
      });
    });
  });
});