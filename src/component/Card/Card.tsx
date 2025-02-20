import React, { useState, useEffect } from "react";
import { CardContainer, CardHeader, CardContent, CardFooter } from "./Card.style";
import { CardStyleProps } from "./Card.type";
import { theme } from '../../style/theme';

interface CardProps {
    cardHeader?: React.ReactNode | string
    cardContent?: React.ReactNode | string
    cardFooter?: React.ReactNode | string
    disabled?: boolean
}

export const Card = ({
    cardHeader,
    cardContent,
    cardFooter,
    disabled = false }: CardProps) => {
    return (
        <React.Fragment>
            <CardContainer $disabled={disabled}>
                <CardHeader $disabled={disabled}>
                    {cardHeader}
                </CardHeader>
                <CardContent $disabled={disabled}>
                    {cardContent}
                </CardContent>
                <CardFooter $disabled={disabled}>
                    {cardFooter}
                </CardFooter>
            </CardContainer>
        </React.Fragment>
    )
}