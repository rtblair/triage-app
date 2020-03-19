# Triage Gatsby App

This application helps health tech people to conduct a preliminary questionnaire with would-be patients. 

This aims to provide support to folks who are worried about their health, but at the same time relieve health systems from pressure and overload.

## Collections

This process assumes that the results of the test will be the result of a combination of answers and not a result of the visitor's series of questions. For this demo, the person's answer on all four questions can have 6 results depending on their nswers to each question.

The way this solution goes about it, in order to make it available in gatsby, is to use a result code taken from the questions, and submitting that to a result generator. The result generator will then match the result code submitted by the user and churns out the result - if it finds any matches. The result generator matches the result code via regular expression.

**For Example**, the visitor answers YES for Question 1, and a NO-YES-NO to questions 2, 3, and 4, respectively. Depending on the result code associated in each question, assuming that YES gives you a result code `Y` and NO gives you a result code `N`, the question series would then churn out values `YNYN`. This will then be submitted to the result generator where it will use regular expression to match this with the matching result. In this example, `YNYN` will have a result that has result code `[YN]NY.`. If that's the case, the result generator will show the corresponding result.


### Question

This collection contains all the question series. Most important aspect of this is the `answers` list field. Under the `answers` list field, you have the following:

* `answer` - text that will be shown to the person
* `resultCode` - the code that will be added to the result code that will be submitted to the result generator
* `nextQuestion` - this links the question to another question. This will send the user to another question OR have the user submit it to the result generator

!!! Don't delete `submit-to-result-generator.md`

### Result

This pertains to the set of results available to the result generator. As mentioned before, the result generator uses regular expression to match the person's answers to the proper result. Pertinent fields in the result is the `resultCode` as this is where the admin would have to put the regular expression to match answers to a result.


### Tip

For best results, work backwards!

## App Setup

1. Fork this, and Deploy Netlify App

2. Setup your Questions and Results

3. Update/change social media tags

4. Replace image assets: 

    - static/img/favicon-16x16 
    - static/img/favicon-32x32.png
    - static/img/apple-touch-icon.png
    - static/img/safari-pinned-tab.svg
    - static/img/og-image.jpg

## Prerequisites

- Node (I recommend using v8.2.0 or higher)
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Getting Started (Recommended)

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. The example here is the Kaldi coffee company template (adapted from [One Click Hugo CMS](https://github.com/netlify-templates/one-click-hugo-cms)). Use the button below to build and deploy your own copy of the repository:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/nyccto-rapicastillo/triage-app&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

### Access Locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site:

```
$ npm run build
$ netlify dev # or ntl dev
```

## Getting Started (Without Netlify)

```
$ gatsby new [SITE_DIRECTORY_NAME] https://github.com/netlify-templates/gatsby-starter-netlify-cms/
$ cd [SITE_DIRECTORY_NAME]
$ npm run build
$ npm run serve
```

### Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.

# CONTRIBUTING

Contributions are always welcome, no matter how large or small. Before contributing,
please read the [code of conduct](CODE_OF_CONDUCT.md).
