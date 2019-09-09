/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from "./Header";
import { Footer } from "./Footer"

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap');
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap');
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  p {
    margin: 0;
  }
`

const Layout = ({ children }) => (
    <>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
