let day = document.getElementById("Day")
let month = document.getElementById("Month")
let year = document.getElementById("Year")
let gender = document.getElementById("Gender")
let submit = document.getElementById("Submit")

 function AkanName(){
   alert(day.value)
  if(day.value<=0 || day.value>31){
     alert("Josephine says invalid!")
    }
    else{
      if(month.value<=0 || month.value>12){
        alert("Josephine says invalid!")
      }
      else{
        if(year.value<=0 || year.value>2021){
          alert("Josephine says invalid")
        }
        else{
          
          var AkanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
          var AkanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
          var date = new Date(year.value+"/"+month.value+"/"+day.value)
          var display=document.getElementById("display")
          var Akan= date.getDay()
          if(gender.value=="Male"){
           alert("Josephine says your Akan name is"+ AkanMale[Akan])
          }
            else  if(gender.value=="Female"){
              alert("Josephine says your Akan name is"+ AkanFemale[Akan])
            }else{
              alert("Josephine says invalid")
            }
        }
      }
    }
  }
       