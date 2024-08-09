import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    // ReactGA.event({
    //   category: 'hover',
    //   action: event,
    // })
  }
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover isLazy placement="right" trigger="hover">
            <PopoverTrigger>
              <chakra.span
                color="button1"
                cursor="help"
                onMouseOver={() => handleHover(`about_${text}`)}
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent color="white" bg="secondary" borderColor="button1">
              <PopoverArrow bg="button1" />
              <PopoverBody color="textPrimary" fontSize="sm">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              💫 Meet the DEV Alchemist: Turning Code into Gold! 🧙‍♂️💻### <br />
              <br /> I really liked to build stuff using{' '}
              {/* <MoreInfo
                content="I used to make games without code using RPG Maker VX, and build a simple website with blogspot back in primary school."
                text="no-code tools"
              /> */}
              In the mystical realm of software development, where bugs lurk in
              every corner 🐛 and deadlines loom like ancient curses ⏳, there
              exists a legendary figure known as the DEV Alchemist. With a
              keyboard as his wand 🎹 and caffeine as his elixir ☕, this Full
              Stack wizard brews up magic from mere lines of code.
              {/* <MoreInfo
                content={
                  <Image
                    w={306}
                    h={102}
                    alt="linkedin Qneksi"
                    src="https://imagizer.imageshack.com/a/img923/541/alNCHs.png"
                  />
                }
                text="Recruitment Company"
              /> */}
              {/* and a */}
              {/* <MoreInfo
                content={
                  <Image
                    w={306}
                    h={102}
                    alt="linkedin Qasir"
                    src="https://imagizer.imageshack.com/a/img922/6137/c0cugn.png"
                  />
                }
                text="SaaS Company"
              /> */}
              I'm interested in building something awesome with code and
              automate tasks with code, currently focused on
              <MoreInfo
                content="Building Web and Mobile Applications using Javascript Frameworks (Node js, and Next.js)"
                text="Web & Mobile Development,"
              />
              <MoreInfo
                content="I really like the idea of contributing new features to open source projects that can be useful to other people."
                text="Open Source"
              />
              .
              {/* <MoreInfo
                content="Competitive Programming helped me to sharpen my Algorithms and Problem Solving skills."
                text="Competitive Programming"
              /> */}
              <br />
              <br />
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex align="center" justify="center">
            <Box
              pos="relative"
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                pos="absolute"
                zIndex={3}
                top="0px"
                right={{ base: '-32px', lg: '-64px' }}
                w={{ base: '100px', lg: '150px' }}
                alt=""
                filter="invert(0.1)"
                src="https://svgsilh.com/svg/26432.svg"
              />
              <Image
                pos="relative"
                zIndex={10}
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                borderRadius="50%"
                alt="Nitin Jha"
                src="https://avatars.githubusercontent.com/u/93567737"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
