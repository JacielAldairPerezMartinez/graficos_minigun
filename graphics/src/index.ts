
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
import { Point3D } from './point3D.js';

let canvas: HTMLCanvasElement;
let graphics: CanvasRenderingContext2D;

canvas = <HTMLCanvasElement>document.getElementById('circlechart');
graphics = canvas.getContext('2d');

let cv: CvHLines;
let obj: Obj3D;
let ang: number=0;

function leerArchivo(e:any) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
    obj = new Obj3D();
    if (obj.read(contenido)) {
      //sDir = sDir1;
      cv = new CvHLines(graphics, canvas);
      cv.setObj(obj);
      cv.paint();
    }
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido:any) {
  var elemento = document.getElementById('contenido-archivo');
  //
  //readObject(new Input(contenido));
  elemento.innerHTML = contenido;
}

function vp(dTheta:number, dPhi:number, fRho:number):void{  // Viewpoint
  if (obj != undefined) {
    let obj: Obj3D = cv.getObj();
    if (!obj.vp(cv, dTheta, dPhi, fRho))
      alert('datos no validos');
  }
  else
    alert('aun no has leido un archivo');
}

function eyeDownFunc() {
  vp(0, 0.1, 1);
}

function eyeUpFunc() {
  vp(0, -0.1, 1);
}

function eyeLeftFunc() {
  vp(-0.1, 0, 1);
}

function eyeRightFunc() {
  vp(0.1, 0, 1);
}

function incrDistFunc() {
  vp(0, 0, 2);
}

function decrDistFunc() {
  vp(0, 0, 0.5);
}

function pza1DerFunc() {
  let af = 10;
 	
	Rota3D.initRotate( obj.w[139], obj.w[140], af*Math.PI/180);	
	
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}

function pza1IzqFunc() {
  let af = -10;
 	
	Rota3D.initRotate( obj.w[139], obj.w[140], af*Math.PI/180);	
	
  for (let i = 201; i <= 238; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
	cv.setObj(obj);
  cv.paint();	
}
function pza12DerFunc() {
  let af = 10;
  let af2 = -10;
  console.log(obj.w[29], obj.w[30]);
	Rota3D.initRotate( obj.w[200], obj.w[201], af*Math.PI/180);	
	
  for (let i = 1; i <= 8; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}

  Rota3D.initRotate( obj.w[202], obj.w[203], af2*Math.PI/180);	
	
  for (let i = 33; i <= 40; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}

  Rota3D.initRotate( obj.w[200], obj.w[201], af2*Math.PI/180);
  for (let i = 9; i <= 16; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  Rota3D.initRotate( obj.w[202], obj.w[203], af*Math.PI/180);	
	
  for (let i = 25; i <= 32; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  
	cv.setObj(obj);
  cv.paint();	
}

function pza12IzqFunc() {
  let af = -10;
  let af2 = 10;
  console.log(obj.w[29], obj.w[30]);
	Rota3D.initRotate( obj.w[200], obj.w[201], af*Math.PI/180);	
	
  for (let i = 1; i <= 8; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}

  Rota3D.initRotate( obj.w[202], obj.w[203], af2*Math.PI/180);	
	
  for (let i = 33; i <= 40; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}

  Rota3D.initRotate( obj.w[200], obj.w[201], af2*Math.PI/180);
  for (let i = 9; i <= 16; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  Rota3D.initRotate( obj.w[202], obj.w[203], af*Math.PI/180);	
	
  for (let i = 25; i <= 32; i++){
    obj.w[i] = Rota3D.rotate(obj.w[i]);
	}
  
	cv.setObj(obj);
  cv.paint();	
}

let animacion, animacion2
function rotation(){
  let grado = 3
  Rota3D.initRotate(obj.w[720],obj.w[721],grado*Math.PI/180)
  for (let index = 1; index < 96; index++) {
    obj.w[index] = Rota3D.rotate(obj.w[index])
    
  }
  cv.setObj(obj);
  cv.paint();	 
}
function rota(){
  rotation()
}
 function Rotacion() {
animacion = setInterval(rota,1)

 }

 function giro(){
  let gra = 15
  Rota3D.initRotate(obj.w[722],obj.w[723],gra*Math.PI/180)
  for (let index = 1; index < 96; index++) {
    obj.w[index] = Rota3D.rotate(obj.w[index])
  }
  for (let index = 100; index < 187; index++) {
    obj.w[index] = Rota3D.rotate(obj.w[index])
  }
 for (let index = 720; index < 723; index++) {
  obj.w[index] = Rota3D.rotate(obj.w[index])
  }
  cv.setObj(obj);
  cv.paint();
 }
 function gri(){
  giro()
 }
function Giro(){
animacion2 = setInterval(gri,10)
}
function detener(){
  clearInterval(animacion);
  clearInterval(animacion2);
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);


//movimiento de piezas
document.getElementById('pza1Izq').addEventListener('click', pza1IzqFunc, false);
document.getElementById('pza1Der').addEventListener('click', pza1DerFunc, false);
document.getElementById('pza12Izq').addEventListener('click', pza12IzqFunc, false);
//document.getElementById('pza12Der').addEventListener('click', pza12DerFunc, false);
document.getElementById('detener').addEventListener('click', detener, false);
document.getElementById('rotacion').addEventListener('click', Rotacion, false);
document.getElementById('giro').addEventListener('click', Giro, false);

let Pix: number, Piy: number;
let Pfx: number, Pfy: number;
let theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
let flag: boolean = false;

function handleMouse(evento: any) {
  Pix=evento.offsetX;
  Piy = evento.offsetY;
  flag = true;
}

function makeVizualization(evento: any) {
  if (flag) {
    Pfx = evento.offsetX;
    Pfy = evento.offsetY;
    //console.log(Pfx, Pfy)
    let difX = Pix - Pfx;
    let difY = Pfy - Piy;
    vp(0, 0.1 * difY / 50, 1);
    Piy = Pfy;
    vp(0.1 * difX, 0 / 50, 1);
    Pix = Pfx;
    /*if( Piy>Pfy+1 ){
      phi += SensibilidadY;
      vp(0, 0.1*, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }

    if(Pfy>Piy+1){
      phi -= SensibilidadY;
      vp(0,-0.1, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Piy=Pfy;
    }*/

    /*if (Pix > Pfx + 1) {
      theta += SensibilidadX;
      vp(0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }
        
    if (Pfx > Pix + 1) {
      theta -= SensibilidadX;
      vp(-0.1, 0, 1);
      //cv.redibuja(theta, phi, tamanoObjeto);
      Pix = Pfx;
    }*/
  }
}

function noDraw() {
  flag = false;
}

canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);