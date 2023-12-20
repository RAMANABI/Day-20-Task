 fetch(`https://api.imgflip.com/get_memes`)
.then((res) => {
 return res.json();
})
.then((item) => {
 console.log(item.data.memes);

let datas ='';
item.data.memes.map((value) => {

    datas +=  ` <div class="card">
 <h1 id="title">Name:${value.name}</h1>
 <p id="id">id--${value.id}</P>
<img  src=${value.url} alt="img"/>
</div>`
 })
 document.getElementById("Details").innerHTML = datas;
})
.catch((err) => {
 console.log(err);
})









   