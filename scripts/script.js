titulo = document.getElementsByTagName('title')[0].text;
tituloComp = "Progrinter - Sites";
tagA = document.getElementsByClassName('nav-item nav-link padding-link');

if(titulo == tituloComp)
    for(i = 0;i < tagA.length; i++)
        tagA[i].style.color = "#A4A4A4";