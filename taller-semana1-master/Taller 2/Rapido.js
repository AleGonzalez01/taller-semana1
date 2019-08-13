class Rapido extends Enemigo{
    constructor(x,y){
   super (xe,ye);
   this.xe=x;
   this.ye=y;
}
    movimiento(){
        this.xe+=8;
    }

}