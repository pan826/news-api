const API_KEY = "9078b900d9b14ea5b594d9a32b842993";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload(){
window.location.reload();
}

async function fetchNews(query) {
const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
const data = await res.json();
bindData(data.articles);
} 

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article)=> {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');
    

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;
    
    const date = new Date(article.publishedAt).toLocaleString("en-US", {
      timeZone: "Asia/jakarta",
    });

    newsSource.innerHTML = `${article.source.name} . ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url,"_blank");
    })
}

// nav bar click enven start from here//
let curSelectedNav = null;
function onNavItemClick(id){
fetchNews(id);
const navItem = document.getElementById(id);
curSelectedNav?.classList.remove('active');
curSelectedNav = navItem;
curSelectedNav.classList.add('active');

}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-text');

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
});


document.getElementById('subscribe-button').addEventListener('click', function() {
    alert('Thank you for subscribing!');
    // Here you can add more functionality, like opening a subscription form
});

document.getElementById("facebook").addEventListener("click", function() {
window.location = "https://www.facebook.com/ronniy.roy.52";
})

document.getElementById("instagram").addEventListener("click", function(){
    window.location = "https://www.instagram.com/f_ias_pankaj/";
    window.open(newTab);
})

document.getElementById("twitter").addEventListener("click", function(){
    window.location = "https://www.twitter.com";
})

document.getElementById("youtube").addEventListener("click", function(){
    window.location = "https://www.youtube.com";
})

document.getElementById("linkding").addEventListener("click", function(){
    window.location = "https://www.linkdin.com";
    
})

// scripts.js

 
function loadGoogleTranslate () {
    new google.translate.TranslateElement("google_element");
};