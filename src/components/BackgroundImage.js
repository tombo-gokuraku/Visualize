import React from "react"
import Image from "gatsby-image"
import PropTypes from "prop-types"

const BackgroundImage = ({
  children,
  fluid,
  fixed,
  parentStyle,
  style,
  imgStyle,
  alt,
}) => {
  return (
    <div style={parentStyle}>
      {children}
      <Image fluid={fluid} style={style} imgStyle={imgStyle} alt={alt} />
    </div>
  )
}

BackgroundImage.defaultProps = {
  style: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "-1",
  },
  imgStyle: {
    objectFit: "cover",
    objectPosition: "center center",
  },
  parentStyle: {
    position: "relative",
  },
}

BackgroundImage.propTypes = {
  children: PropTypes.node,
  fluid: PropTypes.object,
  fixed: PropTypes.object,
  style: PropTypes.object,
  parentStyle: PropTypes.object,
  imgStyle: PropTypes.object,
  alt: PropTypes.string,
}

export default BackgroundImage
