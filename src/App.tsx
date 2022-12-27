import React, {useState} from "react";
import './main.global.css';
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout";
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";
import {usePostData} from "./hooks/usePostData";
import {commentContext} from "./shared/Content/commentContext";


function AppComponent() {
  const [ commentValue, setCommentValue ] = useState('');
  const [token] = useToken()
  const posts = usePostData()

  const CommentProvider = commentContext.Provider
  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue
    }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <Layout>
            <Header />
            <Content>
              <PostsContextProvider>
                <CardsList />
              </PostsContextProvider>
            </Content>
          </Layout>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>

  );
}

export const App = hot(() => <AppComponent />);
