
export default function UserInput({userInput, onChange}){


    return <section id= "user-input">
        <div className="input-group">
            <p>
                <label>initial Investment</label>
                <input type = "number"  required value= {userInput.initialInvestment} onChange={(e)=>onChange("initialInvestment",e.target.value)}/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type = "number" required value= {userInput.annualInvestment} onChange={(e)=>onChange("annualInvestment",e.target.value)}/>
            </p>
            <p>
                <label>Expected Returns</label>
                <input type = "number" required value= {userInput.expectedReturn} onChange={(e)=>onChange("expectedReturns",e.target.value)}/>
            </p>
            <p>
                <label>Duration</label>
                <input type = "number" required value= {userInput.duration} onChange={(e)=>onChange("duration",e.target.value)}/>
            </p>

        </div>
    </section>
}