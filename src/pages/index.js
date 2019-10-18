import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Layout from "../layouts/index";
import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Resume />
    <Portfolio />
    <Testimonials />
    <Footer />
  </Layout>
);

export default IndexPage;
