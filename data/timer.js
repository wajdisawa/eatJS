e(function(){
  e['developer']['addTag']('e.timer');
  e('[timer][timer-event]')['each'](function(){
    var _container = this;
    var _event = this.getAttribute('timer-event');
    var _timerDoneEvent = this.getAttribute('timer-done');
    var _time = parseInt(this.getAttribute('timer'));
    var _order = this.getAttribute('timer-order') && this.getAttribute('timer-order') !=""?this.getAttribute('timer-order').toLowerCase():'acs';
    var _interval = null;
    e(_event.split('=>')[0])['attach'](_event.split('=>')[1],function(){
      if(_interval)return;
      var _timerTime = parseInt(_container['find']('e:timer')['html']());
      if(_order == 'dsc'){
          _interval = setInterval(function(){ 
            if( _time < _timerTime-- )
              _container.find('e:timer')['html'](_timerTime);
            else{
              clearInterval(_interval);
              e['execute']({method:_timerDoneEvent,type:'data'});
              }
           },1000);
      }
      else{
          _interval = setInterval(function(){ 
            if(_timerTime++ < _time )
              _container['find']('e:timer')['html'](_timerTime);
            else{
              clearInterval(_interval);
              e['execute']({method:_timerDoneEvent,type:'data'});
            }
           },1000);
      }
    });
  });
});