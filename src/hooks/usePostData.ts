import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IPostData {
  id?: string;
  author?: string;
  title?: string
}

export function usePostData() {
  const [ data, setData ] = useState<IPostData>({});
  const token = useContext(tokenContext)

  useEffect(() => {
    axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((resp) => {
        const userPostData = resp.data;
        setData( {author: userPostData.data.author, title: userPostData.data.title})
      })
      .catch(console.log)
  }, [token])

  return [data]
}
