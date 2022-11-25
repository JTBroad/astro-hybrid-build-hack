# astro-hybrid-build-hack
Hacky way to get a hybrid build out of a Astro server configuration.

Hello, Hybrid build!
====================

This is a test example to demonstrate a hack to get some sort of hybrid build going for server based astro projects. There is a much more indepth and intelligent RFC ongoing that aims to achieve similar means. Check it out [here!](https://github.com/withastro/rfcs/pull/362)

This is just for fun and I have no idea the side effects yet. I plan to wait till the official hybrid feature to be released to use any of this in prod. But if you are curious like me feel free to pull this down and play with what interacting with a build with both server and static files served up.

You can check out what I did to do this inside the package.json and \_hybrid\_hack file areas. But in short I have it building twice. First as the server and then as a static page. The static page astro config is located in \_hybrid\_hack folder but it mostly piggybacks off the main config.

To build for yourself follow this list:

*   Grab the project off github: [Link](https://github.com/JTBroad/astro-hybrid-build-hack)
*   Open terminal inside the project and run `npm run install`
*   Then after that finishes run `npm run buildHybrid`
*   Finally run `node ./dist/server/entry.mjs`

Now you are up and running!

### Configuration

Inside the base astro.config.mjs file you will find the HybridBuild integration. Inside here you will find an array of paths that tell the integration which paths to make static. If a path or file is not listed here it falls back to the server generated version. It is important to note this is not related to any particular way discussed in the official RFC. It's just a quick and dirty way to get something working.

### Notes

Currently all pages in this project are setup to be served static except for an api endpoint. Which you normally only do in server land.

Check out that api endpoint at path `/api/cat-facts` or [here](https://astro-hybrid.jtownblast.com/api/cat-facts). This api response will grab a new response from the catfacts public api on each page load.

It's doing server stuff with the astro node integration. Other server integrations will build out the dist folder differently and likely not work out of the box with this. If you want to try those you can specify the outDir of the static build in `_hybrid_hack/astro-static.config.mjs`

##### 

Cheers! ~ JTownBlast
