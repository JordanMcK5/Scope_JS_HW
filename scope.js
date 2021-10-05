var name = "Jill";

var secretsFunction = function(){
    var pincode = [0, 0, 0, 0]
    console.log("Pincode inside secret function", name);
}

secretsFunction();
console.log("Pincode outside secret function", name);

var filterNamesByFirstLetter = function(names, letter){
    var filteredNames = [];
    for(let name of names){
        if(name[0] === letter){
            filteredNames.push(name)
        }
    }
    console.log("name after loop", name);
    return filteredNames
}

var students = ["Alice", "Bob", "Alyssa", "Artem", "Babs"];
var filteredNames = filterNamesByFirstLetter(students, "A");
console.log("filteredStudents", filteredNames);


let isItFive = function(number){
    if (number ===5){
        var result = true;
    }else {
        var result = false;
    }
    return result
}