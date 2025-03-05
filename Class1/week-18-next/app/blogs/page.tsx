import axios from 'axios'

 async function getblogs(){
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
  return response.data;
}

export default async function blogs(){
    const blogs = await getblogs()
    return <div> 
        This is the blogs app
        {blogs.map((blog:Itodo)=><Todo title={blog.title} completed={blogs.completed}/>)}
    </div>
}
interface ITodo {
    title:string;
    completed:boolean;
}

function Todo({title, completed}:ITodo){
    return <div>
        {title} 
        <br/>
        {completed ? "done?": "not done"}
    </div>
}