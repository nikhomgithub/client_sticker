const stickerTableTemplate={
  selectedLine           :
  { lb:'_',     type:"radio",
    width:40,   showCol:true,  showColHead:true,    
  },
  id            :
    { lb:'ID',     type:"number",
      width:75,   showCol:true,  showColHead:true,    
    },
  date           :
    { lb:'วันที่',type:"date",
    width: 90,   showCol:true,  showColHead:true,    
    }, 
  recordName      :
    { lb:'ชื่อรายการ',type:"string",
      width:400,   showCol:true,  showColHead:true,      
    },
  recordBy      :
    { lb:'คนบันทึก',type:"string",
      width:110,   showCol:true,  showColHead:true,      
    },

}


const tableTemplate = {
  stickerTableTemplate
}

export default tableTemplate
