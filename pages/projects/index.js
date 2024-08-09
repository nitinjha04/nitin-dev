import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'fields.order',
  })
  let data2 = await client.getEntries({
    content_type: 'projects',
    order: 'fields.order',
  })
  console.log({ data2: data2.items.length })
  console.log({ data: data.items.length })
  return {
    props: {
      projects: data.items,
    },
  }
}

export default function Projects({ projects }) {
  console.log({ projects })
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Nitin Jha - Software Developer</title>
          <meta content="Nitin Jha - Software Developer" name="title" />
          <meta
            content="Software Developer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://nitix.vercel.app/projects" property="og:url" />
          <meta content="Nitin Jha - Software Developer" property="og:title" />
          <meta
            content="Software Developer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta
            content="https://nitix.vercel.app/projects"
            property="twitter:url"
          />
          <meta
            content="Nitin Jha - Software Developer"
            property="twitter:title"
          />
          <meta
            content="Software Developer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="twitter:image"
          />
        </Head>
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my skills, here's an archive
              of things that I've worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                placeholder="Search projects"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects &&
              projects
                .filter((e) =>
                  e.fields.title.toLowerCase().includes(query.toLowerCase()),
                )
                .map((project) => (
                  <Cards
                    key={project.fields.title}
                    ongoing={project.fields.ongoing}
                    desc={project.fields.description}
                    imageURL={project.fields.imageUrl}
                    tag={project.fields.tags.map((e) => e.trim())}
                    title={project.fields.title}
                    slug={project.fields.title}
                    githubUrl={project?.fields.githubLink}
                    deployedUrl={project?.fields.deployLink}
                  />
                ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}
