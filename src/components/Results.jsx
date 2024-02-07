import { calculateInvestmentResults,formatter } from "../util/investment"

export default function Results({input}){
    let result = calculateInvestmentResults(input)
    {console.log(input)}
    console.log(result)
    return <table id = "result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {result.map(yearData=>{
                return <tr key ={yearData.year}> 
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(yearData.totalInterest)}</td>
                <td>{formatter.format(yearData.totalInvested)}</td>

                </tr>
            })}
        </tbody>


    </table>

}