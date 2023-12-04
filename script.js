const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=574474fa2c17443ba48b249160bf0800";
const cards=document.querySelector(".cards");



async function request(url){
    try{
        const response=await fetch(url);
        const data=await response.json();
        return data;
    }
    catch{
        console.log("eror")
    }

}
// const data=request(url).then(manish=>console.log(manish))
request(url).then(data=>{
    data.articles.forEach( post=> {
        cards.innerHTML +=`                    <div class="card">
        <div class="image">
            <img src="${post.urlToImage}" alt="Default News Image">
        </div>
        <div class="information">
            <div>
                <p class="title">${post.title}</p>
                <p class="description">${post.description}</p>
                <p class="time">
                    <span>${post.publishedAt.replace("Z"," ").split('T')[1]}</span>
                    <span>${post.publishedAt.replace("Z"," ").split('T')[0]}</span>
                </p>
            </div>
            <div class="other">
                <span class="source">${post.source.name}</span>
                <a class="url" href="${post.url}" target="_blank">Read Article <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </div>`
        
    });
})