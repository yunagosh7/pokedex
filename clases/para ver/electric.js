const data = fetch("https://pokeapi.co/api/v2/type/")
               .then((res)=> res.json())
               .then((res)=>console.log(res))