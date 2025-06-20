module.exports = {
  siteMetadata: {
    title: "harga tiket pesawat murah",
    description:
      "Temukan Harga Tiket Pesawat Murah untuk Perjalanan Impian Anda!Ingin liburan ke destinasi favorit tanpa harus khawatir soal biaya? Kini saatnya Anda mewujudkan rencana perjalanan Anda dengan harga tiket pesawat murah yang kami tawarkan setiap hari! Kami bekerja sama dengan berbagai maskapai terpercaya untuk memastikan Anda mendapatkan pilihan penerbangan terbaik dengan harga yang ramah di kantong.Tak perlu menunggu promo besar-besaran, karena di sini, Anda bisa menemukan tiket murah ke berbagai rute domestik maupun internasional kapan saja. Cukup beberapa klik, bandingkan harga, pilih jadwal sesuai kebutuhan, dan pesan langsung dengan mudah. Semua proses cepat, aman, dan nyaman.Jadi, tunggu apa lagi? Wujudkan perjalanan impian Anda sekarang juga bersama kami. Manfaatkan kesempatan untuk menikmati penerbangan berkualitas dengan harga tiket pesawat murah, hanya di satu tempat yang selalu mengutamakan kenyamanan dan kepuasan pelanggan.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
