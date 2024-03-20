/**
 * @return {Function}
 */
var createHelloWorld = function() {
     return function(...args) {
       let prop= args;
        prop="Hello World";
        return prop;

    }

};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */