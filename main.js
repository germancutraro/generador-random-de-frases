const buttonCite = document.querySelector('#buttonCite');
const citeOutput = document.querySelector('#cite');
const authorOutput = document.querySelector('#author');

let cites = [
  'Qué maravilloso es que nadie necesita un solo momento antes de comenzar a mejorar el mundo.',
  'La muerte destroza al hombre: la idea de la muerte le salva.',
  'Adentro del Vaticano está todo forrado de oro y afuera los pibes se están muriendo de hambre.',
  'De todos los animales de la creación el hombre es el único que bebe sin tener sed, come sin tener hambre y habla sin tener nada que decir.',
  'Educación es lo que queda después de olvidar lo que se ha aprendido en la escuela.',
  'La gente se rie de mi por que soy diferente, yo me rio de ellos por que son todos iguales.',
  'Solo hay una felicidad en la vida – amar y ser amado.',
  'El placer y la acción hacen que las horas parezcan cortas.',
  'El éxito depende del esfuerzo.',
  'No busques los errores, busca un remedio.',
  'Todos somos muy ignorantes. Lo que ocurre es que no todos ignoramos las mismas cosas.',
  'Quien tiene paciencia, obtendrá lo que desea.',
  'No malgastes tu tiempo, pues de esa materia está formada la vida.',
  'La confianza en sí mismo es el primer secreto del éxito.',
  'La ocasión hay que crearla, no esperar a que llegue.',
  'Cuando el hombre no se encuentra a sí mismo, no encuentra nada.',
  'El fracaso es simplemente una nueva oportunidad de empezar de nuevo, esta vez de forma más inteligente.',
  'Una buena cabeza y un buen corazón son siempre combinaciones formidables.',
  'La envidia es una declaración de inferioridad.',
  'La inteligencia es la habilidad de adaptarse al cambio.'
];

let authors = [
  'Ana Frank',
  'Howards End',
  'Diego Maradona',
  'John Steinbeck',
  'Albert Einstein',
  'Kurt Cobain',
  'George Sand',
  'William Shakespeare',
  'Sófocles',
  'Henry Ford',
  'Albert Einstein',
  'Benjamin Franklin',
  'Benjamin Franklin',
  'Emerson',
  'Francis Bacon',
  'Goethe',
  'Henry Ford',
  'Nelson Mandela',
  'Napoleón',
  'Stephen Hawking'
];

let lastNumber = 0;

function rand () {
  let rnd = Math.floor(Math.random() * cites.length);
  if (rnd != lastNumber) {
    citeOutput.innerText = `"${cites[rnd]}"`;
    authorOutput.innerText = authors[rnd];
    lastNumber = rnd;
  } else {
    rand(); // Recursion
  }
} // End rand function

buttonCite.addEventListener('click', rand); // Call the function, in events yo cant do this rand() parenthesis no!
