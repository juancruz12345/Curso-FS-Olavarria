import { Mago } from "./Mago"
import { Luchador } from "./Luchador"
import { Arquero } from "./Arquero"

const luchador1 = new Luchador('Aragorn',7,100,'Golpe certero',80)
const mago1 = new Mago('Gandalf',10,50,'Bola de fuego',80)
luchador1.lanzarHabilidad()
luchador1.lanzarHabilidad()
luchador1.Defender(luchador1.getNombre())
mago1.lanzarHabilidad()
mago1.lanzarHabilidad()

const arquero1 = new Arquero('Legolas',6,100,'Doble tiro',80)
arquero1.lanzarHabilidad()