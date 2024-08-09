import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

export default function Index({ introduction, projects, contactMe,featuredProjects }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Nitin Jha - Software Developer</title>
          <meta content="Nitin Jha - Software Developer" name="title" />
          <meta content="Nitin Jha, Nitin Jha website" name="keywords" />
          <meta
            content="Software Developer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://nitix.vercel.app" property="og:url" />
          <meta content="Nitin Jha - Software Developer" property="og:title" />
          <meta
            content="Software Developer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta content="https://nitix.vercel.app/" property="twitter:url" />
          <meta
            content="Nitin Jha - Software Developer"
            property="twitter:title"
          />
          <meta
            content="Software Developer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="twitter:image"
          />
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction introduction={introduction} />
          <AboutMe />
          <FeaturedProjects projects={featuredProjects} />
          <ContactMe contactMe={contactMe} />
        </Stack>
      </Container>
    </>
  )
}

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

  let data3 = await client.getEntries({
    content_type: 'introduction',
    limit: 2,
    order: 'sys.createdAt',
  })

  let data4 = await client.getEntries({
    content_type: 'contactMe',
    limit: 1,
    order: 'sys.createdAt',
  })

  return {
    props: {
      featuredProjects: data.items,
      projects: data2.items,
      introduction: data3.items,
      contactMe: data4.items,
    },
  }
}
