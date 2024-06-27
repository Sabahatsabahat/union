//-----------------------------------------------Union VS Intersection -------------------------------------------------------

// Union
// union ka matlab ye hai ka basically  jo union ka result ayega ya tu sirf  set " A" ya set "B " ka complete data ho sakta hai jo b union data hai ...
// union mai humen idea nh hota user kya likhy ga  is case mai hum union likhty hai .. jis case mai humen nh sureka user kya dega waha hum union daty hai
//------------------------------------------------------------------------------------------------------------------------------------- */
// in typescript when using a union type, it is essential to ensure that at least one of the type in the union includes all the required properties. failure to do so will result in a type error during compilation
//------------------------------------------------------------------------------------------------------------------------------

// practice
//
 type Person = { name: string; age: number };
type Employee = { name: string; salary: number };
 type Manager = { name: string; salary: number; department: string };
type AnyPerson = Person | Employee | Manager;
 

const person: AnyPerson = { name: "John", age: 30 };
 

 const employee: AnyPerson = { name: "John", salary: 30000 };
 const manager: AnyPerson = { name: "John", salary: 30000, department: "IT" };
 console.log(person);
 console.log(employee);
 console.log(manager);
 // union type



//we'll create a function that can accept different of arguments and perform different actions based on the type of the input. suppose we want to create a function that doubles the value if the input is a number , or converts the input to uppercase()if its a string we can use a union type   to allow the function to accept both number and string
function doubleAndConvert(input: number | string): number | string {
    if (typeof input === "number") {
        return input * 2;
    } else 
        return input.toUpperCase();
    }


// Example usage:
console.log(doubleAndConvert(5));       // Output: 10
console.log(doubleAndConvert("hello")); // Output: HELLO

// ______________________________________________________________________________________________________________________________

// We want to create function that formats the value passed to it in a specific way based on its type : ? if the input is a boolean its should retrun "Yes" for true and "NO" for false ? if the input is a string , it should capitalize the first letter .

function format(input: boolean | string): string { 
    if (typeof input === "boolean") {
        return input? "Yes" : "No";
    } else
        return input.charAt(0).toUpperCase() + input.slice(1);
}
// Example usage: 
console.log(format(true));       // Output: Yes
console.log(format("hello"));
    





         









