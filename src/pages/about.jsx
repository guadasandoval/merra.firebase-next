import React from 'react';
import { Text, Box, Flex } from '@chakra-ui/react';

// Función para dividir texto en fragmentos de un número máximo de caracteres
const splitTextWithStyles = (text, maxChars) => {
  const words = text.split(' ');
  let chunks = [];
  let currentLine = '';

  words.forEach((word) => {
    const wordWithSpace = (currentLine ? ' ' : '') + word;
    if (currentLine.length + wordWithSpace.length <= maxChars) {
      currentLine += wordWithSpace;
    } else {
      chunks.push(currentLine);
      currentLine = word;
    }
  });

  if (currentLine) {
    chunks.push(currentLine);
  }

  return chunks;
};

// Componente para renderizar texto con estilo
const StyledWord = ({ children }) => (
  <span
    style={{
      fontFamily: "SF-Pro-Text-Bold",
      background: "#B9BBEE",
      padding: "6px 8px",
      borderRadius: "16px",
      borderWidth: "1px",
      borderColor: "black",
    }}
  >
    {children}
  </span>
);

export default function About() {
  const text = [
    "Hello <3 I am a",
    <StyledWord key="designer">designer</StyledWord>,
    "& multidisciplinary",
    <StyledWord key="artist">artist</StyledWord>,
    "based in Buenos Aires.",
    "I studied graphic design & photography for 5 years. Meanwhile, I started working for local brands and musicians.",
    "During the pandemic I started",
    <StyledWord key="writing">writing</StyledWord>,
    ". My poems, essays and translations have been published worldwide.",
    "I also",
    <StyledWord key="paint">paint</StyledWord>,
    "in my free time. My work was shown in an art gallery for the first time this year!",
    "I started my journey in",
    <StyledWord key="uxui">UX/UI</StyledWord>,
    "while working for a company that builds websites for various types of businesses.",
    "I got my UX certificate from Google while designing this website & other projects.",
    "If you’re interested in working with me, don’t hesitate to",
    <StyledWord key="contact">contact me!</StyledWord>,
  ];

  const maxCharsPerLine = 70;

  // Construcción del texto dividiendo las líneas
  const lines = splitTextWithStyles(
    text
      .map((item, index) =>
        typeof item === "string" ? item : `<<${index}>>`
      )
      .join(" "),
    maxCharsPerLine
  ).map((line) =>
    line.split(/<<(\d+)>>/).map((part, index) =>
      /^\d+$/.test(part) ? text[parseInt(part, 10)] : part
    )
  );

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems="center"
      height={{ base: "auto", md: "100vh" }}
      overflow="hidden"
      marginLeft={36}
    >
      <Box>
        {lines.map((line, index) => (
          <Text
            key={index}
            fontFamily="SF-Pro-Text"
            fontSize={{ base: "xl", md: "24px" }}
            lineHeight={{ base: "60px", md: "36px" }}
            mb={4}
          >
            {line.map((item, subIndex) => (
              <React.Fragment key={subIndex}>{item}</React.Fragment>
            ))}
          </Text>
        ))}
      </Box>
    </Flex>
  );
}
