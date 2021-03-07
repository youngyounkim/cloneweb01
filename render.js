
let liList = [
    { name : "SHOP", sub : ["WORDPRESS", "SQUARESPACE"], link : "#"},
    { name : "INSTALLATION", sub : ["WORDPRESS", "SQUARESPACE"], link : "#"},
    { name : "ABOUT", link : "#"},
    { name : "SHOWCASE", link : "#"},
    { name : "BLOG", link : "#"}    
]

render = () => {
    const ul = document.getElementById("menu");
    for(let el of liList){
        let li = document.createElement("li");
        let a = document.createElement("a")
        a.textContent = el.name;
        a.href = el.link;
        li.appendChild(a);
        li.classList.add("menuLi")
        if(el.sub){
            let subul = document.createElement("ul");
            subul.classList.add("subUl")
            for(let i = 0; i < el.sub.length; i++) {
                let subLi = document.createElement("li");
                let suba = document.createElement("a");
                suba.href = el.link;
                suba.textContent = el.sub[i];
                subLi.appendChild(suba);
                subul.appendChild(subLi);
            }
            li.appendChild(subul);
        }
        ul.appendChild(li);
    }
}
const ul1 = document.getElementsByClassName("hideMenu");
const ul = ul1[0];
sideRender = () =>{
    for(let el of liList){
        let li = document.createElement("li");
        let a = document.createElement("a")
        a.textContent = el.name;
        a.href = el.link;
        li.appendChild(a);
        //li.classList.add("menuLi")
        if(el.sub){
            let subul = document.createElement("ul");
            subul.classList.add("subUl")
            for(let i = 0; i < el.sub.length; i++) {
                let subLi = document.createElement("li");
                let suba = document.createElement("a");
                suba.href = el.link;
                suba.textContent = el.sub[i];
                subLi.appendChild(suba);
                subul.appendChild(subLi);
            }
            li.appendChild(subul);
        }
        ul.appendChild(li);
    }
}

document.getElementsByClassName("listIcon")[0].addEventListener("click", () => {
    ul.classList.add("on")
})
document.getElementsByClassName("clear")[0].addEventListener("click", () => {
    ul.classList.remove("on")
})

render();
sideRender();