
import axios from "axios";
import { useEffect, useState } from "react";
import { response } from 'express';


const endpoind = ()=> {
  const [poind, setpoind] = useState([])
  useEffect(()=>{
    axios.get("apiPath")
    then.(response=>{
        setpoind(response.data)
    })
  }
   return poind={poind};

  )
}
export default endpoind