import React from 'react';
import { Box, Heading } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { GitHubIcon } from 'styles/theme';

const Navbar = () => {
  
  return (
    <>
      <Box as="header" pos="relative" display="flex" alignItems="center" justifyContent="space-between" w="100%" height="60px" p="10px 30px" borderBottom="1px solid #BBB">
        <a href="/">
          <Heading as="h1" fontSize="xl">Email Signature Generator | Web App</Heading>
        </a>
        <Box>
          <a href="/">
            <Icon as={GitHubIcon} w={6} h={6} mr="20px" />
          </a>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
      </Box>
    </>
  )

}

export default Navbar