import {useSelector} from "react-redux/lib/exports";

export default function SingleMessage() {


    const data = useSelector(({AppDuck}) => AppDuck);

    return (
        <div className={"message-box"}>
            {data.messages.map(({name, date, text, id}) => <div
                key={id}
                className={name === "Hayk" ? `current-user message` : "message"}
            >
            <span className={`date-and-name ${data.className}`}>
               <div className={"name"}> {name} </div>
               <div className={`date`}>  {date} </div>
            </span>

                <div className={`text ${data.className}`}>  {text} </div>
            </div>)})


        </div>);
}