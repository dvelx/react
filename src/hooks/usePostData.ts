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

interface IPostContextObject {
  [N: string]: any
}
interface IPostsImageData {
  source: {
    url: string
  }
}

export function usePostData() {
  const [ data, setData ] = useState({});
  const token = useContext(tokenContext)


  useEffect(() => {
    if (token !== undefined && token.length > 0) {
      axios.get('https://oauth.reddit.com/best.json', {
        headers: { Authorization: `bearer ${token}` }
      })
        .then((resp) => {
          const userPostData = resp.data.data.children;
          userPostData.map((post: IPostData) =>
            // тут я перебираю userPostData чтобы получить только нужные мне свойства каждого поста, и дальше нужно их сохранить в data с помощью setData
            setData({author: post.data.author, title: post.data.title, url: post.data.preview?.images?.map((source: IPostsImageData) => source.source.url)}))
        })
        .catch(console.log)
    }
  }, [token])
  return data
}
