import gql from 'graphql-tag'

export const CRAWL = (id) => gql`
  query {
    film(id: "${id}") {
      openingCrawl
    }
  }`