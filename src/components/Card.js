/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import Modal from "react-modal"

import { MdClose } from "react-icons/md"
import Image from "gatsby-image"
import H2 from "../components/H2"

Modal.setAppElement("#___gatsby")

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    position: "relative",
    top: "auto",
    left: "auto",
    right: "auto",
    bottom: "auto",
    maxWidth: "100%",
    maxHeight: "100vh",
    height: "100vh",
    margin: "0 auto",
    padding: "1rem",
    border: 0,
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

function Card({ children, image, title }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center w-full mb-10 rounded-lg focus:outline-none`,
        css`
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
          background-color: rgba(255, 255, 255, 0.075);
        `,
      ]}
      onClick={() => setShowModal(true)}
      onKeyDown={event => {
        if (event.key === "Enter") setShowModal(true)
      }}
      role="button"
      tabIndex={0}
    >
      <div tw="w-full rounded-t-lg">
        <Image
          fluid={image}
          style={{
            borderTopRightRadius: "0.5rem",
            borderTopLeftRadius: "0.5rem",
          }}
        />
      </div>
      <H2>{title}</H2>
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={modalStyles}
      >
        <button
          css={[
            tw`absolute z-10 text-4xl text-white border-2 border-white rounded-full text-opacity-50 border-opacity-50`,
            css`
              top: 1rem;
              right: 1rem;
            `,
          ]}
          onClick={() => setShowModal(false)}
        >
          <MdClose />
        </button>
        <Image
          fluid={image}
          style={{ display: "inline-block", width: "100%", height: "100%" }}
          imgStyle={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Modal>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  title: PropTypes.string,
}

export default Card
