import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import ROUTES from "routes";
import { Products } from "components";

import exampleImage1 from "../../assets/images/image3.png";
import exampleImage2 from "../../assets/images/image4.png";
import exampleImage3 from "../../assets/images/image5.png";
import exampleImage4 from "../../assets/images/image6.png";
import exampleImage5 from "../../assets/images/image7.png";
import exampleImage6 from "../../assets/images/image5.png";

const Favorites: React.FC<{}> = () => {
  const [value, setValue] = useState("");

  const history = useHistory();
  return (
    <>
      <Products >
        <Products.ProductItem info={{src: exampleImage1, title: 'Whipping Cream 35% 1L', detail: 'Container: 12 x 1L'}} onClick={() => alert("this is just for test")} />
        <Products.ProductItem info={{src: exampleImage2, title: 'Avoset All Purpose Creamer Concentrate', detail: 'Container: 12 packages'}} onClick={() => alert("this is just for test")} />
        <Products.ProductItem info={{src: exampleImage3, title: 'Cowhead cream cheese FS Bulk Pack', detail: 'Container: 12 packages'}} onClick={() => alert("this is just for test")} />
        <Products.ProductItem info={{src: exampleImage4, title: 'Cowhead natural cream cheese bar 227g', detail: ''}} onClick={() => alert("this is just for test")} />
        <Products.ProductItem info={{src: exampleImage5, title: 'Avoset All Purpose Creamer Concentrate', detail: 'Container: 12 packages'}} onClick={() => alert("this is just for test")} />
        <Products.ProductItem info={{src: exampleImage6, title: 'Avoset All Purpose Creamer Concentrate', detail: 'Container: 12 packages'}} onClick={() => alert("this is just for test")} />
      </Products>
    </>
  );
};

export default Favorites;
