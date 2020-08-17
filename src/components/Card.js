/** @jsx jsx */
import { jsx } from "@emotion/core"
// import React, { useState } from "react"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"

import Image from "gatsby-image"
import H2 from "../components/H2"

function Card({ children, image, title }) {
  return (
    <div
      css={[
        tw`flex flex-col items-center justify-center w-full mb-10 rounded-lg`,
        css`
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
          background-color: rgba(255, 255, 255, 0.075);
        `,
      ]}
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
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  image: PropTypes.object,
  title: PropTypes.string,
}

export default Card
