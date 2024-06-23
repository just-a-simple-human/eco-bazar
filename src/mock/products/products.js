const allProducts = require("./product.json")

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
  ["Latest", (a, b) => {
    if (Date.parse(a.createdAt) < Date.parse(b.createdAt)) return -1
    if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) return 1
    if (Date.parse(a.createdAt) === Date.parse(b.createdAt)) return 0
  }],
  ["Newest", (a, b) => {
    if (Date.parse(a.createdAt) > Date.parse(b.createdAt)) return -1
    if (Date.parse(a.createdAt) < Date.parse(b.createdAt)) return 1
    if (Date.parse(a.createdAt) === Date.parse(b.createdAt)) return 0
  }],
  ["Low to High", (a, b) => {
    if (+a.price < +b.price) return -1
    if (+a.price > +b.price) return 1
    if (+a.price === +b.price) return 0
  }],
  ["High to Low", (a, b) => {
    if (+a.price > +b.price) return -1
    if (+a.price < +b.price) return 1
    if (+a.price === +b.price) return 0
  }]
])

export default class ProductApi {
  getProductsCount(filters) {
    return allProducts
      .filter(filterByCategory(filters?.category))
      .filter(filterByPrice(filters?.price))
      .filter(filterByRating(filters?.rating))
      .sort(sort.get(filters?.sort))
      .length
  }
  getProducts(from, count, filters) {
    return allProducts
      .filter(filterByCategory(filters?.category))
      .filter(filterByPrice(filters?.price))
      .filter(filterByRating(filters?.rating))
      .sort(sort.get(filters?.sort))
      .slice(from, from + count)
  }
} 