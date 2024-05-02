"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography, Stack } from "@mui/material";
import { withFormik } from "formik";
import * as Yup from "yup";

import { FormValues, FormProps } from "./types";
import { IUsers } from "@/interface/user.interface";

import PageWrapper from "../global/components/pageWrapper";
import InnerForm from "./components/innerForm";
import instance from "@/utils/axiosInstance";

const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegisterView = () => {
  const router = useRouter();

  const register = async ({ email, password }: IUsers) => {
    try {
      const { data } = await instance.post("/auth/register", {
        email,
        password,
      });
      alert(data?.message);
    } catch (err) {
      console.log(err);
    }
  };

  const LoginForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      email: props.initialEmail || "",
      password: props.initialPassword || "",
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ email, password }: FormValues, { resetForm }) {
      register({ email, password });
      resetForm();
      router.push("/login");
    },
  })(InnerForm);

  return (
    <PageWrapper>
      <Container>
        <Box
          display="flex"
          sx={{
            justifyContent: "center",
            marginTop: "2rem",
            padding: "2rem",
          }}
        >
          <Stack spacing={8}>
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Register Form
            </Typography>
            <LoginForm />
          </Stack>
        </Box>
      </Container>
    </PageWrapper>
  );
};

export default RegisterView;
