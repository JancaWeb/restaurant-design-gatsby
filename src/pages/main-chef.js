import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MainChef } from '../components/MainChef';

const MainChefPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainChef />
  </Layout>
)

export default MainChefPage
