import React from "react";
import herovideo from "../Home/herovideo.mp4";
import { Box, Card, Typography } from "@mui/material";
const Services = () => {
  return (
    <div className="vw-90">
      <video
        autoPlay
        loop
        className="w-100 "
        style={{ objectFit: "cover", top: 0, left: 0, height: "50%" }}
      >
        <source src={herovideo} type="video/mp4" />
      </video>
      <Box>
        <Typography>
          What are the benefits of Corporate Training for employees?
        </Typography>
        <Card>
          Most of us tend to use the terms ‘Training’ & ‘Development’
          interchangeably, but are they the same? While training programs help
          employees to learn specific and quantifiable skills, like performing
          certain procedures with great precision or understanding a specific
          process; development programs focus on broader skills that apply to a
          wider context or set of situations like goal-setting, decision-making,
          communication, or leadership skills. Corporate training serves the
          dual purpose of furthering an individual’s growth and the
          organization’s growth. In other words, organizational effectiveness is
          a function of the employee’s growth.
        </Card>
      </Box>
    </div>
  );
};

export default Services;
