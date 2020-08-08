<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby emotion tailwind starter
</h1>

## Features

- style with Emotion and tailwind
- lint with ESLint and stylelint

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new emotion_tailwind https://github.com/tombo-gokuraku/gatsby-starter-tailwind-lp
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd emotion_tailwind/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `emotion_tailwind` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look files and directories you'll see in a Gatsby project.

    ├── node_modules
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelintrc.js
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── src
    │ └── styles
    │   └── breaks.js
    └── tailwind.config.js

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/).

6.  **`.stylelintrc.js`**: This is a configuration file for [stylelint](https://stylelint.io/).

7.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

10. **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

11. **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project. `twin.macro` settings is also written here.

    ```json
    "babelMacros": {
      "twin": {
        "config": "./tailwind.config.js",
        "preset": "emotion",
        "hasSuggestions": true,
        "debug": false
      }
    }
    ```

14. **`README.md`**: A text file containing useful reference information about your project.

15. **`./src/styles/breaks.js`**: A utility object for adding breakpoints. Use it in the following way. These breakpoints follow the settings in tailwind.config.js.

    ```jsx
    import { mq } from "../styles/breaks"
    import tw, { css } from "twin.macro"

    // ...
    ;<div
      css={[
        css`
          background-color: pink;
          ${mq["sm"]} {
            background-color: orange;
          }
          ${mq["md"]} {
            background-color: yellow;
          }
          ${mq["lg"]} {
            background-color: lightgreen;
          }
          ${mq["xl"]} {
            background-color: lightblue;
          }
        `,
      ]}
    >
      breakpoints test
    </div>
    ```

16. **`tailwind.config.js`**: A tailwind configuration file.

## Usage

This starter can style with twin.macro as follows.

### use with tw prop

```jsx
import "twin.macro"
;<button tw="px-4 py-2 border-4 border-green-400 border-solid rounded focus:outline-none">
  use tw prop
</button>
```

### use with tw tag

```jsx
import tw from "twin.macro"

const Button = tw.button`
   bg-teal-100
   py-2
   px-4
   rounded
   border-solid
   border-teal-400
   border-4
   focus:outline-none
`
 <Button>tw tag</Button>
```

extend tw tag components

```jsx
const ExtendedButton = tw(Button)`
  text-orange-500
`

<ExtendedButton>extended button</ExtendedButton>
```

### use with css tag in css prop

```jsx
import tw, { css } from "twin.macro"
;<a
  href="/"
  css={[
    tw`inline-block text-base text-black`,
    css`
      &::after {
        content: "";
        display: block;
        margin-top: 2px;
        height: 2px;
        background-color: #b2f5ea;
      }
    `,
  ]}
>
  css tag in css prop
</a>
```

### use with styled component

```jsx
import tw, {styled} from "twin.macro"

const StyledButton = styled.button(({ large }) => [
  tw`px-4 py-2 bg-teal-200 rounded`,
  large ? tw`text-xl` : tw`text-base`,
])

<StyledButton>normal</StyledButton>
<StyledButton large>large</StyledButton>
```

For further details of twin.macro usage, please visit [official documents](https://github.com/ben-rogerson/twin.macro/blob/master/docs/emotion/gatsby.md) or [my blog](https://tombomemo.com/gatsby-emotion-tailwind-setup/).

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tombo-gokuraku/gatsby-starter-emotion-tailwind)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/tombo-gokuraku/gatsby-starter-emotion-tailwind)
