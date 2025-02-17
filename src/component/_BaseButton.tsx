// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { colorList } from "../color";

// /**TooltipContent樣式參數 */
// const TooltipContent = styled.div<{ $show: boolean }>`
//     position: absolute;
//     white-space: nowrap;
//     opacity: ${(props) => (props.$show ? 1 : 0)};
//     visibility: ${(props) => (props.$show ? "visible" : "hidden")};
//     transition: opacity 0.2s ease-in-out,
//     visibility 0.2s ease-in-out;
// `;

// /**按鈕屬性類型 */
// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//     $backgroundColor?: string;
//     $hoverBackgroundColor?: string;
//     $textColor?: string;
//     disabled?: boolean;
//     label: string | React.ReactNode;
//     tooltip?: React.ReactNode;
//     onClick?: () => void;
// }
// /**BaseButton按鈕的樣式 */
// const StyledButton = styled.button<ButtonProps>`
//     position: relative;
//     border: none;
//     font-size: 12px;
//     margin: 2px;
//     padding: 3px 8px;
//     color: ${({ $textColor }) => $textColor || colorList.light};
//     border-radius: 5px;
//     cursor: "pointer";
//     background-color:  ${(props) => props.$backgroundColor};
    
//     &:hover {
//     background-color: ${(props) => props.$hoverBackgroundColor}
//     }

//     &:disabled {
//         background-color: ${colorList.gray};
//         cursor: not-allowed;
//     }
// `;
// /**BaseButton 組件 */
// export const BaseButton: React.FC<ButtonProps> = ({
//     label,
//     $backgroundColor = colorList.gray,
//     $hoverBackgroundColor = colorList.grayDark,
//     $textColor = colorList.light,
//     disabled = false,
//     tooltip,
//     onClick,
//     ...props
// }) => {
//     const [showTooltip, setShowTooltip] = useState(false);

//     const handleClick = () => {
//         if (tooltip) setShowTooltip(true);
//         if (onClick) onClick();
//     }

//     useEffect(() => {
//         if (showTooltip) {
//             const timer = setTimeout(() => {
//                 setShowTooltip(false);
//             }, 2000);
//             return () => clearTimeout(timer);
//         }
//     }, [showTooltip])
//     return (
//         <StyledButton
//             $backgroundColor={$backgroundColor}
//             $hoverBackgroundColor={$hoverBackgroundColor}
//             $textColor={$textColor}
//             disabled={disabled}
//             label={label}
//             onClick={handleClick}
//             {...props}>
//             {label}
//             {tooltip ? <TooltipContent $show={showTooltip}>{tooltip}</TooltipContent> : null}
//         </StyledButton>
//     );
// };

// /**BaseIconButton按鈕的樣式 */
// const StyledIconButton = styled.button<ButtonProps>`
//     cursor: pointer;
//     border: none;
//     background-color: ${(props) => props.$backgroundColor};
//     font-size: 12px;
//     margin: 2px;
//     padding: 4px 5px;
//     color: ${(props) => props.$textColor};
//     border-radius: 5px;

//     &:hover {
//         background-color: ${(props) => props.$hoverBackgroundColor}
//     }

//     &:disabled {
//         cursor: not-allowed;
//     }
// `;
// /**BaseIconButton 組件 */
// export const BaseIconButton: React.FC<ButtonProps> = ({
//     label,
//     $backgroundColor = colorList.transparent,
//     $hoverBackgroundColor = colorList.transparent,
//     $textColor = colorList.dark,
//     disabled = false,
//     tooltip,
//     onClick,
//     ...props
// }) => {
//     const [showTooltip, setShowTooltip] = useState(false);

//     const handleClick = () => {
//         if (tooltip) setShowTooltip(true);
//         if (onClick) onClick();
//     }

//     useEffect(() => {
//         if (showTooltip) {
//             const timer = setTimeout(() => {
//                 setShowTooltip(false);
//             }, 2000);
//             return () => clearTimeout(timer);
//         }
//     }, [showTooltip])

//     return (
//         <StyledIconButton
//             $backgroundColor={$backgroundColor}
//             $hoverBackgroundColor={$hoverBackgroundColor}
//             $textColor={$textColor}
//             disabled={disabled}
//             label={label}
//             onClick={handleClick}
//             {...props}>
//             {label}
//             {tooltip ? <TooltipContent $show={showTooltip}>{tooltip}</TooltipContent> : null}
//         </StyledIconButton>
//     )
// }