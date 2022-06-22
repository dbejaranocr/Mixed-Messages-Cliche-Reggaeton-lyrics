//console.log('im having thoughts');

const subject = ['Mami', 'Bebecita', 'Mi amor', 'Bebe', 'Nena linda'];
const verb1 = ['yo quiero', 'yo puedo', 'yo vengo a', 'voy a'];
const verb2 = ['encenderte', 'amarte', 'ligarte', 'darte', 'prenderte', 'devorarte', 'cumplir tus fantasias'];
const adjective = ['suave', 'lento', 'rapido', 'fuerte', 'duro'];
const time = ['hasta que salga el sol', 'la noche entera', 'toda la noche', 'hasta el amanecer', 'todo el dia'];
const extra = ['sin anestesia', 'sin compromiso', 'sin miedo', 'face to face', 'con un blunt', 'so nasty',];

const wordPicker = (arr) => {
    const word = Math.floor(Math.random() * arr.length);
    return arr[word];
}
const sentence = () => {
    const subjectWord = wordPicker(subject);
    const verb1Word = wordPicker(verb1);
    const verb2Word = wordPicker(verb2);
    const adjectiveWord = wordPicker(adjective);
    const timeWord = wordPicker(time);
    const extraWord = wordPicker(extra);
    return `${subjectWord} ${verb1Word} ${verb2Word} ${adjectiveWord} ${timeWord} ${extraWord}`;
}

console.log(sentence());
