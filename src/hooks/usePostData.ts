import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {tokenContext} from "../shared/context/tokenContext";


interface IPostData {
  data?: {
    id?: string
    author: string;
    title: string;
    thumbnail?: string;
    score?: number;
    num_comments?: number;
    created?: number;
    sr_detail?: {
      icon_img?: string
    }
  }
}

interface IPostContextObject {
  [N: string]: any
}

export function usePostData() {
  const [ data, setData ] = useState<IPostContextObject>({});
  const token = useContext(tokenContext)

  useEffect(() => {
    if (token !== 'undefined' && token.length > 0) {
      axios.get('https://oauth.reddit.com/best.json', {
        headers: { Authorization: `bearer ${token}` }
      })
        .then((resp) => {
          const userPostData = resp.data.data.children;
          const posts = userPostData.map((post: IPostData) => {
            return {
              id: post.data?.id,
              title: post.data?.title,
              author: post.data?.author,
              thumbnail: post.data?.thumbnail,
              score: post.data?.score,
              num_comments: post.data?.num_comments,
              created: post.data?.created,
              sr_detail: post.data?.sr_detail?.icon_img
            }
          })
          setData(posts)
        })
        .catch(console.log)
    }
  }, [token])
  return data
}
