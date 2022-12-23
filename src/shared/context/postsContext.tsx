import React from "react";
import {usePostData} from "../../hooks/usePostData";

export const postsContext = React.createContext({})

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const [ data ] = usePostData()

  return (
    <postsContext.Provider value={data}>
      {children}
    </postsContext.Provider>
  )
}
