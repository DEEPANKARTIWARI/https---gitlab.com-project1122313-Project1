import React, { useState } from "react";
import herovideo from "./herovideo.mp4";
import help from "./help.jpg";

import { Box, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "react-bootstrap";

const Home = () => {
  const [reasonsOptions, setReasonsOptions] = useState(1);
  return (
    <div className="vw-90">
      <video
        autoPlay
        loop
        className="w-100 vh-100"
        style={{ objectFit: "cover", top: 0, left: 0 }}
      >
        <source src={herovideo} type="video/mp4" />
      </video>
      <Box className="m-2">
        <Grid container height={"300px"} spacing={2}>
          <Grid item md={8}>
            <Paper className="   w-100 h-100 " sx={{ p: "50px" }}>
              <Typography variant="h3">About Us</Typography>
              <Typography variant="subtitle1" textAlign={"justify"}>
                Our new-age learning solutions generates quantifiable corporate
                and individual impact thanks to best-in-class technology.
                Organizations can craft tailored learning experiences and
                enhance employee productivity with the support of THLP's
                expertise. Developing livelihood skills and capabilities is
                another aspect of our expertise that we integrate into an
                organization's CSR strategy.
              </Typography>
            </Paper>
          </Grid>
          <Grid item md={4}>
            <Paper className="w-100 h-100">
              <img src={help} width={"100%"} height={"300px"} />
            </Paper>
          </Grid>
        </Grid>
        <Paper sx={{ my: 2 }}>
          <Box textAlign={"right"} padding={"50px"}>
            <Typography variant="h3" sx={{ my: "10px" }}>
              Creating sustainable social impact
            </Typography>
            <Typography variant="subtitle1" textAlign={"justify"}>
              To operationalize skill development and capability-building
              initiatives, we work collaboratively with businesses, schools,
              colleges, nonprofits, and international organizations. We also
              assist businesses in establishing a sustainable impact through
              their CSR initiatives. By allowing individuals, teams, and
              organizations to maximize their potential, we are determined to
              construct a better tomorrow. creating a better society and nation
              as a result. Thus, building a better society and a better country.
              Making the optimal decision for your business can be difficult,
              particularly when it comes to corporate training. It ought to come
              as a surprise that businesses are actively evaluating their
              current training methods considering the rapidly evolving
              macroeconomic conditions that influence how businesses make
              strategic decisions. To actually achieve employee development,
              businesses are proactively investing in more efficient training
              techniques and corporate trainers.
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: 3 }}>
          <Box textAlign={"center"}>
            <Typography variant="h3">Our Vision</Typography>
            <Typography variant="subtitle1" textAlign={"justify"}>
              To create awareness among participants about holistic development
              through sports, motivating employees through employee engagement
              activity, building soft skills, providing knowledge on mental
              health well-being, women & child rights, career awareness &
              similar life skills.
            </Typography>
          </Box>
        </Paper>
        <Paper sx={{ p: 4 }}>
          <Box textAlign={"center"}>
            <Typography variant="h3">Our Mission </Typography>
            <Typography variant="subtitle1"></Typography>
          </Box>
        </Paper>
        <Grid container height={"300px"} spacing={2} my={2}>
          <Grid item md={4}>
            {/* <Paper className="w-100 h-100" sx={}>
              <img src={help} width={"100%"} height={"300px"} /> */}
            <Typography
              variant="h3"
              height={"300px"}
              width={"100%"}
              sx={{
                backgroundImage: `url(${help})`,
                backgroundSize: "cover",
                pt: 5,
                pl: 5,
              }}
            >
              Why choose <q>The Happy Learning Place</q>?
            </Typography>
            {/* </Paper> */}
          </Grid>
          <Grid item md={8}>
            <Paper className="   w-100 h-100 " sx={{ p: "50px" }}>
              <Typography variant="subtitle1" textAlign={"justify"}>
                Setting up effective development and training programs for
                employees has enormous value. Employees may enhance performance,
                boost productivity, become good leaders, and acquire new skills
                through training. Organizations should exert every effort to
                ensure that individuals perform at their highest levels because
                a business is a culmination of what every employee accomplishes
                on an individual level.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container height={"180px"}>
          <Grid item md={3}>
            <Box
              className="d-flex flex-column justify-content-evenly"
              height={"100%"}
            >
              <Paper
                elevation={reasonsOptions === 1 ? 2 : 0}
                className="m-2"
                onClick={() => {
                  setReasonsOptions(1);
                }}
              >
                Employee satisfaction
              </Paper>
              <Paper
                elevation={reasonsOptions === 2 ? 2 : 0}
                className="m-2"
                onClick={() => {
                  setReasonsOptions(2);
                }}
              >
                Increased productivity
              </Paper>
              <Paper
                elevation={reasonsOptions === 3 ? 2 : 0}
                className="m-2"
                onClick={() => {
                  setReasonsOptions(3);
                }}
              >
                Self-driven
              </Paper>
            </Box>
          </Grid>
          <Grid item md={9}>
            {reasonsOptions === 1 && (
              <Paper className="p-3">
                A company that invests in training and development generally
                tends to have satisfied employees. However, the exercise has to
                be relevant to the employees and one from which they can learn
                and take back something. It will be futile if training and
                development become tedious and dull, and employees attend it
                merely because they have to. As a company, we stress
                industry-specific training and send many employees to
                international seminars and conferences that can be beneficial to
                them.
              </Paper>
            )}
            {reasonsOptions === 2 && (
              <Paper className="p-3">
                In a rapidly evolving landscape, productivity is not only
                dependent on employees, but also on the technology they use.
                Training and development go a long way in getting employees
                updated with new technology, using existing ones better, and
                then discarding outdated ones. This goes a long way in getting
                things done efficiently and in the most productive way.
              </Paper>
            )}
            {reasonsOptions === 3 && (
              <Paper className="p-3">
                Employees who have attended the right training need lesser
                supervision and guidance. Training develops necessary skill sets
                in employees and enables them to address tasks independently.
                This also allows supervisors and management to focus on more
                pressing areas. We at HLP, conduct various in-house training
                sessions on knowledge-building and skills & processes. The
                network facilitates various training sessions, based on
                experiential learning methodologies. The results from our
                training and development initiatives have been very positive and
                it clearly shows that it is not a fad. Training and development
                programs can have a huge impact on a company. Like every other
                function in your company, training and development should be
                focused on producing targeted and tangible results for the
                business. The key is to treat it seriously and consider it a
                capital investment and make it results-driven.
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
