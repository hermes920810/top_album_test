import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import * as Styled from "./addNewItem.styled";

interface OwnProps {
  onClick: () => void;
}

iconLibrary.add(faPlus);
const AddNewItem: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  children,
}) => {
  return (
    <Styled.Block onClick={onClick}>
      <Styled.Icon>
        <FontAwesomeIcon icon="plus" />
      </Styled.Icon>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Block>
  );
};

export default AddNewItem;
