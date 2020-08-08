import tw, { styled } from "twin.macro"

const Button = styled.a(({ reverse }) => [
  tw`inline-block w-full px-4 py-1 text-xl font-bold text-center text-gray-900 no-underline whitespace-no-wrap align-middle cursor-pointer bg-primary rounded-md hover:bg-primary-300 active:bg-primary-700 duration-200 transition-colors ease-in-out md:w-auto`,
  reverse &&
    tw`bg-white text-primary-dark hover:bg-primary-100 active:bg-primary-200`,
])
export default Button
