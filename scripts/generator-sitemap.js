const sitemap = require("nextjs-sitemap-generator")
const path =  require("path")

sitemap({
    baseUrl: "staticnextjs.developright.co.uk",
    pagesDirectory: path.resolve(__dirname, "../src/pages/"),
    targetDirectory: path.resolve(__dirname, "../src/pages/"),
    ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "css", "icon"],
    ignoredPaths: [
        "404",
        "favicon",
        "index"
    ],
    extraPaths: [
        "/"
    ]
})