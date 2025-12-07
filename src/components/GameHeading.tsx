import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;

  return (
    <Heading
      as='h1'
      marginY={5}
      fontSize='5xl'
      bgGradient="linear(to-r, magenta.300, magenta.500)"
      bgClip="text"
    >
      {heading}
    </Heading>
  )
}

export default GameHeading
