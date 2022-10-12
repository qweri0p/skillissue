import { about } from "./about";

export function initialize() {
    const app = document.querySelector("#app");
    const title = document.createElement('h1');
    const innertitle = document.createElement("a")
    innertitle.href = location.toString();
    innertitle.innerHTML = 'SkillIssue'
    title.append(innertitle);
    title.setAttribute('id', 'header')
    const startbutton = document.createElement("button");
    startbutton.innerHTML = "Start";
    startbutton.style.fontSize = '5vmin'
    startbutton.onclick = function() {
        startbutton.setAttribute('class', 'hidden');
        setTimeout(() =>{
            startbutton.remove()
            app?.append(title)
        }, 1000);
        about()
    }; 
    app?.append(startbutton);
}