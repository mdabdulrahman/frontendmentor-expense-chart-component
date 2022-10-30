let days={ 
 "mon":document.querySelector("#mon"),
 "tue":document.querySelector("#tue"),
 "wed":document.querySelector("#wed"),
 "thu":document.querySelector("#thu"),
 "fri":document.querySelector("#fri"),
 "sat":document.querySelector("#sat"),
 "sun":document.querySelector("#sun"),
 "mon-amount":document.querySelector("#mon-amount"),
 "tue-amount":document.querySelector("#tue-amount"),
 "wed-amount":document.querySelector("#wed-amount"),
 "thu-amount":document.querySelector("#thu-amount"),
 "fri-amount":document.querySelector("#fri-amount"),
 "sat-amount":document.querySelector("#sat-amount"),
 "sun-amount":document.querySelector("#sun-amount"),
}
let price=async()=>{
let data=await fetch("data.json")
let p=await data.json().then(
    (v)=>{
        let h=v[0].amount

        v.forEach(e => {
          if(e.amount>h){
            h=e.amount
          }  
        });
        v.map((value)=>{

            days[value.day].style.height=`${value.amount*3}px`
          let am=`${value.day}-amount`
            days[am].innerHTML=`$${value.amount}`
          if(h===value.amount){
            days[value.day].style.backgroundColor="#76b5bc"
          }
        })
    }
)
}
price()