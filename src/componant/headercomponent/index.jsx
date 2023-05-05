import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const navMembers = [
  { lable: "SERVICES", path: "/Services" },
  { lable: "SOLUTIONS", path: "/Solutions" },
  { lable: "BLOGS", path: "/Blogs" },
  { lable: "CONTACT US", path: "/ContactUs" },
];
const HeaderComponent = () => {
  const navigate = useNavigate();
  const [scrollCss, setScrollCss] = useState("");
  const handleScroll = () => {
    const temp =
      window.scrollY === 0
        ? {
            bgcolor: "transparent",
            height: "100px",
            color: "white",
            boxShadow: "none",
          }
        : { bgcolor: "white", height: "70px", color: "black" }; // => scroll position

    setScrollCss(temp);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar className="sticky-top" sx={scrollCss}>
      <Container maxWidth={"xl"}>
        <Toolbar>
          <Typography
            width={"230px"}
            onClick={() => {
              navigate("/");
            }}
          >
            The Happy Learning Place
          </Typography>
          <Box
            className="d-flex g-2 w-100 "
            sx={{ justifyContent: "flex-end" }}
          >
            {navMembers.map((item, key) => (
              <Button
                key={key}
                sx={{ my: 2, display: "block", color: scrollCss.color }}
                onClick={() => {
                  navigate(item.path);
                }}
              >
                {item.lable}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderComponent;
