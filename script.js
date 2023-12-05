const baseurl="https://newsapi.org/v2";
const key="&apiKey=574474fa2c17443ba48b249160bf0800";
const cards=document.querySelector(".cards");
const category=document.querySelector(".category");
const span=document.querySelectorAll(".category span");
var image="https://media.istockphoto.com/id/503149471/photo/blank-daily-newspaper.jpg?s=612x612&w=0&k=20&c=fdeuNjXj7YRdPSFVQWciJBsAO8sriI2H5dWsVSl8gQw=";


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

function getall(url){
request(url).then(data=>{
    data.articles.forEach( post=> {
        cards.innerHTML +=`                    <div class="card">
        <div class="image">
            <img src="${post.urlToImage ? post.urlToImage :image}" alt="Default News Image">
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
}
category.addEventListener('click',(event)=>{
    if (event.target.tagName === "SPAN"){
        cards.innerHTML="";
        span.forEach((item) => {
            item.classList.remove("active")
        });
        event.target.classList.add("active"); 
        const link=event.target.dataset.id;
        getall(baseurl+link+key);
    }
})


getall(baseurl+"/top-headlines?country=us&category=business"+key)