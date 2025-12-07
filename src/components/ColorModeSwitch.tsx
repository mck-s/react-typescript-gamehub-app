import { HStack, Switch, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const {toggleColorMode, colorMode} = useColorMode();
  const labelColor = useColorModeValue('ink.700', 'magenta.100');

  return (
    <HStack>
      <Switch colorScheme='magenta' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace='nowrap' color={labelColor}>Dark Mode</Text>
    </HStack>
  )
}

export default ColorModeSwitch
