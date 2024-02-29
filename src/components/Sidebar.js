import React from "react";
import {
  BottomSection,
  SideBarContainer,
  TopSection,
  MenuContainer,
  Text,
  Head1,
  MenuItem,
  MenuText,
  Image,
} from "../styles/SidebarStyles";
import SettingsIcon from "@mui/icons-material/Settings";

function Sidebar() {
  return (
    <SideBarContainer>
      <TopSection>
        <img
          src={require("../images/logo.png")}
          alt="Logo"
          style={{
            width: "20px",
            height: "auto",
            marginRight: "10px",
            marginLeft: "10px",
          }}
        />
        <Text style={{ fontWeight: 700 }}>Resumizeme</Text>
      </TopSection>
      <MenuContainer>
        <MenuContent />
      </MenuContainer>
      <BottomSection>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../images/accountPic.png")}
            alt="Account"
            style={{
              width: "30px",
              height: "auto",
              margin: "10px",
              marginLeft: "10px",
            }}
          />
          <Text> Carla </Text>
        </div>
        <SettingsIcon />
      </BottomSection>
    </SideBarContainer>
  );
}

export default Sidebar;

const MenuContent = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <MenuItem>
        <Image src={require("../images/square.png")} alt="Logo" />
        <Head1> My templates</Head1>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/search.png")} alt="Logo" />
        <Head1> Search</Head1>
      </MenuItem>

      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText> Software Engineer </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText> Computer harware engineer </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText> Network Engineer </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText> Technical Support </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText>Network administrator </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText>Management Data analysis </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/star.png")} alt="Logo" />
        <MenuText> Computer technician </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/clock.png")} alt="Logo" />
        <MenuText> Past search 1 </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/clock.png")} alt="Logo" />
        <MenuText> Past search 2 </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/clock.png")} alt="Logo" />
        <MenuText>Computers and information </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/clock.png")} alt="Logo" />
        <MenuText> Database Administrator </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/clock.png")} alt="Logo" />
        <MenuText>Computer Security </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/clock.png")} alt="Logo" />
        <MenuText> Computer Systems Analyst </MenuText>
      </MenuItem>
      <MenuItem style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Image src={require("../images/drawer.png")} alt="Logo" />
          <Head1>My Boards </Head1>
        </div>

        <Image src={require("../images/add.png")} alt="Logo" />
      </MenuItem>

      <MenuItem>
        <Image src={require("../images/calendar.png")} alt="Logo" />
        <MenuText> Board 1 </MenuText>
      </MenuItem>

      <MenuItem>
        <Image src={require("../images/calendar.png")} alt="Logo" />
        <MenuText> Board 2 </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/calendar.png")} alt="Logo" />
        <MenuText> Board 3 </MenuText>
      </MenuItem>

      <MenuItem>
        <Image src={require("../images/lock.png")} alt="Logo" />
        <MenuText> Board agent 1 </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/lock.png")} alt="Logo" />
        <MenuText> Board agent 1 </MenuText>
      </MenuItem>
      <MenuItem>
        <Image src={require("../images/lock.png")} alt="Logo" />
        <MenuText> Board agent 1 </MenuText>
      </MenuItem>
    </div>
  );
};
