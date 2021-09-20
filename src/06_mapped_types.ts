interface Character {
    playInFantasyMovie: () => void;
    playInActionMovie: () => void;
}

type toFlags<Type> = { [ Property in keyof Type ]: boolean }

type characterFeatures = toFlags<Character>

const example: characterFeatures = {
    playInActionMovie: false,
    playInFantasyMovie: true,
}

type mutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
}

type Char = {
    readonly firstName: string;
    readonly name: string;
}

type mutableCharacter = mutable<Char>;

const example2: mutableCharacter = {
    firstName: 'Name',
    name: 'Ted'
}

type Optional<Type> = {
    [Property in keyof Type]+?: Type[Property];
}

type Params = {
    url: string;
    requestMethod: string;
}

type OptionalParams = Optional<Params>

const optional: OptionalParams = {
    url: 'https://'
}

type OptionalAndMutable<Type> = {
    -readonly [Property in keyof Type]+?: Type[Property];
}

type randomType = {
    readonly name: string;
    readonly lastName: string;
}

type mutableRandom = OptionalAndMutable<randomType>

const example3: mutableRandom = {
    name: 'Alex'
}

type NameOnly<Type> = {
    [Property in keyof Type as Exclude<Property, "lastName">]: Type[Property];
}

type Name = NameOnly<randomType>

const nameOnly: Name = {
    name: 'Andrii'
}
