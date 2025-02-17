import React, { useState, useEffect } from "react";
import { StyledButton, StyledIconButton, StyledButtonTooltipContent } from "./Button.style";
import { ButtonProps } from "./Button.type";
import { theme } from '../../style/theme';

/**BaseButton 組件 */
export const BaseButton: React.FC<ButtonProps> = ({
    label,
    $backgroundColor = theme.colors.gray,
    $hoverBackgroundColor = theme.colors.grayDark,
    $textColor = theme.colors.light,
    disabled = false,
    tooltip,
    onClick,
    ...props
}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        if (tooltip) setShowTooltip(true);
        if (onClick) onClick();
    }

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => {
                setShowTooltip(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip])

    return (
        <StyledButton
            $backgroundColor={$backgroundColor}
            $hoverBackgroundColor={$hoverBackgroundColor}
            $textColor={$textColor}
            disabled={disabled}
            label={label}
            onClick={handleClick}
            {...props}>
            {label}
            {tooltip
                ? <StyledButtonTooltipContent $show={showTooltip}>
                    {tooltip}
                </StyledButtonTooltipContent>
                : null}
        </StyledButton>
    );
};

/**BaseIconButton 組件 */
export const BaseIconButton: React.FC<ButtonProps> = ({
    label,
    $backgroundColor = theme.colors.transparent,
    $hoverBackgroundColor = theme.colors.transparent,
    $textColor = theme.colors.dark,
    disabled = false,
    tooltip,
    onClick,
    ...props
}) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleClick = () => {
        if (tooltip) setShowTooltip(true);
        if (onClick) onClick();
    }

    useEffect(() => {
        if (showTooltip) {
            const timer = setTimeout(() => {
                setShowTooltip(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showTooltip])

    return (
        <StyledIconButton
            $backgroundColor={$backgroundColor}
            $hoverBackgroundColor={$hoverBackgroundColor}
            $textColor={$textColor}
            disabled={disabled}
            label={label}
            onClick={handleClick}
            {...props}>
            {label}
            {tooltip
                ? <StyledButtonTooltipContent $show={showTooltip}>
                    {tooltip}
                </StyledButtonTooltipContent>
                : null}
        </StyledIconButton>
    )
}