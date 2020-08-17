/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import tw, { css } from "twin.macro"
import Image from "gatsby-image"
import { MdClose } from "react-icons/md"
import Modal from "react-modal"

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

Modal.setAppElement("#___gatsby")

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "0 auto",
    padding: 0,
    border: 0,
  },
}

function ImageModal() {
  const data = useStaticQuery(query)
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <button onClick={() => setShowModal(true)}>open modal</button>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={modalStyles}
      >
        <Image
          fluid={data.file.childImageSharp.fluid}
          style={
            {
              //overflow: "hidden",
              //height: "100%",
              //maxHeight: "100%",
              //display: "inline-block",
            }
          }
          //css={[
          //  tw`inline-block rounded-lg`,
          //  css`
          //    &::after {
          //      content: "x";
          //      position: absolute;
          //      top: 0;
          //      right: 0;
          //    }
          //  `,
          //]}
          imgStyle={{
            objectFit: "contain",
            width: "auto",
            height: "100%",
          }}
        />
      </Modal>
    </div>
  )
}

export default ImageModal
