import React from "react";
import { TabButtonContainer, TabButtonContent, TabButton } from "./Tab.style";
import { TabProps } from "./Tab.type";
import { EllipsisVertical } from "lucide-react";
import { BaseIconButton } from "../Button/Button";
import { Tooltip } from "../Tooltip/Tooltip";

export const Tab = React.memo(({
    tabButtonItems,
    tabContainerItems,
    activeTabIndex
}: TabProps) => {
    return (
        <React.Fragment>
            <TabButtonContainer>
                <TabButtonContent>
                    {tabButtonItems.map((item, index) => (
                        <TabButton
                            key={index}
                            $active={activeTabIndex === index}
                            onClick={item.onClick}>
                            {item.label}
                        </TabButton>
                    ))}
                </TabButtonContent>
                <TabButtonContent>
                    <BaseIconButton
                        label={<EllipsisVertical size={18} />}
                        tooltip={<Tooltip content={"more"} />} />
                </TabButtonContent>
            </TabButtonContainer>
            {tabContainerItems[activeTabIndex]}
        </React.Fragment>
    )
})

Tab.displayName = "Tab";