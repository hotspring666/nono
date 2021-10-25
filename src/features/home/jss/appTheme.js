import { createTheme } from "@material-ui/core/styles";

const createAppTheme = (isNightMode) =>
  createTheme({
    palette: {
      type: isNightMode ? "dark" : "light",
      background: {
        default: isNightMode ? "black" : "#fbf9f6",
        contrast: isNightMode ? "#fff" : "rgb(33, 36, 41)",
        paper: isNightMode ? "rgb(50, 52, 56)" : "#fff",
        primary: isNightMode ? "#E84242" : "#1F4F2C",
        secondary: isNightMode ? "rgb(50, 52, 56)" : "#97eac9",
        grey: "rgb(50, 52, 56)",
        menu: "rgb(9,11,31)",
        dark: isNightMode ? "rgba(255,255,255,0.3)" : "#999",
        paused: isNightMode ? "#2B2A5A" : "#FCE57E",
        retired: isNightMode ? "#2C2F36" : "#F5F3F3",
        hover: isNightMode ? "#2B2A3D" : "#EFE6DC",
        border: isNightMode ? "#2B2A3D" : "#DED9D5",
      },

      primary: {
        main: isNightMode ? "#fff" : "#000",
      },
      secondary: {
        main: isNightMode ? "rgb(50, 52, 56)" : "#F8F2EC",
      },
      text: {
        primary: isNightMode ? "#ffffff" : "#000",
        green: "#B4FF4F",
        red: "#ff6363",
        contrast: isNightMode ? "#000" : "#fff",
        secondary: isNightMode ? "rgba(255, 255, 255, 0.6)" : "#5A286E",
        minor: "rgb(70, 200, 100)",
      },
      sectionBg: {
        primary: isNightMode ? "gray" : "lightgray",
      },
      farmIcon: isNightMode ? "farm_white.png" : "farm_grey.png",
      vaultIcon: isNightMode ? "vault_white.png" : "vault_grey.png",
      collectorIcon: isNightMode ? "collector_white.png" : "collector_grey.png",
      govIcon: isNightMode ? "gov_white.png" : "gov.png",
      docsIcon: isNightMode ? "docs_white.png" : "docs.png",
      exchangeIcon: isNightMode ? "swap_white.png" : "swap_grey.png",
      bridgeIcon: isNightMode ? "bridge_white.png" : "bridge_grey.png",
      discordIcon: isNightMode ? "discord_white.svg" : "discord.svg",
      yearnIcon: isNightMode ? "yearn.png" : "yearn.png",
      idleIcon: isNightMode ? "idle.png" : "idle.png",
      dashboardIcon: isNightMode ? "dashboard_white.png" : "dashboard_grey.png",
      daiIcon: isNightMode ? "dai.png" : "dai.png",
      pickleIcon: isNightMode ? "pickle.png" : "pickle.png",
      harvestIcon: isNightMode ? "harvest.png" : "harvest.png",
      vesperIcon: isNightMode ? "vesper.png" : "vesper.png",
      wbtcIcon: isNightMode ? "wbtc.png" : "wbtc.png",
      liquityIcon: isNightMode ? "liquity.png" : "liquity.png",
      lusdIcon: isNightMode ? "lusd.png" : "lusd.png",
      newIcon: isNightMode ? "new.png" : "new.png",
      ethIcon: "eth.png",
      wethIcon: "eth.png",
    },
    overrides: {
      MuiTab: {
        root: {
          backgroundColor: "red",
          "&$selected": {
            backgroundColor: "blue",
          },
        },
      },
      MuiButton: {
        label: {
          color: isNightMode ? "#000" : "#000",
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? "#fff" : "#000",
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? "#fff" : "#000",
        },
        colorSecondary: {
          color: isNightMode ? "#fff" : "#000",
        },
      },
      MuiListItemText: {
        primary: {
          fontFamily: "Futura",
        },
      },
      MuiTableCell: {
        root: {
          fontFamily: "Futura",
        },
      },
      MuiTypography: {
        body1: {
          fontFamily: "Futura",
        },
        body2: {
          fontFamily: "Futura",
        },
      },
      MuiTab: {
        root: {
          fontFamily: "Futura",
        },
      },
      MuiButton: {
        root: {
          fontFamily: "Futura",
        },
        contained: {
          backgroundColor: "rgb(33, 36, 41)",
          color: "white",
          border: "white 1px solid",
        },
      },
      MuiAlert: {
        filledWarning: {
          fontFamily: "Futura",
          fontSize: "1rem",
          fontWeight: "800",
        },
        filledError: {
          fontFamily: "Futura",
          fontSize: "1rem",
          fontWeight: "800",
        },
        filledInfo: {
          fontFamily: "Futura",
          fontSize: "1rem",
          fontWeight: "800",
        },
      },
      MuiStepIcon: {
        root: {
          color: "white",
        },
      },
    },
  });

export default createAppTheme;
