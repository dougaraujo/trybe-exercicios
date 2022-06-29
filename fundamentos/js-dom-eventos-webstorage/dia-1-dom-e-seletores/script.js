const cabecalho = document.getElementById('header-container');
cabecalho.style.backgroundColor = 'rgb(47,193,140)';

const rodape = document.getElementById('footer-container');
rodape.style.backgroundColor = 'rgb(67,93,72)';

const tarefasUrgentes= document.getElementsByClassName('emergency-tasks');
tarefasUrgentes[0].style.backgroundColor = 'pink';

document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = 'purple';

document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = 'purple';

const tarefasNaoUrgentes= document.getElementsByClassName('no-emergency-tasks');
tarefasNaoUrgentes[0].style.backgroundColor = 'yellow';

document.querySelectorAll('.no-emergency-tasks h3')[0].style.backgroundColor = 'black';

document.querySelectorAll('.no-emergency-tasks h3')[1].style.backgroundColor = 'black';


