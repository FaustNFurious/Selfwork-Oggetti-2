// Creare un oggetto che mostri la lista contatti, che li possa rimuovere, aggiungere, modificare 

let rubrica = {
    'contatti': [
        {'nome': 'Nicola'},
        {'nome': 'Lorenzo'},
        {'nome': 'Paola'},
        {'nome': 'Jenny'}
    ],

    'mostraContatti': function() {
        this.contatti.forEach( (contatto) => console.log(contatto) );
    },

    'aggiungiContatti': function(nome) {
        this.contatti.push(nome);
    },

    'rimuoviContatti': function(nome) {
        let index = this.contatti.indexOf(nome);
        this.contatti.splice(index, 1);
    },
    
};

rubrica.mostraContatti();
rubrica.aggiungiContatti('Marco');
rubrica.aggiungiContatti('Matteo');
rubrica.rimuoviContatti('Marco');

console.log(rubrica);
