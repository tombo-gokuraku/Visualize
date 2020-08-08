/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = ({ wrapperStyle, alt, fluid }) => {
  return <Img fluid={fluid} alt={alt} css={wrapperStyle} />
}

Image.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string,
  wrapperStyle: PropTypes.array,
}

export default Image
