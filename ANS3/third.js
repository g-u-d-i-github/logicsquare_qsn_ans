let Cafes=[]
let Places=[]
let table=document.querySelector("table")
const getData=async()=>{
    let result1=await fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json")
    let result2=await fetch("https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json")
     result1=await result1.json()
     Cafes=result1.cafes
    result2=await result2.json()
    Places=result2.places
    console.log(Cafes,Places)
//     "id": "jahgde7wgdiau8ewsahgosd",
// "street_no": "60H",
// "locality": "Solomos Island Road",
// "postal_code": "20688",
// "lat": "36.7783 N",
// "long": "119.4179 W"

    let row1=table.insertRow(0)
    let cell1=row1.insertCell(0)
    let cell2=row1.insertCell(1)
    let cell3=row1.insertCell(2)
    let cell4=row1.insertCell(3)
    let cell5=row1.insertCell(4)
    let cell6=row1.insertCell(5)
    cell1.innerHTML="ID"
    cell2.innerHTML="CAFES NAME"
    cell3.innerHTML="STREET_NO"
    cell4.innerHTML="POSTAL_CODE"
    cell5.innerHTML="LOCALITY"
    cell6.innerHTML="LAT-LONG"

    for(let i=0;i<Cafes.length;i++)
    {
        for(let j=0;j<Places.length;j++)
        {
            if(Cafes[i].location_id == Places[j].id){
                let row1=table.insertRow(i+1)
                let cell1=row1.insertCell(0)
                let cell2=row1.insertCell(1)
                let cell3=row1.insertCell(2)
                let cell4=row1.insertCell(3)
                let cell5=row1.insertCell(4)
                let cell6=row1.insertCell(5)
                 cell1.innerHTML=`${Cafes[i].location_id}`
                 cell2.innerHTML=`${Cafes[i].name}`
                 cell3.innerHTML=`${Places[j].street_no}`
                 cell4.innerHTML=`${Places[j].postal_code}`
                 cell5.innerHTML=`${Places[j].locality}`
                 cell6.innerHTML=`${Places[j].lat}   ${Places[j].long}`
            }
        }
    }

}


const fetchCafe=()=>{
   table.innerHTML=""
   let searchTerm=document.getElementById("search").value
    if(!searchTerm)
    {
        getData()
        return;
    }
   let row1=table.insertRow(0)
   let cell1=row1.insertCell(0)
   let cell2=row1.insertCell(1)
   let cell3=row1.insertCell(2)
   let cell4=row1.insertCell(3)
   let cell5=row1.insertCell(4)
   let cell6=row1.insertCell(5)
   cell1.innerHTML="ID"
   cell2.innerHTML="CAFES NAME"
   cell3.innerHTML="STREET_NO"
   cell4.innerHTML="POSTAL_CODE"
   cell5.innerHTML="LOCALITY"
   cell6.innerHTML="LAT-LONG"
    
    for(let i=0,k=0;i<Cafes.length;i++)
       {
        let cafeName=Cafes[i].name.toLowerCase().includes(searchTerm.toLowerCase())
        if(cafeName){
            for(let j=0;j<Places.length;j++)
            {
                if(Cafes[i].location_id==Places[j].id)
                {
                    
                    console.log(Cafes[i].name)
                    let row1=table.insertRow(k+1)
                    k++;
                    let cell1=row1.insertCell(0)
                let cell2=row1.insertCell(1)
                let cell3=row1.insertCell(2)
                let cell4=row1.insertCell(3)
                let cell5=row1.insertCell(4)
                let cell6=row1.insertCell(5)
                 cell1.innerHTML=`${Cafes[i].location_id}`
                 cell2.innerHTML=`${Cafes[i].name}`
                 cell3.innerHTML=`${Places[j].street_no}`
                 cell4.innerHTML=`${Places[j].postal_code}`
                 cell5.innerHTML=`${Places[j].locality}`
                 cell6.innerHTML=`${Places[j].lat}   ${Places[j].long}`

                    break;
                }
            }
            
        }
       }
  
}