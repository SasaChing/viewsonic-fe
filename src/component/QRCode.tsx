import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { QRCodeCanvas } from "qrcode.react";
import { QRCodeProps } from "../type";

const QRCodeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;

export function QRCode({ text }: QRCodeProps) {
    const [size, setSize] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                const newSize = Math.min(entry.contentRect.width * 0.8)
                setSize(newSize);
            }
        })
        observer.observe(containerRef.current)
        return () => observer.disconnect();
    }, []);

    return (
        <QRCodeWrapper ref={containerRef}>
            <QRCodeCanvas value={text} size={size} />
        </QRCodeWrapper>
    );
};