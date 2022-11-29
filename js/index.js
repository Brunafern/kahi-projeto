
const botaomenu = document.querySelector('.cabecalho_perfil')
const menu = document.querySelector('.menu-lateral')

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const botaoteste1 = document.querySelector('.topicos-botao1')
const botaoteste2 = document.querySelector('.topicos-botao2')
const botaoteste3 = document.querySelector('.topicos-botao3')
const botaoteste4 = document.querySelector('.topicos-botao4')
const oi = document.querySelector('.barra-azul-0')

botaoteste1.addEventListener('click', () => {
    oi.classList.toggle('barra-azul--ativo--25')
})

botaoteste2.addEventListener('click', () => {
    oi.classList.toggle('barra-azul--ativo--50')
})

botaoteste3.addEventListener('click', () => {
    oi.classList.toggle('barra-azul--ativo--75')
})

botaoteste4.addEventListener('click', () => {
    oi.classList.toggle('barra-azul--ativo--100')
})