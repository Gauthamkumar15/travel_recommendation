var submitForm = function(event) {
    event.preventDefault();
};

var homeDiv = document.getElementById("home");
var aboutDiv = document.getElementById("about");
var contactDiv = document.getElementById("contact");
var search = document.getElementById("search");

var turnHomeOn =function() {
    search.classList.remove('search-not-visible');
    homeDiv.classList.add("home-visible");
    homeDiv.classList.remove("home-not-visible");
    aboutDiv.classList.add("about-not-visible");
    aboutDiv.classList.remove("about-visible");
    contactDiv.classList.add("contact-not-visible");
    contactDiv.classList.remove("contact-visible");
};

var turnAboutOn =function() {
    search.classList.add('search-not-visible');
    homeDiv.classList.add("home-not-visible");
    homeDiv.classList.remove("home-visible");
    aboutDiv.classList.add("about-visible");
    aboutDiv.classList.remove("about-not-visible");
    contactDiv.classList.add("contact-not-visible");
    contactDiv.classList.remove("contact-visible");
};

var turnContactOn =function() {
    search.classList.add('search-not-visible');
    homeDiv.classList.add("home-not-visible");
    homeDiv.classList.remove("home-visible");
    aboutDiv.classList.add("about-not-visible");
    aboutDiv.classList.remove("about-visible");
    contactDiv.classList.add("contact-visible");
    contactDiv.classList.remove("contact-not-visible");
};

var searchTerm = "";

var changeSearchTerm = () => {
    searchTerm = document.getElementById("searchTerm").value;
}

var clearSearch = () => {
    document.getElementById("searchTerm").value = "";
    searchTerm = "";
    let container = document.getElementById("recommendedDiv");
        container.innerHTML = "";
}

var requiredJsonData;

var getRecommendedData  = (jsonData) => {
    let array = [];
    requiredJsonData = jsonData;
    Object.keys(jsonData).forEach(key => {
        if (searchTerm == "") {
            
        }
        else if(key.toLowerCase().includes(searchTerm.toLowerCase())) {
            array.push(key);
        }
    });
    return array;
}

var displayRecommendedPlaces = (data) => {
    var container = document.getElementById("recommendedDiv");
        container.innerHTML = "";
    if (data == []) {
        
    }else {
    for(let i = 0;i<data.length;i++) {
        if (data[i] == 'countries') {
                for (let k = 0; k < requiredJsonData.countries.length; k++) {
                    for (let l = 0; l < requiredJsonData.countries[k].cities.length;l++) {
                        let div = document.createElement('div');
                        let img = document.createElement('img');
                        let span = document.createElement('span');
                        let p = document.createElement('p');
                        
                        div.style.cssText = "margin:15px;width:400px;height:250px;display:flex;flex-direction:column;align-items:center;background-color:rgba(0, 0, 0,0.5);padding:10px";
                        img.src = requiredJsonData.countries[k].cities[l].imageUrl;
                        img.style.cssText = "width:200px;height:150px;object-fit:contain;margin-bottom:10px;";
                        span.textContent = requiredJsonData.countries[k].cities[l].name;
                        span.style.cssText = "margin-bottom:10px;"
                        p.textContent = requiredJsonData.countries[k].cities[l].description;
                        div.appendChild(img);
                        div.appendChild(span);
                        
                        div.appendChild(p);
                        container.appendChild(div);
                    }
                }
        }
        else {
            for (let j = 0; j < requiredJsonData[data[i]].length; j++) {
                let div = document.createElement('div');
                let img = document.createElement('img');
                let span = document.createElement('span');
                let p = document.createElement('p');
                
                div.style.cssText = "margin:15px;width:400px;height:250px;display:flex;flex-direction:column;align-items:center;background-color:rgba(0, 0, 0,0.5);padding:10px";
                img.src = requiredJsonData[data[i]][j].imageUrl;
                img.style.cssText = "width:200px;height:150px;object-fit:contain;margin-bottom:10px;";
                span.textContent = requiredJsonData[data[i]][j].name;
                span.style.cssText = "margin-bottom:10px;"
                p.textContent = requiredJsonData[data[i]][j].description;
                div.appendChild(img);
                div.appendChild(span);
                
                div.appendChild(p);
                container.appendChild(div);
            }
        }
    }
    }
}

var fetchData = function() {
    fetch("travel_recommendation_api.json")
    .then(response => {
        return response.json()
    })
    .then(json => {
        return getRecommendedData(json)
    }) 
    .then(keys => {
        displayRecommendedPlaces(keys)
    })
    .catch(error => {
        console.log(error);
    })
}


turnHomeOn();