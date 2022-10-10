require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Bado Prod`,
    description: `A marketing agency specialized in digital and classical marketing`,
    siteUrl: `https://www.badoprod.com`,
    image: '/icon.png'
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, 
  {
    resolve:  "gatsby-plugin-sharp",
    options: {
      fluid: true,
    }
  },
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "cards_illustations",
      "path": "./src/media/cards_illustrations"
    },
    __key: "cards_illustations"
  },{
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "services_illustrations",
      "path": "./src/media/services_illustrations"
    },
    __key: "services_illustrations"
  },{
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/locals`,
      name: `locales`
    }
  },{
    resolve: `gatsby-source-sanity`,
    options: {
      watchMode: true,
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      token: process.env.SANITY_TOKEN,
      graphqlTag: 'default',
    },
  },{  
    resolve: `gatsby-source-instagram-all`,
    options: { access_token: process.env.IMIDIWAN_INSTAGRAM_ACCESS_TOKEN}
  }, {
    resolve: `gatsby-plugin-react-i18next`,
    options: {
      localeJsonSourceName: `locales`,
      languages: [`en`, `fr`, `ar`],
      defaultLanguage: `en`,
      siteUrl: `http://localhost:8000/`,
      i18nextOptions: {
        interpolation: {
          escapeValue: false 
        },
        keySeparator: false,
        nsSeparator: false
      },
    }
  }]

};