const botaomenu = document.querySelector('.cabecalho_perfil')
const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})