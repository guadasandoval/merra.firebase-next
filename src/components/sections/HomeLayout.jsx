// HomeLayout.jsx
import { Box, VStack, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";

const HomeLayout = ({children}) => {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg="url('/Home.svg')"
      bgSize="cover"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack spacing={24} textAlign="center">
        <Text
          fontFamily="custom"
          fontWeight="bold"
          fontSize={{ base: '7xl', md: '8xl' }}
          lineHeight={{base: '6rem'}}
          letterSpacing="0.1rem"
        >
          María Muchut
        </Text>
        <VStack width="100%" maxW="180px" spacing={4} as="nav">
          {["Design", "Photo", "Video", "Art", "Writing", "About"].map(
            (section) => (
              <NextLink key={section} href={`/${section.toLowerCase()}`} passHref>
                <Link
                  p={4}
                  width="100%"
                  borderWidth="1px"
                  borderRadius="32px"
                  borderColor="black"
                  bg="transparent"
                  fontFamily="made-Medium"
                  fontSize="2rem"
                  textAlign="center"
                  _hover={{
                    textDecoration: "none",
                    bg: "brand.950",
                  }}
                >
                  {section}
                </Link>
              </NextLink>
            )
          )}
        </VStack>
      </VStack>
    </Box>
  );
};

export default HomeLayout;
