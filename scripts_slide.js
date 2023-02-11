var slide = new Array("images/slide/998953.jpg", "images/slide/999128.jpg", "images/slide/999133.jpg", "images/slide/1197417.jpg", "images/slide/1036644.png", 
"images/slide/1036647.png", "images/slide/1036868.png", "images/slide/1079629.png", "images/slide/1081507.png", "images/slide/1084549.png"
, "images/slide/1092882.png", "images/slide/1097307.png" );//liste des images qui change 
var numero = 0; //définie la variable a 0 

//fonction qui permet le changement ici augmente l'idée dans la liste d'image et quand arrive a la dernière repasse a la première. 
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 7000); //met un interval de 7000 ms