import traditional from "../../../assets/traditional.svg";
import american from "../../../assets/american.svg";
import creamy from "../../../assets/creamy.svg";
import iced from "../../../assets/iced.svg";

import coffeeWithMilk from "../../../assets/coffee-with-milk.svg";
import latte from "../../../assets/latte.svg";
import cappuccino from "../../../assets/cappuccino.svg";
import macchiato from "../../../assets/macchiato.svg";

import mocaccino from "../../../assets/mocaccino.svg";
import hotChocolate from "../../../assets/hot-chocolate.svg";
import cuban from "../../../assets/cuban.svg";
import hawaiian from "../../../assets/hawaiian.svg";

import arabic from "../../../assets/arabic.svg";
import irish from "../../../assets/irish.svg";

export const cafes = [
  {
    id: 1,
    tags: ["tradicional"],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    image: traditional,
    price: 9.9,
  },
  {
    id: 2,
    tags: ["tradicional"],
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    image: american,
    price: 9.9,
  },
  {
    id: 3,
    tags: ["tradicional"],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    image: creamy,
    price: 9.9,
  },
  {
    id: 4,
    tags: ["tradicional", "gelado"],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    image: iced,
    price: 9.9,
  },
  {
    id: 5,
    tags: ["tradicional", "com leite"],
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    image: coffeeWithMilk,
    price: 9.9,
  },
  {
    id: 6,
    tags: ["tradicional", "com leite"],
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: latte,
    price: 9.9,
  },
  {
    id: 7,
    tags: ["tradicional", "com leite"],
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: cappuccino,
    price: 9.9,
  },
  {
    id: 8,
    tags: ["tradicional", "com leite"],
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    image: macchiato,
    price: 9.9,
  },
  {
    id: 9,
    tags: ["tradicional", "com leite"],
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    image: mocaccino,
    price: 9.9,
  },
  {
    id: 10,
    tags: ["especial", "com leite"],
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    image: hotChocolate,
    price: 9.9,
  },
  {
    id: 11,
    tags: ["especial", "alcoólico", "gelado"],
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: cuban,
    price: 9.9,
  },
  {
    id: 12,
    tags: ["especial"],
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    image: hawaiian,
    price: 9.9,
  },
  {
    id: 13,
    tags: ["especial"],
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    image: arabic,
    price: 9.9,
  },
  {
    id: 13,
    tags: ["especial", "alcoólico"],
    name: "Irlândes",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: irish,
    price: 9.9,
  },
];
