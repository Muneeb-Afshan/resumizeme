import React from "react";
import {
  Circle,
  GreenContainer,
  MainContainer,
  Head1,
  Text,
  Image,
  Image1,
  PersonalInfoContainer,
  Head2,
  Text1,
  Text2,
  Head3,
  FooterText,
  FooterDiv,
  Hr,
  SupportCont,
  DeleteCont,
  SeriousCont,
  SeriousCheck,
  SaveBtn,
  Text4,
} from "../styles/PersonalInfoStyles";
import { Box, Grid, TextField } from "@mui/material";

function PersonalInfo() {
  return (
    <MainContainer>
      <GreenContainer>
        <Circle>
          <Image src={require("../images/preiumAccount.png")} />
        </Circle>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            padding: "15px",
          }}
        >
          <Head1>Premium Account</Head1>
          <Text>
            You have a premium account, granting you access to all the
            remarkable features offered by ResumeDone. With this privelege, you
            can indulge in the freedom of downloading an unliited number of
            resumesand cover letters in both PDF and Word formats.
          </Text>
        </div>
      </GreenContainer>
      <PersonalInfoContainer>
        <Head2>Personal Information</Head2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "48%" },
            "& .MuiFormLabel-root": { fontSize: "12px" },
            "& .MuiInputBase-root ": { height: "40px", fontSize: "13px" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                required
                id="firstName"
                label="First Name"
                defaultValue="Enter First Name"
                value="Petter"
              />

              <TextField
                required
                id="lastName"
                label="Last Name"
                defaultValue="Enter Last  Name"
                value="Cetera"
              />

              <TextField
                required
                id="city"
                label="city"
                defaultValue="Enter city"
                value="London"
              />

              <TextField
                required
                id="postalCode"
                label="Postal Code"
                defaultValue="Enter Postal Code"
                value="E2 4XF"
              />

              <TextField
                required
                id="address"
                label="Address"
                defaultValue="123 Example"
                style={{ width: "98%" }}
              />

              <TextField
                required
                id="email"
                label="Email"
                defaultValue="Enter Email"
                value="petter@gmail.com"
              />

              <TextField
                required
                id="phoneno"
                label="Phone No"
                defaultValue="Enter Phone No"
                value="+442223334444"
              />

              <TextField
                required
                id="password"
                label="Password"
                defaultValue="Password"
              />
            </Grid>
            <Grid item xs={2}>
              <Image1 src={require("../images/profilePic.png")} />
            </Grid>
          </Grid>
          {/* <Grid
              item
              xs={12}
              sx={{
                marginLeft: "5px",
              }}
              style={{ "& .MuiGrid-root .MuiGrid-item": { paddingTop: "4px" } }}
            > */}
          <div style={{ paddingLeft: "10px" }}>
            <Text1>
              Use this email to login in to your{" "}
              <span style={{ color: "#4d94ff", fontWeight: "600" }}>
                resumedone.io{" "}
              </span>{" "}
              account and receive notifications
            </Text1>

            <SaveBtn>
              <Text4> Save </Text4>
            </SaveBtn>
            <SeriousCont>
              <SeriousCheck></SeriousCheck>
              <Text1>
                Show my profile to serious employees on{" "}
                <span style={{ color: "#4d94ff", fontWeight: "600" }}>
                  hirethebest.io{" "}
                </span>{" "}
                for free
              </Text1>
            </SeriousCont>

            <DeleteCont>
              <Head3> Delete account</Head3>
              <Text1>
                If you delete your account you'll be permanently removing if
                from our systems - you can't undo it
              </Text1>
              <Text2> Yes, Delete my account</Text2>
            </DeleteCont>
            <SupportCont>
              <Text1>
                <span style={{ color: "#4d94ff", fontWeight: "600" }}>
                  Get in touch with our support team
                </span>{" "}
                if you have any question or want to leave some feedback
              </Text1>
              <Text1>We'll be happy to hear fro you.</Text1>
            </SupportCont>
          </div>
          {/* </Grid> */}
          {/* </Grid> */}
        </Box>
        <Hr />

        <FooterDiv>
          <FooterText>Terms &amp; conditions </FooterText>
          <FooterText>Privacy Policy</FooterText>
          <FooterText>FAQ</FooterText>
          <FooterText>Contact Us</FooterText>
        </FooterDiv>
      </PersonalInfoContainer>
    </MainContainer>
  );
}

export default PersonalInfo;
