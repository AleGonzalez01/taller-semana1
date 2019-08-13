let xe,ye, velocidad,tame;
class Enemigo{
    constructor(xe,ye,tame){
        this.xe= xe;
        this.ye= ye;
        this.tame=tame;

    }
    movimiento(){
        this.xe+=5;
    }
}