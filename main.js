window.onload = function () {
    const url = document.getElementById('link');
    url.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        submit();
        }
    });
}
function getLink(){
    return document.getElementById('link').value;
}
function getId(link){
    try{
        return link.match(/watch\?v=([^&]+)*/)[1];
    }catch(e){
        return false;
    }
}
function writeResult(v){
    document.getElementById('result').innerHTML = v;
}

function copyLink() {
    let result = document.getElementById('result'); 
    let resultText = result.textContent; 
    copyText(resultText); 
}
function copyText(text) {
    navigator.clipboard.writeText(text);
}
  
function linkify(l){
    return '<a href="' + l + '">' + l + '</a>'; 
}
function submit(){
    const id = getId(getLink());
    if(!id) return;

    let res = '';
    res += linkify('https://www.youtube.com/embed/' + id);
    writeResult(res);
    copyLink();
    document.getElementById('submit').innerHTML = 'Link Copiado!';
    document.getElementById('submit').style.background = '#7266ba';
}