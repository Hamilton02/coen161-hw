const img = document.querySelector('section > img');
const entry = document.querySelector('input');
let randPoke = "";
let correct = false;

addEventListener('keyup', function(e){
    if(e.key === 'Enter'){

        checkPokemon();

        if(correct){
            correct = false;
            entry.value = "";
            this.setTimeout(() => {
                generatePokemon();
                img.classList.remove(`correct`);
            }, 2000)
        }
    }
})

function checkPokemon(){
    //going to need to all lower case entry bc thats how the api returns it
    let guess = entry.value;
    guess = guess.toLowerCase();
    if(randPoke === guess ){
        img.classList.add(`correct`)
        console.log('Correct!');
        correct = true;
    }else{
        img.classList.add(`wrong`);
        console.log('Wrong');
        setTimeout(() => {
            img.classList.remove(`wrong`);
        }, 3000)
    }

}

function generatePokemon(){
    let rand = Math.floor(Math.random() * 150);
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150/")
    .then(response => response.json())
    .then(data => {
        const pokeNames = data.results;
        randPoke = pokeNames[rand].name;
        console.log(`Rand: ${rand} \nPokemon: ${randPoke}`);
        let currentPokemon = stringCase(randPoke);
        img.src=`https://aelahi.dev/coen-161/pokemon/${currentPokemon}.png`
    }
    )
}

function stringCase(name){
    let nameArr = name.split(' ');
    for(let i = 0; i < nameArr.length; i++){
        nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1);
    }
    nameArr = nameArr.join(' ');
    nameArr = nameArr.replaceAll(' ', '-');
    return nameArr;
}

generatePokemon();
