import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Text,
  Image,
  Link,
  Button
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';

const Page = () => {
  return (
    <Layout>
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>

          <Paragraph as={Text}>
            Daryl is a self taught web developer. He started his journey on
            Software Engineering after passing his licensure on his desired
            Engineering Course. Right now he is working as a Software Engineer
            on a prominent Software Company here on the Philippines. He is
            aiming to be one of the greatest in Software Engineering, creating
            startups that could help Filipinos on their small scale businesses.{' '}
            <NextLink href="/works/inkdrop" passHref>
              <Link>Inkdrop</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>1997</BioYear>
            Was born in Bacoor Cavite.
          </BioSection>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>2018</BioYear>
            Finished his studies as Bachelor of Science in Electronics
            Engineering
          </BioSection>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>2018</BioYear>
            Passed the Licensure Examination for Electronics Engineering and
            Technician
          </BioSection>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>2019</BioYear>
            Started his journey in IT Industry as IT Engineer on one of the
            three company that provides IT Services for Toll Gates in the
            Philippines
          </BioSection>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>2019</BioYear>
            Worked, Created, and Hosted a working website for the company.
          </BioSection>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>2020</BioYear>
            Got a job in one of the Chinese Company for DITO Telecommunication
            as UAT Delivery Engineer.
          </BioSection>
          <BioSection color={useColorModeValue('whiteAlpha.800', 'gray.800')}>
            <BioYear>2021</BioYear>
            Currently working as Software Engineer(ReactJs Developer)
          </BioSection>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
