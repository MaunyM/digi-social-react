import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { all } from "./ComptoirAPI";

export function ComptoirList() {
  const [comptoirs, setComptoirs] = useState([]);

  useEffect(() => {
    all().then((data) => setComptoirs(data));
  }, []);

  return (
    <div>
      S'accouder à un comptoir :
      {comptoirs.map((comptoir) => (
        <Link to={`comptoir/${comptoir.id}`} key={comptoir.id}>
          {comptoir.nom}
        </Link>
      ))}
    </div>
  );
}
