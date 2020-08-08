module.exports = {
  siteMetadata: {
    title: `gatsby-starter-tailwind-lp`,
    description: `Gatsby starter for landing page with Emotion and tailwind. Linting with ESLint and stylelint.`,
    author: `@tombo-gokuraku`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-emotion-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    "gatsby-plugin-eslint",
    "gatsby-plugin-emotion",
    "@danbruegge/gatsby-plugin-stylelint",
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerPort: "4000",
      },
    },
  ],
}
