import { Auto } from "./Auto"
import { Moto } from "./Moto"
import { Camion } from "./Camion"


export class RegistroAutomotor{

    private autos: Auto[]
    private motos: Moto[]
    private camiones: Camion[]
    
    constructor() {
        this.autos = []
        this.motos = []
        this.camiones = []
    }
    
    public getAutos(): Auto[] {
        return [...this.autos]
    }

    public getMotos(): Moto[] {
        return [...this.motos]
    }

    public getCamiones(): Camion[] {
        return [...this.camiones]
    }


    public agregarVehiculo(vehiculo: Auto | Moto | Camion) {
        if (vehiculo instanceof Auto) {
            this.autos.push(vehiculo)
        } else if (vehiculo instanceof Moto) {
            this.motos.push(vehiculo)
        }
         else if (vehiculo instanceof Camion) {
            this.camiones.push(vehiculo)
        }
    }

    public darVehiculoDeBaja(vehiculo: Auto | Moto | Camion) {
        if (vehiculo instanceof Auto) {
            const index = this.autos.indexOf(vehiculo)
            if (index !== -1) {
                this.autos.splice(index, 1)
            }
        } else if (vehiculo instanceof Moto) {
            const index = this.motos.indexOf(vehiculo)
            if (index !== -1) {
                this.motos.splice(index, 1)
            }
        }
        else if (vehiculo instanceof Camion) {
            const index = this.camiones.indexOf(vehiculo)
            if (index !== -1) {
                this.motos.splice(index, 1)
            }
        }
    }
    ///Yo se que modificar la patente no es algo real, pero es solo un ejemplo :) (para no llenar las clases de variables)
    public modificarVehiculo(vehiculo: Auto | Moto | Camion, patente:string){
        if(vehiculo===undefined || patente === null || patente=== '')return
        console.log('patente antigua: ', vehiculo.getPatente())
        vehiculo.setPatente(patente)
        console.log('patente nueva: ', vehiculo.getPatente())
    }
}


const registro = new RegistroAutomotor()

const auto1 = new Auto("ABC 123","alfa romeo")
const auto2 = new Auto("EFE 323","fiat")
const moto1 = new Moto("XYZ 456","zanella")
const moto2 = new Moto("ASW 541","mondial")
const camion = new Camion("ERE 343","scania")
const camion2= new Camion("AFA 333","mercedes")

registro.agregarVehiculo(auto1) 
registro.agregarVehiculo(auto2) 
registro.agregarVehiculo(moto1) 
registro.agregarVehiculo(moto2) 
registro.agregarVehiculo(camion)

console.log('Get autos: ',registro.getAutos()) 
console.log('Get motos: ',registro.getMotos()) 
console.log('Get camiones: ',registro.getCamiones())
registro.darVehiculoDeBaja(auto1)
console.log(registro.getAutos())
console.log('get marca camion 2: ',camion2.getMarca())

registro.modificarVehiculo(auto2,'ARH 400')


    

