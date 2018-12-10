
 
 function titleCase(str) {
    var lowercasestr=str.toLowerCase();
    var sepstring=lowercasestr.split(" ");
    //console.log(sepstring);
    for (let i=0; i<sepstring.length; i++){
        var Uppercase = sepstring[i].charAt(0).toUpperCase()+sepstring[i].slice(1);
        console.log(Uppercase);
    }
  return str;
}

titleCase("I'm a little tea pot");
 
 make everything lower case.step one
 do that special code to uppercase stuff
 console.log every step and make sure its withing the same {} thing
 here's another just because