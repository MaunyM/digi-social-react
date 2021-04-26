import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToken } from "../user/userSlice";
import { all } from "./ComptoirAPI";

export function ComptoirList() {
  const [comptoirs, setComptoirs] = useState([]);
  const token = useToken();
  
  useEffect(() => {
    all(token).then(data => setComptoirs(data));
  }, [token]);

  return (
    <div>
        S'accouder à un comptoir : 
      {comptoirs.map((comptoir) => (
        <Link to={`comptoir/${comptoir.id}`} key={comptoir.id}>{comptoir.nom}</Link>
      ))}
    </div>
  );
}
