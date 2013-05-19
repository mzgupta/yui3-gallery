YUI.add("gallery-storage-lite",function(e,t){var n=e.config.doc,r=e.config.win,i=e.JSON,s=e.namespace("StorageLite"),o="yui_storage_lite",u="YUI StorageLite data",a=1048576,f="1.0",l="ready",c=0,h=1,p=2,d=3,v=4,m="yui_storage_lite",g="data",y={},b,w;try{r.localStorage?w=h:r.globalStorage?w=p:r.openDatabase&&navigator.userAgent.indexOf("Chrome")===-1?w=d:e.UA.ie>=5?w=v:w=c}catch(E){w=c}e.StorageFullError=function(t){e.StorageFullError.superclass.constructor.call(t),this.name="StorageFullError",this.message=t||"Maximum storage capacity reached",e.UA.ie&&(this.description=this.message)},e.extend(e.StorageFullError,Error),e.augment(s,e.EventTarget,!0,null,{emitFacade:!0,prefix:"storage-lite",preventable:!1}),s.publish(l,{fireOnce:!0}),e.mix(s,{clear:function(){},getItem:function(e,t){return null},length:function(){return 0},removeItem:function(e){},setItem:function(e,t){}}),w===h||w===p?(e.mix(s,{length:function(){return b.length},removeItem:function(e){b.removeItem(e)},setItem:function(e,t,n){b.setItem(e,n?i.stringify(t):t)}},!0),w===h?(b=r.localStorage,e.Node.DOM_EVENTS.pageshow=1,e.on("pageshow",function(){b=r.localStorage}),e.mix(s,{clear:function(){b.clear()},getItem:function(e,t){try{return t?i.parse(b.getItem(e)):b.getItem(e)}catch(n){return null}}},!0)):w===p&&(b=r.globalStorage[r.location.hostname],e.mix(s,{clear:function(){for(var e in b)b.hasOwnProperty(e)&&(b.removeItem(e),delete b[e])},getItem:function(e,t){try{return t?i.parse(b[e].value):b[e].value}catch(n){return null}}},!0)),s.fire(l)):w===d||w===v?(e.mix(s,{clear:function(){y={},s._save()},getItem:function(e,t){return y.hasOwnProperty(e)?y[e]:null},length:function(){var e=0,t;for(t in y)y.hasOwnProperty(t)&&(e+=1);return e},removeItem:function(e){delete y[e],s._save()},setItem:function(e,t,n){y[e]=t,s._save()}},!0),w===d?(b=r.openDatabase(o,f,u,a),e.mix(s,{_save:function(){b.transaction(function(e){e.executeSql("REPLACE INTO "+o+" (name, value) VALUES ('data', ?)",[i.stringify(y)])})}},!0),b.transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS "+o+"(name TEXT PRIMARY KEY, value TEXT NOT NULL)"),e.executeSql("SELECT value FROM "+o+" WHERE name = 'data'",[],function(e,t){if(t.rows.length)try{y=i.parse(t.rows.item(0).value)}catch(n){y={}}s.fire(l)})})):w===v&&(b=n.createElement("span"),b.addBehavior("#default#userData"),e.mix(s,{_save:function(){var t=i.stringify(y);try{b.setAttribute(g,t),b.save(m)}catch(n){throw new e.StorageFullError}}},!0),e.on("domready",function(){n.body.appendChild(b),b.load(m);try{y=i.parse(b.getAttribute(g)||"{}")}catch(e){y={}}s.fire(l)}))):s.fire(l)},"gallery-2013.01.16-21-05",{requires:["event-base","event-custom","event-custom-complex","json","node-base"]});