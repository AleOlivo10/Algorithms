
var word = "hello world"
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
 titleCase("hello world");