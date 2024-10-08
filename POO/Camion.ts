import { Vehiculo } from "./Vehiculo";

export class Camion extends Vehiculo {
    private marca: string;

    constructor(patente: string, marca: string) {
        
        super(patente);
        this.marca = marca;
    }

    public getMarca(): string {
        return this.marca;
    }
    
}