import React from 'react';

const genRef=()=>{
    return [1,2,3].map(i=>React.createRef())
}

const cName="xc12 h-100"

const subCNameMinMax = ["xc1 h-100",
                        "xc3 h-100",
                        "xc8 h-100"]
  
const subCNameInput= subCNameMinMax



const stickerFilter=[

  //id
  { 
    templateType:"number",
    lb:"id",
    cName,  
    subCName:subCNameMinMax,
    keyName:"id",
    refInput:genRef(),
    inputType:"number",
    filterCommand:["id"]
  },
  //date
  { 
    templateType:"date",
    lb:"วันที่",
    cName,  
    subCName:subCNameMinMax,
    keyName:"date",
    refInput:genRef(),
    inputType:"date",
    filterCommand:["date"]
  },

    //recordName
    { 
      templateType:"string",
      lb:"ชื่อรายการ",
      cName,  
      subCName:subCNameInput,    
      keyName:"recordName",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["recordName"]
    },

    //recordBy
    { 
      templateType:"string",
      lb:"ผู้บันทึก",
      cName,  
      subCName:subCNameInput,    
      keyName:"recordBy",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["recordBy"]
    },

    {       
      templateType:"arrayObjectString",
      lb:"สินค้า|บาร์โค้ด",
      cName,  
      subCName:subCNameInput,
      keyName:"productData_code",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["productData","code"]
    },
    { 
      templateType:"arrayObjectString",
      lb:"สินค้า|ชื่อสินค้า",
      cName,  
      subCName:subCNameInput,
      keyName:"productData_name",
      refInput:genRef(),
      inputType:"text",
      filterCommand:["productData","name"]
    },





]






const StateTemplate={
  stickerFilter
}
  
export default StateTemplate
  