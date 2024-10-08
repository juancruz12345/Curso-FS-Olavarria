export class Vehiculo {
    protected patente: string;

    constructor(patente: string) {
        this.patente = patente;
    }

    public getPatente(): string {
        return this.patente;
    }
    public setPatente(patente:string){
        this.patente = patente
    }
}