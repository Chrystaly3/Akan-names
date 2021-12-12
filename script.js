let day = document.getElementById("Day")
let month = document.getElementById("Month")
let year = document.getElementById("Year")
let Male = document.getElementById("Male")
let Female = document.getElementById("Female")
let submit = document.getElementById("Submit")

 function AkanName(){
   
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
          let gender =""
            if(Male.checked){
                gender = "Male"
            }
            else if(Female.checked){
                gender = "Female"
            }
                    
          var AkanMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
          var AkanFemale = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
          var date = new Date(year.value+"/"+month.value+"/"+day.value)
          var display=document.getElementById("display")
          var Akan= date.getDay()
          if(gender=="Male"){
           alert("Josephine says your Akan name is "+ AkanMale[Akan])
          }
            else  if(gender=="Female"){
              alert("Josephine says your Akan name is "+ AkanFemale[Akan])
            }else{
              alert("Josephine says invalid")
            }
        }
      }
    }
  }
       