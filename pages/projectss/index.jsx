import React from 'react'
import Pages from '../Component/Projects'

const Projectss = ({data2}) => {
  return (
    <div>
    {
        data2.map((el)=>(
            <Pages data2={el} key ={el.id}/>
         ))
    }
    </div>
  )
}

export async function getServerSideProps(){

    let res2 = await fetch("http://localhost:8080/repo")
    let data = await res2.json()

    return {
        props:{
            data2:data
        }
    }
}


export default Projectss