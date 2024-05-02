"use client";

import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

import { useAppSelector } from "@/lib/hooks";

import PageWrapper from "../global/components/pageWrapper";

const HomeView = () => {
  const { status, user } = useAppSelector((state) => state.auth);
  return (
    <PageWrapper>
      <Container>
        <Box
          sx={{
            marginTop: "1rem",
            padding: "1rem",
          }}
        >
          <Typography sx={{ textAlign: "start" }}>
            {status.isLogin ? `Welcome back ${user.email}` : ""}
          </Typography>
        </Box>
        <Box
          display="flex"
          sx={{
            marginTop: "1rem",
            padding: "1rem",
            justifyContent: "center",
          }}
        >
          <Stack spacing={8}>
            <Typography variant="h4" sx={{ textAlign: "end" }}>
              Your Todo Here
            </Typography>
          </Stack>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default HomeView;
