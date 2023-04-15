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
        lastNames()
    }
}
}
//function mainFunction(){
//for(index =0;  index < name.length; index++){
//    if(name[index].checked && name[index].value === "First Name"){
//        firstNames()
//    }else if(name[index].checked && name[index].value === "Last Name"){
//        lastNames()
//    }
//}
//}
function firstNames(){
    for(index =0;  index < gender.length; index++){
    if(gender[index].checked && gender[index].value === "Female"){
        femaleNames()
    }else if(gender[index].checked && gender[index].value === "Male") {
        maleNames()
    }else if(gender[index].checked && gender[index].value === "Gender Neutral"){
        nonBinary()
    }
}
}
function lastNames(){
    let last_names = ['Adams', 'Johnson', 'Smith', 'Carter','Santos', 'Perez', 'Haddad', 'Woods', 'Brown', 'Reid', 'Jones', 'Reynolds', 'Simpson', 'Brooks', 'Gardner', 'Clancy', 'Banks', 'Dawson','Cooper', 'Winterforth','Samson', 'Murphy','Crimson', 'Butterfield', 'Cartier', 'Benson', 'Johnson', 'Richardson', 'Holland', 'Neumann', 'Woods', 'Cooper', 'Wheaton', 'Douglas', 'Nicks', 'Maxwell', 'Stevenson']
    let last_name = last_names[Math.floor(Math.random()*last_names.length)]
    localStorage.setItem("Last Name", last_name)
    window.location = 'lastName.html'
}
function femaleNames(){
    let female_names = ['Sarah', 'Audrey', 'Samantha', 'Blossom', 'Amy', 'Kelly', 'Kimberly', 'Diana', 'Diane', 'Lisa', 'Justine', 'Betty', 'Anna', 'Sabrina', 'Jaya', 'Brianna', 'Penny', 'Kathrine', 'Paola', 'Cristina', 'Kristen', 'Julia', 'Stacey', 'Tiffany', 'Emma', 'Jane', 'Venus', 'Sarah', 'Kylie', 'Alicia', 'Brittney', 'Nicole', 'Jasmine', 'Courtnee', 'Marvella', 'Patricia','Joy', 'Annabelle', 'Terra', 'Joyce', 'Alexa', 'Dakota','Orlandi','Sierra','Bria','Milly','Ceclia','Amanda', 'Jennifer', 'Tessa', 'Tierra', 'Cantarose', 'Katia', 'Leah', 'Carrie', 'Candance','Rita', 'Nita', 'Sydney', 'Sapphire', 'Pearl', 'Ruby', 'Trisha', 'Brandi', 'Lois' ,'Hailey', 'Cassie', 'Aisha', 'Whitney']
    let female_name = female_names[Math.floor(Math.random()*female_names.length)] 
    localStorage.setItem("Female Name", female_name)       
    window.location = 'femaleName_result.html'
}
function maleNames(){
    let male_names = ['Jake','Braxton', 'Timothy', 'Victor', 'Simon', 'Bradley', 'Millard', 'William', 'Harry', 'Christopher', 'Richard', 'Johnathan', 'Nathan', 'Willard', 'Nicolas', 'Joshua', 'David', 'Luke', 'Peter', 'Brian', 'Carlos', 'Henry', 'Frank', 'Christoph', 'Marco', 'Marcus', 'Nikola', 'Jason', 'Hector', 'Julius', 'Donald', 'Andrew', 'Drew', 'Zayn', 'Garrett', 'Arnold', 'Carl', 'Sebastien', 'Leon', 'Ethan', 'Ezra', 'Jesse', 'Jared', 'Jonah', 'Gideon', 'Asher', 'Gavin', 'Keanu', 'Benjamin', 'Kurt','Todd', 'Philip', 'Mark', 'Dillon','Steven', 'Krish', 'Maxwell', 'Cory','Evan']

    let male_names = ['Jake','Braxton', 'Timothy', 'Victor', 'Simon', 'Bradley', 'Millard', 'William', 'Harry', 'Christopher', 'Richard', 'Johnathan', 'Nathan', 'Willard', 'Nicolas', 'Joshua', 'David', 'Luke', 'Peter', 'Brian', 'Carlos', 'Henry', 'Frank', 'Christoph', 'Marco', 'Marcus', 'Nikola', 'Jason', 'Hector', 'Julius', 'Donald', 'Andrew', 'Drew', 'Zayn', 'Garrett', 'Arnold', 'Carl', 'Sebastien', 'Leon', 'Ethan', 'Ezra', 'Jesse', 'Jared', 'Jonah', 'Gideon', 'Asher', 'Gavin', 'Keanu', 'Benjamin', 'Kurt','Todd', 'Philip', 'Mark', 'Dillon','Steven', 'Krish', 'Maxwell', 'Cory', 'Ernie', 'Armie', 'Arnie','Ernest', 'Justin','Dustin', 'Austin']

    let male_name = male_names[Math.floor(Math.random()*male_names.length)]
    localStorage.setItem("Male Name", male_name)
    window.location = 'maleName_result.html'

}
function nonBinary(){
    let non_binary_names = ['Sam', 'Carter', 'Chris', 'Dylan', 'Julian', 'Cameron', 'Charlie', 'Blake', 'Tatum', 'Riley', 'Pat', 'Parker',' Max', 'Ryan', 'Bailey', 'Kris', 'Murphy', 'Logan', 'Chandler', 'Juno', 'Kelly', 'Alexis', 'Margo', 'Spencer','Marvel', 'Rye', 'Nico', 'Kelsey', 'Amory']
    let non_binary_name = non_binary_names[Math.floor(Math.random()*non_binary_names.length)]
    localStorage.setItem("Non Binary Name",  non_binary_name)
    window.location = 'nonbinaryName_result.html'

}

//function bothfirstLast(){
//    // to print first and last names
//}
