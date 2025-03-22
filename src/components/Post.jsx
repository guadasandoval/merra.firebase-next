import { AspectRatio, Flex, LinkOverlay, Text, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import File from './File';

// visualizacion de cada posteo en galeria
const Post = ({ data }) => {
  const {
    title = '',
    files = [{}],
    category,
    description: { blocks = [] } = {},
    url,
  } = data;
  const { data: { file: descriptionFile } = {} } =
    blocks.find(({ type }) => type === 'image') || {};
  const file = files[0];
  const postFilePreview = file || descriptionFile || {};

  return (
    <LinkOverlay as={NextLink} href={`${category}/${url}`}>
      <Flex flexDirection={'column'}>
        <AspectRatio ratio={3 / 4} overflow={'hidden'}>
          <Box position='relative' height='100%' width='100%'>
            <File
              cursor={'pointer'}
              data={postFilePreview}
              controls={false}
              width='100%'
              height='100%'
              objectFit='cover'
              borderRadius='10px'
              transition='transform .2s'
              border='1px solid'
            />
            <Box
              position='absolute'
              top='0'
              left='0'
              width='100%'
              height='100%'
              opacity={{ base: '1', lg: '0' }}
              transition='opacity 0.3s ease-in-out'
              zIndex='1'
              display='flex'
              alignItems='end'
              _hover={{
                opacity: 1,
              }}
            >
              <Box
                bg='#B9BBEE'
                h='30%'
                w='100%'
                borderBottomRightRadius='10px'
                borderBottomLeftRadius='10px'
                display='flex'
                alignItems='end'
                p={8}
                border='1px solid'
              >
                <Text
                  fontFamily={'made-Black'}
                  fontSize='36px'
                  lineHeight={{ base: '60px', lg: '36px' }}
                >
                  {title}
                </Text>
              </Box>
            </Box>
          </Box>
        </AspectRatio>
      </Flex>
    </LinkOverlay>
  );
};

export default Post;
