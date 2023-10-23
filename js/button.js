const buttonLink = document.getElementById('inviteBttn');

buttonLink.onclick = () => {
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1164091412552351785&permissions=8&scope=applications.commands%20bot'
}