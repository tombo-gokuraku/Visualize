import React from "react"
import "twin.macro"

function Footer() {
  return (
    <footer tw="flex flex-col items-center justify-center px-4 py-12 md:(px-6 py-16) xl:(px-8 py-20)">
      <div tw="text-xs text-center">
        © {new Date().getFullYear()}, Built with{" "}
        <a
          href="https://github.com/tombo-gokuraku/gatsby-starter-tailwind-lp"
          target="_blank"
          rel="noopener noreferrer"
        >
          gatsby-starter-tailwind-lp
        </a>{" "}
        500px icon:{" "}
        <a
          href="https://fontawesome.com/icons/500px"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fontawesome
        </a>
      </div>
    </footer>
  )
}

export default Footer
