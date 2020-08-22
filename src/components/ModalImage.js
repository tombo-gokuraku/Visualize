/** @jsx jsx */
import { jsx, ClassNames } from "@emotion/core"
import { useState } from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import Modal from "react-modal"
import CloseButton from "./CloseButton"

Modal.setAppElement("#___gatsby")

function ModalImage({ showModal, setShowModal, image }) {
  const [contentRect, setContentRect] = useState({})
  return (
    <ClassNames>
      {({ css, cx }) => (
        <Modal
          portalClassName={css`
            & .overlay-base {
              width: 100%;
              height: 100%;
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
              outline: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            & .overlay-after {
              background-color: rgba(0, 0, 0, 0.8);
              opacity: 1;
            }
            & .overlay-before {
              background-color: rgba(0, 0, 0, 0);
              opacity: 0;
            }
            & .content-base {
              position: relative;
              top: auto;
              left: auto;
              right: auto;
              bottom: auto;
              margin: 0 auto;
              border: 0;
              outline: 0;
              background-color: transparent;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
            }

            .content-after {
              width: calc(${contentRect.height}px * ${image.aspectRatio});
              height: calc(${contentRect.width}px / ${image.aspectRatio});
              max-width: 100%;
              max-height: 100%;
            }
          `}
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
            setContentRect(this.contentRef.getBoundingClientRect())
          }}
        >
          <CloseButton onClick={() => setShowModal(false)} />
          <Image
            fluid={{ ...image, sizes: "" }}
            style={{
              width: "100%",
              height: "100%",
            }}
            imgStyle={{ objectFit: "contain", width: "auto", height: "100%" }}
          />
        </Modal>
      )}
    </ClassNames>
  )
}

ModalImage.propTypes = {
  children: PropTypes.element,
  image: PropTypes.object,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func,
}

export default ModalImage
