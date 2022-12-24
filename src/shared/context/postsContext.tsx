import React from "react";
import {usePostData} from "../../hooks/usePostData";

interface IPostContextObject {
  [N: string]: any
}
interface IPostContextData {
  data?: IPostContextObject;
  id?: string
  title?: string
  author?: string
  url?: string
}

export const postsContext = React.createContext<IPostContextData[]>([])

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [ posts ] = usePostData()


  return (
    <postsContext.Provider value={[posts]}>
      {children}
    </postsContext.Provider>
  )
}
