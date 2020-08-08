import tw, { styled, css } from "twin.macro"

const P = styled.p(() => [
  tw`text-sm font-normal xl:text-base md:text-base`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default P
