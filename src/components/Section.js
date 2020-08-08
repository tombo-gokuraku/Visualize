import tw, { styled } from "twin.macro"

const Section = styled.section(({ reverse }) => [
  tw`px-4 py-12 md:(py-16) xl:(py-20) bg-gray-100 text-base text-gray-900`,
  reverse && tw`text-gray-900 bg-primary`,
])

export default Section
