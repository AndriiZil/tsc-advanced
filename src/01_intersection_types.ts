interface Person {
    name: string;
    firstName: string;
}

interface FootballPlayer {
    club: string;
}

function transferPlayer(player: Person & FootballPlayer) {}

transferPlayer({
    name: 'Bob',
    firstName: 'Dedy',
    club: 'Dolce'
})

// Invalid
// transferPlayer({
//     name: 'Taras',
//     firstName: 'Illa'
// })
