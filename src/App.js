import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Container, Typography, Button, IconButton, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';
import { useInView as useInViewObserver } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import PeopleIcon from '@mui/icons-material/People';
import TextField from '@mui/material/TextField';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import ScienceIcon from '@mui/icons-material/Science';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Tooltip from '@mui/material/Tooltip';
import CssBaseline from '@mui/material/CssBaseline';
import emailjs from '@emailjs/browser';
import { keyframes } from '@emotion/react';

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50',
    },
    secondary: {
      main: '#e74c3c',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
});

function SectionTitle({ children }) {
  const [ref, inView] = useInViewObserver({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <Box ref={ref} sx={{ position: 'relative', display: 'inline-block', mb: 4 }}>
      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
        {children}
      </Typography>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'rgba(231, 76, 60, 0.8)',
          transformOrigin: 'left'
        }}
      />
    </Box>
  );
}

function FloatingShape({ delay, duration, size, left, top }) {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: '15%',
        background: 'rgba(231, 76, 60, 0.1)',
        position: 'absolute',
        left: `${left}%`,
        top: `${top}%`,
        zIndex: 0
      }}
      animate={{
        y: [0, -30, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_0btdxcc',
      'template_56px6of',
      e.target,
      'CUMnU3bD-2ZdTgDyr'
    )
      .then((result) => {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        setStatus('error');
        console.error('Email sending failed:', error);
      });
  };

  return (
    <form 
      ref={form}
      onSubmit={handleSubmit}
      style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
    >
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
        InputLabelProps={{
          shrink: true,
          sx: {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': {
              color: 'rgba(231, 76, 60, 0.8)',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(231, 76, 60, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(231, 76, 60, 0.8)',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
            padding: '16px',
          },
          mb: 2,
        }}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
        InputLabelProps={{
          shrink: true,
          sx: {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': {
              color: 'rgba(231, 76, 60, 0.8)',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(231, 76, 60, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(231, 76, 60, 0.8)',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
            padding: '16px',
          },
          mb: 2,
        }}
      />

      <TextField
        fullWidth
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        variant="outlined"
        required
        multiline
        rows={4}
        InputLabelProps={{
          shrink: true,
          sx: {
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-focused': {
              color: 'rgba(231, 76, 60, 0.8)',
            },
          },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(231, 76, 60, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgba(231, 76, 60, 0.8)',
              borderWidth: '2px',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
            padding: '16px',
          },
          mb: 2,
        }}
      />

      <Box sx={{ 
        mt: 3, 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Box>
          <IconButton 
            color="inherit" 
            aria-label="LinkedIn" 
            component="a" 
            href="https://www.linkedin.com/in/minna-tj-3a622a1b3/" 
            target="_blank"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                color: 'rgba(231, 76, 60, 0.8)',
              }
            }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton 
            color="inherit" 
            aria-label="Email" 
            component="a" 
            href="mailto:tjminna@gmail.com"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                color: 'rgba(231, 76, 60, 0.8)',
              }
            }}
          >
            <EmailIcon />
          </IconButton>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={status === 'sending'}
            sx={{
              backgroundColor: 'rgba(231, 76, 60, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(231, 76, 60, 1)',
              },
              '&:disabled': {
                backgroundColor: 'rgba(231, 76, 60, 0.4)',
              }
            }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>
          {status === 'success' && (
            <Typography sx={{ color: 'green', mt: 1 }}>Message sent successfully!</Typography>
          )}
          {status === 'error' && (
            <Typography sx={{ color: 'red', mt: 1 }}>Failed to send message. Please try again.</Typography>
          )}
        </Box>
      </Box>
    </form>
  );
}

