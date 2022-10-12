import { detectLanguage } from '../language';
import message from './text.json'
export function about() {
    const content = document.querySelector(".content");
    const tempdiv = document.createElement("div")
    content?.append(tempdiv)
    const aboutText = document.createElement("p");
    aboutText.innerHTML=message.about[detectLanguage()];
    const continuebtn = document.createElement("button");
    continuebtn.innerHTML = message.accept[detectLanguage()];
    continuebtn.setAttribute('id', 'understood');
    continuebtn.addEventListener('click', () =>{
        tempdiv.setAttribute('class', 'hidden');
        setTimeout(() =>{
            explanation()
        }, 1000)
    });
    setTimeout(() =>{
        tempdiv.append(aboutText)
        setTimeout(() => {
            tempdiv.append(continuebtn);
        }, 1000)
    }, 3000);
}

function explanation() {
    alert(message.ad[detectLanguage()]);
    location.href = "https://i.redd.it/vljnc3cygex11.jpg"
}