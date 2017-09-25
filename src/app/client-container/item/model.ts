export class Item {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public categoryId: number;
  public picture: string;
  public typeItem: TypeItem;
  public stock: number;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    categoryId: number,
    picture: string,
    typeItem: TypeItem,
    stock: number,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
    this.picture = picture;
    this.typeItem = typeItem;
    this.stock = stock;
  }
}

export enum TypeItem {
  PIZZA = <any>"pizza",
  DESSERT = <any>"dessert",
  DRINK = <any>"drink"
}

export class Category {
  public id: number;
  public libelle: string;

  constructor(id: number, libelle: string){
    this.id = id;
    this.libelle = libelle;
  }
}

export const PIZZAS: Item[] = [
  new Item(1, 'Merguez', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170803100355053.jpg', TypeItem.PIZZA, 0),
  new Item(2, 'Fromage de Chèvre', '', 11.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', TypeItem.PIZZA, 0),
  new Item(3, 'Jambon-Fromage', '', 8, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170803102147922.jpg', TypeItem.PIZZA, 0),
  new Item(4, 'Mozza-Olives', '', 9, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170803112458735.jpg', TypeItem.PIZZA, 0),
  new Item(5, 'Margherita', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165922296.jpg', TypeItem.PIZZA, 0),
  new Item(6, 'Funghi', '', 9.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20141201170042241.jpg', TypeItem.PIZZA, 0),
  new Item(7, 'Capricciosa', '', 9.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150824183029117.png', TypeItem.PIZZA, 0),
  new Item(8, 'Quattro Stagioni', '', 8.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165730305.jpg', TypeItem.PIZZA, 0),
  new Item(9, 'Vegetariana', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20160513105930770.jpg', TypeItem.PIZZA, 0),
  new Item(10, 'Quattro Formaggi', '', 12, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20141201164929782.jpg', TypeItem.PIZZA, 0),
  new Item(11, 'Marinara', '', 14, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170803111857372.jpg', TypeItem.PIZZA, 0),
  new Item(12, 'Peperoni', '', 11.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20141201165800417.jpg', TypeItem.PIZZA, 0)
];
export const DESSERTS: Item[] = [
  new Item(13, 'Merguez', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20161007170256836.jpg', TypeItem.DESSERT, 10),
  new Item(14, 'Fromage de Chèvre', '', 11.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170317151535389.jpg', TypeItem.DESSERT, 10),
  new Item(15, 'Jambon-Fromage', '', 8, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170616121837409.jpg', TypeItem.DESSERT, 10),
  new Item(16, 'Mozza-Olives', '', 9, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170616122257885.jpg', TypeItem.DESSERT, 10),
  new Item(17, 'Margherita', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150511161151615.png', TypeItem.DESSERT, 10),
  new Item(18, 'Funghi', '', 9.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150511175221502.png', TypeItem.DESSERT, 10),
  new Item(19, 'Capricciosa', '', 9.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20170502155405035.jpg', TypeItem.DESSERT, 10),
  new Item(20, 'Quattro Stagioni', '', 8.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20160518182309411.jpg', TypeItem.DESSERT, 10)
];
export const BOISSONS: Item[] = [
  new Item(21, 'Merguez', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150223172011404.png', TypeItem.DRINK, 10),
  new Item(22, 'Fromage de Chèvre', '', 11.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150223172011404.png', TypeItem.DRINK, 10),
  new Item(23, 'Jambon-Fromage', '', 8, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150223173012706.png', TypeItem.DRINK, 10),
  new Item(24, 'Mozza-Olives', '', 9, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150209115802362.png', TypeItem.DRINK, 10),
  new Item(25, 'Margherita', '', 10.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20150223173855094.png', TypeItem.DRINK, 10),
  new Item(26, 'Funghi', '', 9.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20160801173618388.jpg', TypeItem.DRINK, 10),
  new Item(27, 'Capricciosa', '', 9.5, 0, 'https://cdn-catalog.pizzahut.fr/images/fr/20151124105634150.png', TypeItem.DRINK, 10)
];

export const PIZZACATEGORIES: Category[] = [
  new Category( 1, 'tous' ),
  new Category(2, 'base tomate' ),
  new Category(3, 'Base barbecue'),
  new Category(4, 'Base Crème Fraiche'),
  new Category(5, 'Sans Porc' ),
  new Category(6, 'Sans viande'),
  new Category(7, 'Nouveau')
];


export class Pizza {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public categoryId: number;
  public picture: string;

  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    categoryId: number,
    picture: string,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.categoryId = categoryId;
    this.picture = picture;
  }
}

export class Boisson {
  public id: number;
  public title: string;
  public price: number;
  public categoryId: number;
  public picture: string;
  public quantity: string;

  constructor(
    id: number,
    title: string,
    price: number,
    categoryId: number,
    picture: string,
    quantity: string,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.categoryId = categoryId;
    this.picture = picture;
    this.quantity = quantity;
  }
}

export class Dessert {
  public id: number;
  public title: string;
  public price: number;
  public categoryId: number;
  public picture: string;
  public nature: string;

  constructor(
    id: number,
    title: string,
    price: number,
    categoryId: number,
    picture: string,
    nature: string,
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.categoryId = categoryId;
    this.picture = picture;
    this.nature = nature;
  }
}
