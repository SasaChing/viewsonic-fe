import React from "react";
import { TooltipWrapper } from "./Tooltip.style";
import { TooltipProps } from "./Tooltip.type";

export const Tooltip = React.memo(({ content }: TooltipProps) => {
    return <TooltipWrapper>{content}</TooltipWrapper>;
})

Tooltip.displayName = "Tooltip";