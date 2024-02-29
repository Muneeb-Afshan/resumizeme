import styled from "styled-components";
import tw from "twin.macro";

export const MainContainer = styled.div`
  ${tw`flex flex-col h-full`}
`;

export const GreenContainer = styled.div`
  ${tw`w-10/12 mx-auto items-center justify-center flex flex-row`}
  background-color: #097950;
  border-radius: 4px;
  height: 100px;
  margin-top: 25px;
`;

export const Circle = styled.div`
  background-color: #ffffff;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
`;

export const Head1 = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: white;
`;

export const Text = styled.p`
  font-size: 11px;
  color: white;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  margin: auto;
`;

export const Image1 = styled.img`
  width: 70%;
  height: auto;
`;

export const PersonalInfoContainer = styled.div`
  ${tw`w-10/12 mx-auto items-center justify-center mt-2`}
`;

export const Head2 = styled.p`
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 10px;
  padding-right: 10px;
`;

export const Text1 = styled.p`
  font-size: 11px;
`;
export const Text2 = styled.p`
  font-size: 13px;
  color: red;
`;

export const Head3 = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const FooterText = styled.p`
  font-size: 12px;
  font-weight: 400;
  padding-left: 25px;
  color: gray;
`;

export const Hr = styled.hr`
  ${tw`mt-2`}
`;

export const FooterDiv = styled.div`
  ${tw`flex flex-row my-4`}
`;

export const SupportCont = styled.div`
  ${tw`my-2`}
`;

export const DeleteCont = styled.div`
  ${tw`my-2 p-2`}
  border : 1px solid lightgray;
  border-radius: 4px;
`;

export const SeriousCheck = styled.div`
  ${tw`mr-3`}
  border: 1px solid lightgray;
  width: 10px;
  height: 10px;
`;

export const SeriousCont = styled.div`
  ${tw`flex flex-row items-center justify-start mt-2`}
`;

export const SaveBtn = styled.div`
  ${tw`flex items-center justify-center mt-2 px-1`}
  height: 25px;
  width: 100px;
  background-color: #4d94ff;
  border-radius: 2px;
`;

export const Text4 = styled.p`
  font-size: 12px;
  color: white;
`;
