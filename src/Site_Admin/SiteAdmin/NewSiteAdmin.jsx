import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  PeopleAltRounded,
  EventRounded,
  EventSeatRounded,
  MovieCreationRounded,
  TheatersRounded,
  Block,
  ClassRounded,
  AdminPanelSettingsRounded,
  Schedule,
  ConfirmationNumber,
  LocationOn,
  Newspaper,
  Feed,
  ViewCarousel,
  BookOnline,
  Report,
  AccountTree,
} from "@mui/icons-material";
import Users from '../SiteAdminMain/SiteAdminMainComponents/Users/Users'
import Events from '../SiteAdminMain/SiteAdminMainComponents/Events/Events'
import Theater from '../SiteAdminMain/SiteAdminMainComponents/Theater/Theater'

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end"
}));

export default function SiteAdmin() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [appView, setAppView] = React.useState("Users");

  const sidebarList = [
    "Users",
    "Events",
    "Movies",
    "Theater Admin",
    "Theater",
    "Seating Rows",
    "Class",
    "Seat Blocking",
    "Movie Schedule",
    "Book Tickets",
    "Location",
    "News",
    "Banner Ads",
    "Newsletter",
    "Booking",
    "Reports",
    "Site Settings",
    "CMS"];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" color='secondary' open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap component="div">
            {appView}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          bgColor: 'secondary',
          top: "10"
        }}>
          <Typography variant="h5" color='secondary' noWrap component="div">
            Show World
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sidebarList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => setAppView(text)}>
                <ListItemIcon>
                  {text === "Users" ? (
                    <PeopleAltRounded color='secondary' />
                  ) : text === "Events" ? (
                    <EventRounded color='secondary' />
                  ) : text === "Movies" ? (
                    <MovieCreationRounded color='secondary' />
                  ) : text === "Seating Rows" ? (
                    <EventSeatRounded color='secondary' />
                  ) : text === "Theater" ? (
                    <TheatersRounded color='secondary' />
                  ) : text === "Class" ? (
                    <ClassRounded color='secondary' />
                  ) : text === "Theater Admin" ? (
                    <AdminPanelSettingsRounded color='secondary' />
                  ) : text === "Seat Blocking" ? (
                    <Block color='secondary' />
                  ) : text === "Movie Schedule" ? (
                    <Schedule color='secondary' />
                  ) : text === "Book Tickets" ? (
                    <ConfirmationNumber color='secondary' />
                  ) : text === "Location" ? (
                    <LocationOn color='secondary' />
                  ) : text === "News" ? (
                    <Newspaper color='secondary' />
                  ) : text === "Banner Ads" ? (
                    <Feed color='secondary' />
                  ) : text === "Reports" ? (
                    <Report color='secondary' />
                  ) : text === "Site Settings" ? (
                    <ViewCarousel color='secondary' />
                  ) : text === "CMS" ? (
                    <AccountTree color='secondary' />
                  ) : text === "Booking" ? (
                    <BookOnline color='secondary' />
                  ) : (
                    <MailIcon color='secondary' />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
  
      </Drawer>
      <Main open={open}>
        {/* <DrawerHeader /> */}
        {appView === "Users" ? (
          <Users />
        ) : appView === "Events" ? (
          <Events />
        ) : (
          <Theater />
        )}
      </Main>
    </Box>
  );
}
