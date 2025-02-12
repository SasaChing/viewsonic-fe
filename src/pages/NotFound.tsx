import styled from "styled-components";

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 20px;
  color: red;
`;

export default function NotFound () {
  return (
    <NotFoundContainer>
      <h1>404 - 找不到頁面</h1>
      <p>抱歉，您訪問的頁面不存在。</p>
    </NotFoundContainer>
  );
};