import { detectLanguage } from "../language";
import message from './text.json'
import { about } from "./about";

export function initialize() {
    const app = document.querySelector("#app");
    const title = document.createElement('h1');
    const innertitle = document.createElement("a")
    innertitle.href = location.toString();
    innertitle.innerHTML = 'SkillIssue'
    title.append(innertitle);
    title.setAttribute('id', 'header')
    const langbtn = document.createElement('button')
    langbtn.setAttribute('id', 'langbtn')
    langbtn.onclick = changeLang;
    langbtn.innerHTML= message.chlang[detectLanguage()]
    const startbutton = document.createElement("button");
    startbutton.innerHTML = "Start";
    startbutton.style.fontSize = '5vmin'
    startbutton.onclick = function() {
        startbutton.setAttribute('class', 'hidden');
        langbtn.setAttribute('class', 'fadeaway')
        setTimeout(() =>{
            startbutton.remove()
            langbtn.remove()
            app?.append(title)
        }, 1000);
        about()
    }; 
    app?.append(startbutton);
    document.querySelector("#footer")?.append(langbtn)
}

function changeLang() {
    const url = new URL(location.toString())
    const origin = url.origin
    if (detectLanguage() === 'nl') {
        location.href = origin + "?lang=en"
    } else {
        location.href = origin + "?lang=nl"
    }
}