export const CRAWL = `
query Crawl($filmId: ID) {
  film(id: $filmId) {
    openingCrawl
  }
}`