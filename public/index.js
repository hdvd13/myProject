
const root = document.querySelector(".root")
const stacks = document.querySelector(".stacks")
const input = document.querySelector("input");
const btn = document.querySelector(".btn")



const createElement = (tech) => {

    //Create containers 
    const divContainer = document.createElement("div");
    const footerContainer = document.createElement("div");
    const titleContainer = document.createElement("h2");
    const descContainer = document.createElement("p");
    const founderContainer = document.createElement("p");
    const yearContainer = document.createElement("p");

    //Assign techs into container's HTML
    titleContainer.innerHTML = tech.tech;
    descContainer.innerHTML = tech.desc;
    founderContainer.innerHTML = tech.founder
    yearContainer.innerHTML = tech.year

    //append or attach containers to main containers/ parent container
    divContainer.appendChild(titleContainer)
    divContainer.appendChild(descContainer)
    footerContainer.appendChild(founderContainer);
    footerContainer.appendChild(yearContainer)

    //Add class names for css
    descContainer.classList.add("desc")
    footerContainer.classList.add("divFooter");
    divContainer.classList.add("techContainer")
    

    //attach main/parent container to stacks
    divContainer.appendChild(footerContainer)
    stacks.appendChild(divContainer)
}



//fetch data
let data;

const result = async () => {
    data = await fetch("http://localhost:3000/techs/")
    .then(res=> res.json())

    data?.map(tech => {
        createElement(tech)
    })
}

result()



//Search tech
input.addEventListener("input", (e)=>{
    const value = e.target.value;

    const filtered = data.find(item => item.tech.toLowerCase().includes(value)  )

    if(value){
        stacks.innerHTML = ''
        createElement(filtered)
    } 
    
    else{
        stacks.innerHTML = ''
        data?.map(tech => {
            createElement(tech)
        })
    }
})



//Toggling description
btn.addEventListener("click", ()=>{
    const toggleDescription = document.querySelectorAll(".desc");

    toggleDescription.forEach(el =>{
        if(el.classList.contains("toggle")){
            el.classList.remove("toggle")
            btn.innerHTML = "Hide Descriptions"
        }else{            
            el.classList.add("toggle")
            btn.innerHTML = "Show Descriptions"
        }
    })
})