const btn = document.getElementById("btn");
const body = document.getElementById("body");


btn.addEventListener("click",() =>{ 
    const pokemon = document.getElementById("pokemon");
    const description = document.getElementById("description");
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon.value}`)
        .then((res)=>res.json())
        .then((res)=>{ 
            console.log(res);
            var card = document.createElement("DIV");
            card.classList = "card";
            var h3 = document.createElement("H3");
            var title = document.createTextNode(res.name);
            h3.appendChild(title);
            card.appendChild(h3);
            if(res.types.length == 1){
                var p = document.createElement("P");
                var types = document.createTextNode(res.types[0].type.name)
                p.className = res.types[0].type.name;
                p.appendChild(types);
                card.appendChild(p)
            } else if(res.types.length == 2){
                var p1 = document.createElement("P");
                var p2 = document.createElement("P");
                var type1 = document.createTextNode(res.types[0].type.name)
                type2 = document.createTextNode(res.types[1].type.name)
                p1.className = res.types[0].type.name;
                p2.className = res.types[1].type.name;
                p1.appendChild(type1);
                p2.appendChild(type2);
                card.appendChild(p1)
                card.appendChild(p2)
            }


            fetch(res.sprites.front_default)
              .then((res)=>{
                var imgContainer = document.createElement("DIV");
                imgContainer.classList = "imgContainer";
                
                var img = new Image(200,200);
                img.src = res.url;
                imgContainer.appendChild(img);
                card.appendChild(imgContainer);
                body.appendChild(card);
              })
            })
        
    }
)



