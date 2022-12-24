import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";


interface IPostData {
  data: {
    id?: string
    author: string;
    title: string;
    preview?: {
      images?: []
    }
  }
}

export function usePostData() {
  const [ data, setData ] = useState({});
  const token = useContext(tokenContext)


  useEffect(() => {
    if (token !== undefined && token.length > 0) {
      axios.get('https://oauth.reddit.com/best', {
        headers: { Authorization: `bearer ${token}` }
      })
        .then((resp) => {
          const userPostData: IPostData = resp.data.data.children;
            setData(userPostData)
        })
        .catch(console.log)
    }
  }, [token])
  return data
}
