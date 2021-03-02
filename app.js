console.log("Let's get this party started!");

let searchInput = document.querySelector("#gifForm");
const $gifSpace = $("#pictures");

async function getGif(search) {
    let response = await axios.get("https://api.giphy.com/v1/gifs/search?api_key=7mDjz5rjM8KfZ81kO0uUVdNPrLD7iWvv&q=" + search + "&limit=1&offset=0&rating=g&lang=en")
   addGif(response.data);
}
function addGif(data) {
    var image = new Image();
    image.src = data.data[0].images.original.url;
    $gifSpace.append(image);
}

searchInput.addEventListener("click", function (e) {
    e.preventDefault();
    let searchTerm = "";
    if(e.target.id == "searchButton") {
        searchTerm = document.getElementById("searchText").value;
        getGif(searchTerm);
    }
})

searchInput.addEventListener("click", function (e) {
    e.preventDefault();
    if(e.target.id == "removeButton") {
        $gifSpace.empty();
    }
})