fetch("https://api.disneyapi.dev/character")
.then((res) => {
    return res.json()
})

.then(value => {
    let details = "";
    console.log(value.data)
    
    value.data.map((items) => {
        details += `<div class="card">
        <h3 id="title">${items.name}<h3>
        <img src=${items.imageUrl}  alt="img" id="img" />
        <p>${items.tvShows}</p>
        </div>`
    })

    document.getElementById("details").innerHTML = details;
})
.catch((err) => {
    console.log(err);
})