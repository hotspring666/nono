import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Grid, IconButton, Button, useMediaQuery } from "@material-ui/core";
import _ from "lodash";
const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    fontSize: 21,
    marginTop: "20%",
    marginBottom: 30,
    fontFamily: "Futura",
  },
  subTitle: {
    fontSize: 12,
    marginTop: 30,
    letterSpacing: 1,
  },
  contact: {
    marginTop: 180,
    "& .MuiButton-label": {
      fontSize: 12,
      letterSpacing: 1.5,
    },

    width: 180,
    padding: "1px 10px",
    border: `1px solid white`,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: `white`,
      "& .MuiButton-label": {
        color: "black",
      },
    },
  },
}));

const Landing = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div
        className="fadeIn3"
        style={{
          color: "white",
        }}
      >
        <div className={classes.title}>
          <img
            src={require("assets/img/nono.png").default}
            style={{ width: 400, height: 100, objectFit: "contain" }}
          />
        </div>
        <hr style={{ maxWidth: 500 }} />
        <div className={classes.subTitle}>
          THE ABSOLUTE GIFT FOR THE GIRL WHO HAS EVERYTHING
        </div>
      </div>
      <div className="fadeIn7">
        <Button
          className={classes.contact}
          variant="outlined"
          onClick={() => {
            window.open("mailto:contact@nonofleuroro.com");
          }}
        >
          Contact
        </Button>
      </div>
      <div className="fadeIn7" style={{ marginTop: 20 }}>
        <a href="https://instagram.com/nonofleuroro" target="_blank">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </a>
      </div>
    </>
  );
};

export default Landing;
