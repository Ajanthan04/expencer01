import React ,{useState} from 'react'

export default function AddTransaction  () {
    const [amount, setAmount]=useState(0);
    const [text, setText]=useState("");

  return (
    <>
    <div>
    <h3>Add new transaction</h3>
    <form >
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}  
        placeholder="Enter text..." />
      </div>
      <div className="form-control">
        <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}
        placeholder="Enter amount..." />
      </div>
      <button className="btn">Add transaction</button>
    </form>
    </div>
    </>
  
  )
}
