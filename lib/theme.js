import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#202023', '#f0e7db')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderLineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    },
    baseStyle: props => ({
      color: mode('whiteAlpha.900', 'gray.800')(props),
      textUnderLineOffset: 3
    })
  },
  Link: {
    baseStyle: props => ({
      color: mode('whiteAlpha.900', 'gray.800')(props),
      textUnderLineOffset: 3
    })
  },
  Text: {
    baseStyle: props => ({
      color: mode('whiteAlpha.900', 'gray.800')(props),
      textUnderLineOffset: 3
    })
  },
  MenuButton: {
    baseStyle: props => ({
      color: mode('gray.800', 'whiteAlpha.900')(props),
      textUnderLineOffset: 3
    })
  }
};

const fonts = {
  heading: "'M PLUS Rounded 1c'"
};

const colors = {
  glassTeal: '#88ccca'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  components,
  styles
});

export default theme;
