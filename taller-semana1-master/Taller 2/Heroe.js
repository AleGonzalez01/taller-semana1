let x, y, tam;
class Heroe{
constructor(x, y, tam){
this.x=x;
this.y=y;
this.tam=tam;
}
mover(){
    if(keyIsDown(LEFT_ARROW) && this.x >0){
        this.x-=10
    }
    if(keyIsDown(RIGHT_ARROW)&& this.x <900){
      this.x+=10
    }
}
}