import { Box, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Post from '../Post';

//visualizacion de all posteos
const GroupedPosts = ({ posts }) => {
  if (!posts?.length) {
    return null;
  }

  return (
      <SimpleGrid gap={10} columns={{ base: 1, md: 3 }} p={{ base: 1, md: 24 }}>
      {posts?.map((data, index) => (
        <Post key={data?.name || index} data={data} />
      ))}
    </SimpleGrid>
  );
};

export default GroupedPosts;
