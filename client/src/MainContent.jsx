import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
function Tasks(t_title, t_details, t_duration) {
    this.t_title = t_title;
    this.t_details = t_details;
    this.t_duration = t_duration;
}
let tasks = [];
function addTasks() {
    let t = new Tasks(document.getElementById("title").value,document.getElementById("desc").value,document.getElementById("time").value);
    tasks.push(t);
    console.log(tasks);
}


export default function MainContent() {
    let text = "";
    if (tasks.length == 0)
        text = 'View your tasks';
    else
        text = 'View your tasks';
    console.log(1+tasks.length);
    return (
        <section className="body-content">
            <h3 id="heading">{text}</h3>
            <Popup trigger={<button id="add-tasks">&#43;Add your tasks</button>} position="bottom center">
                <label htmlFor="title">Task Title</label>
                <input id="title" type="text" />
                <label htmlFor="desc">Task Description</label>
                <textarea name="desc" id="desc" cols="25" rows="5"></textarea>
                <label htmlFor="time">Task due time</label>
                <input id="time" type="time" /><br />
                {/* <input type="text" /> */}
                <button id="create" onClick={addTasks}>Create</button>
            </Popup>
        </section>
    )
}