export function initialize() {
    const app = document.querySelector("#app");
    const title = document.createElement('h1');
    title.innerHTML = 'SkillIssue.nl'
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
    }; 
    app?.append(startbutton);
  }