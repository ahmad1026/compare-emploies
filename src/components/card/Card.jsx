import React, { useState } from "react";
import Styles from "./Card.module.css";
import image from "../../assets/images/1663163836_f8b65dc1-3ac9-40a5-a6f2-a69fc49f6f9a.jpg";
import { useDispatch, useSelector } from "react-redux";
export default function Card({ data }) {
    
    const dispatch = useDispatch()
    const userSlice = useSelector(state => state.users)
    const compareList = useSelector(state => state.compare)


    


    const handleCompare = (id)=>{
        // const hasUser = compareList.emploies?.filter(user=> user.id === id)
        if(!compareList.ides.includes(id)){
            const employe = userSlice.users?.filter(user=> user.id === id)
            dispatch({
                type:"compare/addEmploy",
                payload:employe[0]
            })
        }else{
            const newEmploies = compareList.emploies?.filter(user=> user.id !== id)
            dispatch({
                type:"compare/removeItem",
                payload:{newEmploies,id}
            })
        }

        console.log(compareList.ides);

    }



  return (
    <div className={Styles.card}>
      <div className={Styles.item}>
        <div className={Styles.image}>
          <img className={compareList.ides.includes(data.id) ? Styles.blureImsge : null} src={data.avatar} alt="avatar" />
          <div className={Styles.buttun}>
            <button onClick={()=>handleCompare(data.id)}>{compareList.ides.includes(data.id) ? 'remove' : 'compare'}</button>
          </div>
        </div>
        <span>{data.name}</span>
        <span style={{color:'#48CFAD',fontWeight:'bold'}}>salary: ${data.salary}</span>
      </div>
    </div>
  );
}
