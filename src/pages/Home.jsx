import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addCount, minusCount } from "../store/slice/counterReducer";

// const StudentList = [{
//   student_id: "s0001",
//   name: "Philip",
//   count: 2,
// },
// {
//   student_id: "s0002",
//   name: "Darrell",
//   count: 5,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 0,
// },{
//   student_id: "s0004",
//   name: "Cody",
//   count: 9,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 0,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 0,
// },{
//   student_id: "s0007",
//   name: "Bessie",
//   count: 0,
// },{
//   student_id: "s008",
//   name: "Wendy",
//   count: 3,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 1,
// },{
//   student_id: "s0010",
//   name: "Esther",
//   count: 0,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 1,
// },
// {
//   student_id: "s0012",
//   name: "Gloria",
//   count: 1,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 0,
// },{
//   student_id: "s0014",
//   name: "Lee",
//   count: 2,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 0,
// },{
//   student_id: "s0016",
//   name: "Ann",
//   count: 0,
// },{
//   student_id: "s0017",
//   name: "Jacob",
//   count: 8,
// },{
//   student_id: "s0018",
//   name: "Calvin",
//   count: 2,
// },{
//   student_id: null,
//   name: "Guest",
//   count: 0,
// },{
//   student_id: "s0020",
//   name: "Joe",
//   count: 0,
// }]

const HomeContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const AddButton = styled.button`
  margin: 2px;
  padding: 5px 8px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: #F1476C;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #A8314B;
  }
`;

const MinusButton = styled.button`
  margin: 2px;
  padding: 5px 8px;
  font-size: 12px;
  cursor: pointer;
  border: none;
  background-color: #75CC3D;
  color: white;
  border-radius: 5px;

  &:hover {
    background-color: #467A24;
  }
`;
// #0B8CF0
// #C1C8CA
// #EBEBEB

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  
  return (
    <HomeContainer>
      <h1>Redux 計數器</h1>
      <h2>{count}</h2>
      <h1>首頁</h1>
      <AddButton onClick={() => dispatch(minusCount())}>- 1</AddButton>
      <MinusButton onClick={() => dispatch(addCount())}>+ 1</MinusButton>
    </HomeContainer>
  );
}
