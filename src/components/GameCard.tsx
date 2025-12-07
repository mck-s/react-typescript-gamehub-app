import { Card, CardBody, Heading, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Game } from '../hooks/useGames'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'

interface Props {
  game: Game
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      overflow="hidden"
      border="1px solid"
      borderColor="whiteAlpha.100"
      bg="whiteAlpha.50"
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-6px)",
        borderColor: "magenta.400",
        boxShadow: "0 20px 50px rgba(255,53,184,0.2)",
      }}
    >
      <Image src={getCroppedImageUrl(game.background_image)} borderBottom="1px solid" borderColor="whiteAlpha.200" />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard
