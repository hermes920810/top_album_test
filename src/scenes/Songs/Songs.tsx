import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Products } from "components";

const Songs: React.FC<{}> = () => {
  const history = useHistory();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    
    async function fetchSongsAPI() {
      let response = await fetch(`https://itunes.apple.com/us/rss/topsongs/limit=100/json`);
      let responseData = await response.json();
      let stack:any = [];
      responseData.feed.entry.map((song:any) => {
        let data:any = {};
        data.src = song['im:image'][2].label;
        data.title = song.title.label;
        data.price = song['im:price'].label;
        stack.push(data);
      })
      setSongs(stack);
    }

    fetchSongsAPI()
  }, [])
  return (
    <>
      <Products >
        {
          songs.map(({src, title, price})=>(
            <Products.ProductItem info={{src: src, title: title, price: price}} onClick={() => alert("this is just for test")} />
          ))
        }
      </Products>
    </>
  );
};

export default Songs;
