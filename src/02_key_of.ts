interface MovieCharacter {
    firstName: string;
    name: string;
    movie: string;
}

type characterProps = keyof MovieCharacter;

interface PizzaMenu {
    starter: string;
    pizza: string;
    beverage: string;
    dessert: string;
}

const menuSimple: PizzaMenu = {
    starter: 'Salad',
    pizza: 'Margherita',
    beverage: 'Coca cola',
    dessert: 'Vanilla ice cream'
}

function adjustMenu(menu: PizzaMenu, menuEntry: keyof PizzaMenu, change: string, props?: characterProps) {}

adjustMenu(menuSimple, 'pizza', 'Prosciuto')

adjustMenu(menuSimple, 'beverage', 'Beer')

adjustMenu(menuSimple, 'dessert', 'ice cream', 'movie')

// adjustMenu(menuSimple, 'cofee', 'Beer') // Error

// adjustMenu(menuSimple, 'beverager', 'Beer') // Error


