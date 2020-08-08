/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"

import { GrTwitter, GrFacebook, GrInstagram, GrMail } from "react-icons/gr"
import { Fa500Px } from "react-icons/fa"

const socialLinkData = [
  {
    icon: <GrTwitter />,
    url: "https://twitter.com/home",
    ariaLabel: "go to twitter",
  },
  {
    icon: <GrFacebook />,
    url: "https://www.facebook.com/",
    ariaLabel: "go to facebook",
  },
  {
    icon: <GrInstagram />,
    url: "https://www.instagram.com/",
    ariaLabel: "go to instagram",
  },
  {
    icon: <Fa500Px />,
    url: "https://500px.com/",
    ariaLabel: "go to 500px",
  },
  {
    icon: <GrMail />,
    url: "mailto:hogepiyo@example.com",
    ariaLabel: "mail to hogepiyo@example.com",
  },
]

function SocialLinks() {
  return (
    <ul tw="flex items-center justify-center mb-8">
      {socialLinkData.map((link, index) => {
        return (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              <div tw="p-2 m-2 text-lg text-center text-white text-opacity-75 hover:(text-opacity-100 bg-opacity-50) transition-colors duration-200 ease-in-out rounded-full bg-white bg-opacity-25 border border-white border-opacity-75">
                {link.icon}
              </div>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialLinks
