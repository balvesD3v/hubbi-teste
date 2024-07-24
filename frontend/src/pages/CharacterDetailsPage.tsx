import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { fetchCharacterById } from "../services/api";
import { isAuthenticated } from "../services/auth";
import { BackButton } from "../components/BackButton";
import { Character } from "../types/Character";

const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const getCharacter = async () => {
      const response = await fetchCharacterById(id!);
      setCharacter(response.data);
    };
    getCharacter();
  }, [id]);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (!character)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 bg-gray-950">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex items-center bg-gray-950 p-8">
      <div className="container mx-auto max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">{character.name}</h1>
        <div className="space-y-4">
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Height:</span> {character.height}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Mass:</span> {character.mass}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Hair Color:</span>{" "}
            {character.hair_color}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Skin Color:</span>{" "}
            {character.skin_color}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Eye Color:</span> {character.eye_color}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Birth Year:</span>{" "}
            {character.birth_year}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Gender:</span> {character.gender}
          </p>
        </div>
        <div className="mt-4 h-10 flex justify-end items-start">
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
