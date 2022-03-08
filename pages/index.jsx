import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Text,
  Image
} from '@chakra-ui/react';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.500')}
        p={3}
        mb={6}
        align="center"
        color={useColorModeValue('whiteAlpha.500', 'black')}
      >
        Helloo, &*&;m I am a full-stack developer based in Philippines
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            JAMES DARYL BERTIZ
          </Heading>
          <Text as="h6">
            Digital Technology Enthusiast (Engineer/Developer/Designer)
          </Text>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor={useColorModeValue('whiteAlpha.800', 'gray.200')}
            borderWidth={2}
            borderStyle="solid"
            maxWidth="200px"
            display="inline-block"
            borderRadius="full"
            src="/images/3.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Page;
