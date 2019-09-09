import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Contacts } from '../components/Contacts';

const ContactPage = () => (
  <Layout>
    <SEO title="Contacts" />
    <Contacts />
  </Layout>
)

export default ContactPage
