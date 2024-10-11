import { Heroe } from "./Heroe"

export class Mago extends Heroe{
    
    private habilidad:string
    private puntosDeMana:number

    constructor(nombre:string,nivel:number,puntosDeVida:number,habilidad:string,puntosDeMana:number){
        super(nombre,nivel,puntosDeVida)
        this.habilidad=habilidad
        this.puntosDeMana=puntosDeMana
    }

    public lanzarHabilidad(){
        this.Atacar(this.nombre, this.habilidad)
        this.setPuntosDeMana(20)
        console.log(`le costo 20 puntos de Mana. Mana actual:${this.puntosDeMana}`)
    }

    /////GETERS
    public getHabilidad(){
        return this.habilidad
    }
    public getPuntosDeMana(){
        return this.puntosDeMana
    }
    /////SETERS
  
    public setPuntosDeMana(costo:number){
        this.puntosDeMana=this.puntosDeMana-costo
    }
}