import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";

interface IPostsImageData {
  source: {
    url: string
  }
}
interface IPostData {
  post: object;
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
    axios.get('https://oauth.reddit.com/best', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then((resp) => {
        const userPostData = resp.data.data.children;
        console.log(userPostData[0].data.preview.images[0].source)
        userPostData.map((post: IPostData) =>
          setData({author: post.data.author, title: post.data.title, id: post.data.id, url: post.data.preview?.images?.map((source: IPostsImageData) => source.source.url)}))
      })
      .catch(console.log)
  }, [token])

  return [data]
}
