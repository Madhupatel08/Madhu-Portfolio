const links=document.querySelectorAll(".alternate-style");
totalLinks=links.length;


function setActiveStyle(color){
  // console.log(color);
  for (var i = 0; i < totalLinks; i++) {
    if(color === links[i].getAttribute("title")){
      links[i].removeAttribute("disabled");
    }else{
      links[i].setAttribute("disabled","true");
    }
  }
}
// body skin
const bodySkin=document.querySelectorAll(".body-skin"),
totalBodySkin=bodySkin.length;
for( let i=0;i<totalBodySkin;i++){
  bodySkin[i].addEventListener("change",function(){
    // console.log(this.value);
    if(this.value==="dark"){
      document.body.className="dark";
    }else{
      document.body.className="light";
    }
  })
}
document.querySelector(" .toggle-style-switcher").addEventListener("click",() =>{
  // console.log("hi");
  document.querySelector(".style-switcher").classList.toggle("open");
})

// Aside navbar
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;

  for(let i=0; i<totalNavList;i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
      for(let j=0;j<totalNavList;j++){
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
    })
  }

  function showSection(element){

    for(let i=0;i<totalSection;i++){
      allSection[i].classList.remove("active");
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active");
  }


// open inbox
const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");

navTogglerBtn.addEventListener("click",() => {
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn(){
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
}
