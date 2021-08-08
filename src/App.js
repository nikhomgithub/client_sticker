import React from 'react';

import {Route,Switch,Redirect} from 'react-router-dom';

import ShopWelcome from './page/shop/ShopWelcome'
import UserWelcome from './page/user/UserWelcome'
import StickerTable from './page/sticker/StickerTable'
import Navbar from './component/navbar/Navbar'

import {MainContext} from './context/MainContext';

import './App2.css'

function App() {

console.log('App')

const {basicData,tokenSt,setReloadCheckToken}=React.useContext(MainContext)

const {reloadCheckToken,haveShopToken,haveUserToken,userName}=tokenSt

/*
const {username,setUsername,
   reloadCheckToken,setReloadCheckToken,
   haveShopToken,setHaveShopToken,
   haveUserToken,setHaveUserToken,
   userName,setUserName,
   basicData,myheader
}=React.useContext(MainContext)
*/

let temp=window.location.href.split("/")
const home=`${temp[0]}//${temp[2]}/home`

return(
<div className="bgc-lightGray" style={{width:"100%",overflow:"hide"}}>

   <div className="hide-on-print" style={{height:"2rem"}}>
      <Navbar/>   
   </div>

   <div className="w-100">
      <Route path="/home" component={() => window.location.href = home}/>
      <Route exact path="/p31/shop" component={haveShopToken?UserWelcome:ShopWelcome}/>
      <Route exact path="/p31/user" component={haveShopToken?UserWelcome:ShopWelcome}/> 
      <Route exact path="/p31/sticker" component={StickerTable}/>     
   </div>
</div>
)

}
export default App;

