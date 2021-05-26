import React from "react";

import * as Styled from "./breadcrumb.styled";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

iconLibrary.add(faAngleRight);

const Breadcrumb = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.Wrapper>{children}</Styled.Wrapper>
);

const Item = ({ children }: React.PropsWithChildren<{}>) => (
  <Styled.ItemSection>
    {children}
    <Styled.Icon>
      <FontAwesomeIcon icon="angle-right" />
    </Styled.Icon>
  </Styled.ItemSection>
);

Breadcrumb.Item = Item;

export default Breadcrumb;
