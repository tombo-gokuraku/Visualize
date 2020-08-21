/** @jsx jsx */
import { jsx, Global } from "@emotion/core"
import { useState } from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import Modal from "react-modal"

import { MdClose } from "react-icons/md"
import Image from "gatsby-image"

Modal.setAppElement("#___gatsby")

function ModalImage({ showModal, setShowModal, image }) {
  const [contentHeight, setContentHeight] = useState(0)
  return (
    <div>
      {/* Modalのためのスタイルをグローバルに追加する */}
      <Global
        styles={css`
          .overlay-base {
            max-width: 100%;
            max-height: 100vh;
            height: 100vh;
            padding: 1rem;
            position: fixed;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0);
            opacity: 0;
            transition-property: background-color, opacity;
            transition-duration: 200ms;
            transition-timing-function: ease-in-out;
          }
          .overlay-after {
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 1;
          }
          .overlay-before {
            background-color: rgba(0, 0, 0, 0);
            opacity: 0;
          }
          .content-base {
            position: relative;
            top: auto;
            left: auto;
            right: auto;
            bottom: auto;
            margin: 0 auto;
            border: 0;
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: auto;
          }

          /* this occurs error. Because the global style is not dynamically changed by state? */
          /* .content-after { */
          /*   width: calc(${contentHeight}px * ${image.aspectRatio}); */
          /* } */
        `}
      />

      <Modal
        isOpen={showModal}
        onRequestClose={e => {
          e.stopPropagation()
          setShowModal(false)
        }}
        shouldCloseOnOverlayClick={true}
        closeTimeoutMS={200}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        contentRef={node => {
          this.contentRef = node
        }}
        onAfterOpen={() => {
          setContentHeight(this.contentRef.getBoundingClientRect().height)
        }}
      >
        <button
          css={[
            tw`fixed z-10 text-4xl text-white border-2 border-white rounded-full text-opacity-50 border-opacity-50 hover:(text-opacity-75 border-opacity-75)`,
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
          style={{
            // Calculate the width to maintain the aspect ratio of the modal content height
            width: `calc(${contentHeight}px * ${image.aspectRatio})`,
            height: "100%",
          }}
          imgStyle={{ objectFit: "contain", width: "auto", height: "100%" }}
        />
      </Modal>
    </div>
  )
}

ModalImage.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
}

export default ModalImage
