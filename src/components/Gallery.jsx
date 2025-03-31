import React, { useRef, useState } from 'react';
import {
  Flex,
  Modal,
  ModalContent,
  ModalBody,
  Fade,
  useDisclosure,
  Box,
  AspectRatio,
  Grid,
  GridItem
} from '@chakra-ui/react';
import File from './File';
import useTouchDirection from 'src/hooks/useTouchDirection';

const Gallery = ({ files }) => {
  const initialRef = useRef(null);
  const [dimensions, setDimensions] = useState([]);
  const { isOpen, onToggle } = useDisclosure();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const openGallery = (index) => {
    setGalleryIndex(index);
    onToggle();
  };

  function prevImage() {
    setGalleryIndex((prev) => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  }

  function nextImage() {
    setGalleryIndex((prev) => {
      let lastCard = prev + 1;
      if (lastCard === files.length) {
        return prev;
      }
      return prev + 1;
    });
  }

  const { onTouchStart, onTouchEnd, onTouchMove } = useTouchDirection(
    prevImage,
    nextImage
  );

  const itemSize = ({ isVideo, landscape }) => {
    const size = isVideo || landscape ? '100%' : '30%';
    return size;
  };

  const determineColumnSpan = ({ isVideo, landscape }) =>
  isVideo || landscape ? 3 : 1; // Ocupa 3 columnas si es horizontal o video.

  /* Keys */
  function keyPress(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      nextImage();
    }
    if (e.keyCode === 37 || e.keyCode === 38) {
      prevImage();
    }
  }

  if (!files?.length) {
    return null;
  }

  return (
    <>
       {/* Grilla de elementos */}
       {/* <SimpleGrid columns={[1, 1, 3]} spacing={4}>
        {files?.map((data, index) => (
          <Box
            key={`${data?.name}-${index}`}
            cursor="pointer"
            onClick={() => openGallery(index)}
            bg="gray.100"
            borderRadius="md"
            overflow="hidden"
          >
            {data.isVideo ? (
              <AspectRatio ratio={16 / 9}>
                <Box as="video" src={data.src} autoPlay loop muted />
              </AspectRatio>
            ) : (
              <Box as="img" src={data.src} alt={data.name} objectFit="cover" />
            )}
          </Box>
        ))}
      </SimpleGrid> */}


  {/* Grilla de 3 columnas */}
  {/* <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {files?.map((file, index) => (
          <GridItem
            key={`${file?.name}-${index}`}
            colSpan={determineColumnSpan(file)} // Define el span de columnas
            onClick={() => openGallery(index)}
            cursor="pointer"
          >
            <File data={file} />
          </GridItem>
        ))}
      </Grid> */}


      {/* <Flex gap={3} flexWrap={'wrap'}>
        {files?.map((data, index) => (
          <Flex
            key={`${data?.name}-${index}`}
            flexGrow={1}
            flexShrink={0}
            flexBasis={itemSize(data)}
            justifyContent={'start'}
            alignContent={'flex-start'}
            alignItems={'flex-start'}
            bg='pink'
          >
            <File
              data={data}
              cursor={'pointer'}
              onClick={() => openGallery(index)}
            />
          </Flex>
        ))}
      </Flex> */}

<Flex>
  <Box
    display="grid"
    gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }}
    gap={3}
    width="100%"
  >
    {files?.map((data, index) => (
      <AspectRatio key={`${data?.name}-${index}`} ratio={3 / 4}>
        <Box
          overflow="hidden"
          borderRadius="10px"
          position="relative"
        >
          <File
            data={data}
            cursor="pointer"
            onClick={() => openGallery(index)}
            width="100%"
            height="100%"
            objectFit="cover"
          />
        </Box>
      </AspectRatio>
    ))}
  </Box>
</Flex>

      <Modal
        isOpen={isOpen}
        onClose={onToggle}
        size={'full'}
        motionPreset='scale'
        initialFocusRef={initialRef}
      >
        <ModalContent
          ref={initialRef}
          onKeyDown={keyPress}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          borderRadius={'none'}
          bg={'whiteAlpha.300'}
          backdropFilter={'blur(20px)'}
          onClick={onToggle}
        >
          <ModalBody pos={'relative'} overflow={'hidden'}>
            {files?.map((file, index) => (
              <Fade in={index === galleryIndex} key={`${file?.name}-${index}`}>
                <Flex
                  pos={'absolute'}
                  inset={0}
                  justifyContent={'center'}
                  alignItems={'center'}
                  height={'100%'}
                  width={'100%'}
                  p={3}
                >
                  <File data={file} />
                </Flex>
              </Fade>
            ))}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Gallery;
