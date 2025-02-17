import { TooltipWrapper } from "./Tooltip.style";
import { TooltipProps } from "./Tooltip.type";

export const Tooltip = ({ content }: TooltipProps) => {
    return <TooltipWrapper>{content}</TooltipWrapper>;
};
