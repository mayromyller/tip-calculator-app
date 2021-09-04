/* eslint-disable react/no-children-prop */
import {
  Grid,
  Flex,
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Button
} from '@chakra-ui/react'
import Image from 'next/image'

import Logo from '../assets/logo.svg'

export default function Home() {
  return (
    <Grid
      height="100vh"
      background="tip.lightCyan2"
      color="tip.darkCyan2"
      fontFamily="Space Mono"
      fontWeight="bold"
      gridTemplateRows="repeat(3, 1fr)"
    >
      <Flex alignItems="center" justifyContent="center">
        <Image src={Logo} alt="Logo" />
      </Flex>
      <Grid
        w="100%"
        maxW="1024px"
        m="0 auto"
        alignSelf="flex-start"
        background="tip.white"
        borderRadius={15}
        p={8}
        templateColumns="repeat(2, 1fr)"
        gridGap={6}
      >
        <Flex direction="column">
          <Text mb="8px" fontSize="1rem">
            Bill
          </Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input
              type="number"
              placeholder="0"
              background="tip.lightCyan"
              textAlign="right"
              color="tip.veryDark"
              fontWeight="bold"
              fontSize="1.75rem"
              focusBorderColor="tip.veryDark"
            />
          </InputGroup>

          <Box mt={8}>
            <Text mb="8px" fontSize="1rem">
              Select Tip %
            </Text>
            <Grid templateColumns="repeat(3, 1fr)" gridGap={4}>
              <Button
                background="tip.veryDark"
                _hover={{ bg: '#26C2AD' }}
                color="tip.white"
                fontSize="1.75rem"
                p={7}
              >
                5%
              </Button>
              <Button
                background="tip.veryDark"
                _hover={{ bg: '#26C2AD' }}
                color="tip.white"
                fontSize="1.75rem"
                p={7}
              >
                10%
              </Button>
              <Button
                background="tip.veryDark"
                _hover={{ bg: '#26C2AD' }}
                color="tip.white"
                fontSize="1.75rem"
                p={7}
              >
                15%
              </Button>
              <Button
                background="tip.veryDark"
                _hover={{ bg: '#26C2AD' }}
                color="tip.white"
                fontSize="1.75rem"
                p={7}
              >
                25%
              </Button>
              <Button
                background="tip.veryDark"
                _hover={{ bg: '#26C2AD' }}
                color="tip.white"
                fontSize="1.75rem"
                p={7}
              >
                50%
              </Button>
              <Input
                border="none"
                type="number"
                placeholder="Custom"
                background="tip.lightCyan"
                color="tip.darkCyan"
                fontWeight="bold"
                fontSize="1.75rem"
                pt={7}
                pb={7}
                focusBorderColor="tip.veryDark"
              />
            </Grid>
          </Box>

          <Box mt={8}>
            <Text mb="8px" fontSize="1rem">
              Number of People
            </Text>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input
                type="number"
                placeholder="0"
                background="tip.lightCyan"
                textAlign="right"
                color="tip.veryDark"
                fontWeight="bold"
                fontSize="1.75rem"
                focusBorderColor="tip.veryDark"
              />
            </InputGroup>
          </Box>
        </Flex>
        <Flex background="tip.veryDark" borderRadius={8}></Flex>
      </Grid>
    </Grid>
  )
}
