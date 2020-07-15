import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import { Container } from "../components/Grid"
import ProductList from "../components/Common/ProductList"

export default function IndexPage({
  data: {
    products: { edges, totalCount },
    productListTitle,
  },
}) {
  const products = edges.map(({ product: { frontmatter, fields } }) => ({
    ...frontmatter,
    ...fields,
  }))
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Hero />
        <ProductList
          productListTitle={productListTitle.frontmatter}
          products={products}
          totalCount={totalCount}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    products: allMarkdownRemark(
      filter: { frontmatter: { slug: { ne: null } } }
    ) {
      edges {
        product: node {
          frontmatter {
            slug
            name
            description
            excerpt
            price
            tag
            image
          }
          fields {
            path: slug
          }
        }
      }
      totalCount
    }
    productListTitle: markdownRemark(frontmatter: { title: { ne: "" } }) {
      frontmatter {
        title
        lead
      }
    }
  }
`
