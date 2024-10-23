export class Heroe{
    protected nombre:string
    protected nivel:number
    protected puntosDeVida:number

    constructor(nombre:string,nivel:number,puntosDeVida:number){
        this.nombre=nombre
        this.nivel=nivel
        this.puntosDeVida=puntosDeVida
    }

    public Atacar(nombre:string, habilidad:string){
        console.log(`${nombre} esta atacando. Lanzo su habilidad ${habilidad}`)
    }
    public Defender(nombre:string){
        console.log(`${nombre} esta defendiendose`)
    }

    ///GETTERS/////////////////
    public getNombre(){
        return this.nombre
    }
    public getNivel(){
        return this.nivel
    }
    public getPuntosDeVida(){
        return this.puntosDeVida
    }

    ////SETERS///////////////
    public setNombre(nombre:string){
        this.nombre=nombre
    }
    public setNivel(){
        
        this.nivel=this.nivel+1
        console.log('subiste de nivel. Nivel actual: ',this.nivel)
    }
    public setPuntosDeVida(puntos:number){
        this.puntosDeVida=puntos
    }

}