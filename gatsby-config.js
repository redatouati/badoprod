require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `badou_prod_vitrine`,
    siteUrl: `https://www.yourdomain.tld`
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
      "name": "products_images",
      "path": "./src/media/products_images"
    },
    __key: "products_images"
  },{
    resolve: `gatsby-source-sanity`,
    options: {
      watchMode: true,
      projectId: process.env.SANITY_PROJECT_ID,
      dataset: process.env.SANITY_DATASET,
      token: process.env.SANITY_TOKEN,
      graphqlTag: 'default',
    },
  },]

};