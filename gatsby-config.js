/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-i18next`,
      options: {
        availableLngs: ['en', 'el'],
        fallbackLng: 'en',
        saveMissing: true,
        debug: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
