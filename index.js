//https://api.blablagues.net/?rub=blagues

const header = document.getElementById("header");
const text = document.getElementById("content");

function getJoke() {
    fetch ("https://api.blablagues.net/?rub=blagues")
        .then((res) => res.json())
        .then((data ) => {
            const content = data.data.content;
            console.log(content);

            header.textContent = content.text_head
            text.textContent = 
                    content.text !== ""
                ? content.text//si vrai
                : content.text_hidden;//si faux
        });
}
getJoke();
document.querySelector("body > div > div > i").addEventListener("click", getJoke);

//document.querySelector("body > div > div")