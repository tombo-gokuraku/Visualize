/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "twin.macro"

const Title = ({ siteTitle }) => {
  return (
    <h1 tw="text-3xl">
      <Link to="/" tw="text-gray-900 no-underline">
        {siteTitle}
      </Link>
    </h1>
  )
}

Title.propTypes = {
  siteTitle: PropTypes.string,
}

export default Title
