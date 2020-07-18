module.exports = {
  siteMetadata: {
    title: `Fairway Phoenix`,
    description: `Financing the American Dream since 1996. Serving metro Phoenix with office locations in Scottsdale, Chandler, and the West Valley.`,
    author: `@robbykanyur`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        vars_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shared/shared-icon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
