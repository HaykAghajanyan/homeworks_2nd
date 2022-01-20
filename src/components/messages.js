import SingleMessage from "./singleMessage";

export default function Messages({data, textClass, nameClass}) {
    return <div>
        <SingleMessage
            data={data}
            textClass={textClass}
            nameClass={nameClass}/>
    </div>;
}