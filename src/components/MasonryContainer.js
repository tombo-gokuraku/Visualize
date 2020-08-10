/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import tw, { css } from "twin.macro"
import { mq } from "../styles/breaks"

function MasonryContainer({ children }) {
  return (
    <div
      css={[
        tw`mx-auto my-0`,
        css`
          column-count: 1;
          ${mq["md"]} {
            column-count: 3;
          }
          column-gap: 1.5rem;
          & > * {
            break-inside: avoid;
          }
        `,
      ]}
    >
      {children}
    </div>
  )
}

MasonryContainer.propTypes = {
  children: PropTypes.node,
}

export default MasonryContainer
