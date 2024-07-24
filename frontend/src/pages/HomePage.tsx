import React, { useEffect, useState } from "react";
import { fetchCharacters, fetchShips, fetchWeapons } from "../services/api";
import { Link } from "react-router-dom";
import SwLogo from "../assets/hd-white-star-wars-logo-png-701751694787021te08lp5kwd-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SearchInput from "../components/SearchInput";
import { Character } from "../types/Character";
import { Ship } from "../types/Ship";
import { Weapon } from "../types/Weapon";
import ClipLoader from "react-spinners/ClipLoader";

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [ships, setShips] = useState<Ship[]>([]);
  const [weapons, setWeapons] = useState<Weapon[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [filteredShips, setFilteredShips] = useState<Ship[]>([]);
  const [filteredWeapons, setFilteredWeapons] = useState<Weapon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const charactersResponse = await fetchCharacters();
        const shipsResponse = await fetchShips();
        const weaponsResponse = await fetchWeapons();
        setCharacters(charactersResponse.data.results);
        setShips(shipsResponse.data.results);
        setWeapons(weaponsResponse.data.results);
        setFilteredCharacters(charactersResponse.data.results);
        setFilteredShips(shipsResponse.data.results);
        setFilteredWeapons(weaponsResponse.data.results);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    setFilteredCharacters(
      characters.filter((char) =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredShips(
      ships.filter((ship) =>
        ship.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredWeapons(
      weapons.filter((weapon) =>
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, characters, ships, weapons]);

  return (
    <div className="min-h-screen bg-[url('/src/assets/star-wars-bg.jpg')] bg-gray-950 bg-no-repeat text-white">
      <header className="bg-gray-900 bg-opacity-75 shadow-md ">
        <div className="flex justify-around items-center px-72">
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/paulobarbosacode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a href="mailto:lpbalves7filho@gmail.com" className="text-red-400">
              <FontAwesomeIcon icon={faGoogle} className="text-2xl" />
            </a>
          </div>
          <img
            src={SwLogo}
            alt="Star Wars Logo"
            className="h-[150px] mx-auto"
          />
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </header>
      <div className="container mx-auto max-w-4xl bg-white p-6 mt-8 rounded-lg shadow-md">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader color="#ffffff" size={50} />
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
              Characters
            </h1>
            <ul className="space-y-4 mb-8">
              {filteredCharacters.map((char) => (
                <li key={char.url} className="border-b border-gray-300 pb-2">
                  <Link
                    to={`/characters/${char.url.split("/").slice(-2, -1)[0]}`}
                    className="text-xl font-medium text-blue-500 hover:underline"
                  >
                    {char.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Ships</h1>
            <ul className="space-y-4 mb-8">
              {filteredShips.map((ship) => (
                <li key={ship.url} className="border-b border-gray-300 pb-2">
                  <Link
                    to={`/ships/${ship.url.split("/").slice(-2, -1)[0]}`}
                    className="text-xl font-medium text-blue-500 hover:underline"
                  >
                    {ship.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Weapons</h1>
            <ul className="space-y-4 mb-8">
              {filteredWeapons.map((weapon) => (
                <li key={weapon.url} className="border-b border-gray-300 pb-2">
                  <Link
                    to={`/weapons/${weapon.url.split("/").slice(-2, -1)[0]}`}
                    className="text-xl font-medium text-blue-500 hover:underline"
                  >
                    {weapon.name}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
