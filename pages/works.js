import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png';
import walkNote from '../public/images/works/walknote_eyecatch.png';
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg';
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png';
import Layout from '../components/layouts/article';
const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-taking app
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="walknote" title="Walknote" thumbnail={walkNote}>
              Music Recommendation app for iOs
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={thumbFourPainters}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
