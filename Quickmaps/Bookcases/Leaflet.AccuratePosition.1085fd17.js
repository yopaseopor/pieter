parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IUNz":[function(require,module,exports) {
L.Map.include({_defaultAccuratePositionOptions:{maxWait:1e4,desiredAccuracy:20},findAccuratePosition:function(t){if(!navigator.geolocation)return this._handleAccuratePositionError({code:0,message:"Geolocation not supported."}),this;this._accuratePositionEventCount=0,this._accuratePositionOptions=L.extend(this._defaultAccuratePositionOptions,t),this._accuratePositionOptions.enableHighAccuracy=!0,this._accuratePositionOptions.maximumAge=0,this._accuratePositionOptions.timeout||(this._accuratePositionOptions.timeout=this._accuratePositionOptions.maxWait);var i=L.bind(this._checkAccuratePosition,this),o=L.bind(this._handleAccuratePositionError,this),a=L.bind(this._handleAccuratePositionTimeout,this);this._accuratePositionWatchId=navigator.geolocation.watchPosition(i,o,this._accuratePositionOptions),this._accuratePositionTimerId=setTimeout(a,this._accuratePositionOptions.maxWait)},_handleAccuratePositionTimeout:function(){return navigator.geolocation.clearWatch(this._accuratePositionWatchId),void 0!==this._lastCheckedAccuratePosition?this._handleAccuratePositionResponse(this._lastCheckedAccuratePosition):this._handleAccuratePositionError({code:3,message:"Timeout expired"}),this},_cleanUpAccuratePositioning:function(){clearTimeout(this._accuratePositionTimerId),navigator.geolocation.clearWatch(this._accuratePositionWatchId)},_checkAccuratePosition:function(t){var i=t.coords.accuracy<=this._accuratePositionOptions.desiredAccuracy;this._lastCheckedAccuratePosition=t,this._accuratePositionEventCount=this._accuratePositionEventCount+1,i&&this._accuratePositionEventCount>1?(this._cleanUpAccuratePositioning(),this._handleAccuratePositionResponse(t)):this._handleAccuratePositionProgress(t)},_prepareAccuratePositionData:function(t){var i=t.coords.latitude,o=t.coords.longitude,a=new L.LatLng(i,o),c=180*t.coords.accuracy/40075017,e=c/Math.cos(Math.PI/180*i),s={latlng:a,bounds:L.latLngBounds([i-c,o-e],[i+c,o+e]),timestamp:t.timestamp};for(var n in t.coords)"number"==typeof t.coords[n]&&(s[n]=t.coords[n]);return s},_handleAccuratePositionProgress:function(t){var i=this._prepareAccuratePositionData(t);this.fire("accuratepositionprogress",i)},_handleAccuratePositionResponse:function(t){var i=this._prepareAccuratePositionData(t);this.fire("accuratepositionfound",i)},_handleAccuratePositionError:function(t){var i=t.code,o=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._cleanUpAccuratePositioning(),this.fire("accuratepositionerror",{code:i,message:"Geolocation error: "+o+"."})}}),console.log("Find accurate position script loaded");
},{}]},{},["IUNz"], null)
//# sourceMappingURL=Leaflet.AccuratePosition.1085fd17.js.map