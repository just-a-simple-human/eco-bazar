import GreyStar from './sprites/GreyStar'
import OrangeStar from './sprites/OrangeStar'

class Product {
    constructor(id, name, img, cost, rating) {
      this.id = id
      this.name = name
      this.img = img
      this.cost = cost
      this.rating = rating
      this.weight = 1
    }
    showRaiting (size) {
      let productRaiting = Array(5).fill(false)
      for (let i = 0; i < this.rating; i++) {
        productRaiting[i] = true
      }
      productRaiting = productRaiting.map((element, index) => 
      element ? <OrangeStar size={size} key={index}/> : <GreyStar size={size} key={index}/>)
      return productRaiting
  }
}

export const greenApple = new Product('1', 'Green Apple', require('./images/products/GreenApple.png'), 14.99, 4)
export const chaniseCabbage = new Product('1', 'Chanise Cabbage', require('./images/products/ChaniseCabbage.png'), 14.99, 4)
export const greenLettuce = new Product('1', 'Green Lettuce', require('./images/products/GreenLettuce.png'), 14.99, 4)
export const greenChili = new Product('1', 'Green Chili', require('./images/products/GreenChili.png'), 7.99, 4)
export const corn = new Product('1', 'Corn', require('./images/products/Corn.png'), 14.99, 4)
export const bigPotatos = new Product('1', 'Corn', require('./images/products/BigPotatos.png'), 14.99, 4)
export const eggplant = new Product('1', 'Corn', require('./images/products/Eggplant.png'), 14.99, 4)
export const freshCauliflower = new Product('1', 'Corn', require('./images/products/FreshCauliflower.png'), 14.99, 4)
export const greenCucumber = new Product('1', 'Corn', require('./images/products/GreenCucumber.png'), 14.99, 4)

class Category {

  constructor (name, icon, productsCount) {

    this.name = name
    this.icon = icon
    this.productsCount = productsCount

  }

}

export const vegetables = new Category('Vegetables', require('./images/categories/vegetable.png'), 228)
export const freshFruit = new Category('Fresh Fruit', require('./images/categories/fruits.png'), 228)
export const fish = new Category('Fish', require('./images/categories/fish.png'), 228)
export const meat = new Category('Meat', require('./images/categories/meat.png'), 228)
export const softDrinks = new Category('Soft Drinks', require('./images/categories/soft-drink.png'), 228)
export const snacks = new Category('Snacks', require('./images/categories/snacks.png'), 228)

class Testimonial {

  constructor(clientName, clientImg, comment, rating) {
    this.clientName = clientName
    this.clientImg = clientImg
    this.comment = comment
    this.rating = rating
  }

  getRating(size) {
    let clientRaiting = Array(5).fill(false)
      for (let i = 0; i < this.rating; i++) {
        clientRaiting[i] = true
      }
      clientRaiting = clientRaiting.map((element, index) => 
      element ? <OrangeStar size={size} key={index}/> : <GreyStar size={size} key={index}/>)
      return clientRaiting 
    }
}

export const RobertFox = new Testimonial(
  'Robert Fox',
  require('./images/clients/RobertFox.png'),
  'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  5
)

export const DianneRussell = new Testimonial(
  'Dianne Russell',
  require('./images/clients/DianneRussell.png'),
  'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  5
)

export const EleanorPena = new Testimonial(
  'Eleanor Pena',
  require('./images/clients/EleanorPena.png'),
  'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
  5
)


