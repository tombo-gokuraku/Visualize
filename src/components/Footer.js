/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"
import P from "./P"
import OuterLink from "./OuterLink"

function Footer() {
  return (
    <footer tw="flex flex-col items-center justify-center px-4 py-12 md:(px-6 py-16) xl:(px-8 py-20)">
      <P tw="text-center">
        © {new Date().getFullYear()}, Built with{" "}
        <OuterLink
          href="https://github.com/tombo-gokuraku/gatsby-starter-tailwind-lp"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-starter-tailwind-lp
        </OuterLink>
        .
        <br />
        Design:{" "}
        <OuterLink
          href="https://templated.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TEMPLATED
        </OuterLink>
        . 500px icon:{" "}
        <OuterLink
          href="https://fontawesome.com/icons/500px"
          target="_blank"
          rel="noopener noreferrer"
        >
          FontAwesome
        </OuterLink>
        . Demo Images:{" "}
        <OuterLink
          href="https://unsplash.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Unsplash
        </OuterLink>
        .
      </P>
    </footer>
  )
}

export default Footer
