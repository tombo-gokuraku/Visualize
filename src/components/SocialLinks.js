/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"

import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr"

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
              <div tw="p-2 m-2 text-lg text-center text-primary  hover:text-secondary transition-colors duration-200 ease-in-out">
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
