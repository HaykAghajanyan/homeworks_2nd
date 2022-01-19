export default function SingleMessage({data}) {
    return <div >
        {data?.messages.map(({name, date, text, id}) => <div key={id} className={"single-message"}>
            <div className={"name"}> {name} </div>
            <div className={"date"}>  {date} </div>
            <div className={"message"}>  {text} </div>
        </div>)}


    </div>;
}