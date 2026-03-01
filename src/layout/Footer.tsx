'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      id='contacto'
      component='footer'
      sx={{
        bgcolor: '#FFFFFF',
        color: 'black',
        py: { xs: 4, md: 5 },
        px: { xs: 4, md: 10 },
        borderRadius: '32px',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Typography
          sx={{
            fontWeight: 950,
            color: '#F0DB4F',
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            letterSpacing: '-0.04em',
          }}
        >
          JavaScript
        </Typography>
        <Typography
          sx={{
            fontWeight: 950,
            color: 'black',
            fontSize: { xs: '1.5rem', md: '1.8rem' },
            letterSpacing: '-0.04em',
            ml: 1,
          }}
        >
          Chile
        </Typography>
      </Box>

      <Typography
        variant='body2'
        sx={{
          fontWeight: 500,
          color: '#666',
          fontSize: '0.85rem',
          mb: 2,
        }}
      >
        Comunidad de JavaScript • Desde 2013
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center', mb: 2 }}>
        <IconButton 
          size='small'
          href='https://github.com/jschile'
          target='_blank'
          rel='noopener noreferrer'
          component='a'
          sx={{ color: '#000' }}
        >
          <GitHubIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton 
          size='small'
          href='https://linkedin.com/company/jscriptchile'
          target='_blank'
          rel='noopener noreferrer'
          component='a'
          sx={{ color: '#000' }}
        >
          <LinkedInIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton 
          size='small'
          href='https://twitter.com/jscriptchile'
          target='_blank'
          rel='noopener noreferrer'
          component='a'
          sx={{ color: '#000' }}
        >
          <TwitterIcon sx={{ fontSize: 20 }} />
        </IconButton>
        <IconButton 
          size='small'
          href='mailto:contacto@jschile.org'
          component='a'
          sx={{ color: '#000' }}
        >
          <MailIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Typography variant='caption' sx={{ fontWeight: 500, color: '#999' }}>
        © 2026 JavaScript Chile • Desarrollado por{' '}
        <Link
          href='https://www.armandorivasv.dev/'
          target='_blank'
          rel='noopener noreferrer'
          color='inherit'
          underline='hover'
        >
          ArmandoRivasV
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
