import tw, { styled, css } from "twin.macro"

const H4 = styled.h4(() => [
  tw`text-lg font-bold xl:text-2xl md:text-xl`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H4
