import React from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';

export default function About() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      height={{ base: "auto" }}
      px={4}
      overflow="hidden"
    >
      <Text
        fontFamily="Open Sans"
        fontSize={{ base: "xl", md: "xl" }}
        fontWeight="regular"
        lineHeight={{ base: "60px", md: "40px" }}
        textAlign={{ base: "left", md: "left" }}
      >
        Hello &lt;3 I am a{" "}
        <span
          style={{
            fontFamily: "made-Medium",
            letterSpacing: "2px",
            background: "#B9BBEE",
            padding: "10px",
            borderRadius: "16px",
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          designer
        </span>{" "}
        & multidisciplinary{" "}
        <span
          style={{
            fontFamily: "made-Medium",
            letterSpacing: "2px",
            background: "#B9BBEE",
            padding: "10px",
            borderRadius: "16px",
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          artist
        </span>{" "}
        based in Buenos Aires.<br />
        <br />
        I studied graphic design & photography for 5 years. Meanwhile, I started
        working for local brands and musicians.<br />
        <br />
        During the pandemic I started{" "}
        <span
          style={{
            fontFamily: "made-Medium",
            letterSpacing: "2px",
            background: "#B9BBEE",
            padding: "10px",
            borderRadius: "16px",
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          writing
        </span>
        . My poems, essays and translations have been published worldwide.<br />
        <br />
        I also{" "}
        <span
          style={{
            fontFamily: "made-Medium",
            letterSpacing: "2px",
            background: "#B9BBEE",
            padding: "10px",
            borderRadius: "16px",
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          paint
        </span>{" "}
        in my free time. My work was shown in an art gallery for the first time
        this year! I started my journey in{" "}
        <span
          style={{
            fontFamily: "made-Medium",
            letterSpacing: "2px",
            background: "#B9BBEE",
            padding: "10px",
            borderRadius: "16px",
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          UX/UI
        </span>{" "}
        while working for a company that builds websites for various types of
        businesses.<br />
        <br />
        I got my UX certificate from Google while designing this website & other
        projects.<br />
        <br />
        If you’re interested in working with me, don’t hesitate to{" "}
        <span
          style={{
            fontFamily: "made-Medium",
            letterSpacing: "2px",
            background: "#B9BBEE",
            padding: "10px",
            borderRadius: "16px",
            borderWidth: "1px",
            borderColor: "black",
          }}
        >
          contact me!
        </span>
      </Text>
    </Flex>
  );
}
