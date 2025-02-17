import styled from "styled-components";
import { CircleAlert } from "lucide-react";

const NotFoundContainer = styled.div`
  height: calc(100vh - 16px - 40px);
  overflow: hidden;
  text-align: center;
  padding: 20px;
  color: #C1C8CA;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  return (
    <NotFoundContainer>
      <CircleAlert size={48} />
      <h1>404 - 找不到頁面</h1>
      <p>抱歉，您訪問的頁面不存在。</p>
    </NotFoundContainer>
  );
};