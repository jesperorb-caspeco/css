import theme from 'mdx-deck/themes';
import nightOwl from "prism-react-renderer/themes/nightOwl";

export default {
  ...theme,
  codeSurfer: {
    ...nightOwl,
    showNumbers: true,
    plain: {
      background: '#1e243e'
    }
  },
  font: 'IBM Plex Mono, monospace',
  fontSizes: [
    "1rem",
    "2rem",
    "2.5rem",
    "5rem",
    "7rem",
  ],
  blockquote: {
    color: '#5fb3b3'
  },
  colors: {
    background: '#1e243e',
    text: 'white',
    heading: '#ee4b5a',
    link: '#ee4b5a'
  },
  h3: {
    color: '#ede593'
  },
  li: {
    lineHeight: '1.25'
  },
  img: {
    maxHeight: "700px"
  }
}