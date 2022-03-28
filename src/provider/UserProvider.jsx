import React,{ createContext } from "react"
// Contextを作っていくよ〜
import { useState } from "react";
export const UserContext = createContext({});
// UserContextというContextを作成する。他でも使用できるようにexport
// Contextの中にはProviderがある

export const UserProvider = (props) => {
    const { children } = props;

    const [userInfo, setUserInfo] = useState(null);
    //グローバルな値を利用する為に

 return(
     <UserContext.Provider value={{ userInfo, setUserInfo }}>
         {/* valueで渡した値がchildrenに入ってくる */}
         {/* userInfoを使用することで配下のコンポーネントからstateを使用することが可能, そしてその値をsetUserInfoで更新していくことが可能 */}
         { children }
     </UserContext.Provider>
 )
}


