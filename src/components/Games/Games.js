import React, { useState, useEffect } from "react";
import api from "../../api";

export default function Games() {
  const [games, setGames] = useState([]);

  // function Live() {
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       await axios
  //         .post(
  //           "https://id.twitch.tv/oauth2/token?client_id=mz6ho4xeg0hwd9i67wx5las4p7kphc&client_secret=mcxrtln1dznw2tyn164yp2b17xmo19&grant_type=client_credentials"
  //         )
  //         .then((response) => console.log(response.data));
  //     };
  //     fetchData();
  //   });
  // }
  // Live();

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/kraken/games/top");
      console.log(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="titreGames">Jeux les plus populaires</h1>
      <div className="flexAccueil"></div>
    </div>
  );
}
