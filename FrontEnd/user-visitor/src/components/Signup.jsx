import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogActions,
} from '@mui/material';

const steps = ['Personal Information', 'Academic Information', 'Privacy Policy', 'Registered'];

const Signup = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleNext = () => {
    if (activeStep === 2 && !privacyChecked) {
      alert('Please agree to the privacy policy to proceed.');
      return;
    }
    if (activeStep === 3) {
      setDialogOpen(true);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6">Enter your name as per your ID</Typography>
            <TextField label="First Name" name="firstName" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Last Name" name="lastName" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Date of Birth" name="dob" type="date" fullWidth margin="normal" onChange={handleChange} InputLabelProps={{ shrink: true }} />
            <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Phone No" name="phone" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Student ID" name="studentId" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Password" name="password" type="password" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Confirm Password" name="confirmPassword" type="password" fullWidth margin="normal" onChange={handleChange} />
          </Box>
        );
      case 1:
        return (
          <Box>
            <Typography variant="h6">Academic Information</Typography>
            <Typography>Intermediate</Typography>
            <TextField label="Domain" name="intermediateDomain" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Obtained Marks" name="intermediateMarks" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Grade / Percentage" name="intermediateGrade" fullWidth margin="normal" onChange={handleChange} />
            <Typography>Matric</Typography>
            <TextField label="Domain" name="matricDomain" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Obtained Marks" name="matricMarks" fullWidth margin="normal" onChange={handleChange} />
            <TextField label="Grade / Percentage" name="matricGrade" fullWidth margin="normal" onChange={handleChange} />
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="body2" paragraph>
              At Smart Entry Test Proctor, we are committed to protecting your privacy and ensuring the security of your personal information. When you use our system, we collect various types of data including personal identification details (such as names and contact information), facial images and biometric data for identity verification, usage data (including IP addresses and device information), and test-related data (such as responses and results).
            </Typography>
            <FormControlLabel
              control={<Checkbox checked={privacyChecked} onChange={() => setPrivacyChecked(!privacyChecked)} />}
              label="I agree to all privacy policies."
            />
          </Box>
        );
      case 3:
        return (
          <Box textAlign="center">
            <Typography variant="h6">Account Registered Successfully</Typography>
            <Typography variant="body2" paragraph>
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </Typography>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Register
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box mt={4}>{renderStepContent(activeStep)}</Box>
      <Box mt={4} display="flex" justifyContent="space-between">
        {activeStep > 0 && (
          <Button variant="outlined" onClick={handleBack}>
            Back
          </Button>
        )}
        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogContent>
          <Typography variant="h6">Account Registered Successfully</Typography>
          <Typography>
            Your account has been registered. You can now log in and start using the platform.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Done</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Signup;