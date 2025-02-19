import { SitemapStream, streamToPromise } from "sitemap";

import fs from "fs";


const sitemap = new SitemapStream({ hostname: "https://amptronelectric.com" });

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/about", changefreq: "weekly", priority: 0.8 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.6 });
sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("public/sitemap.xml", data);
  console.log("✅ Sitemap successfully created!");
});
