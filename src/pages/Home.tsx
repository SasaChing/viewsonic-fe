import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { addCount, minusCount, fetchData } from '../store/slice/counterReducer'
import { setActiveTab } from '../store/slice/tabReducer'
import { X, UserRound, EllipsisVertical, ChevronLeft, Files } from "lucide-react";
import { QRCode } from "../component/QRCode";
import { StyledComponentProps, ButtonStyleProps } from "../type";

/**課程ID */
const ClassID: string = "X58E9647"
/**QRCode網址 */
const Url: string = "https://www.classswift.viewsonic.io/"

let colorList = {
  info: "#0B8CF0",
  infoLight: "#34b4db",
  infoDark: "#0a538f",
  success: "#75CC3D",
  successDark: "#467A24",
  error: "#F1476C",
  errorDark: "#A8314B",
  dark: "#000000",
  light: "#FFFFFF",
  gray: "#C1C8CA",
  grayDark: "#808080"
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  text-align: center;
  background-color: ${colorList.light};
  height: calc(100vh - 16px - 40px);
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background: #EBEBEB;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: center;
  flex: 1;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 150px;
  }
`;

const CustomButton = styled.button<ButtonStyleProps>`
  border: none;
  font-size: 12px;
  margin: 2px;
  padding: 3px 8px;
  color: white;
  border-radius: 5px;
`;

const CustomIconButton = styled.button<ButtonStyleProps>`
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  font-size: 12px;
  margin: 2px;
  padding: 4px 4px;
  color: ${(props) => props.color};

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor}
  }
`;

const AddButton = styled(CustomButton) <StyledComponentProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.isGuest || props.disabled ? colorList.gray : colorList.error)};

  &:hover {
    background-color: ${(props) => (props.isGuest || props.disabled ? colorList.gray : colorList.errorDark)}
  }
`;

const MinusButton = styled(CustomButton) <StyledComponentProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.isGuest || props.disabled ? colorList.gray : colorList.success)};

  &:hover {
    background-color: ${(props) => (props.isGuest || props.disabled ? colorList.gray : colorList.successDark)};
  }
