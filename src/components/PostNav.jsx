import React, { useContext } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { Admin } from 'src/contexts/AdminContext';
import { useRouter } from 'next/router';

const PostNav = ({ doc }) => {
  const { url, category } = doc;
  const { user, onDeletePost } = useContext(Admin);
  const router = useRouter();

  const onEdit = () => {
    return router.push(
      `/admin/edit?${new URLSearchParams({ title: url, category })}`
    );
  };

  if (!user) {
    return null;
  }

  return (
    <Flex flexDirection={'row'} gap={6}>
      <Button colorScheme='black' variant='link' onClick={onEdit}>
        Editar
      </Button>
      <Button
        colorScheme='black'
        variant='link'
        onClick={() => onDeletePost(doc)}
      >
        Eliminar
      </Button>
    </Flex>
  );
};

export default PostNav;
