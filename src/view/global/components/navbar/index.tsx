"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { signOut } from "@/lib/features/auth/authSlice";

const NavbarWrapper = styled(Box)(() => ({
  minHeight: "100%",
  backgroundColor: "rgb(209 213 219)",
}));

const Navbar = () => {
  const router = useRouter();
  const { isLogin } = useAppSelector((state) => state.auth.status);
  const dispatch = useAppDispatch();

  return (
    <NavbarWrapper>
      <Box
        sx={{
          margin: "auto",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        <Box
          display="flex"
          sx={{
            height: "4rem",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            display="flex"
            sx={{
              alignItems: "center",
            }}
          >
            <Typography>Todo-App</Typography>
          </Box>
          {isLogin == false ? (
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" onClick={() => router.push("/login")}>
                Login
              </Button>
              <Button
                variant="outlined"
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </Stack>
          ) : (
            <Button
              variant="outlined"
              onClick={() => {
                dispatch(signOut());
                router.push("/");
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Box>
    </NavbarWrapper>
  );
};

export default Navbar;
