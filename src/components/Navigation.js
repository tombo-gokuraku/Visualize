/** @jsx jsx */
import { jsx } from "@emotion/core"
import "twin.macro"
import { Link } from "gatsby"

import { AiFillHome, AiOutlineUnorderedList } from "react-icons/ai"
import { MdAttachMoney, MdContactMail } from "react-icons/md"

const navigationLinkData = [
  {
    icon: <AiFillHome />,
    path: "/",
    text: "home",
  },
  {
    icon: <AiOutlineUnorderedList />,
    path: "#features",
    text: "features",
  },
  {
    icon: <MdAttachMoney />,
    path: "#pricing",
    text: "pricing",
  },
  {
    icon: <MdContactMail />,
    path: "#contact",
    text: "contact",
  },
]

function Navigation() {
  return (
    <ul tw="flex items-center justify-around bg-primary fixed bottom-0 left-0 w-full md:(static bottom-auto w-auto)">
      {navigationLinkData.map((link, index) => {
        return (
          <li key={index}>
            <Link
              href={link.path}
              tw="flex flex-col justify-center items-center text-gray-900 text-base sm:text-lg text-center hover:text-secondary transition-colors duration-200 ease-in-out p-2 md:(mx-2 p-0)"
            >
              <div tw="md:hidden">{link.icon}</div>
              <span>{link.text}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation
