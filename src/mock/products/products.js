import GreyStar from "#svg/GreyStar";
import OrangeStar from "#svg/OrangeStar";

const allProducts = require("./product.json").map((e)=>({...e, 
  weight: 0,
  img: require(`./images/${e.img}.webp`),
  showRating(size) {
    return Array(this.rating)
      .fill(<OrangeStar size={size} />)
      .concat(Array(5 - this.rating).fill(<GreyStar size={size} />))
      .map((e, i) => {
        return { ...e, key: i };
      });
  }
}))

function filterByCategory(category) {
  if (category) return (n) => n.category === category && n
  else return (n) => n
}
function filterByPrice(price) {
  if (price) return (n) => n.price >= price.min && n.price <= price.max && n
  else return (n) => n
}

function filterByRating(rating) {
  if (rating) return (n) => n.rating >= rating && n
  else return (n) => n
}

const sort = new Map([
  ['Latest', (a, b) => {
    if (Date.parse(a.createdAt) < Date.parse(b.createdAt)) return -1
    if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) return 1
    if (Date.parse(a.createdAt) === Date.parse(b.createdAt)) return 0
  }],
  ['Newest', (a, b) => {
    if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) return -1
    if (Date.parse(a.createdAt) < Date.parse(b.createdAt)) return 1
    if (Date.parse(a.createdAt) === Date.parse(b.createdAt)) return 0
  }],
  ['Low to High', (a, b) => {
    if (+a.price < +b.price) return -1
    if (+a.price > +b.price) return 1
    if (+a.price === +b.price) return 0
  }],
  ['High to Low', (a, b) => {
    if (+a.price > +b.price) return -1
    if (+a.price < +b.price) return 1
    if (+a.price === +b.price) return 0
  }]
])

export default class ProductApi {
  getProductsCount(filters) {
    return allProducts
      .filter(filterByCategory(filters?.category))
      .filter(filterByPrice(filters?.price?.value))
      .filter(filterByRating(filters?.rating?.value))
      .sort(sort.get(filters?.sort))
      .length
  }
  getProducts(from, count, filters) {
    return allProducts
      .filter(filterByCategory(filters?.category))
      .filter(filterByPrice(filters?.price?.value))
      .filter(filterByRating(filters?.rating?.value))
      .sort(sort.get(filters?.sort))
      .slice(from, from + count)
  }
} 