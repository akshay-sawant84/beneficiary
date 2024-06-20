import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Container,
  FormContainer,
  Heading,
  MainHeading,
  FlexHeader,
} from "./styles";
import { useForm } from "@/forms";
import { controls, controlMapping } from "./controls";
import { setUserDetails, resetState } from "@/redux/userSlice";
import isEmpty from "@/utils/isEmpty";
import { generateZodSchema } from "@/utils/schemaValidator";
import { generateYupSchema } from "@/utils/yupSchemaValidator";

function Home() {
  const router = useRouter();

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const dispatch = useDispatch();

  // const schema = generateZodSchema(controls);
  const schema = generateYupSchema(controls);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log("errors", errors, schema);

  const onSubmit = (values) => {
    dispatch(setUserDetails(values));
    setOpenSnackBar(true);
  };

  const handleRoute = () => {
    router.push("/beneficiaries");
  };

  const handleCloseSnackbar = () => {
    setOpenSnackBar(false);
  };

  const { user } = useSelector((state) => state?.user);

  return (
    <Container>
      <FormContainer>
        <MainHeading>Beneficiary</MainHeading>
        <FlexHeader>
          <Heading>Bank Customer Details</Heading>
          {!isEmpty(user) && (
            <Button variant="contained" type="submit" onClick={handleRoute}>
              Manage Beneficiaries
            </Button>
          )}
        </FlexHeader>
        {isEmpty(user) ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {controls.map((val) => {
                const FormItem = controlMapping[val.controllerType];
                return (
                  <Grid item xs={12} md={val.grid || "12"}>
                    {" "}
                    <FormItem
                      style={{ width: "100%" }}
                      control={control}
                      {...val}
                      error={!!errors[val.name]}
                      helperText={errors[val.name]?.message}
                    />{" "}
                  </Grid>
                );
              })}
            </Grid>
            <Button
              style={{ marginTop: "20px" }}
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </form>
        ) : (
          <List>
            <ListItem>Fullname : {user?.fullName}</ListItem>
            <ListItem>Address : {user?.address}</ListItem>
            <ListItem style={{ textTransform: "capitalize" }}>
              Country : {user?.country}
            </ListItem>
            <ListItem>
              Mobile Number : {user?.mobileNumber?.country_code}{" "}
              {user?.mobileNumber?.number}
            </ListItem>
            <ListItem>Pincode : {user?.pincode}</ListItem>
          </List>
        )}
        {!isEmpty(user) && (
          <Button
            style={{ marginTop: "20px" }}
            variant="contained"
            onClick={() => dispatch(resetState())}
          >
            Clear Redux Storage
          </Button>
        )}
      </FormContainer>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          User Created Successfully
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Home;
