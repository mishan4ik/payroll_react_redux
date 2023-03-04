import  React from "react"
import { useState } from "react";
import { connect } from 'react-redux'
import "./Salary.css"


let Salary = (props) => {


    let[value,setValue] = useState()
    let[resPremium,setResPremium]=useState();
    let[resTax,setResTax]=useState();
   

    let inpValue = (e) => {

        setValue(value = e.target.value)

    }

    let btn = () => {
        setResPremium(resPremium = (value / 100) * 15)
        setResPremium(resPremium = Number(resPremium) + Number(value))
        props.Prem(resPremium)
        setResTax(resTax  = (resPremium / 100) * 10)
        setResTax(resTax  = Number(resPremium) - Number(resTax))
        props.Tax(resTax)


    }

    



    return(

        <div>
                <div className="main">
                <div className="SalaryBlock">

                        <div className="block_keep_salary">
                            <p>Введите сумму Вашей зарплаты </p>
                            <input type="text" onInput={inpValue} />
                        </div>
                        <div className="block_premium">

                            <p>Ваша премия + 15% итого, к зарплате {resPremium}  грн</p>


                        </div>

                        <div className="block_tax">

                            <p>Налог -10% на руки {resTax} грн</p>


                        </div>
                        <div className="block_btn">

                            <button onClick={btn}>Расчитать</button>

                        </div>


                </div>

                </div>
        </div>

    )



}
export default connect(

state=>({

    Store:state.Premium

}),
dispatch=>({

    Prem:(salaryPrem)=>{

        dispatch({type:"premium",payload:salaryPrem})

    },
    Tax:(salaryTax)=>{

        dispatch({type:"tax",payload:salaryTax})

    }

})

)(Salary);