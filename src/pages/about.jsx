import React from 'react';
import { Text, Box } from '@chakra-ui/react';

export default function About() {
  return (
    <Box
    paddingLeft={{base: 0, md: '96px'}}
    fontFamily="SF-Pro-Text"
    fontSize={{base:'18px', md:'24px'}}
    lineHeight="1.8"
    mt={{base: '16px', md:'128px'}}
    w='100%'
  >
    <Text mb={6} width={{base:'100%', md:'80%'}}>
      Hello I am a{" "}
      <span
        style={{
          fontFamily:"SF-Pro-Text-Bold",
          padding: "4px 10px",
          backgroundColor: "#B9BBEE",
          borderRadius: "12px",
          border: "solid 1px"
        }}
      >
        designer
      </span>{" "}
      & multidisciplinary{" "}
      <span
        style={{
          fontFamily:"SF-Pro-Text-Bold",
          padding: "4px 10px",
          backgroundColor: "#B9BBEE",
          borderRadius: "12px",
          border: "solid 1px"
        }}
      >
        artist
      </span>{" "}
      based in Buenos Aires.
    </Text>

    <Text mb={6} width={{base:'100%', md:'80%'}}>
      I studied graphic design & photography for 5 years. Meanwhile, I started
      working for local brands and musicians.
    </Text>

    <Text mb={6} width={{base:'100%', md:'80%'}}>
      During the pandemic I started{" "}
      <span
        style={{
          fontFamily:"SF-Pro-Text-Bold",
          padding: "4px 10px",
          backgroundColor: "#B9BBEE",
          borderRadius: "12px",
          border: "solid 1px"
        }}
      >
        writing
      </span>
      . My poems, essays and translations have been published worldwide.
    </Text>

    <Text mb={6} width={{base:'100%', md:'80%'}}>
      I also{" "}
      <span
        style={{
          fontFamily:"SF-Pro-Text-Bold",
          padding: "4px 10px",
          backgroundColor: "#B9BBEE",
          borderRadius: "12px",
          border: "solid 1px"
        }}
      >
        paint
      </span>{" "}
      in my free time. My work was shown in an art gallery for the first time this year!
    </Text>

    <Text mb={6} width={{base:'100%', md:'80%'}}>
      I started my journey in{" "}
      <span
        style={{
          fontFamily:"SF-Pro-Text-Bold",
          padding: "4px 10px",
          backgroundColor: "#B9BBEE",
          borderRadius: "12px",
          border: "solid 1px"
        }}
      >
        UX/UI
      </span>{" "}
      while working for a company that builds websites for various types of businesses.
    </Text>

    <Text mb={6} width={{base:'100%', md:'80%'}}>
      I got my UX certificate from Google while designing this website & other projects.
    </Text>

    <Text width={{base:'100%', md:'80%'}}>
      If you’re interested in working with me, don’t hesitate to{" "}
      <span
        style={{
          fontFamily:"SF-Pro-Text-Bold",
          padding: "4px 10px",
          backgroundColor: "#B9BBEE",
          borderRadius: "12px",
          border: "solid 1px"
        }}
      >
        contact me!
      </span>
    </Text>
  </Box>
  );
}
