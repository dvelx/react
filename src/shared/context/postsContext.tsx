import React from "react";
import {usePostData} from "../../hooks/usePostData";

interface IPostContextObject {
  [N: string]: any
}
interface IPostContextData {
  data: {
    id?: string
    author: string;
    title: string;
    preview?: {
      images?: []
    }
  }
}

export const postsContext = React.createContext({})

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const posts = usePostData()
  console.log(posts)

  return (
    <postsContext.Provider value={[posts]}>
      {children}
    </postsContext.Provider>
  )
}
