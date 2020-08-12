/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import tw, { css } from "twin.macro"
import Image from "gatsby-image"
import { MdClose } from "react-icons/md"

import { useStaticQuery, graphql } from "gatsby"
const query = graphql`
  {
    file(relativePath: { eq: "01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function ImageModal() {
  const data = useStaticQuery(query)
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>open modal</button>
      {showModal ? (
        // Modal
        <div
          tw="justify-center items-center flex overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none h-screen w-screen"
          onClick={() => setShowModal(false)}
          onKeyDown={() => setShowModal(false)}
          role="button"
          tabIndex={0}
        >
          <div
            css={[tw`relative w-full h-screen py-16 mx-auto my-0 rounded-lg`]}
          >
            <Image
              fluid={data.file.childImageSharp.fluid}
              css={[tw`h-full rounded-lg`]}
              imgStyle={{ objectFit: "contain" }}
            />
            <button
              css={[
                tw`absolute text-4xl border-2 rounded-full`,
                css`
                  top: 1rem;
                  right: 1rem;
                `,
              ]}
              onClick={() => setShowModal(false)}
            >
              <MdClose />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ImageModal
