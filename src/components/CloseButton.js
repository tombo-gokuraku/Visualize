/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import { MdClose } from "react-icons/md"

function CloseButton({ onClick }) {
  return (
    <button
      css={[
        css`
          top: 0.5rem;
          right: 0.5rem;
        `,

        tw`absolute z-10 focus:outline-none text-4xl text-white border-2 border-white rounded-full text-opacity-75 border-opacity-75 hover:(text-opacity-100 border-opacity-100)`,
      ]}
      onClick={onClick}
    >
      <MdClose />
    </button>
  )
}
CloseButton.propTypes = {
  onClick: PropTypes.func,
}

export default CloseButton
