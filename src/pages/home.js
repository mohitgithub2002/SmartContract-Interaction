import { useNavigate } from "react-router-dom";
function Home (){

    const navigate = useNavigate();
  
    const signup = () => {
        navigate('/signup');
    }
    const update = () => {
        navigate('/update');
    }
    const view = () => {
        navigate('/view');
    }


return (
    <div className = "btn">
        <button onClick={signup} >Create Id</button><br />
        <button onClick={update} >Update Password</button><br />
        <button onClick={view} >View Password</button><br />
    </div>
)
}

export default Home;