// ----- The enum type ------

enum contratStaus {
    Permanent,
    Temp,
    Appretice
}

let employeeStatus:contratStaus = contratStaus.Temp;
console.log(employeeStatus)

// By default, enum values begin with a value of 0, we can edit to 1

enum  gender {
    male = 1,
    female
}
let employeeGender :gender =gender.female

console.log(gender[employeeGender]);

//To display the name associated with the enum, we can use the indexer provide

