export const CRAWL = (id = 1) => `
  query {
    film(id: "${id}") {
      openingCrawl
    }
  }`