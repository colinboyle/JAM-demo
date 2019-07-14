import React from "react"
import { Link } from "gatsby"

import Nav from "../components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Featured from "../components/featured"
import Home from "../components/home"
import Footer from "../components/footer"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <Featured />
    <Home />
    <Link to="/blog" className="viewMore">
      View More
    </Link>
    <Footer />
  </Layout>
)

export default IndexPage
