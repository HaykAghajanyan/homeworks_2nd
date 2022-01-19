export default function SingleMessage({data}) {
    return <div className={"message-box"}>
        {data?.messages.map(({name, date, text, id}) => <div key={id} className={  name === "Hayk"? "current-user message" :"message"}>
            <span className={"date-and-name" }>
               <div className={"name"}> {name} </div>
               <div className={"date"}>  {date} </div>
            </span>

            <div className={"text"}>  {text} </div>
        </div>)}


    </div>;
}