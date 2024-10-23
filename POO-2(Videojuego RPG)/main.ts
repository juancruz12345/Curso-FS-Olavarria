import { Mago } from "./Mago"
import { Luchador } from "./Luchador"
import { Arquero } from "./Arquero"

const luchador = new Luchador('Aragorn',7,100,'Golpe certero',80)
const mago = new Mago('Gandalf',10,50,'Bola de fuego',80)
const arquero = new Arquero('Legolas',6,100,'Doble tiro',80)
luchador.lanzarHabilidad()
luchador.lanzarHabilidad()
luchador.Defender(luchador.getNombre())
mago.lanzarHabilidad()
mago.lanzarHabilidad()
arquero.lanzarHabilidad()
arquero.setNivel()
arquero.setHabilidad()
arquero.lanzarHabilidad()