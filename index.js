    let name = document.getElementsByName('name');
    let gender = document.getElementsByName('gender');
    let language = document.getElementsByName('language');
    let new_Name = "";
    let index;
function selectionMade(){
    for(index =0;  index < name.length; index++){
    if(name[index].checked && name[index].value === "First Name"){
        window.location.href='firstName.html'
    }else if(name[index].checked && name[index].value === "Last Name"){
        window.location.href='lastName.html'
        lastNames()
    }
}
}
function mainFunction(){
for(index =0;  index < name.length; index++){
    if(name[index].checked && name[index].value === "First Name"){
        firstNames()
    }else if(name[index].checked && name[index].value === "Last Name"){
        lastNames()
    }
}
}
function firstNames(){
    for(index =0;  index < gender.length; index++){
    if(gender[index].checked && gender[index].value === "Female"){
        femaleNames();
    }else if(gender[index].checked && gender[index].value === "Male") {
        maleNames();
    }else{
        nonBinary();
    }
}
}
function lastNames(){
    let last_names =['Adams', 'Johnson', 'Smith', 'Carter','Santos', 'Perez', 'Haddad', 'Woods', 'Brown', 'Reid', 'Jones', 'Reynolds', 'Simpson']
    document.getElementById("lastname").innerHTML+= last_names[Math.floor(Math.random()*last_names.length)];
}
function femaleNames(){
    let english =['Sarah', 'Audrey', 'Samantha', 'Blossom', 'Amy', 'Kelly', 'Kimberly', 'Diana', 'Diane', 'Lisa', 'Justine', 'Betty', 'Anna', 'Sabrina','Jaya', 'Brianna', 'Penny']
//    let french = ['Annabelle', 'Margo']
//    let spanish=[]
     document.querySelector(".result").innerHTML+= english[Math.floor(Math.random()*english.length)];
}
function maleNames(){
    let english = ['Jake','Braxton', 'Timothy', 'Victor', 'Simon', 'Bradley', 'Millard', 'Willian', 'Harry', 'Christopher', 'Richard', 'Johnathan', 'Nathan', 'Willard', 'Nicolas', 'Joshua', 'David', 'Luke', 'Peter', 'Brian']
//    let french = []
//    let spanish=[]
    document.querySelector(".result").innerHTML+= english[Math.floor(Math.random()*english.length)];
}
function nonBinary(){
    let non_Binary = ['Sam', 'Carter', 'Chris', 'Dylan', 'Julian', 'Cameron', 'Charlie', 'Blake', 'Tatum', 'Riley', 'Pat', 'Parker',' Max', 'Ryan', 'Bailey']
    document.querySelector(".result").innerHTML+= non_Binary[Math.floor(Math.random()*non_Binary.length)];
}

//function bothfirstLast(){
//    // to print first and last names
//}