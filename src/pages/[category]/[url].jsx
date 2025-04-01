import React from 'react';
import { NextSeo } from 'next-seo';
import getSection from '../../actions/getSection';
import getDoc from '../../actions/getDoc';
import Gallery from '../../components/Gallery';
import TextParse from 'src/components/TextParse';
import Tags from 'src/components/Tags';
import PostNav from 'src/components/PostNav';
import Title from 'src/components/Title';
import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import * as folders from '../../services/foldersNames';

const TitleView = ({ doc }) => {
  return (
    <Flex mx={'auto'} maxW={'1300px'} direction={'column'}>
      <NextSeo
        title={`${doc.title} | Maria Muchut`}
        defaultTitle='Maria Muchut'
      />
      <Flex direction={'column'} as={'header'} mb={[6, 12]} gap={6}>
        <Title>{doc.title}</Title>
        <PostNav doc={doc} />
      </Flex>
      <Box my={6}>
        <Gallery files={doc?.files} />
      </Box>
      <Box maxW={['100%', null, '80vw', '70%']}>
        fo
        <TextParse text={doc?.description} />
      </Box>
      <Box
        display='flex'
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent={{ base: 'center', lg: 'start' }}
        alignItems='center'
        gap={4}
        p={4}
        width='100%'
      >
        <Flex
          gap={4}
          width={{ base: '60%', lg: '35%' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          {/* <Button
            rightIcon={
              <img
                alt='share icon'
                src='/share.svg'
                style={{ width: '20px', height: '20px' }}
              />
            }
            colorScheme='black'
            variant='outline'
            borderRadius='full'
            bg='#B9BBEE'
            w='100%'
          >
            Share
          </Button> */}
          <Button
            rightIcon={
              /* eslint-disable @next/next/no-img-element */
              <img
                alt='mail icon'
                src='/mail.svg'
                style={{ width: '20px', height: '20px' }}
              />
            }
            colorScheme='black'
            variant='outline'
            borderRadius='full'
            bg='#B9BBEE'
            w='100%'
            onClick={() => window.location.href = "mailto:muchutmaria@gmail.com"}
          >
            Contact
          </Button>
          <Button
            rightIcon={
              /* eslint-disable @next/next/no-img-element */
              <img
                alt='arrow icon'
                src='/arrow.svg'
                style={{ width: '20px', height: '20px' }}
              />
            }
            colorScheme='black'
            variant='outline'
            borderRadius='full'
            bg='#B9BBEE'
            w='100%'
          >
            Next
          </Button>
        </Flex>
      </Box>
      <Tags tags={doc?.tags} />
    </Flex>
  );
};

export async function getStaticProps({ params }) {
  const { url, category } = params;
  const doc = await getDoc(url, category);

  if (!doc) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      doc,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = [];
  const f = Object.values(folders);

  for await (const folder of f) {
    const posts = await getSection(folder);
    posts.map((doc) => {
      paths.push({ params: { ...doc, category: folder } });
    });
  }

  return {
    paths,
    fallback: 'blocking',
  };
}

export default TitleView;
