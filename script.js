let day = document.getElementById("Day")
let month = document.getElementById("Month")
let year = document.getElementById("Year")
let gender = document.getElementById("Gender")
let submit = document.getElementById("Submit")

 function AkanName(){
   if(day<=0 || day>31){
     alert("Josephine says invalid!")
    }
    else{
      if(month<=0 || month>12){
        alert("Josephine says invalid!")
      }
      else{
        if(year<=0 || year>2021){
          alert("Josephine says invalid")
        }
        else{
          
          var AkanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
          var AkanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
          var date = new Date(year.value+"/"+month.value+"/"+day.value)
          var Akan= date.getDay()
          if(gender.value=="male"){
            
          }

        }
      }
    }
  }
       