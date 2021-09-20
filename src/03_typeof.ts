function getCharacter() {
    return {
        firstName: 'Frodo',
        name: 'Beutlin'
    }
}

type Character = ReturnType<typeof getCharacter>;

const char: Character = {
    firstName: 'Tom',
    name: 'Bob'
}
