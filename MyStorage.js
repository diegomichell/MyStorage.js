/**
*	libName:MyStorage.js
*	Author:Diego Ivan Perez Michel (ivanevil)
*		
*	Description:	
*	
*	MyStorage.js allows you to save any kind of Object in a "localStorage" or "sessionStorage" not just Strings. 
*/

Storage.prototype.setObject = function(key,object){
    this.setItem(key,JSON.stringify(object));
}

Storage.prototype.getObject = function(key) {
	var value = this.getItem(key);
	return JSON.parse(value);
};

Storage.prototype.setInt = function(key,integer){
    this.setItem(key,integer);
}

Storage.prototype.getInt = function(key) {
	var value = this.getItem(key);
	return parseInt(value);
};

Storage.prototype.setFloat = function(key,float){
    this.setItem(key,float);
}

Storage.prototype.getFloat = function(key) {
	var value = this.getItem(key);
	return parseFloat(value);
};
