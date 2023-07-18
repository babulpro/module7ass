 import { useState } from "react";
import { list } from 'postcss';

 
const TodoList =()=>{

    let [item,setItem]=useState('')
    let [list,setList]=useState([])
 

    let AddIten =()=>{
       if(item){
        list.sort().push(item)
        setItem('')
        setList([...list.sort()])
        console.log(list)

       }
        
    }

    const removeItem=(index)=>{
        list.splice(index,1)
        setList([...list])
    }

    return(

        <div className="border w-2/3 h-screen m-auto mb-5 shadow-md py-1 px-3 bg-slate-600 rounded-md text-white capitalize">
            <h1 className="text-center  mt-5 rounded-sm bg-gradient-to-r from-yellow-600 via-yellow-900 to-yellow-700">Your To Do List</h1>
             
           <div className="py-5 grid grid-rows-2">
           <input className="w-2/3 rounded-md px-3 py-1 text-white m-auto outline-none bg-slate-800" value={item} onChange={(e)=>{
                setItem(e.target.value)
            }} type="text"placeholder=" provide your task" name="" id="" />
            <button className=" w-1/5 capitalize rounded-md bg-slate-900 m-auto mt-5 shadow-lg  backdrop: hover:bg-slate-800 px-2 py-1 mb-5" onClick={AddIten}>add item</button>

           </div>


            <table className="w-full">
                <tbody className="">
                    {list.length !==0 ?(
                        list.map((value,index)=>{
                            return(
                                <tr className="border grid grid-cols-10 justify-between">
                                    <td className="col-span-8 bg-slate-800">{value}</td>
                                    <td className="bg-slate-900 w-full col-span-2 text-center"><button onClick={()=>{removeItem(index)}}>remove</button></td>
                                </tr>
                            )
                        })
                    ):(<tr></tr>)}
                </tbody>
            </table>
        </div>
    )
}
export default TodoList;