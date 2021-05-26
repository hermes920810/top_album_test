import * as Styled from "./productItem.styled";
import { Row, Col } from 'reactstrap';
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface OwnProps {
  onClick: () => void;
  info: any;
}

const ProductItem: React.FC<React.PropsWithChildren<OwnProps>> = ({
  onClick,
  info,
}) => {
  iconLibrary.add(faHeart);
  return (
    <Col xl={'2'} lg={'3'} md={'4'} sm={'6'} className="mt-2 mb-2">
      <Styled.Block onClick={onClick}>
        <div>
          <Styled.Content>
            <Styled.Image src={info.src} />
            <Styled.InfoSection>
              <Styled.Title>{info.title}</Styled.Title>
              <Styled.Detail>{info.price}</Styled.Detail>
            </Styled.InfoSection>
            <Styled.Icon>
              <FontAwesomeIcon icon="heart" className="mr-2" />
            </Styled.Icon>
          </Styled.Content>
        </div>
      </Styled.Block>
    </Col>
  );
};

export default ProductItem;
