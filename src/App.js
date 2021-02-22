import "./App.scss";
import React, { useState } from "react";
import Intro from "./Components/Intro";
import Nav from "./Components/Nav";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

import { AppBar, Toolbar, Typography } from "@material-ui/core";

function App() {
  return (
    <>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "rgba(30, 108, 217, 0.8)" }}
      >
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">Sean Oyler</Typography>
          <Typography color="inherit">
            <Nav />
          </Typography>
        </Toolbar>
      </AppBar>
      <Intro />
      <div className="divider"></div>
      <VisibilitySensor>
        {({ isVisible }) => (
          <Spring delay={200} to = {{opacity: isVisible ? 1 : 0 }}>
            {({opacity}) => (
              <p style={{opacity}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
          pulvinar metus. Nam mollis metus eget odio commodo vehicula.
          Pellentesque laoreet metus pulvinar gravida tincidunt. Nulla pulvinar,
          sem id euismod aliquam, leo enim feugiat augue, non consectetur ex
          libero id ligula. Aliquam erat volutpat. Vestibulum at mauris
          venenatis ligula commodo semper eu id eros. Phasellus porttitor
          elementum metus sed luctus. Suspendisse consequat, orci sit amet
          tincidunt ornare, dui orci malesuada felis, a mollis mi enim sit amet
          nisl. Nullam non risus sodales, faucibus leo id, gravida nisi. Fusce
          sed vehicula neque. Nulla eu neque nec augue rhoncus interdum tempor
          ut elit. Integer vulputate sapien non dui vulputate, venenatis
          tristique leo suscipit. Vivamus velit tortor, pharetra in dictum
          vitae, laoreet at felis. Vivamus et nibh cursus, blandit dui a, luctus
          risus. Ut ullamcorper turpis vel elit semper feugiat. Cras lobortis
          aliquam massa vitae dignissim.
              </p>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </>
  );
}

export default App;
