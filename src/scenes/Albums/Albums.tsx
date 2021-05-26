import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Products } from "components";

const Albums: React.FC<{}> = () => {
  const history = useHistory();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbumsAPI() {
      let response = await fetch(`https://itunes.apple.com/us/rss/topalbums/limit=100/json`);
      let responseData = await response.json();
      let stack:any = [];
      responseData.feed.entry.map((album:any) => {
        let data:any = {};
        data.src = album['im:image'][2].label;
        data.title = album.title.label;
        data.price = album['im:price'].label;
        stack.push(data);
      })
      setAlbums(stack);
    }

    fetchAlbumsAPI()
  }, [])
  return (
    <>
      <Products >
        {
          albums.map(({src, title, price})=>(
            <Products.ProductItem info={{src: src, title: title, price: price}} onClick={() => alert("this is just for test")} />
          ))
        }
      </Products>
    </>
  );
};

export default Albums;
