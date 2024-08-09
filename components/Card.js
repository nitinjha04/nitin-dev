import {
  Center,
  Divider,
  Flex,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from '@chakra-ui/react'
import ReactGA from 'react-ga4'
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaJs,
  FaLaravel,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
} from 'react-icons/fa'
import {
  SiChakraui,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiRedux,
  SiRapid,
  SiStripe,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import Image from 'next/image'

export default function Cards({
  imageURL,
  title,
  slug,
  desc,
  tag,
  githubUrl,
  deployedUrl,
  ongoing,
}) {
  console.log({ githubUrl, deployedUrl, ongoing })
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Flask') {
      values[0] = 'green'
      values[1] = FaPepperHot
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    } else if (tag == 'Next.js') {
      values[0] = 'gray'
      values[1] = SiNextdotjs
    } else if (tag == 'Chakra UI') {
      values[0] = 'teal'
      values[1] = SiChakraui
    } else if (tag == 'Tailwind css') {
      values[0] = 'cyan'
      values[1] = SiTailwindcss
    } else if (tag == 'Firebase') {
      values[0] = 'orange'
      values[1] = SiFirebase
    } else if (tag == 'Redux') {
      values[0] = 'purple'
      values[1] = SiRedux
    } else if (tag == 'Rapid Api') {
      values[0] = 'gray'
      values[1] = FaCode
    } else if (tag == 'Stripe') {
      values[0] = 'pink'
      values[1] = SiStripe
    } else if (tag == 'MongoDB') {
      values[0] = 'green'
      values[1] = SiMongodb
    } else if (tag == 'Node.js') {
      values[0] = 'green'
      values[1] = SiNodedotjs
    } else if (tag == 'Typescript') {
      values[0] = 'blue'
      values[1] = SiTypescript
    } else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag?.map((item) => (
    <Tag
      w="fit-content"
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))
  const handleClick = (event) => {
    // ReactGA.event({
    //   category: 'click',
    //   action: event,
    // })
    router.push(`/projects/${slug}`)
  }

  return (
    <Stack
      pos="relative"
      minH="320px"
      maxH="500px"
      bg="secondary"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
      borderRadius="10px"
    >
      {/* <Center pos="absolute" top="35%" left="50%"  transform="translate(-50%, -50%)" w="full">
        <Stack
          textAlign="center"
          alignItems="center"
          justifyContent="space-between"
          isInline
        >
          <Text color="black" fontFamily="Ubuntu" fontSize="2xl">
            On Going
          </Text>
        </Stack>
      </Center> */}

      <Link target="_blank" href={deployedUrl}>
        <ScaleFade transition={{ duration: 1 }} in={true}>
          <Center w="auto">
            <Image
              width={800}
              height={400}
              minH="270px"
              borderRadius="10px 10px 0px 0px"
              transition="0.3s"
              objectFit="cover"
              style={{
                borderRadius: '10px 10px 0px 0px',
                objectFit: 'cover',
              }}
              alt={title}
              src={imageURL}
            />
          </Center>
          <Stack px={4} py={2}>
            <Stack alignItems="center" justifyContent="space-between" isInline>
              <Text color="displayColor" fontFamily="Ubuntu" fontSize="2xl">
                {title}
              </Text>
              <Stack
                alignItems="center"
                justifyContent="flex-end"
                isInline
                spacing={4}
              >
                <Link
                  target="_blank"
                  color="white"
                  href={githubUrl}
                  onClick={() =>
                    handleClick(`project_${title.replace('@', '-at')}`)
                  }
                >
                  <FaGithub aria-label="Github link" size={20} />
                </Link>
                <Link
                  target="_blank"
                  color="white"
                  href={deployedUrl}
                  onClick={() =>
                    handleClick(`project_${title.replace('@', '-at')}`)
                  }
                >
                  <FaExternalLinkAlt aria-label="project link" size={20} />
                </Link>
              </Stack>
            </Stack>

            <Flex wrap="wrap" gap="8px">
              {Tags}
            </Flex>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
