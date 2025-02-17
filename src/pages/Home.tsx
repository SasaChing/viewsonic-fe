import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { X, UserRound, EllipsisVertical, ChevronLeft, Files } from "lucide-react";

import { addCount, minusCount, fetchData } from '../store/slice/counterReducer'
import { closeGridItem } from '../store/slice/gridReducer'
import { setActiveTab } from '../store/slice/tabReducer'

import { Tooltip, QRCode, BaseButton, BaseIconButton } from "../component";

import { CardStyleProps, StudentResult } from "../type";
import { colorList } from "../color";

/**課程ID */
const ClassID: string = "X58E9647"
/**QRCode網址 */
const Url: string = "https://www.classswift.viewsonic.io/"

// #region Grid
/**垂直排列 */
const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
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
const GridItem = styled(FlexColumnContainer)`
  background: ${colorList.grayLight};
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  justify-content: space-between;
  flex: 1;
  min-height: 0;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 200px;

  @media (max-width: 768px) {
    min-height: 150px;
  }
`;
const HeaderContainer = styled(FlexColumnContainer)``;
const GridClose = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin: 8px;
  margin-bottom: 0px;
`;
const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0px 10px 40px 40px;
  font-weight: 700;

  @media (max-width: 768px) {
    margin: 0px 20px 8px 20px;
  }
`;
const TextContainer = styled(FlexColumnContainer)`
  align-items: flex-start;
  gap: 10px;
`;
const CopyButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
// #endregion

// #region Tab
const TabContainer = styled.div`
  margin-top: -2.5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  background-color: ${colorList.light};
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  overflow-y: auto;
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
const TabButtonContent = styled.div`
  display: flex;
  gap: 5px; 
  align-items: center;
  justify-content:center;
`;
const TabButton = styled.button<CardStyleProps>`
  padding: 8px 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.$active ? colorList.light : colorList.gray)};
  color: ${(props) => (props.$active ? colorList.info : colorList.dark)};
  border-radius: 5px 5px 0 0;
  transition: background-color 0.3s ease;
  font-weight: 700;
  min-width: 120px;
  z-index: ${(props) => (props.$active ? 1 : "none")};

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
// #endregion

// #region Card
const CardContainer = styled.div<CardStyleProps>`
  width: 120px;
  border: 1px solid ${(props) => (props.$isGuest ? colorList.gray : colorList.infoLight)};
  border-radius: 8px;
  text-align: center;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const CardHeader = styled.div<CardStyleProps>`
  background-color: ${(props) => (props.$isGuest ? colorList.gray : colorList.info)};
  color: white;
  font-weight: bold;
  padding: 5px;
`;
const CardContent = styled.div<CardStyleProps>`
  font-weight: bold;
  padding: 16px 0;
  color:${(props) => (props.$isGuest ? colorList.gray : colorList.dark)};
`;
const CardFooter = styled.div<CardStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  border-top: 1px solid ${(props) => (props.$isGuest ? colorList.gray : colorList.infoLight)};
`;
const Count = styled.div<CardStyleProps>`
  font-size: 18px;
  font-weight: bold;
  margin: 0 10px;
  color:${(props) => (props.$isGuest ? colorList.gray : colorList.dark)};
`;
const GroupCardRow = styled.div`
  display: flex;
  border: 1px solid ${colorList.gray};
  border-radius: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  gap: 10px;
`;
const GroupLabel = styled.div`
  display: flex;
  justify-content: flex-start; 
  width: 100%; 
`;
// #endregion

