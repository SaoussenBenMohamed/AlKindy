require("@babel/register")({
  extends: "./.babelrc",
})
const router = require("./sitemap-router").default
const Sitemap = require("react-router-sitemap").default
const axios = require("axios").default

async function generateSiteMap() {
  const filterConfig = {
    isValid: false,
    rules: [/\/admin/, /\*/],
  }

  let idMap = []
  //CALL API
  console.log("Starting SourceMap")
  console.log("Starting Axios Get")
  await axios
    .get("https://esprit.tn/api/events")
    .then(res => {
      res.data.map(ev => {
        if (ev.url && ev.url.startsWith("/actualite/")) {
          console.log(ev._id)
          idMap.push({ id: ev._id })
        }
      })
      console.log("Axios Get Success")
    })
    .catch(err => {
      console.log("Axios Get Error")
      console.log(err)
    })

  //GENERATE IDS ARRAY

  const paramsConfig = {
    "/actualite/:id": idMap,
  }
  console.log("Saving SourceMap")

  new Sitemap(router)
    .filterPaths(filterConfig)
    .applyParams(paramsConfig)
    .build("https://esprit.tn", { limitCountPaths: 5000 })
    .save("../frontend-client/public/sitemap.xml", "/public/")
}

generateSiteMap()