`;

const TabButton = styled.button<StyledComponentProps>`
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.active ? colorList.light : colorList.gray)};
  color: ${(props) => (props.active ? colorList.info : colorList.dark)};
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-weight: 700;
  min-width: 120px;
  z-index: ${(props) => (props.active ? 1 : "none")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const TabContainer = styled.div`
  margin-top: -2.5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
  justify-content: left;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  background-color: ${colorList.light};
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`;

const TabButtonContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  width: 100%;
  padding: 0px 40px;
  box-sizing: border-box;
  overflow-x: auto;
  overflow-y: hidden;
  
  @media (max-width: 768px) {
      padding: 0px 20px;
  }
`;

const TabButtonItem = styled.div`
  display: flex;
  gap: 5px; 
  align-items: center;
  justify-content:center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderCloseGrid = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`;

const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0rem 10px 16px 40px;
  font-weight: 700;
  gap: 10px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

const PGroupContainer = styled(PContainer)`
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;

const CopyButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px; /* 按鈕之間的間距 */
`;

const CopyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 4px 4px;
  font-size: 14px;
  border: none;
  background: ${colorList.info};
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s ease;
  color: ${colorList.light};
  margin-right: 10px;

  &:hover {
    background: ${colorList.infoDark};
  }
`;

const CardContainer = styled.div<StyledComponentProps>`
  width: 120px;
  border: 1px solid ${(props) => (props.isGuest ? colorList.gray : colorList.infoLight)};
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardHeader = styled.div<StyledComponentProps>`
  background-color: ${(props) => (props.isGuest ? colorList.gray : colorList.info)};
  color: white;
  font-weight: bold;
  padding: 5px;
`;

const CardContent = styled.div<StyledComponentProps>`
  font-size: 16px;
  font-weight: bold;
  padding: 16px 0;
  color:${(props) => (props.isGuest ? colorList.gray : colorList.dark)};
`;

const CardFooter = styled.div<StyledComponentProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-top: 1px solid ${(props) => (props.isGuest ? colorList.gray : colorList.infoLight)};
`;

const Count = styled.div<StyledComponentProps>`
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  color:${(props) => (props.isGuest ? colorList.gray : colorList.dark)};
`;

const GroupCardRow = styled.div`
  display: flex;
  border: 1px solid ${colorList.gray};
  border-radius: 10px;
  padding: 15px;
`;

const GroupLabel = styled.div`
  display: flex;
  flex-direction: column; /* 垂直排列 */
  justify-content: flex-start; /* 讓文字從頂部對齊 */
  min-width: 80px; /* 設定最小寬度，避免內容擠在一起 */
`;

const VersionText = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
`;

// colorList.info
// colorList.gray
// #EBEBEB

/** [事件] 複製*/
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert(`已複製: ${text}`);
};

/** [工具] 分割資料*/
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  return array.reduce<T[][]>((acc, _, i) =>
    i % size ? acc : [...acc, array.slice(i, i + size)]
    , []);
};

export default function Home() {
  const dispatch: AppDispatch = useDispatch();
  const { countValue, countStatus } = useSelector((state: RootState) => state.counter);
  const tabsValue = useSelector((state: RootState) => state.tabs.value);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  /**分組資料 */
  const groupedCountValue = countStatus ? chunkArray(countValue, 5) : [];

  return (
    <GridContainer>
      <GridItem>
        <Header>
          <HeaderCloseGrid>
            <CustomIconButton backgroundColor="transparent" hoverBackgroundColor="transparent" color={colorList.dark}>
              <X size={20} />
            </CustomIconButton>
          </HeaderCloseGrid>
          <HeaderContent>
            <PContainer>
              <p style={{ fontSize: "12px" }}>
                <ChevronLeft size={12} /> Back to Class List
              </p>
              <PGroupContainer>
                <p style={{ fontSize: "18px" }}>Join 302 Science</p>
                <CopyButtonContainer>
                  ID:{ClassID}
                  <CustomIconButton
                    backgroundColor="colorList.info"
                    hoverBackgroundColor="colorList.infoDark"
                    color="colorList.light"
                    onClick={() => copyToClipboard(ClassID)}>
                    <Files size={14} />
                  </CustomIconButton>
                  Link
                  <CustomIconButton
                    backgroundColor="colorList.info"
                    hoverBackgroundColor="colorList.infoDark"
                    color="colorList.light"
                    onClick={() => copyToClipboard(Url)}>
                    <Files size={14} />
                  </CustomIconButton>
                </CopyButtonContainer>
              </PGroupContainer>
            </PContainer>
          </HeaderContent>
        </Header>
        <QRCode text={Url} />
        <VersionText>Version 1.1.7</VersionText>
      </GridItem>
      <GridItem>
        <Header>
          <HeaderCloseGrid>
            <CustomIconButton
              backgroundColor="transparent"
              hoverBackgroundColor="transparent"
              color="colorList.dark">
              <X size={20} />
            </CustomIconButton>
          </HeaderCloseGrid>
          <HeaderContent>
            <p style={{ fontSize: "18px" }}>302 Science</p>
            <UserRound fill="colorList.dark" size={16} />
            <p style={{ fontSize: "16px" }}>16/30</p>
          </HeaderContent>
        </Header>
        <TabButtonContainer>
          <TabButtonItem>
            <TabButton
              active={tabsValue === 0}
              onClick={() => dispatch(setActiveTab({ tabIndex: 0 }))}>
              Student List
            </TabButton>
            <TabButton
              active={tabsValue === 1}
              onClick={() => dispatch(setActiveTab({ tabIndex: 1 }))}>
              Group
            </TabButton>
          </TabButtonItem>
          <TabButtonItem>
            <CustomIconButton
              backgroundColor="transparent"
              hoverBackgroundColor="transparent"
              color="colorList.dark">
              <EllipsisVertical size={18} />
            </CustomIconButton>
          </TabButtonItem>
        </TabButtonContainer>
        {tabsValue === 0 ? (
          <TabContainer>
            {countStatus
              ? countValue.map((item, seq) => (
                <CardContainer key={seq} isGuest={!item.student_id}>
                  <CardHeader isGuest={!item.student_id}>{(seq + 1).toString().padStart(2, "0")}</CardHeader>
                  <CardContent isGuest={!item.student_id}>{item.name}</CardContent>
                  <CardFooter isGuest={!item.student_id}>
                    <MinusButton
                      isGuest={!item.student_id}
                      onClick={() => dispatch(minusCount({ student_id: item.student_id }))}
                      disabled={item.student_id === null || item.count === 0}
                    >- 1</MinusButton>
                    <Count isGuest={!item.student_id}>{item.count}</Count>
                    <AddButton
                      isGuest={!item.student_id}
                      onClick={() => dispatch(addCount({ student_id: item.student_id }))}
                      disabled={item.student_id === null}
                    >+ 1</AddButton>
                  </CardFooter>
                </CardContainer>
              )) : null}
          </TabContainer>
        ) : (
          <TabContainer>
            {groupedCountValue.map((groupItem, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <GroupLabel>
                  <p style={{ textAlign: "left" }}>Group {groupIndex + 1}</p>
                </GroupLabel>
                <GroupCardRow>
                  {groupItem.map((item, seq) => (
                    <CardContainer key={seq}>
                      <CardHeader>{(seq + 1).toString().padStart(2, "0")}</CardHeader>
                      <CardContent>{item.name}</CardContent>
                      <CardFooter>
                        <MinusButton onClick={() => dispatch(minusCount({ student_id: item.student_id }))}>- 1</MinusButton>
                        <Count>{item.count}</Count>
                        <AddButton onClick={() => dispatch(addCount({ student_id: item.student_id }))}>+ 1</AddButton>
                      </CardFooter>
                    </CardContainer>
                  ))}
                </GroupCardRow>
              </React.Fragment>
            ))}
          </TabContainer>
        )}
      </GridItem>
    </GridContainer>
  );
}
