// import * as React from 'react';
// import { PaletteMode } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from './Appbar';
import Hero from './Hero';
import Testimonials from './Testimonials';
import Highlights from './Highlights';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Pricing from './Pricing';
import Footer from './Footer';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
// // import Hero from './components/Hero';
// import LogoCollection from './components/LogoCollection';
// import Highlights from './components/Highlights';
// import Pricing from './components/Pricing';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import getLPTheme from './getLPTheme';

export default function Landing() {

  return (
    <>
      <CssBaseline />
      <Appbar />
      <Hero />
      <Divider />
      <Box sx={{ bgcolor: 'background.default' }}>
        <Highlights />
        <Divider />
        <Testimonials />
        <Divider />
        <Pricing />
        <Divider />
        <Footer />
      </Box>

    </>
  );
}