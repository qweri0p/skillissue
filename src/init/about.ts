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
    setTimeout(() =>{
        tempdiv.append(aboutText)
        setTimeout(() => {
            tempdiv.append(continuebtn);
            setTimeout(() => {
                tempdiv.setAttribute('class', 'hidden')
                setTimeout(() => {
                    tempdiv.remove()
                }, 1000);
            }, 10000);
        }, 1000)
    }, 3000);
}