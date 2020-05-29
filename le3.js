const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

var fullTeachers = nashvilleSoftwareSchool.instructors.fullTime;
var partTeachers = nashvilleSoftwareSchool.instructors.partTime;

for (var i = 0; i < partTeachers.length; i++) {
    console.log(partTeachers[i])
    if( i == partTeachers.length - 1) {
        for (var j = 0; j < fullTeachers.length; j++) {
            console.log(fullTeachers[j])
        }
    }
}

console.log("                  ");
for (var i = 0; i < partTeachers.length; i++) {
    if( i == 0) {
       console.log(partTeachers[i])
       console.log(fullTeachers[fullTeachers.length - 1])
    }
    
}