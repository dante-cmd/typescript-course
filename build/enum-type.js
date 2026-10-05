"use strict";
// ----- The enum type ------
var contratStaus;
(function (contratStaus) {
    contratStaus[contratStaus["Permanent"] = 0] = "Permanent";
    contratStaus[contratStaus["Temp"] = 1] = "Temp";
    contratStaus[contratStaus["Appretice"] = 2] = "Appretice";
})(contratStaus || (contratStaus = {}));
let employeeStatus = contratStaus.Temp;
console.log(employeeStatus);
// By default, enum values begin with a value of 0, we can edit to 1
var gender;
(function (gender) {
    gender[gender["male"] = 1] = "male";
    gender[gender["female"] = 2] = "female";
})(gender || (gender = {}));
let employeeGender = gender.female;
console.log(gender[employeeGender]);
//To display the name associated with the enum, we can use the indexer provide
