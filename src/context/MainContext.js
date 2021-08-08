import React from 'react'

export const MainContext=React.createContext();

const MainContextProvider=(props)=>{
    console.log('MainContext....')
  
    const [tokenSt,setTokenSt] = React.useState({
        reloadCheckToken:true,
        haveShopToken:false,
        haveUserToken:false,
        userName:null
    })


    const myheader={headers: {'Content-Type': 'application/json',
    'Shopauthorization':localStorage.getItem('shopauthorization'),
    'Userauthorization':localStorage.getItem('userauthorization')
    }}
    

    const setReloadCheckToken=(value)=>{
        const tempSt={...tokenSt,reloadCheckToken:true}
        setTokenSt(tempSt)
    }

    React.useEffect(()=>{
        const {
            reloadCheckToken,
            haveShopToken,
            haveUserToken,
            userName
        }=tokenSt
        
        let tempSt={...tokenSt}

        if(reloadCheckToken){

            if(localStorage.getItem('shopauthorization')){
                tempSt={...tempSt,haveShopToken:true}
            }
            else{
                tempSt={...tempSt,haveShopToken:false}
                localStorage.removeItem('userauthorization')
                localStorage.removeItem('username')
            }

            if(localStorage.getItem('userauthorization')&&
            localStorage.getItem('username')){
                
                tempSt={...tempSt,
                        haveUserToken:true,
                        userName:localStorage.getItem('username')
                    }
                }
            else{
                
                localStorage.removeItem('userauthorization')
                localStorage.removeItem('username')

                tempSt={...tempSt,
                    haveUserToken:false,
                    userName:null
                }
            }
            tempSt={...tempSt,
                reloadCheckToken:false
            }
            setTokenSt(tempSt)
        }
    },[tokenSt])

//=========================================
//==================================
return(
        <MainContext.Provider value={
            {
               //allTableTemplate,
               myheader,
               tokenSt,setTokenSt,
               setReloadCheckToken
            }
        }>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainContextProvider;
