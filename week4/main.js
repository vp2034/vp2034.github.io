var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://vp2034.github.io/week4/cities1.json');
ourRequest.onload = function() {
    console.log(ourRequest.responseText); 
};
ourRequest.send();