// #region Typography
const VersionText = styled.p`
  font-size: 12px;
  color: gray;
  margin-top: 10px;
`;
const Title1 = styled.h1`
font-size: 18px;
margin: 0;
`;
const Caption1 = styled.span`
font-size: 12px;
margin: 0;
display: flex;
align-items: center;
`;
// #endregion

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
  const gridValue = useSelector((state: RootState) => state.grid.value);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  /**分組資料 */
  const groupedCountValue = countStatus ? chunkArray(countValue, 5) : [];

  return (
    <GridContainer>
      {gridValue[0] && (
        <GridItem>
          <HeaderContainer>
            <GridClose>
              <BaseIconButton
                label={<X size={20} />}
                onClick={() => dispatch(closeGridItem(0))} />
            </GridClose>
            <HeaderContent>
              <TextContainer>
                <Caption1>
                  <ChevronLeft size={14} /> Back to Class List
                </Caption1>
                <Title1>Join 302 Science</Title1>
                <CopyButtonContainer>
                  ID：{ClassID}
                  <BaseIconButton
                    $backgroundColor={colorList.info}
                    $hoverBackgroundColor={colorList.infoDark}
                    $textColor={colorList.light}
                    label={<Files size={14} />}
                    onClick={() => copyToClipboard(ClassID)} />
                  Link
                  <BaseIconButton
                    $backgroundColor={colorList.info}
                    $hoverBackgroundColor={colorList.infoDark}
                    $textColor={colorList.light}
                    label={<Files size={14} />}
                    onClick={() => copyToClipboard(Url)} />
                </CopyButtonContainer>
              </TextContainer>
            </HeaderContent>
          </HeaderContainer>
          <QRCode text={Url} />
          <VersionText>Version 1.1.7</VersionText>
        </GridItem>
      )}
      {gridValue[1] && (
        <GridItem>
          <HeaderContainer>
            <GridClose>
              <BaseIconButton
                label={<X size={20} />}
                onClick={() => dispatch(closeGridItem(1))} />
            </GridClose>
            <HeaderContent>
              <Title1>302 Science</Title1>
              <UserRound fill={colorList.dark} size={16} />
              16/30
            </HeaderContent>
          </HeaderContainer>
          <TabButtonContainer>
            <TabButtonContent>
              <TabButton
                $active={tabsValue === 0}
                onClick={() => dispatch(setActiveTab({ tabIndex: 0 }))}>
                Student List
              </TabButton>
              <TabButton
                $active={tabsValue === 1}
                onClick={() => dispatch(setActiveTab({ tabIndex: 1 }))}>
                Group
              </TabButton>
            </TabButtonContent>
            <TabButtonContent>
              <BaseIconButton
                label={<EllipsisVertical size={18} />}
                tooltip={<Tooltip content={"more"} />} />
            </TabButtonContent>
          </TabButtonContainer>
          {tabsValue === 0 ? (
            <TabContainer>
              {countStatus
                ? countValue.map((item, seq) => (
                  <StudentCard key={seq} seq={seq} {...item} />
                )) : null}
            </TabContainer>
          ) : (
            <TabContainer>
              {groupedCountValue.map((groupItem, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  <GroupLabel>Group {groupIndex + 1}</GroupLabel>
                  <GroupCardRow>
                    {groupItem.map((item, seq) => (
                      <StudentCard key={seq} seq={seq} {...item} />
                    ))}
                  </GroupCardRow>
                </React.Fragment>
              ))}
            </TabContainer>
          )}
        </GridItem>
      )}
    </GridContainer>
  );
}

/**學生卡片 */
interface StudentCardProps extends StudentResult {
  seq: number;
}
const StudentCard: React.FC<StudentCardProps> = ({ student_id, name, count, seq }) => {
  const dispatch = useDispatch();

  return (
    <CardContainer key={student_id} $isGuest={!student_id}>
      <CardHeader $isGuest={!student_id}>{(seq + 1).toString().padStart(2, "0")}</CardHeader>
      <CardContent $isGuest={!student_id}>{name}</CardContent>
      <CardFooter $isGuest={!student_id}>
        <BaseButton
          $backgroundColor={colorList.success}
          $hoverBackgroundColor={colorList.successDark}
          onClick={() => dispatch(minusCount({ student_id: student_id }))}
          disabled={!student_id || count === 0}
          label={"- 1"} />
        <Count $isGuest={!student_id}>{count}</Count>
        <BaseButton
          $backgroundColor={colorList.error}
          $hoverBackgroundColor={colorList.errorDark}
          onClick={() => dispatch(addCount({ student_id: student_id }))}
          disabled={!student_id}
          label={"+ 1"} />
      </CardFooter>
    </CardContainer>
  );
};