function CursorSparkle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  
  return (
    <div
      className="cursor-sparkle"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="sparkle"></div>
      <div className="sparkle"></div>
      <div className="sparkle"></div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [dataSet, setDataSet] = useState(0);
  const [chartType, setChartType] = useState('combined');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px'
    });

    document.querySelectorAll('.snap-section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const sections = document.querySelectorAll('.snap-section');
      const currentScrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      
      let currentSection = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        if (currentScrollPos >= sectionTop - windowHeight/2) {
          currentSection = index;
        }
      });

      if (event.deltaY > 0 && currentSection < sections.length - 1) {
        sections[currentSection + 1].scrollIntoView({ behavior: 'smooth' });
      } else if (event.deltaY < 0 && currentSection > 0) {
        sections[currentSection - 1].scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDataSet((prev) => (prev + 1) % chartData.length);
    }, 3000);
    return () => clearInterval(timer); // eslint-disable-next-line
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', icon: <HomeIcon />, label: 'Home' },
    { id: 'about', icon: <PersonIcon />, label: 'About' },
    { id: 'skills', icon: <CodeIcon />, label: 'Skills' },
    { id: 'projects', icon: <WorkIcon />, label: 'Projects' },
    { id: 'personal-projects', icon: <ScienceIcon />, label: 'Personal Projects' },
    { id: 'achievements', icon: <EmojiEventsIcon />, label: 'Achievements' },
    { id: 'contact', icon: <ContactMailIcon />, label: 'Contact' },
  ];

  const chartData = [
    {
      bars: [
        { height: 120, x: 30 },
        { height: 160, x: 90 },
        { height: 100, x: 150 },
        { height: 140, x: 210 },
        { height: 130, x: 270 }
      ]
    },
    {
      bars: [
        { height: 80, x: 30 },
        { height: 140, x: 90 },
        { height: 180, x: 150 },
        { height: 90, x: 210 },
        { height: 160, x: 270 }
      ]
    },
    {
      bars: [
        { height: 150, x: 30 },
        { height: 90, x: 90 },
        { height: 130, x: 150 },
        { height: 170, x: 210 },
        { height: 110, x: 270 }
      ]
    }
  ];

  // Mouse trail effect
  const createTrail = () => {
    let lastTime = Date.now();
    
    const addTrailParticle = (e) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < 30) return; // Limit rate
      lastTime = currentTime;
      
      const particle = document.createElement('div');
      particle.className = 'trail-particle';
      
      // Random offset from cursor
      const offset = 10;
      const randomX = (Math.random() - 0.5) * offset;
      const randomY = (Math.random() - 0.5) * offset;
      
      particle.style.left = `${e.clientX + randomX}px`;
      particle.style.top = `${e.clientY + randomY}px`;
      
      document.body.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 600);
    };
    
    // Add mousemove listener
    document.addEventListener('mousemove', addTrailParticle);
    
    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', addTrailParticle);
      // Remove any remaining particles
      const particles = document.querySelectorAll('.trail-particle');
      particles.forEach(particle => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      });
    };
  };

  // Sparkle click effect
  const createSparkles = (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;
    
    // Create container
    const container = document.createElement('div');
    container.className = 'sparkle-container';
    container.style.left = `${clickX}px`;
    container.style.top = `${clickY}px`;
    document.body.appendChild(container);
    
    // Create sparkles in multiple patterns
    const patterns = [
      { count: 8, delay: 0, radius: 20, angleOffset: 0 },    // Inner circle
      { count: 12, delay: 100, radius: 35, angleOffset: 15 }, // Middle circle
      { count: 16, delay: 200, radius: 50, angleOffset: 7.5 }  // Outer circle
    ];
    
    patterns.forEach(({ count, delay, radius, angleOffset }) => {
      setTimeout(() => {
        for (let i = 0; i < count; i++) {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          
          // Calculate position in circular pattern
          const angle = ((i * (360 / count)) + angleOffset) * Math.PI / 180;
          const distance = radius + (Math.random() * 10 - 5); // Add slight randomness
          const startX = Math.cos(angle) * distance;
          const startY = Math.sin(angle) * distance;
          
          // Set random drift for falling animation
          const drift = (Math.random() - 0.5) * 100;
          sparkle.style.setProperty('--drift', `${drift}px`);
          
          // Position sparkle
          sparkle.style.left = `${startX}px`;
          sparkle.style.top = `${startY}px`;
          
          container.appendChild(sparkle);
        }
      }, delay);
    });
    
    // Create some random sparkles for variety
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random position within a larger radius
        const angle = Math.random() * 360 * Math.PI / 180;
        const distance = 30 + Math.random() * 40;
        const startX = Math.cos(angle) * distance;
        const startY = Math.sin(angle) * distance;
        
        const drift = (Math.random() - 0.5) * 150;
        sparkle.style.setProperty('--drift', `${drift}px`);
        
        sparkle.style.left = `${startX}px`;
        sparkle.style.top = `${startY}px`;
        
        container.appendChild(sparkle);
      }, Math.random() * 300); // Random delay up to 300ms
    };
    
    // Remove container after all animations complete
    setTimeout(() => {
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    }, 3000);
  };

  // Add click listener
  useEffect(() => {
    document.addEventListener('click', createSparkles);
    return () => {
      document.removeEventListener('click', createSparkles);
    };
  }, []);

  // Add trail effect
  useEffect(() => {
    const cleanup = createTrail();
    return cleanup;
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CursorSparkle />
      <Box
        sx={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: 2,
          p: 1,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
        }}
      >
        {navItems.map((item) => (
          <Tooltip key={item.id} title={item.label} placement="left">
            <IconButton
              onClick={() => scrollToSection(item.id)}
              sx={{
                color: activeSection === item.id ? 'rgba(231, 76, 60, 1)' : 'rgba(255, 255, 255, 0.6)',
                transform: activeSection === item.id ? 'scale(1.2)' : 'scale(1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'rgba(231, 76, 60, 0.8)',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        {/* Home Section */}
        <Box id="home" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Typography variant="h4" component="h1" gutterBottom>
                    Hello, I'm Minna T J
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    Project Engineer
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    mb: 3, 
                    opacity: 0.9,
                    minHeight: '40px',
                    transition: 'opacity 0.5s ease-in-out',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px' }}>Specializing in</span>
                    <span style={{ minWidth: '200px' }}>
                      <ReactTyped
                        strings={[
                          'Business Analytics',
                          'Data Analytics',
                          'SAP BusinessObjects', 
                          'Power BI',
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        backDelay={2000}
                        loop
                      />
                    </span>
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary" 
                    size="large" 
                    sx={{ 
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      borderRadius: '30px',
                      boxShadow: '0 4px 10px rgba(231, 76, 60, 0.2)',
                      '&:hover': {
                        backgroundColor: '#c0392b'
                      }
                    }}
                    onClick={() => scrollToSection('projects')}
                  >
                    View My Work
                  </Button>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '30px',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    minHeight: '400px',
                    position: 'relative'
                  }}
                >
                  {/* Chart Type Selector */}
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    {['bar', 'line', 'combined'].map((type) => (
                      <Button
                        key={type}
                        onClick={() => setChartType(type)}
                        variant={chartType === type ? 'contained' : 'outlined'}
                        size="small"
                        style={{
                          textTransform: 'capitalize',
                          backgroundColor: chartType === type ? 'rgba(231, 76, 60, 0.8)' : 'transparent',
                          borderColor: 'rgba(231, 76, 60, 0.8)',
                          color: chartType === type ? '#fff' : 'rgba(231, 76, 60, 0.8)'
                        }}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>

                  <motion.svg
                    width="100%"
                    height="250"
                    viewBox="0 0 400 250"
                    style={{ overflow: 'visible' }}
                  >
                    {/* Background Grid */}
                    <g transform="translate(50, 30)">
                      {[...Array(6)].map((_, i) => (
                        <React.Fragment key={`grid-${i}`}>
                          <motion.line
                            x1="0"
                            y1={i * 30}
                            x2="300"
                            y2={i * 30}
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                          />
                          <motion.line
                            x1={i * 60}
                            y1="0"
                            x2={i * 60}
                            y2="150"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="1"
                          />
                        </React.Fragment>
                      ))}

                      {/* Bar Chart */}
                      {(chartType === 'bar' || chartType === 'combined') && 
                        chartData[dataSet].bars.map((bar, index) => (
                          <motion.rect
                            key={`bar-${index}`}
                            x={index * 60}
                            width="30"
                            fill="rgba(231, 76, 60, 0.8)"
                            animate={{ 
                              height: bar.height * 0.75, 
                              y: 150 - bar.height * 0.75 
                            }}
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              mass: 1
                            }}
                          />
                        ))
                      }

                      {/* Line Chart */}
                      {(chartType === 'line' || chartType === 'combined') && (
                        <>
                          <motion.path
                            d={`M15 ${150 - chartData[dataSet].bars[0].height * 0.75} 
                               L75 ${150 - chartData[dataSet].bars[1].height * 0.75} 
                               L135 ${150 - chartData[dataSet].bars[2].height * 0.75} 
                               L195 ${150 - chartData[dataSet].bars[3].height * 0.75} 
                               L255 ${150 - chartData[dataSet].bars[4].height * 0.75}`}
                            stroke="#e74c3c"
                            strokeWidth="2"
                            fill="none"
                            animate={{ 
                              d: `M15 ${150 - chartData[dataSet].bars[0].height * 0.75} 
                                 L75 ${150 - chartData[dataSet].bars[1].height * 0.75} 
                                 L135 ${150 - chartData[dataSet].bars[2].height * 0.75} 
                                 L195 ${150 - chartData[dataSet].bars[3].height * 0.75} 
                                 L255 ${150 - chartData[dataSet].bars[4].height * 0.75}`
                            }}
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              mass: 1
                            }}
                          />

                          {/* Data Points */}
                          {chartData[dataSet].bars.map((bar, index) => (
                            <motion.circle
                              key={`point-${index}`}
                              cx={index * 60 + 15}
                              fill="#fff"
                              r="4"
                              animate={{ 
                                cy: 150 - bar.height * 0.75
                              }}
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                mass: 1
                              }}
                            />
                          ))}
                        </>
                      )}
                    </g>
                  </motion.svg>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* About Section */}
        <Box id="about" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(231, 76, 60, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
            zIndex: 0
          }
        }}>
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            {/* Background Shapes */}
            <Box sx={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0 }}>
              <FloatingShape delay={0} duration={7} size={60} left={10} top={20} />
              <FloatingShape delay={1} duration={8} size={40} left={25} top={60} />
              <FloatingShape delay={2} duration={6} size={50} left={45} top={30} />
              <FloatingShape delay={3} duration={9} size={35} left={65} top={70} />
              <FloatingShape delay={4} duration={7} size={45} left={80} top={40} />
            </Box>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>About Me</SectionTitle>
            </motion.div>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <Typography variant="body1" paragraph>
                    I'm a passionate Project Engineer with expertise in SAP BusinessObjects, PowerBI, and advanced database tools. 
                    Currently pursuing a Master's in Business Analytics in Indian Institute of Technology (ISM) Dhanbad, I specialize in developing and optimizing business intelligence solutions.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    With a Bachelor's in Information Technology from Government College of Engineering Sreekrishnapuram, I combine technical expertise with business acumen to deliver impactful solutions.
                  </Typography>
                  <Typography variant="body1">
                    Always learning and growing, I'm certified in Microsoft Power BI(PL-300), thriving in dynamic settings.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  style={{
                    position: 'relative',
                    zIndex: 2
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    '& img': {
                      width: '300px',
                      height: '300px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      border: '5px solid rgba(231, 76, 60, 0.8)',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                      }
                    }
                  }}>
                    <img src={require('./images/profile.jpg')} alt="Minna T J" />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Skills Section */}
        <Box id="skills" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bgcolor: theme => theme.palette.background.default,
          py: 8,
          overflow: 'hidden'
        }}>
          {/* Background Skill Icons */}
          {/* Data/Code Icon */}
          <Box
            sx={{
              position: 'absolute',
              left: '5%',
              top: '15%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <DataObjectIcon 
              sx={{ 
                fontSize: '350px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(-10deg)'
              }} 
            />
          </Box>

          {/* Database Icon */}
          <Box
            sx={{
              position: 'absolute',
              right: '10%',
              top: '20%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <StorageIcon 
              sx={{ 
                fontSize: '250px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(15deg)'
              }} 
            />
          </Box>

          {/* Cloud Icon */}
          <Box
            sx={{
              position: 'absolute',
              left: '15%',
              bottom: '15%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <CloudIcon 
              sx={{ 
                fontSize: '200px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(-5deg)'
              }} 
            />
          </Box>

          {/* Analytics Icon */}
          <Box
            sx={{
              position: 'absolute',
              right: '5%',
              bottom: '20%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <BubbleChartIcon 
              sx={{ 
                fontSize: '300px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(10deg)'
              }} 
            />
          </Box>

          {/* Integration/API Icon */}
          <Box
            sx={{
              position: 'absolute',
              right: '40%',
              top: '10%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <IntegrationInstructionsIcon 
              sx={{ 
                fontSize: '200px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(-8deg)'
              }} 
            />
          </Box>

          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>Skills</SectionTitle>
            </motion.div>
            <Grid container spacing={3}>
              {[
                {
                  title: 'Business Intelligence',
                  icon: <BarChartIcon sx={{ fontSize: 40, color: 'rgba(231, 76, 60, 0.8)' }} />,
                  skills: ['SAP BusinessObjects', 'Power BI', 'SQL', 'Data Analysis']
                },
                {
                  title: 'Development',
                  icon: <CodeIcon sx={{ fontSize: 40, color: 'rgba(231, 76, 60, 0.8)' }} />,
                  skills: ['Python', 'JavaScript', 'React', 'Node.js']
                },
                {
                  title: 'Technologies',
                  icon: <DevicesIcon sx={{ fontSize: 40, color: 'rgba(231, 76, 60, 0.8)' }} />,
                  skills: ['Web Services', 'REST APIs', 'Git', 'Cloud Platforms']
                },
                {
                  title: 'Soft Skills',
                  icon: <PeopleIcon sx={{ fontSize: 40, color: 'rgba(231, 76, 60, 0.8)' }} />,
                  skills: ['Project Management', 'Team Leadership', 'Communication', 'Problem Solving']
                }
              ].map((section, index) => (
                <Grid item xs={12} sm={6} md={3} key={section.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card 
                      elevation={3}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 6
                        }
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        {section.icon}
                      </Box>
                      <Typography variant="h6" component="h3" gutterBottom align="center">
                        {section.title}
                      </Typography>
                      <List sx={{ width: '100%' }}>
                        {section.skills.map((skill, idx) => (
                          <ListItem key={idx} sx={{ px: 0 }}>
                            <motion.div
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                              style={{ width: '100%' }}
                            >
                              <ListItemText 
                                primary={skill}
                                sx={{
                                  '& .MuiListItemText-primary': {
                                    textAlign: 'center'
                                  }
                                }}
                              />
                            </motion.div>
                          </ListItem>
                        ))}
                      </List>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box id="projects" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          py: 8,
          overflow: 'hidden'
        }}>
          {/* Background Code Icons */}
          <Box
            sx={{
              position: 'absolute',
              left: '-5%',
              top: '10%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <CodeIcon 
              sx={{ 
                fontSize: '400px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(-15deg)'
              }} 
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              right: '10%',
              bottom: '10%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <TerminalIcon 
              sx={{ 
                fontSize: '300px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(15deg)'
              }} 
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              right: '5%',
              top: '20%',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          >
            <DeveloperModeIcon 
              sx={{ 
                fontSize: '250px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(-5deg)'
              }} 
            />
          </Box>

          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>Projects</SectionTitle>
            </motion.div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary">
                        IRDA1 Project
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Enhanced report development and database management with SAP BO and SQL.
                        Implemented DAX formulas for enhanced data analysis and visualization.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary">
                        US Bank Project
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Developed Power BI reports, managed the integration between SQL Server database and Power BI.
                        Enhanced data analysis capabilities through DAX formulas. Implemented data visualization using Power BI.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary">
                        Autonomous Car Pooling System
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Built a blockchain-based carpooling platform using Ethereum and smart contracts. 
                        Implemented user authentication and transaction management using Solidity and web3.js.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>


        {/* Personal Projects Section */}
        <Box id="personal-projects" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          py: 8,
          overflow: 'hidden'
        }}>
          {/* Background Code Icons */}
 {/* Gradient Circle - Top Left */}
      <Box
        sx={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle, rgba(142,68,173,0.3), transparent)',
          pointerEvents: 'none',
          animation: `${floatAnimation} 6s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* Gradient Circle - Bottom Right */}
      <Box
        sx={{
          position: 'absolute',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          bottom: '-15%',
          right: '-15%',
          background: 'radial-gradient(circle, rgba(52,152,219,0.25), transparent)',
          pointerEvents: 'none',
          animation: `${floatAnimation} 8s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* Diagonal Striped Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(236,240,241,0.05) 0, rgba(236,240,241,0.05) 1px, transparent 1px, transparent 20px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
            <SectionTitle>Personal Projects</SectionTitle>
            </motion.div>
            <Grid container spacing={4}>

              {/* Chatbot for IIT ISM Dhanbad */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary">
                        Chatbot for IIT ISM Dhanbad
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Developed a chatbot using crewai, streamlit and python.
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Experience the chatbot in action <a target="_blank" rel="noopener noreferrer" href="https://crewai-chatbot.streamlit.app/">here</a>.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>


              {/* Weather Dashboard */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h5" gutterBottom color="primary">
                        Weather Dashboard
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Developed a Weather Dashboard using streamlit and python.
                      </Typography>
                      <Typography variant="body2" paragraph>
                        Experience the Weather Dashboard in action <a target="_blank" rel="noopener noreferrer" href="https://minna-weather-dashboard.streamlit.app/">here</a>.
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>

            </Grid>
          </Container>
        </Box>




        {/* Achievements Section */}
        <Box id="achievements" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bgcolor: '#f5f6fa',
          py: 8,
          overflow: 'hidden'
        }}>
          {/* Background Trophy */}
          <Box
            sx={{
              position: 'absolute',
              right: '-5%',
              top: '50%',
              transform: 'translateY(-50%)',
              opacity: 0.05,
              pointerEvents: 'none',
              zIndex: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EmojiEventsIcon 
              sx={{ 
                fontSize: '500px',
                color: 'rgba(231, 76, 60, 1)',
                transform: 'rotate(-15deg)'
              }} 
            />
          </Box>

          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>Achievements</SectionTitle>
            </motion.div>
            <Grid container spacing={4}>
     {/*          <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h6" color="primary">
                        Education
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                          MBA in Business Analytics
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Indian Institute of Technology (Indian School of Mines), Dhanbad
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          2024-2026
                        </Typography>
                      </Box>
                      <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" gutterBottom>
                          B.Tech in Information Technology
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Govt. Engineering College Sreekrishnapuram
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          2017-2021 • 73.05%
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid> */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card elevation={3}>
                    <CardContent>
                      <Typography variant="h6" color="primary" gutterBottom>
                        Certifications & Achievements
                      </Typography>
                      <Typography variant="body2" paragraph>
                        • Microsoft Power BI (PL-300) Certification
                      </Typography>
                      <Typography variant="body2" paragraph>
                        • Blockchain Development Certification
                      </Typography>
                      <Typography variant="body2" paragraph>
                        • Hosted Tech Fest Event at GEC Palakkad
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box id="contact" className="snap-section" sx={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          bgcolor: '#2c3e50',
          color: 'white',
          py: 8 
        }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle>Contact</SectionTitle>
              <Typography variant="h6" align="center" sx={{ mb: 4, color: 'rgba(255, 255, 255, 0.8)' }}>
                Let's get in touch! Feel free to send me a message.
              </Typography>
            </motion.div>
            
            <ContactForm />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
