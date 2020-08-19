/** @jsx jsx */
import { jsx, Global } from "@emotion/core"
// import { ClassNames } from "@emotion/core"
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
    // backgroundColor: "rgba(0, 0, 0, 0.0)",
    // backgroundColor: "transparent",
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

// const overlayAnimationStyles = {
//   base: {
//     backgroundColor: "rgba(0, 0, 0, 0)",
//     transition: "background 500ms ease-in-out",
//   },
//   afterOpen: {
//     backgroundColor: "rgba(0, 0, 0, 0.8)",
//   },
//   beforeClose: {
//     backgroundColor: "rgba(0, 0, 0, 0)",
//   },
// }
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
      {/* <ClassNames> */}
      <Global
        styles={css`
          .overlay-base {
            background-color: rgba(0, 0, 0, 0);
            /* opacity: 0; */
            transition: background 500ms ease-in-out;
            /* transition: opacity 500ms ease-in-out; */
          }
          .overlay-after {
            background-color: rgba(0, 0, 0, 0.8);
            /* opacity: 1; */
          }
          .overlay-before {
            background-color: rgba(0, 0, 0, 0);
            /* opacity: 0; */
          }
        `}
      />
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={modalStyles}
        closeTimeoutMS={500}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        //css={[
        //  css`
        //    .ReactModal__Overlay {
        //      background-color: rgba(0, 0, 0, 0);
        //      transition: background 500ms ease-in-out;
        //    }

        //    .ReactModal__Overlay--after-open {
        //      background-color: rgba(0, 0, 0, 0.8);
        //    }

        //    .ReactModal__Overlay--before-close {
        //      background-color: rgba(0, 0, 0, 0);
        //    }
        //  `,
        //]}
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
      {/* </ClassNames> */}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  title: PropTypes.string,
}

export default Card
