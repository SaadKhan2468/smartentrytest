import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";

const testimonials = [
  {
    name: "Stephanie Powell",
    position: "VP of Sales at SalesForce",
    title: "Revitalized my work approach",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "John Doe",
    position: "CEO at TechCorp",
    title: "Transformed our team's productivity",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
  {
    name: "Sarah Brown",
    position: "Head of Marketing at Brandly",
    title: "Excellent platform",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Michael Scott",
    position: "Regional Manager at Dunder Mifflin",
    title: "Highly recommended",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    position: "Product Manager at Initech",
    title: "Helped streamline our processes",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
  },
];

const Testimonials = ({ mode = "light" }) => {
  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f9f9f9",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#ffffff" : "#000000",
        secondary: mode === "dark" ? "#aaaaaa" : "#666666",
      },
    },
    typography: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "background.default",
          minHeight: "100vh",
          padding: 4,
        }}
      >
        <Box sx={{ width: "80%" }}>
          {/* Headings */}
          <Typography
            variant="h4"
            fontWeight="700"
            color="text.primary"
            textAlign="center"
            mb={1}
          >
            Hear What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign="center"
            mb={4}
          >
            Insights and experiences from satisfied users.
          </Typography>

          {/* Testimonial Content */}
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 4,
              borderRadius: 3,
              backgroundColor: "background.paper",
            }}
          >
            {/* Previous Button */}
            <IconButton onClick={handlePrevious}>
              <ArrowBackIosIcon />
            </IconButton>

            <Grid container spacing={4} alignItems="center">
              {/* Avatar Section */}
              <Grid item xs={12} sm={3} textAlign="center">
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.text.secondary,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <Typography variant="h4" color="background.default">
                    <i className="fas fa-user"></i>
                  </Typography>
                </Box>
              </Grid>

              {/* Testimonial Section */}
              <Grid item xs={12} sm={9}>
                <Box>
                  <Box sx={{ display: "flex", gap: 1, mb: 1 }}>
                    {Array.from({ length: currentTestimonial.rating }, (_, i) => (
                      <StarIcon key={i} color="primary" />
                    ))}
                  </Box>
                  <Typography
                    variant="h6"
                    fontWeight="700"
                    color="text.primary"
                    mb={1}
                  >
                    "{currentTestimonial.title}"
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {currentTestimonial.message}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight="600"
                  >
                    {currentTestimonial.name} | {currentTestimonial.position}
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Next Button */}
            <IconButton onClick={handleNext}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Paper>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Testimonials;
