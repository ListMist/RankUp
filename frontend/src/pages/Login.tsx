import{ useState} from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    useState("");
    const login = async()=>{
        try{
            const res =await api.post(
                "/auth/login",
                {
                    email,
                    password,
                },
            );
            localStorage.setItem(
                "token",
                res.data.token,

            );
            localStorage.setItem(
                "user",
                JSON.stringify(res.data.data.user),
            );
            alert("Login Successfully!")
            navigate("/dashboard");
        }
        catch(err){
            console.error(err);
            alert("Login failed");
        }

        };
        return(
            <div style={{padding: 40}}>
                <h1>Login</h1>
            <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={login}>
        Login
      </button>
    </div>
        );
    }
