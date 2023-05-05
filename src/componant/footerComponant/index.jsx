import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Toolbar } from "@mui/material";

const FooterCompnonent = () => {
  return (
    <footer>
      <div className="d-flex justify-content-evenly">
        <p>&copy; 2023 The Happy Learning Place </p>
        <Toolbar>
          <ul className="d-flex justify-content-evenly list-unstyled  ">
            <li>
              <FacebookRoundedIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <TwitterIcon />
            </li>
          </ul>
        </Toolbar>

        <p>Privacy notice</p>
        <p> Morden slave statement</p>
        <div>content</div>
      </div>
    </footer>
  );
};

export default FooterCompnonent;
