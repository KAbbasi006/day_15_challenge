// //Q43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// let magicians:string[] = ["Jospeh", "Alice", "Martha"];
// function show_magicians(magicians:string[]){
//     magicians.forEach(magicians=>{
//         console.log(magicians)
//     })
// }
// function make_great(magicians:string[]):string[] {
//     let greatMagicians :string[]= [];
//     magicians.forEach(magicians=>{
//         greatMagicians.push(`${magicians} the Great!`);
//     });
//     return greatMagicians;
// }
// let greatMagicians = make_great(magicians.slice());
// console.log("Original magicians: ")
// show_magicians(magicians)
// console.log("Great magicians: ")
// show_magicians(greatMagicians)
// //Q44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// function make_sandwich(...items:string[]){
//     console.log(`Making a sandwich with: ${items.join(" , ")}. `);
// }
// make_sandwich("ham", "cheese");
// make_sandwich("cucumber", "tomato", "lettuce");
// make_sandwich("Avocado", "eggs", "mustard", "mayo");
//Q45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Honda", "Civic", ["Color", "Grey"], ["Year", 2020]));
console.log(make_car("Ford", "Fiesta", ["Color", "Blue"], ["Sunroof", true]));
