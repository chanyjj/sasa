Java.perform(function(){
    var RootBeer = Java.use("j3.b");
    RootBeer.m.implementation = function(){
        return false;
    };

   RootBeer.b.implementation = function(){
        return false;
    };

   RootBeer.c.implementation = function(){
        return false;
    };

RootBeer.n.implementation = function(){
        return false;
    };
});