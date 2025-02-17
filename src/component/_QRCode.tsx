// import { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import { QRCodeCanvas } from "qrcode.react";

// /**QRCode組件參數 */
// export interface QRCodeProps {
//     text: string;
// }

// /**QRCode的樣式 */
// const QRCodeWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     max-width: 100%;
//     max-height: 100%;
//     min-height: 100px;
//     overflow: hidden;
//     flex-grow: 1;
// `;

// export function QRCode({ text }: QRCodeProps) {
//     const [size, setSize] = useState<number>(600);
//     const containerRef = useRef<HTMLDivElement>(null)

//     /** 監聽容器大小變化 */
//     useEffect(() => {
//         if (!containerRef.current) return;
//         const observer = new ResizeObserver((entries) => {
//             for (let entry of entries) {
//                 const containerWidth = entry.contentRect.width;
//                 const containerHeight = entry.contentRect.height;
//                 const newSize = Math.max(Math.min(containerWidth * 0.8, containerHeight * 0.8, 600), 100);
//                 setSize(newSize);
//             }
//         });
//         observer.observe(containerRef.current);
//         return () => observer.disconnect();
//     }, []);

//     return (
//         <QRCodeWrapper ref={containerRef}>
//             <QRCodeCanvas value={text} size={size} style={{ maxWidth: "100%", height: "auto" }} />
//         </QRCodeWrapper>
//     );
// };