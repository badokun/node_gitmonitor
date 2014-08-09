/**
 * Created by henno on 8/8/14.
 * Class design from http://book.mixu.net/node/ch6.html
 */

function config(bar) {
  // always initialize all instance properties
  this.bar = bar;
  this.baz = 'baz'; // default value
  
  this.someMethod2 = function(){
console.log('incredible');    
};
}



// class methods
config.prototype.someMethod = function() {
 console.log("This is a message from the config class");
};

// export the class
module.exports = config;