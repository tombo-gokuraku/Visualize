import tw, { styled } from "twin.macro"

const Card = styled.div(() => [
  tw`flex flex-col items-center justify-center w-full mb-10 rounded-lg sm:w-2/3 md:(w-1/2 mx-2) lg:w-1/4`,
])
export default Card
