( function( global, factory ) {

    "use strict";

    if ( typeof module === "object" && typeof module.exports === "object" ) {

        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get domjs.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var domjs = require("domjs")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "domjs requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

    "use strict";


var arr = [];


var rselector=/(?:\s*\<([\w\W]{3})\>|#([\w-\W]+[\w\w]$))/,
    init = domjs.fn.init = function(selector){
        // for d$(""), d$(null), d$(), d$(false)
        if(!selector)
            return this;
    };

init.prototype = domjs.fn;





    return domjs;
} );
