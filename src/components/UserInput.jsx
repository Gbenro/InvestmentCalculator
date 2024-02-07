import { useState } from "react"

export default function (){

   const [userInput, setUserInput]= useState({
        initialInvestment : 10000,
        annualInvestment: 1200,
        expectedReturn : 6,
        duration:10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput((prevUserInput)=>{
            return {
                ...prevUserInput,
                [inputIdentifier]:newValue

            }
        })
    }
    return <section id= "user-input">
        <div className="input-group">
            <p>
                <label>initial Investment</label>
                <input type = "number"  required value= {userInput.initialInvestment} onChange={(e)=>handleChange("initialInvestment",e.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type = "number" required value= {userInput.annualInvestment} onChange={(e)=>handleChange("annualInvestment",e.target.value)}/>
            </p>
            <p>
                <label>Expected Returns</label>
                <input type = "number" required value= {userInput.expectedReturn} onChange={(e)=>handleChange("expectedReturns",e.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type = "number" required value= {userInput.duration} onChange={(e)=>handleChange("duration",e.target.value)}/>
            </p>

        </div>
    </section>
}