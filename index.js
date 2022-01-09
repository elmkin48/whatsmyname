    let name = document.getElementsByName('name');
    let gender = document.getElementsByName('gender');
    let language = document.getElementsByName('language');
    let new_Name = "";
    let index;

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
    if(name[index].checked && gender[index] === "Female"){
        femaleNames()
    }else if(name[index].checked && gender[index] === "Male") {
        maleNames();
    }else{
        nonBinary()
    }
}
}
function lastNames(){
    let last_names =['Adams', 'Johnson', 'Smith', 'Carter','Santos', 'Perez', 'Haddad', 'Woods', 'Brown', 'Reid', 'Jones', 'Reynolds', 'Simpson']
    document.getElementById("result").innerHTML+= last_names[0];
}
function femaleNames(){
    let english =[]
    let french = []
    let spanish=[]
}
function maleNames(){
    let english =[]
    let french = []
    let spanish=[]
}
function nonBinary(){
    let non_Binary = ['Sam', 'Carter', 'Chris', 'Dylan', 'Julian', 'Cameron', 'Charlie', 'Blake', 'Tatum', 'Riley', 'Pat', 'Parker',' Max', 'Ryan']
}