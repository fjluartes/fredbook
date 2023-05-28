import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <div>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
        </div>
        <div>
          <Link href="/signup" color="secondary">
            Go to the Sign Up page
          </Link>
        </div>
        <div>
          <Link href="/signin" color="secondary">
            Go to the Sign In page
          </Link>
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
