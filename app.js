let url = "http://universities.hipolabs.com/search?country=";



let btn = document.querySelector("#btn");

let ol=document.querySelector("#list");

btn.addEventListener("click",async ()=>{
    let h3=document.querySelector("h3");
    ol.innerText="";
    h3.innerText="";
    let search=document.querySelector("#search");
    let country=search.value;

    if(country==""){
        ol.innerText="No input !"
    }
    else{
        let colleges=await getColleges(country);

    h3.innerText="Universities in "+country;

    showColleges(colleges);


    }
    
});

let search=document.querySelector("#search");

search.addEventListener("keypress", async (event)=> {
    if (event.key === "Enter") {
        let h3=document.querySelector("h3");
        ol.innerText="";
        h3.innerText="";
        let search=document.querySelector("#search");
        let country=search.value;
    
        if(country==""){
            ol.innerText="No input !"
        }
        else{
            let colleges=await getColleges(country);
    
        h3.innerText="Universities in "+country;
    
        showColleges(colleges);
    
    
        }
    }
  });



let showColleges = (colleges)=>{
    
    
    if(colleges.length==0)
        ol.innerText="No colleges found !";    
    else{
        for(col of colleges){
            // console.log(col.web_pages[0]);
            let li=document.createElement("li");
            li.innerText=col.name+" "; 
            
            let a=document.createElement("a");
            a.innerHTML="&#129527;";
            a.href=col.web_pages[0];
            a.target="_blank";

            li.appendChild(a);
            
    
            ol.appendChild(li);
    
        }
    }
    

}


let getColleges = async (country)=>{
    try{
        let res=await axios.get(url+country);
        return res.data;

    }catch(e){
        console.log(e);
    }

}
getColleges();