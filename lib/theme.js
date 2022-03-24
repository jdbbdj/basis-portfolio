import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#202023', '#f0e7db')(props)
    },
    span: {
      color: mode('whiteAlpha.900', 'gray.800')(props),
      className: {
        'highlight-text': {
          color: 'red'
        }
      }
    }
  })
};

const components = {
  Box: {
    baseStyle: props => ({
      border: '1px solid white !important'
    })
  },
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
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: props => ({
      color: mode('whiteAlpha.900', 'gray.800')(props)
    })
  },
  MenuButton: {
    baseStyle: props => ({
      color: mode('gray.800', 'whiteAlpha.900')(props),
      textUnderLineOffset: 3
    })
  },
  Button: {
    baseStyle: props => ({
      border: mode('gray.500', 'gray.800')(props),
      color: mode('gray.500', 'gray.800')(props)
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
