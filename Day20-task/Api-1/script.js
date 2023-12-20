  fetch('https://digimon-api.vercel.app/api/digimon')
   .then((res) => {
    return res.json();
 })
   .then((item) => {

    console.log(item);

    let datas ="";

    item.map((value) => {

        datas += ` <div class="card">
        <h1 id="title">Name:${value.name}</h1>
        <p id="level">Level:${value.level}</p>
        <p id="img">Img:${value.img}</p>
        </div>`
    })

    document.getElementById("list-1").innerHTML = datas;
   })
   .catch((err) => {
    console.log(err);
   });
 
