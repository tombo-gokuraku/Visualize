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
          css={[
            tw`fixed inset-0 z-50 flex items-center justify-center w-screen h-screen overflow-hidden outline-none focus:outline-none`,
            css`
              background-color: rgba(0, 0, 0, 0.75);
            `,
          ]}
          onClick={() => setShowModal(false)}
          onKeyDown={() => setShowModal(false)}
          role="button"
          tabIndex={0}
        >
          <button
            css={[
              tw`absolute z-10 text-4xl border-2 rounded-full`,
              css`
                top: 1rem;
                right: 1rem;
              `,
            ]}
            onClick={() => setShowModal(false)}
          >
            <MdClose />
          </button>
          <div css={[tw`relative w-full h-screen p-4 mx-auto my-0 rounded-lg`]}>
            <Image
              fluid={data.file.childImageSharp.fluid}
              css={[tw`h-full rounded-lg`]}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default ImageModal
