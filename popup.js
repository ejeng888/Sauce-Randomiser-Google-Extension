
function getSauce() {
    var numbers = Math.floor(100000 + Math.random() * 200000);
    var test_numbers = 314853;
    document.getElementById("mylink").href = "http://nhentai.net/g/" + numbers;
}

document.getElementById("mylink").addEventListener('click', getSauce);

