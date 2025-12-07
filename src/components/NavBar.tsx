import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack
      padding='12px'
      spacing={4}
      bg='whiteAlpha.50'
      border='1px solid'
      borderColor='whiteAlpha.100'
      borderRadius='full'
      backdropFilter='blur(10px)'
      boxShadow='0 10px 40px rgba(0,0,0,0.35)'
    >
      <Image src={logo} boxSize='56px' borderRadius='full' />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
