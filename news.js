// Initialize the news api parameters
let source = 'bbc-news';
let apikey = 'a005c05895e14ff3981eaf7e191ecc01';


//Grabbing the news container
let newsCon = document.getElementById('content');


//Creating an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apikey}`, true);


//What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card my-2 mx-2" id="heading${index}" style="width: 18rem;">
                            <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                            <div class="card-body" style="background-color: rgb(232, 232, 232);">
                                <h5 class="card-title">${element["title"]}</h5>
                                <p class="card-text">${element["content"]}</p>
                                <a href="${element["url"]}" target="_blank" class="btn btn-primary">Read more</a>
                            </div>
                        </div>`;

            newsHtml += news;
        });
        newsCon.innerHTML = newsHtml;
    }
    else
        console.log("Some error occured!");
}
xhr.send();


// Search Bar Js Starts
let search = document.getElementById('searchText');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('card');
    Array.from(noteCard).forEach(function (element) {
        let cardText = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        let msg = document.getElementById('message');
        if (cardText.includes(inputVal)) {
            element.style.display = "block";
            msg.innerHTML = "";
        }
        else {
            element.style.display = "none";
            // msg.innerHTML = "<h6>No match found! Try some other keyword.</h6>";
        }
    })
})
// Search Bar Js Ends


// Search Button Js Starts
let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener("click", function () {
    let inputVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('card');
    Array.from(noteCard).forEach(function (element) {
        let cardText = element.getElementsByTagName("h5")[0].innerText.toLowerCase();
        let msg = document.getElementById('message');
        // element.preventDefault();
        if (cardText.includes(inputVal)) {
            element.style.display = "block";
            msg.innerHTML = "";
        }
        else {
            element.style.display = "none";
            msg.innerHTML = "<h6>No match found! Try some other keyword.</h6>";
        }
    })
})
// Search Button Js Ends

