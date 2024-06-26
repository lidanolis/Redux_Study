import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import styled from "styled-components";
const TooltiComponent: React.FC<{
  children: React.ReactNode;
  text: string;
}> = ({ children, text }) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <ContentWrap sideOffset={5} side={"right"}>
            {text}
            <Tooltip.Arrow />
          </ContentWrap>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltiComponent;

const ContentWrap = styled(Tooltip.Content)`
  background: black;
  color: white;
  padding: 5px;
  border-radius: 4px;
`;
