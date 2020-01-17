import { useState, useEffect } from "react";
import axios from "axios";

export const useList = url => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        console.log(res);
        setListData(res.data);
      })
      .catch(err => console.log(err));
  }, [url]);
  return [listData];
};
