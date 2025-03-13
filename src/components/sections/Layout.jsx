import { Avatar, Box, Grid, GridItem, VStack, Link, Text, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { Admin } from 'src/contexts/AdminContext';
import { AddIcon } from '@chakra-ui/icons';


const Layout = ({ children }) => {
  const { user, signIn, signOut } = useContext(Admin);
  const { photoURL } = user || {};
  const { route, push, pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const setIsMenuOpen = () => {
    setIsOpen(!isOpen);
  };

  const routeTitles = {
    "/": "Home",
    "/design": "Design",
    "/photo": "Photo",
    "/video": "Video",
    "/art": "Art",
    "/writing": "Writing",
    "/about": "About",
  };

  const currentTitle = routeTitles[pathname] || "Maria Muchut";

  const getRightOption = (r) => {
        if (r.includes('login')) {
          return (
            <Avatar
              ml={'auto'}
              size='xs'
              src={photoURL}
              onClick={user ? signOut : signIn}
              cursor={'pointer'}
            />
          );
        } else if (user && !r.includes('new')) {
          return (
            <IconButton
              variant='link'
              onClick={() => push('/admin/new')}
              icon={<AddIcon color={'black'} />}
              justifySelf={'flex-end'}
            />
          );
        } else if (user && r.includes('new')) {
          return (
            <Avatar
              ml={'auto'}
              size='xs'
              src={photoURL}
              onClick={user ? signOut : signIn}
              cursor={'pointer'}
            />
          );
        } else {
          return undefined;
        }
      };

  return (
    <Grid
      templateRows={{ base: "auto 1fr", md: "1fr" }}
      templateColumns={{ base: "1fr", md: "300px 1fr" }}
      h="100vh"
    >
      {/* Header en mobile */}
      <GridItem
        as="header"
        bg="pink.950"
        paddingY={12}
        paddingX={6}
        h='80px'
        display={{ base: "flex", md: "none" }}
        alignItems="center"
        justifyContent="space-between"
        borderBottomWidth="6px"
        borderBottomColor="#B9BBEE"
      >
        <Text fontFamily="custom" fontSize="4xl">
          {currentTitle}
        </Text>
        <IconButton
          aria-label="Menu"
          bg='none'
          icon={
          /* eslint-disable @next/next/no-img-element */
          <img
            alt="menu-mobile"
            src="/menumobile.svg"
            style={{ width: "20px", height: "20px" }}
          />}
          display={{ base: "block", md: "none" }}
          onClick={() => setIsMenuOpen(!isOpen)} // Toggle del menú
        />
      </GridItem>

      {/* Menú hamburguesa */}
      {isOpen && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          bg="pink.950"
          zIndex={10}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <VStack width="100%" maxW="168px" spacing='24px'>
            {["Home", "Design", "Photo", "Video", "Art", "Writing", "About"].map(
              (section) => (
                <NextLink key={section} href={`/${section.toLowerCase()}`} passHref>
                  <Link
                    padding= '16px 10px'
                    width="100%"
                    textAlign='center'
                    fontFamily="made-Medium"
                    fontSize="2xl"
                    color="black"
                    borderWidth="1px"
                    borderRadius="32px"
                    borderColor="black"
                    _hover={{ textDecoration: "none" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section}
                  </Link>
                </NextLink>
              )
            )}
          </VStack>
        </Box>
      )}

      {/* Sidebar en desktop */}
      <GridItem
        as="nav"
        bg="pink.950"
        p={4}
        display={{ base: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        borderRightWidth="6px"
        borderRightColor="#B9BBEE"
      >
        <VStack spacing={4} width="100%" maxW="180px">
        <Text fontFamily="custom" fontSize="6xl" mb={18} lineHeight='shorter' textAlign='center'>
          {currentTitle}
         </Text>
          {["Home", "Design", "Photo", "Video", "Art", "Writing", "About"].map(
            (section) => (
              <NextLink key={section} href={`/${section.toLowerCase()}`} passHref>
                <Link
                  p={4}
                  width="100%"
                  fontFamily="made-Medium"
                  borderWidth="1px"
                  borderRadius="32px"
                  borderColor="black"
                  bg="transparent"
                  textAlign="center"
                  _hover={{ bg: "brand.950" }}
                >
                  {section}
                </Link>
              </NextLink>
            )
          )}
        </VStack>
        {getRightOption(route)}
      </GridItem>

      {/* Contenido de componente */}
      <GridItem
        as="main"
        bg="brand.25"
        p={4}
        overflowY="auto"
      >
        {children}
      </GridItem>
    </Grid>
  );
};

export default Layout;
