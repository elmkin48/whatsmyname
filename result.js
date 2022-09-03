window.addEventListener("load", function(){
                               const lastname = localStorage.getItem("Last Name")
                               document.getElementById('last-name').innerHTML += lastname
                               })
window.addEventListener("load", function(){
                                const femalename = localStorage.getItem("Female Name") 
                                document.getElementById('female-name').innerHTML += femalename
                                })
 window.addEventListener("load", function(){
                                const malename = localStorage.getItem("Male Name")
                                document.getElementById('male-name').innerHTML += malename
                            })
 window.addEventListener("load", function(){
                                const nonbinaryname = localStorage.getItem("Non Binary Name")
                                document.getElementById('nonbinary-name').innerHTML += nonbinaryname
                            })