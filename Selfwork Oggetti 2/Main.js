// Creare un oggetto che mostri la lista contatti, che li possa rimuovere, aggiungere, modificare 

let rubrica = {
    'contatti': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],

    'mostraContatti': function(nome, numero) {
        console.log(`La lista di tutti i contatti è:`);
        this.contatti.forEach( (contatto) => console.log(`${contatto.nome} : ${contatto.telefono}`) );
    },

    'mostraSingoloContatto': function(nome) {
        let contact = this.contatti.find(contact => contact.nome == nome);

        if (contact) {
            console.log(`Il contatto ${contact.nome} è stato trovato`);
        }
        else {
            console.log(`Il contatto ${contact.nome} non è stato trovato`);
        }
    },

    'aggiungiContatti': function(nome) {
        this.contatti.push(nome);
        console.log(`Il contatto è stato aggiunto`);
    },

    'rimuoviContatti': function(nome) {
        let index = this.contatti.indexOf(nome);
        this.contatti.splice(index, 1);
        console.log(`Il contatto è stato eliminato`);
        
    },

    'modificaContatto': function(nome) {
        let contatto = this.contatti.find(contatto => contatto.nome == nome);

        if (contatto) {
            console.log(`Il contatto ${contatto.nome} è stato modificato`);
        }
        else {
            console.log(`Impossibile modificare il contatto perchè non trovato o inesistente`);
        }
    }
    
};

rubrica.mostraContatti();
rubrica.mostraSingoloContatto('Paola');
rubrica.aggiungiContatti('Marco');
rubrica.aggiungiContatti('Matteo');
rubrica.rimuoviContatti('Marco');
rubrica.modificaContatto('Lorenzo');