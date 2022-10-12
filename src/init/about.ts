import { detectLanguage } from '../language';
import message from './text.json'
export function about() {
    const content = document.querySelector("#content");
    const aboutText = document.createElement("p");
    aboutText.innerHTML=message.about[detectLanguage()];
    const continuebtn = document.createElement("button");
    continuebtn.innerHTML = message.accept[detectLanguage()];
    continuebtn.setAttribute('id', 'understood');
    continuebtn.addEventListener('click', () =>{
        continuebtn.setAttribute('id', 'hidden');
        aboutText.setAttribute('id', 'fadeaway')
        setTimeout(() => {
            continuebtn.remove()
            aboutText.remove()
            explanation()
        }, 1000)
    });
    setTimeout(() =>{
        content?.append(aboutText)
        setTimeout(() => {
            content?.append(continuebtn);
        }, 1000)
    }, 4000);
}

function explanation() {
    alert(message.ad[detectLanguage()]);
    location.href = "https://i.redd.it/vljnc3cygex11.jpg"
}