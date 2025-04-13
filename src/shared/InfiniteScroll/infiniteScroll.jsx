import { useState } from "react";
import "./infiniteScroll.css";
const THRESHOLD = 20;

export default function InfiniteScrollDomApi() {
  const [data, setData] = useState([...new Array(40)]);
  const [loading, setLoading] = useState(false);

  const handleScroll = (event) => {
    const clientHeight = event.target.clientHeight;
    const scrollHeight = event.target.scrollHeight;
    const scrollTop = event.target.scrollTop;

    const remainingScroll = scrollHeight - (clientHeight + scrollTop);

    if (remainingScroll < THRESHOLD && !loading) {
      loadMore();
    }
    console.log("remainingScroll", remainingScroll);
  };

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setData((prev) => [...prev, ...new Array(10)]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div onScroll={handleScroll} className="scroll-dom-api">
      {data.map((i, idx) => {
        return (
          <div className="row" key={idx}>
            {idx + 1}
          </div>
        );
      })}
    </div>
  );
}
