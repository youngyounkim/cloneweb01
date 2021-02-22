

let liList = [
    { name : "SHOP", sub : ["WORDPRESS", "SQUARESPACE"]},
    { name : "INSTALLATION", sub : ["WORDPRESS", "SQUARESPACE"]},
    { name : "ABOUT"},
    { name : "SHOWCASE"},
    { name : "BLOG"}    
]

render = () => {
    const ul = document.getElementById("menu");
    console.log(ul)
    for(let el of liList){
        let li = document.createElement("li");
        li.textContent = el.name;        
        if(el.sub){
            let subul = document.createElement("ul");
            subul.classList.add("subUl")
            for(let i = 0; i < el.sub.length; i++) {
                let subLi = document.createElement("li");
                subLi.textContent = el.sub[i];
                subul.appendChild(subLi);
            }
            li.appendChild(subul);
        }
        ul.appendChild(li);
    }
}
render();