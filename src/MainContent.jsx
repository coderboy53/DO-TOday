import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
function Tasks(t_title,t_details,t_duration)
{
    this.t_title = t_title;
    this.t_details = t_details;
    this.t_duration = t_duration;
}
let tasks = [];
function addTasks()
{
    
}
export default function MainContent()
{
    while(true){
    if(tasks.length==0)
        return (
            <section className="body-content">
                <h3>No tasks available</h3>
                <Popup trigger={<button id="add-tasks">&#43;Add your tasks</button>} position="bottom center">
                    <label htmlFor="title">Task Title</label>
                    <input id="title" type="text"></input>
                    <label htmlFor="desc">Task Description</label>
                    <input id="desc" type="text"></input>
                </Popup>
                {/* <span id="add-tasks">&#43;Add your tasks</span> */}
            </section>
            )
    else
    {
        
    }
}
}