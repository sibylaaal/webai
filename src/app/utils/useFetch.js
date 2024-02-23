'use client'
import { useEffect, useState } from "react"




export const UseFetch=(Endpoint)=>{



const [Data,SetData]=useState([])
const [Loading,SetLoading]=useState(false)
const [Error,SetError]=useState(null)



useEffect(()=>{
SetLoading(true)

fetch(`http://localhost:3002/${Endpoint}`)
.then(res=>res.json())
.then(res=>{
    SetLoading(false)
    SetData(res)
})
.catch((error)=>SetError(error))





},[Endpoint])

return {Data,Loading,Error}

}