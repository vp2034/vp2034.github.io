var btn = document.getElementById("btn"); 
btn.addEventListener("click", function(){


    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://vp2034.github.io/week4/cities1.json');
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]); 
    };
    ourRequest.send();
})

function renderHTML(data){
    var htmlString = "this is a test"; 
    cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}