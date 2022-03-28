import React,{ createContext } from "react"
// Contextを作っていくよ〜
export const UserContext = createContext({});
// UserContextというContextを作成する。他でも使用できるようにexport
// Contextの中にはProviderがある

export const UserProvider = (props) => {
    const { children } = props;
    const contextName = "masaki"
 return(
     <UserContext.Provider value={{ contextName }}>
         {/* valueで渡した値がchildrenに入ってくる */}
         { children }
     </UserContext.Provider>
 )
}


