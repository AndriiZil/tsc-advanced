//////////// = Partial = /////////////

interface MovieCharacter {
    firstName: string;
    name: string;
    movie: string;
}

function registerPerson(person: Partial<MovieCharacter>) {}

registerPerson({ firstName: 'Tom' })
registerPerson({ name: 'Bob', movie: 'Titanic' })

////////// = Required = ///////////

interface Hero {
    name?: string;
    age?: number;
    category: string;
}

function createHero(hero: Required<Hero>) {}

createHero({
    name: 'Claster',
    age: 22,
    category: 'mini'
})

////////// = Extract = ////////////

type MovieCharacters = 'Harry Poter' | 'Tom Soier' | { firstName: string; lastName: string; }

type hpCharacters = Extract<MovieCharacters, string>

type objCharacters = Extract<MovieCharacters, { firstName: string }>

const newOne: objCharacters = {
    firstName: 'Tom',
    lastName: 'Name'
}

const secondOne: hpCharacters = 'Harry Poter';
const thirdOne: hpCharacters = 'Tom Soier';

////////// = Exclude = /////////////

type Car = 'BMW' | 'Mercedes' | { name: string; year: number; }

type objCar = Exclude<Car, string>

const myCar: objCar = { name: 'Audi', year: 2020 }

type stCar = Exclude<Car, { name: string }>

const myCar2: stCar = 'BMW'

const myCar3: stCar = 'Mercedes'
