import 'tailwindcss/tailwind.css';
import React from "react";
import App from "next/app";

import '../styles/globals.scss'
import '../styles/sidebar.scss'

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
        <Component {...pageProps} />
    )
  }
}
