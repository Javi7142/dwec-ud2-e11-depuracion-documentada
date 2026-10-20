// E11 · Depuración documentada
// Boletín de notas de un grupo. Las notas llegan como texto, igual que desde un formulario.
// Una nota vacía ('') significa que el alumno no se presentó a ese examen.

const alumnos = [
  { nombre: 'Ana', notas: ['7', '8.5', '9'] },
  { nombre: 'Bruno', notas: ['4', '5', '3.5'] },
  { nombre: 'Carla', notas: ['10', '9.5', '9'] },
  { nombre: 'David', notas: ['0', '6', '7.5'] },
  { nombre: 'Elena', notas: ['5', '', '6'] },
];

let sumaMedias = 0;
let presentados = 0;
let aprobados = 0;
let suspensos = [];

console.log('📋 Boletín de notas');

for (let i = 0; i < alumnos.length; i++) {
  const alumno = alumnos[i];
  let suma = 0;
  let noPresentado = false;

  for (let i = 0; i < alumno.notas.length; i++) {
    const texto = alumno.notas[i];
    const nota = Number(texto);
    if (!nota) {
      noPresentado = true;
    }
    suma += texto;
  }

  if (noPresentado) {
    console.log(`${alumno.nombre}: no presentado`);
    continue;
  }

  const media = suma / alumno.notas.length;
  let calificacion;
  if (media < 5) {
    calificacion = 'Suspenso';
    suspensos.push(alumno.nombre);
  } else if (media < 7) {
    calificacion = 'Aprobado';
  } else if (media < 9) {
    calificacion = 'Notable';
  } else {
    calificacion = 'Sobresaliente';
  }
  if (media >= 5) {
    aprobados++;
  }

  let mejorMedia = 0;
  let mejorAlumno = '';
  if (media > mejorMedia) {
    mejorMedia = media;
    mejorAlumno = alumno.nombre;
  }

  sumaMedias += media;
  presentados++;
  console.log(`${alumno.nombre}: ${media.toFixed(2)} · ${calificacion}`);
}

console.log('📊 Estadísticas del grupo');
console.log(`Presentados: ${presentados} · Aprobados: ${aprobados}`);
console.log(`Media del grupo: ${(sumaMedias / presentados).toFixed(2)}`);
console.log(`Mejor media: ${mejorAlumno} (${mejorMedia.toFixed(2)})`);

console.log('Suspensos:');
for (let i = 0; i <= suspensos.length; i++) {
  console.log(`- ${suspensos[i]}`);
}
