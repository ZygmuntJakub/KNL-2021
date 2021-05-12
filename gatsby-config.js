module.exports = {
    siteMetadata: {
        title: "KNL 2021",
        siteUrl: `http://www.kinonalezakach.pl`,
    },
    plugins: [
        "gatsby-plugin-netlify-cms",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-80786318-1",
            },
        },
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/content`,
            },
        },
        `gatsby-transformer-remark`,
    ],
};
