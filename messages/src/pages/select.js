const Select=({selected,selectText})=>{
    return(<div>
        Select
        <select onChange={(e)=> selected(e.target.value)} >
            <option>Colors</option>
            <option value="pink">Pink</option>
            <option value="yellow">Yellow</option>
            <option value="purple">Purple</option>
        </select>

        
         <select onChange={(e)=>selectText(e.target.value)}>
            <option>Choose</option>
            <option value="name">Name</option>
            <option value="text">Text</option>
        </select>
        
        </div>)
    
}
export default Select