'use strict';

const langEl = document.querySelector('.langWrap');
const languageCh = document.querySelectorAll('a');

const buttonEng = document.getElementById('buttonEng');
const buttonSp = document.getElementById('buttonSp');

const titleWano = document.getElementById('titleWano');
const wanoDescription = document.getElementById('wanoDescription');
const IwasMadeWanoTitle = document.getElementById('IwasMadeWanoTitle');
const IwasMadeWanoInfo = document.getElementById('IwasMadeWanoInfo');
const inviteBttn = document.getElementById('inviteBttn');

languageCh.forEach(r => {
    r.addEventListener('click', () => {
        const attr = r.getAttribute('language');
        titleWano.textContent = changeLanguage[attr].titleWano;
        wanoDescription.textContent = changeLanguage[attr].wanoDescription;
        IwasMadeWanoTitle.textContent = changeLanguage[attr].IwasMadeWanoTitle;
        IwasMadeWanoInfo.textContent = changeLanguage[attr].IwasMadeWanoInfo;
        inviteBttn.textContent = changeLanguage[attr].inviteBttn;
    })
})

let changeLanguage = {
    "spanish": {
        "titleWano": "Hola, Soy Wano",
        "wanoDescription": "¡Hola! Estoy aquí para hacer que tu experiencia en Discord sea mucho más interactiva e informativa. Mi función principal es proporcionar una lista de comandos, interactuar con contigo en conversaciones interesantes y útiles utilizando Open AI, administrar el sistema de bienvenida en tu servidor y dar la bienvenida a nuevos miembros.",
        "IwasMadeWanoTitle": "¿De qué estoy hecho?",
        "IwasMadeWanoInfo": "Fui creado con las siguientes tecnologías y bibliotecas para hacer que tu experiencia en Discord sea mucho más interactiva e informativa.",
        "inviteBttn": "INVITAME",
    },
    "english": {
        "titleWano": "Hi, I'm Wano",
        "wanoDescription": "Hello! I'm here to make your Discord experience much more interactive and informative. My main role is to provide a list of commands, interact with you in interesting and useful conversations using Open AI, manage the welcome system on your server and welcome new members",
        "IwasMadeWanoTitle": "What am I made of?",
        "IwasMadeWanoInfo": "I was built with the following technologies and libraries to make your Discord experience much more interactive and informative.",
        "inviteBttn": "INVITE ME",
    }
};

buttonEng.onclick = () => {
    buttonEng.classList = 'border border-light-subtle';
    buttonSp.classList = 'none'
}
buttonSp.onclick = () => {
    buttonSp.classList = 'border border-light-subtle';
    buttonEng.classList = 'none'
}

