import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import { Grid, GridItem } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar.js";

const RootLayout = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bgColor="gray.50">
      <GridItem
        as="aside"
        colSpan={1}
        bgColor="purple.400"
        minH="100vh"
        p="30px"
      >
        <Sidebar />
      </GridItem>
      <GridItem as="main" colSpan={5} px="40px" py="20px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default RootLayout;
