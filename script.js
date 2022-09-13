// Sets last used text from local user memory
document.querySelector("textarea").value = window.localStorage.getItem('text');

// Function will be called when user makes any input in textarea
document.querySelector("textarea").oninput = function(){ 

    // Variables
    let wordsCount = 0;
    var temp = document.querySelector("textarea").value

    // If textarea is empty, this sets wordsCount to 0. 
    if(temp.trim().split(/\s+/)[0] == ""){ wordsCount = 0; }
    else{        wordsCount = temp.trim().split(/\s+/).length;}

    // Sets the values, to be visible to the user as text 
    document.querySelector("#words-count").innerHTML = "Words: &nbsp" + wordsCount;
    document.querySelector("#characters-count").innerHTML = "Characters: &nbsp" + temp.length;
    document.querySelector("#spaces-count").innerHTML = "Spaces: &nbsp" + (temp.split(" ").length - 1);
    document.querySelector("#characterswspaces-count").innerHTML = "Characters without spaces: &nbsp;" + parseInt(temp.length  - (temp.split(" ").length - 1));

    // Saves to local user memory writen text
    window.localStorage.setItem('text' , temp);
}