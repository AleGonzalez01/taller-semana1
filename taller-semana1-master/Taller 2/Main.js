let enemigo1, enemigo2, balas, personaje;
function setup(){
    createCanvas(900,500)
    background(255,0,0);
// arreglo enemigo 1
enemigo1= [];
enemigoNormal = new Normal(random(0,250), random(0,250))
enemigo1.push(enemigoNormal);
//arreglo enemigo 2
enemigo2=[];
enemigoRapido= new Rapido(random(250,400), random(250,400))
enemigo2.push(enemigoRapido);
//personaje
personaje= new Heroe(420,450);
}
function draw(){
    //personaje
    pintarHeroe(personaje);
    personaje.mover();
    //arreglo enemigo1
    for (i=0; i<enemigo1.length;i++){
        enemigoNormal= enemigo1 [i];
        pintarEnemigos(enemigoNormal);
        enemigoNormal.movimiento();
    }
    if(frameCount %50 ==0){
        e= new Normal(random(0,250), random(0,250));
        enemigo1.push(e);
}
    for(i=0; i<enemigo1.length;i++){
        if(enemigo1[i].x<800){
            enemigo1.splice(i,1);
        }
    }
    //arreglo enemigo2
    for(j=0; j<enemigo2.length;j++){
        enemigoRapido=enemigo2[j];
        pintarEnemigos2(enemigoRapido);
        enemigoRapido.movimiento();
    }
    if(frameCount %100 ==0){
        r= new Rapido(random(250,350), random(250,350));
        enemigo2.push(r);
}
for(j=0; j<enemigo2.length;j++){
    if(enemigo2[j].x<800){
        enemigo2.splice(j,1);
    }
}
text("X:"+mouseX+" Y:"+mouseY, mouseX, mouseY);
}

function pintarHeroe(heroe1){
    fill(0);
    background(255,0,0);
    rect (heroe1.x, heroe1.y,100,50);
}
function pintarEnemigos(enemigos1){
    fill(0,255,0);
    rect (enemigos1.xe, enemigos1.ye,100,50);
}
function pintarEnemigos2(enemigos2){
    fill(0,255,255);
    rect (enemigos2.xe, enemigos2.ye,20,80);
}
function pintarBalas(bala1){
    fill(255);
    rect (bala1.X, bala1.Y,10,30);
}