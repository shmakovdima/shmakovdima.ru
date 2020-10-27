module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-yandex-metrika',
      options: {
        // The ID of yandex metrika.
        trackingId: 28400231,
        webvisor: true,
        trackHash: true,
        afterBody: true,
        defer: false,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-59637888-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        defer: false,
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'shmakovdima.ru',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dmitrii Shmakov\'s website',
        short_name: 'shmakovdima',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#02aab0',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
