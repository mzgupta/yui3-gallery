if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/gallery-debounce/gallery-debounce.js']) {
   __coverage__['build/gallery-debounce/gallery-debounce.js'] = {"path":"build/gallery-debounce/gallery-debounce.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":28},"end":{"line":1,"column":47}}},"2":{"name":"(anonymous_2)","line":33,"loc":{"start":{"line":33,"column":13},"end":{"line":33,"column":40}}},"3":{"name":"(anonymous_3)","line":36,"loc":{"start":{"line":36,"column":11},"end":{"line":36,"column":23}}},"4":{"name":"(anonymous_4)","line":49,"loc":{"start":{"line":49,"column":29},"end":{"line":49,"column":41}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":56,"column":59}},"2":{"start":{"line":33,"column":0},"end":{"line":53,"column":2}},"3":{"start":{"line":34,"column":4},"end":{"line":34,"column":16}},"4":{"start":{"line":36,"column":4},"end":{"line":52,"column":6}},"5":{"start":{"line":37,"column":8},"end":{"line":38,"column":29}},"6":{"start":{"line":40,"column":8},"end":{"line":43,"column":9}},"7":{"start":{"line":41,"column":12},"end":{"line":41,"column":42}},"8":{"start":{"line":42,"column":12},"end":{"line":42,"column":19}},"9":{"start":{"line":45,"column":8},"end":{"line":47,"column":9}},"10":{"start":{"line":46,"column":12},"end":{"line":46,"column":34}},"11":{"start":{"line":49,"column":8},"end":{"line":51,"column":15}},"12":{"start":{"line":50,"column":12},"end":{"line":50,"column":42}}},"branchMap":{"1":{"line":40,"type":"if","locations":[{"start":{"line":40,"column":8},"end":{"line":40,"column":8}},{"start":{"line":40,"column":8},"end":{"line":40,"column":8}}]},"2":{"line":45,"type":"if","locations":[{"start":{"line":45,"column":8},"end":{"line":45,"column":8}},{"start":{"line":45,"column":8},"end":{"line":45,"column":8}}]}},"code":["(function () { YUI.add('gallery-debounce', function (Y, NAME) {","","/**","Debouncing is a similar strategy to throttling (see yui-throttle)","","Y.debounce delays the execution of a function by a certain number","of milliseconds, starting over every time the function is called.","That way it allows you to listen only once to events happening","repeated times over a time span.","","For example, you can debounce a callback to a keypress event","so that you know when the user stopped typing:","```","Y.one('input').on('click', Y.debounce(500, function () {","    alert('The user stopped typing');","}));","```","","@module gallery-debounce","**/","","/**","Debounces a function call so that it's only executed once after a certain","time lapse after the last time it was called","","@method debounce","@for YUI","@param ms {Number} The number of milliseconds to debounce the function call.","Passing a -1 will disable the debounce","@param fn {Function} The function to delay","@return {Function} Returns a wrapped function that calls fn","**/","Y.debounce = function (ms, debouncedFn) {","    var timeout;","","    return function () {","        var self = this,","            args = arguments;","","        if (ms === -1) {","            debouncedFn.apply(self, args);","            return;","        }","","        if (timeout) {","            clearTimeout(timeout);","        }","","        timeout = setTimeout(function () {","            debouncedFn.apply(self, args);","        }, ms);","    };","};","","","}, 'gallery-2013.05.15-21-12', {\"requires\": [\"yui-base\"]});","","}());"]};
}
var __cov_g5gGyPp7NbiAoKul5e_QmA = __coverage__['build/gallery-debounce/gallery-debounce.js'];
__cov_g5gGyPp7NbiAoKul5e_QmA.s['1']++;YUI.add('gallery-debounce',function(Y,NAME){__cov_g5gGyPp7NbiAoKul5e_QmA.f['1']++;__cov_g5gGyPp7NbiAoKul5e_QmA.s['2']++;Y.debounce=function(ms,debouncedFn){__cov_g5gGyPp7NbiAoKul5e_QmA.f['2']++;__cov_g5gGyPp7NbiAoKul5e_QmA.s['3']++;var timeout;__cov_g5gGyPp7NbiAoKul5e_QmA.s['4']++;return function(){__cov_g5gGyPp7NbiAoKul5e_QmA.f['3']++;__cov_g5gGyPp7NbiAoKul5e_QmA.s['5']++;var self=this,args=arguments;__cov_g5gGyPp7NbiAoKul5e_QmA.s['6']++;if(ms===-1){__cov_g5gGyPp7NbiAoKul5e_QmA.b['1'][0]++;__cov_g5gGyPp7NbiAoKul5e_QmA.s['7']++;debouncedFn.apply(self,args);__cov_g5gGyPp7NbiAoKul5e_QmA.s['8']++;return;}else{__cov_g5gGyPp7NbiAoKul5e_QmA.b['1'][1]++;}__cov_g5gGyPp7NbiAoKul5e_QmA.s['9']++;if(timeout){__cov_g5gGyPp7NbiAoKul5e_QmA.b['2'][0]++;__cov_g5gGyPp7NbiAoKul5e_QmA.s['10']++;clearTimeout(timeout);}else{__cov_g5gGyPp7NbiAoKul5e_QmA.b['2'][1]++;}__cov_g5gGyPp7NbiAoKul5e_QmA.s['11']++;timeout=setTimeout(function(){__cov_g5gGyPp7NbiAoKul5e_QmA.f['4']++;__cov_g5gGyPp7NbiAoKul5e_QmA.s['12']++;debouncedFn.apply(self,args);},ms);};};},'gallery-2013.05.15-21-12',{'requires':['yui-base']});