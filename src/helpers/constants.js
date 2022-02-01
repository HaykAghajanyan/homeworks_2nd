export const colors = [
    'black',
    'red',
    'green',
    'purple',
    'brown'
]

export const colorTarget = [
    {
        target: 'nameColor',
        option: 'name'
    },
    {
        target: 'textColor',
        option: 'text'
    },
]

export const FILTER_OPTIONS = [
    'name',
    'text',
]

let date = new Date().getDate();
let month = new Date().getMonth() + 1;
let year = new Date().getFullYear();

const newDate = () =>{
    if(String(date).length === 1){
        date = "0" + date;
    }
    if(String(month).length === 1){
        month = "0" + month;
    }
    return `${date}/${month}/${year}`;
}


export const addMessage = (messages, loginObj, newMessage) =>{
    messages.push({
        id: messages.length + 1,
        name: loginObj.name,
        date: newDate(),
        text: newMessage,
        textColor: "black",
        nameColor: "black",
        password: loginObj.password,
        login: true,
        reply: []
    })
}



