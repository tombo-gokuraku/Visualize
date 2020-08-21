/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

import Image from "gatsby-image"
import H2 from "./H2"
import ModalImage from "./ModalImage"

function Card({ children, image, title }) {
  const [showModal, setShowModal] = useState(false)
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center w-full mb-10 rounded-lg focus:outline-none`,
        css`
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
          background-color: rgba(255, 255, 255, 0.075);
          &:hover {
            background-color: rgba(255, 255, 255, 0.25);
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25),
              0 0 0.5em 0 #ff6382;
          }
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
      <ModalImage
        showModal={showModal}
        setShowModal={setShowModal}
        image={image}
      />
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  title: PropTypes.string,
}

export default Card
