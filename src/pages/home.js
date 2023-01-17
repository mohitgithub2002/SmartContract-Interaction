import { useNavigate } from "react-router-dom";
import '../pages.css'
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
    
    <div className="field">
        <div className = "home-section">
        <img src="icon.png" alt="fillimage" className="img" ></img>
        <button onClick={signup} className="button" >Create Id</button><br />
        <button onClick={update} className="button">Update Password</button><br />
        <button onClick={view} className="button">View Password</button><br />
    </div>
    </div>
)
}

export default Home;