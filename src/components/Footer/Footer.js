import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import styles from "./styles";

const useStyles = makeStyles(styles);

const Footer = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Grid
      justifyContent="center"
      alignItems="center"
      container
      style={{ marginTop: 100 }}
    >
      <Grid
        item
        style={{ color: "white", fontSize: 10, textDecoration: "underline" }}
      >
        © 2021 nonofleuroro. All rights reserved.
      </Grid>
    </Grid>
  );
};

export default memo(Footer);
