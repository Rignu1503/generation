// fetch("https://dragonball-api.com/api/characters")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.items[0].description);
//   }).catch((error) => {
//     console.log("Error:", error.message,);
//   });

async function obtenerPersonaje() {
  try {
    const response = await fetch("https://dragonball-api.com/api/characters");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

obtenerPersonaje()