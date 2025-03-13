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
import { Button, VStack } from '@chakra-ui/react';

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
        <TextParse text={doc?.description} />
      </Box>
      <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ base: "center", md: "start" }}
      alignItems="center"
      gap={4}
      p={4}
      width="100%"
    >
      <Flex gap={4} width={{ base: "60%", md: "35%" }}
      flexDirection={{ base: "column", md: "row" }}>
      <Button
        rightIcon={ 
        <img
          alt='share icon'
          src="/share.svg"
          style={{ width: "20px", height: "20px" }}
        />}
        colorScheme="black"
        variant="outline"
        borderRadius="full"
        bg='#B9BBEE'
        w='100%'
      >
        Share
      </Button>
      <Button
        rightIcon={ 
        <img
          alt='mail icon'
          src="/mail.svg"
          style={{ width: "20px", height: "20px" }}
        />}
        colorScheme="black"
        variant="outline"
        borderRadius="full"
        bg='#B9BBEE'
        w='100%'
      >
        Contact
      </Button>
      <Button
        rightIcon={<img
          alt='arrow icon'
          src="/arrow.svg"
          style={{ width: "20px", height: "20px" }}
        />}
        colorScheme="black"
        variant="outline"
        borderRadius="full"
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
  const { url } = params;
  const doc = await getDoc(url);

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
  const posts = await getSection();
  posts.map((doc) => {
    paths.push({ params: { ...doc } });
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export default TitleView;
