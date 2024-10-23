import { Heroe } from "./Heroe"

export class Arquero extends Heroe{
    
    private habilidad:string
    private cantFlechas:number

    constructor(nombre:string,nivel:number,puntosDeVida:number,habilidad:string,cantFlechas:number){
        super(nombre,nivel,puntosDeVida)
        this.habilidad=habilidad
        this.cantFlechas=cantFlechas
    }

    public lanzarHabilidad(){
        this.Atacar(this.nombre, this.habilidad)
        this.setCantFlechas(2)
        console.log(`le costo 2 flechas. Flechas actuales:${this.cantFlechas}`)
    }

    /////GETERS
    public getHabilidad(){
        return this.habilidad
    }
    public getCantFlechas(){
        return this.cantFlechas
    }
    /////SETERS
  
    public setCantFlechas(costo:number){
        this.cantFlechas=this.cantFlechas-costo
    }
    public setHabilidad(){
        console.log('nueva habilidad aprendida: Flecha envenenada')
        this.habilidad='Flecha envenenada'
    }
}