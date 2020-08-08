import tw, { styled, css } from "twin.macro"

const H5 = styled.h5(() => [
  tw`text-base font-bold xl:text-xl md:text-lg`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H5
