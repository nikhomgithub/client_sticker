import React from 'react'

import {MdRefresh,MdSwapHoriz,MdSettings,
    MdSearch,MdEdit,MdAddCircle,MdDelete,MdPrint,
    MdChevronLeft,MdChevronRight,MdLastPage} from 'react-icons/md';
import { FaBullseye } from 'react-icons/fa';

const renderBadge = ({
                filterData,
                setPageNumber,
                
                totalSwapPage, 
                setSwapState,
                
                setReloadData,
                setShowFilter,
                setShowAdd,
                setShowEdit,
                setShowModalConfirm,
                setUnSelectAll
})=>{

    const {badgeState,pageNumber,limitRow,sort,count,swapState}=filterData

    //console.log('renderBadge')
    //console.log(filterData)


    const {swapShow,swapFunc,
           reloadShow,reloadFunc,
           filterShow,filterFunc,
           addShow,addFunc,
           editShow,editFunc,
           delShow,delFunc,
           printerShow,printerFunc
          } = badgeState

    const changeSwapState=()=>{
        if(swapState<totalSwapPage-1){
            setSwapState(swapState+1)
        }
        if(swapState==totalSwapPage-1){
            setSwapState(0)
        }
    }

    const calTotalPage =()=>{
       return Math.ceil(count/limitRow)
    }

    return (
    <div className="badge-frame-xc12"> 
        
        <div className="flex-center-center flex-no-wrap xc12 jc-start"
              style={{overflow:"auto",justifyContent:"flex-start"}}>

            {swapShow
            ?<div>
                <MdSwapHoriz
                className="md-icon"
                onClick={e=>{
                    changeSwapState()
                    if(swapFunc){swapFunc()}
                }}
                />
            </div>
            :null
            }
            

            {reloadShow
            ?<div>
                <MdRefresh
                className="md-icon"
                onClick={e=>{
                    setReloadData(filterData)
                    //if(reloadFunc){reloadFunc({limitRow:limitRow,sort:sort})}
                    //if(reloadFunc){reloadFunc({limitRow:tempLimitRow,sort:tempSort})}
                }}
                />
            </div>
            :null
            }
               
            {filterShow
            ?<div>
                <MdSearch
                    className="md-icon"
                    onClick={e=>{ 
                        setShowFilter(true)
                        if(filterFunc){filterFunc()}
                    } } 
                />
            </div>
            :null
            }
            
            {addShow
            ?<div>    
                <MdAddCircle
                    className="md-icon"
                    onClick={e=>{ 
                        setShowAdd(true)
                        if(addFunc){addFunc()}
                    }}
                />
            </div>
            :null
            }

            {editShow
            ?<div>   
                <MdEdit 
                    className="md-icon"
                    onClick={e=>{
                        setShowEdit(true)
                        if(editFunc){editFunc()}
                    }}
                />
            </div>
            :null
            }
            
            {delShow
            ?<div>
                <MdDelete
                    className="md-icon"
                    onClick={e=>{
                          setShowModalConfirm(true)
                          if(delFunc){delFunc()}
                        }}
                />
            </div>
            :null
            }

            {printerShow
            ?<div>
                <MdPrint
                    className="md-icon"
                    onClick={e=>{
                        window.print()
                        if(printerFunc){printerFunc()}
                    }}
                />
            </div>
            :null
            }

            <div>
                <FaBullseye
                    className="md-icon"
                    onClick={e=>{
                        if(setUnSelectAll){setUnSelectAll()}
                    }}
                />
            </div>
                  
            <div>
                <MdChevronLeft
                    className="md-icon"
                    style={{visibility:(calTotalPage()>1)&&(pageNumber>1)
                            ?"visible":"hidden"}}
                    onClick={e=>{
                        const temp=parseInt(pageNumber)-1
                        setPageNumber(temp)
                        //setReloadData(true)
                    }}
                />
            </div>

            {calTotalPage()>1
             ?<input 
                type="number"
                style={{width:"70px"}}
                value={pageNumber.toString()}
                onChange={e=>{
                    const temp=parseInt(e.target.value)
                    if(temp<=calTotalPage()||!temp){ //04-06-2021
                        setPageNumber(temp)
                        //setReloadData(true)
                    }
                }}
              />
             :null
            }        

            {calTotalPage()>1
            ?<div>{`/${calTotalPage()}`}</div>
            :null
            }

            {(calTotalPage()>1)&&(pageNumber<calTotalPage())
            ?<div>
                <MdChevronRight
                    className="md-icon"
                    onClick={e=>{
                      const temp=parseInt(pageNumber)+1
                      setPageNumber(temp)
                      //setReloadData(true)
                    }}
                />
            </div>
            :null
            }
               
            {(calTotalPage()>1)&&(pageNumber<calTotalPage())
             ?<div>
                 <MdLastPage
                    className="md-icon"
                    onClick={e=>{
                        const temp=parseInt(calTotalPage())
                        setPageNumber(temp)
                        //setReloadData(true)
                    }}
                 />
              </div>   
             :null   
            }
        </div>
        
    </div>  
    )
}

export default renderBadge
