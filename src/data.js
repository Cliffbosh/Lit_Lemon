import appe1 from "./images/menu/crab_dip.jpg";
import appe2 from "./images/menu/chicken_enchilada_dip.png";
import appe3 from "./images/menu/fried_buffalo_wings.png";
import main1 from "./images/menu/greek_salad_with_shrimp.webp";
import main2 from "./images/menu/saganaki_halloumi.webp";
import main3 from "./images/menu/fish_stew.webp";
import main4 from "./images/menu/grilled_chicken.webp";
import main5 from "./images/menu/spiced_salmon.webp";
import main6 from "./images/menu/lamb_shanks.webp";
import des1 from "./images/menu/baklava_cheesecake.jpg";
import des2 from "./images/menu/pizzicati.jpg";
import des3 from "./images/menu/crema_catalana.png";

const menu = [
  {
    type: "appetizer",
    name: "Crab Artichoke Dip",
    image: appe1,
    price: "$9.99",
  },
  {
    type: "appetizer",
    name: "Chicken Enchilada Dip",
    image: appe2,
    price: "$7.99",
  },
  {
    type: "appetizer",
    name: "Fried Buffalo Wings",
    image: appe3,
    price: "$8.99",
  },
  {
    type: "main",
    name: "Greek Salad with Shrimp",
    image: main1,
    price: "$10.99",
  },
  {
    type: "main",
    name: "Saganaki Halloumi",
    image: main2,
    price: "$12.99",
  },
  {
    type: "main",
    name: "Fish Stew",
    image: main3,
    price: "$15.99",
  },
  {
    type: "main",
    name: "Grilled Chicken",
    image: main4,
    price: "$20.99",
  },
  {
    type: "main",
    name: "Harissa-Spiced Salmon",
    image: main5,
    price: "$18.99",
  },
  {
    type: "main",
    name: "Lamb Shanks",
    image: main6,
    price: "$20.99",
  },
  {
    type: "dessert",
    name: "Baklava Cheesecake",
    image: des1,
    price: "$5.99",
  },
  {
    type: "dessert",
    name: "Pizzicati",
    image: des2,
    price: "$7.99",
  },
  {
    type: "dessert",
    name: "Crema Catalana",
    image: des3,
    price: "$6.99",
  },
];

export default menu;
