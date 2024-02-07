export default function (){
    return <section id= "user-input">
        <div className="input-group">
            <p>
                <label>initial Investment</label>
                <input type = "number" required/>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type = "number" required/>
            </p>
            <p>
                <label>Expected Returns</label>
                <input type = "number" required/>
            </p>
            <p>
                <label>Duration</label>
                <input type = "number" required/>
            </p>

        </div>
    </section>
}