import React from 'react';
import Link from "next/link";
import { Text, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <Box
    paddingLeft={{base: 0, lg: '96px'}}
    fontFamily="SF-Pro-Text"
    fontSize={{base:'18px', lg:'24px'}}
    lineHeight="1.8"
    mt={{base: '16px', lg:'128px'}}
    w='100%'
  >
    <Text mb={6} width={{base:'100%', lg:'80%'}}>
      Hello I am a{" "}
      <Link href="/design" passHref>
      <Box
        as="span"
        fontFamily="SF-Pro-Text-Bold"
        p="2px 8px"
        bg="brand.25"
        borderRadius="12px"
        border="1px solid"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#B9BBEE" }}
        display="inline-block"
        textAlign="center"
        marginBottom='6px'
      >
        designer
      </Box></Link>{" "}
      & multidisciplinary{" "}
      <Link href="/art" passHref>
      <Box
        as="span"
        fontFamily="SF-Pro-Text-Bold"
        p="1px 8px"
        bg="brand.25"
        borderRadius="12px"
        border="1px solid"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#B9BBEE" }}
        display="inline-block"
        textAlign="center"
      >
        artist
      </Box></Link>{" "}
      based in Buenos Aires.
    </Text>

    <Text mb={6} width={{base:'100%', lg:'80%'}}>
      I studied graphic design & photography for 5 years. Meanwhile, I started
      working for local brands and musicians.
    </Text>

    <Text mb={6} width={{base:'100%', lg:'80%'}}>
      During the pandemic I started{" "}
      <Link href="/writing" passHref>
      <Box
        as="span"
        fontFamily="SF-Pro-Text-Bold"
        p="2px 8px"
        bg="brand.25"
        borderRadius="12px"
        border="1px solid"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#B9BBEE" }}
        display="inline-block"
        textAlign="center"
      >
        writing
      </Box></Link>
      . My poems, essays and translations have been published worldwide.
    </Text>

    <Text mb={6} width={{base:'100%', lg:'80%'}}>
      I also{" "}
      <Link href="/art" passHref>
      <Box
        as="span"
        fontFamily="SF-Pro-Text-Bold"
        p="2px 8px"
        bg="brand.25"
        borderRadius="12px"
        border="1px solid"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#B9BBEE" }}
        display="inline-block"
        textAlign="center"
      >
        paint
      </Box></Link>{" "}
      in my free time. My work was shown in an art gallery for the first time this year!
    </Text>

    <Text mb={6} width={{base:'100%', lg:'80%'}}>
      I started my journey in{" "}
      <Link href="/design" passHref>
      <Box
        as="span"
        fontFamily="SF-Pro-Text-Bold"
        p="2px 8px"
        bg="brand.25"
        borderRadius="12px"
        border="1px solid"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#B9BBEE" }}
        display="inline-block"
        textAlign="center"
      >
        UX/UI
      </Box></Link>{" "}
      while working for a company that builds websites for various types of businesses.
    </Text>

    <Text mb={6} width={{base:'100%', lg:'80%'}}>
      I got my UX certificate from Google while designing this website & other projects.
    </Text>

    <Text width={{base:'100%', lg:'80%'}}>
      If you’re interested in working with me, don’t hesitate to{" "}
      <Box
        as="button"
        fontFamily="SF-Pro-Text-Bold"
        p="2px 8px"
        bg="brand.25"
        borderRadius="12px"
        border="1px solid"
        cursor="pointer"
        transition="background-color 0.3s ease"
        _hover={{ bg: "#B9BBEE" }}
        display="inline-block"
        textAlign="center"
        onClick={() => window.location.href = "mailto:muchutmaria@gmail.com"}
      >
        contact me!
      </Box>
    </Text>
  </Box>
  );
}
