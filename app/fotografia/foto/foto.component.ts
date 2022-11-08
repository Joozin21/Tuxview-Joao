// Decorar a classe
// Decorator diz a função da classe

import { Component } from "@angular/core";

@Component({
    selector: 'app-foto',
    templateUrl:'./foto.component.html',
    styleUrls: ['./foto.component.css']
}) 

export class FotoComponent{
nameButton = "Fotos Pares"; 
descricao = "O data binding pega uma informação no arquivo .ts e leva para o arquivo. html";
titulo = "Minhas Fotos";
control = true;

//Criar um array de objetos para as fotos

imagens = [
  {img: "https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__340.jpg", titulo: "Padaria" },
  {img: "https://cdn.pixabay.com/photo/2022/10/05/20/43/hyacinth-macaw-7501470__340.jpg", titulo: "Arara"},
  {img: "https://cdn.pixabay.com/photo/2022/11/02/08/48/cat-7564358__340.jpg", titulo: "Gato"},
  {img: "https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727__340.jpg", titulo: "Cachorro"},
  {img: "https://cdn.pixabay.com/photo/2022/10/16/18/20/flamingos-7525793__340.jpg", titulo: "Flamingo"},
  {img: "https://cdn.pixabay.com/photo/2022/10/24/14/04/mountains-7543535__340.jpg", titulo: "Montanhas"}
];

//Método de botao de click para alternar entre fotos pares e todas as fotos
mudar(){
  this.control = !this.control;
  if(this.nameButton == "Todas as Imagens"){
    this.nameButton = "Fotos Pares"
  }else{
    this.nameButton = "Todas as Imagens";
       }  
  }
}