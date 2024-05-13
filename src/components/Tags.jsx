import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Tags = ({ tags = [], ...rest }) => {
  if (!tags?.length) {
    return null;
  }
  return (
    <Flex direction={'row'} flexWrap={'wrap'} gap={1} {...rest}>
      {tags.map((tag, index) => (
        <Text as={'span'} fontSize={'md'} fontWeight={'bold'} key={tag}>
          {`${tag}${index < tags.length - 1 ? ',' : ''}`}
        </Text>
      ))}
    </Flex>
  );
};

export default Tags;
