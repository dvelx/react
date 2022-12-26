import React from "react";
import {usePostData} from "../../hooks/usePostData";



export const postsContext = React.createContext({})

export function PostsContextProvider({ children }: { children: React.ReactNode }) {
  const posts = usePostData()

  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  )
}
