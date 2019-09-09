import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Menu } from '../components/Menu';

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
  </Layout>
)

export default MenuPage
