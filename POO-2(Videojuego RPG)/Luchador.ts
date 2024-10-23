import { Heroe } from "./Heroe"

export class Luchador extends Heroe{
    
    private habilidad:string
    private puntosDeStamina:number

    constructor(nombre:string,nivel:number,puntosDeVida:number,habilidad:string,puntosDeStamina:number){
        super(nombre,nivel,puntosDeVida)
        this.habilidad=habilidad
        this.puntosDeStamina=puntosDeStamina
    }

    public lanzarHabilidad(){
        this.Atacar(this.nombre, this.habilidad)
        this.setPuntosDeStamina(20)
        console.log(`le costo 20 puntos de Stamina. Stamina actual:${this.puntosDeStamina}`)
    }

    /////GETERS
    public getHabilidad(){
        return this.habilidad
    }
    public getPuntosDeStamina(){
        return this.puntosDeStamina
    }
    /////SETERS
  
    public setPuntosDeStamina(costo:number){
        this.puntosDeStamina=this.puntosDeStamina-costo
    }
    public setHabilidad(){
        console.log('nueva habilidad aprendida: Guillotina')
        this.habilidad='Guillotina'
    }
}