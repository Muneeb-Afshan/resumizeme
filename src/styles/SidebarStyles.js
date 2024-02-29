import styled from "styled-components";
import tw from "twin.macro";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  border-right: 1px solid #e0dada;
`;

export const TopSection = styled.div`
  ${tw`flex flex-row items-center justify-start`}
  height: 5%;
  width: 100%;
  border-bottom: 1px solid #e0dada;
`;

export const MenuContainer = styled.div`
  width: 100%;
  height: 88%;
  padding-top: 5px;
  padding-left: 5px;
`;

export const BottomSection = styled.div`
  ${tw`flex flex-row items-center justify-between justify-items-center px-2`}
  height: 6%;
  width: 100%;
  border-top: 1px solid #e0dada;
`;

export const Text = styled.p`
  ${tw`font-semibold`}
  font-size: 13px;
`;

export const Head1 = styled.p`
  ${tw`font-bold pl-2`}
  font-size: 11px;
  line-height: 13px;
`;
export const MenuText = styled.p`
  ${tw`pl-2`}
  font-size: 11px;
  line-height: 13px;
`;

export const MenuItem = styled.div`
  ${tw`flex flex-row py-1.5 pl-1 items-center`}
`;

export const Image = styled.img`
  width: 13px;
  height: 13px;
`;
