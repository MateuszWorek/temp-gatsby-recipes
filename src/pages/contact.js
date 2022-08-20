import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import SEO from "../components/SEO"

const contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              repellat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sed
              quidem rem quas cupiditate numquam?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laudantium quisquam quaerat ad quia sed harum eos consectetur,
              iure eius itaque?
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              action="https://formspree.io/f/mpzkjjgl"
              method="POST"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your name</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default contact
