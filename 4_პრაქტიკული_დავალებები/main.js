/// /////////////////////////////////////////////////
// დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს

function replaceString(str, valueToReplace, valueToReplaceWith) {
    return str.split(valueToReplace).join(valueToReplaceWith);
}


const result = replaceString("Hello world, world!", "world", "JavaScript");
console.log(result); // "Hello JavaScript, JavaScript!"

// split(valueToReplace) - ყოფს str-ს მასივად, valueToReplace-ის მიხედვით.
// join(valueToReplaceWith) - აერთიანებს მასივის ელემენტებს valueToReplaceWith-ით.





//////////////////////////////////////////////
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას


// const uppercasetext = "i want to write this text to uppercase style"
// console.log (uppercasetext.toUpperCase())



/////////////////////////////////////////////////
// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით

// const user = [
//     {name: 'Lasha', age: 30},
//     {name: 'Saba', age:
//         20}

// ];

// function sortUserByAge(users){
//     return users.sort((a, b) => a.age - b.age );
// }

// console.log(sortUserByAge(user))



