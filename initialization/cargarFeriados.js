
import Agenda from '../models/Agenda.js';

const cargarFeriados = async () => {
    const feriados2025 = [
        {
          name: "Año Nuevo",
          description: "Inicio del año calendario.",
          importance: "Feriado inamovible",
          date: new Date('2025-01-01T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Carnaval",
          description: "Celebración tradicional con desfiles y festividades.",
          importance: "Feriado inamovible",
          date: new Date('2025-03-03T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Carnaval",
          description: "Segundo día de celebración de Carnaval.",
          importance: "Feriado inamovible",
          date: new Date('2025-03-04T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día Nacional de la Memoria por la Verdad y la Justicia",
          description: "Conmemoración de las víctimas de la dictadura militar.",
          importance: "Feriado inamovible",
          date: new Date('2025-03-24T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día del Veterano y de los Caídos en la Guerra de Malvinas",
          description: "Homenaje a los veteranos y caídos en la guerra de 1982.",
          importance: "Feriado inamovible",
          date: new Date('2025-04-02T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Jueves Santo",
          description: "Conmemoración de la Última Cena de Jesús.",
          importance: "Día no laborable",
          date: new Date('2025-04-17T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Viernes Santo",
          description: "Conmemoración de la crucifixión de Jesús.",
          importance: "Feriado inamovible",
          date: new Date('2025-04-18T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día del Trabajador",
          description: "Celebración del movimiento obrero mundial.",
          importance: "Feriado inamovible",
          date: new Date('2025-05-01T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día de la Revolución de Mayo",
          description: "Conmemoración de la Revolución de Mayo de 1810.",
          importance: "Feriado inamovible",
          date: new Date('2025-05-25T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Paso a la Inmortalidad del General Don Martín Miguel de Güemes",
          description: "Homenaje al líder militar salteño.",
          importance: "Feriado trasladable",
          date: new Date('2025-06-16T00:00:00-03:00'), // Se traslada del 17 al 16 de junio
          color: "bg-indigo-500",
        },
        {
          name: "Paso a la Inmortalidad del General Don Manuel Belgrano",
          description: "Conmemoración del creador de la bandera argentina.",
          importance: "Feriado inamovible",
          date: new Date('2025-06-20T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día de la Independencia",
          description: "Celebración de la declaración de independencia en 1816.",
          importance: "Feriado inamovible",
          date: new Date('2025-07-09T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Paso a la Inmortalidad del General Don José de San Martín",
          description: "Homenaje al libertador de Argentina, Chile y Perú.",
          importance: "Feriado trasladable",
          date: new Date('2025-08-18T00:00:00-03:00'), // Se traslada del 17 al lunes 18
          color: "bg-indigo-500",
        },
        {
          name: "Día del Respeto a la Diversidad Cultural",
          description: "Reflexión sobre la diversidad cultural en el país.",
          importance: "Feriado trasladable",
          date: new Date('2025-10-13T00:00:00-03:00'), // Se traslada del 12 al lunes 13
          color: "bg-indigo-500",
        },
        {
          name: "Día de la Soberanía Nacional",
          description: "Conmemoración de la Batalla de la Vuelta de Obligado.",
          importance: "Feriado trasladable",
          date: new Date('2025-11-17T00:00:00-03:00'), // Se traslada del 20 al lunes 17
          color: "bg-indigo-500",
        },
        {
          name: "Día de la Inmaculada Concepción de María",
          description: "Festividad religiosa en honor a la Virgen María.",
          importance: "Feriado inamovible",
          date: new Date('2025-12-08T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Navidad",
          description: "Celebración del nacimiento de Jesús.",
          importance: "Feriado inamovible",
          date: new Date('2025-12-25T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día no laborable con fines turísticos",
          description: "Día destinado a promover la actividad turística.",
          importance: "Día no laborable",
          date: new Date('2025-05-02T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día no laborable con fines turísticos",
          description: "Día destinado a promover la actividad turística.",
          importance: "Día no laborable",
          date: new Date('2025-08-15T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
        {
          name: "Día no laborable con fines turísticos",
          description: "Día destinado a promover la actividad turística.",
          importance: "Día no laborable",
          date: new Date('2025-11-21T00:00:00-03:00'),
          color: "bg-indigo-500",
        },
    ]; 

    try {
        const existentes = await Agenda.find({ esFeriado: true });

        if (existentes.length === 0) {
            await Agenda.insertMany(feriados2025.map(f => ({ ...f, esFeriado: true })));
            console.log('Feriados cargados exitosamente');
        } else {
            console.log('Feriados ya estaban cargados');
        }
    } catch (error) {
        console.error('Error al cargar feriados:', error);
    } 
};

cargarFeriados();
