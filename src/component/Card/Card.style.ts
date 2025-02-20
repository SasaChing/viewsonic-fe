import { CardStyleProps } from './Card.type';
import styled from "styled-components";
import { theme } from '../../style/theme';

export const CardContainer = styled.div<CardStyleProps>`
    width: 120px;
    border: 1px solid ${(props) => (props.$disabled ? theme.colors.gray : theme.colors.infoLight)};
    border-radius: 8px;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;
export const CardHeader = styled.div<CardStyleProps>`
    background-color: ${(props) => (props.$disabled ? theme.colors.gray : theme.colors.info)};
    color: white;
    font-weight: bold;
    padding: 5px;
`;
export const CardContent = styled.div<CardStyleProps>`
    font-weight: bold;
    padding: 16px 0;
    color:${(props) => (props.$disabled ? theme.colors.gray : theme.colors.dark)};
`;
export const CardFooter = styled.div<CardStyleProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px;
    border-top: 1px solid ${(props) => (props.$disabled ? theme.colors.gray : theme.colors.infoLight)};
`;