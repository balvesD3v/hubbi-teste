import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchWeaponById } from "../services/api";
import { BackButton } from "../components/BackButton";
import { Weapon } from "../types/Weapon";

const WeaponDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [weapon, setWeapon] = useState<Weapon | null>(null);

  useEffect(() => {
    const getWeapon = async () => {
      try {
        const response = await fetchWeaponById(id!);
        setWeapon(response.data);
      } catch (error) {
        console.error("Error fetching weapon data:", error);
      }
    };
    getWeapon();
  }, [id]);

  if (!weapon)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 bg-gray-950">
        Loading...
      </div>
    );
  return (
    <div className="min-h-screen bg-gray-950 bg-cover flex items-center py-5 text-white">
      <div className="container mx-auto max-w-3xl bg-gray-800 bg-opacity-75 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">{weapon.name}</h1>
        <p className="text-lg mb-2">
          <span className="font-bold">Model:</span> {weapon.model}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Manufacturer:</span> {weapon.manufacturer}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Cost:</span> {weapon.cost_in_credits}{" "}
          credits
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Length:</span> {weapon.length} meters
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Crew:</span> {weapon.crew}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Passengers:</span> {weapon.passengers}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Cargo Capacity:</span>{" "}
          {weapon.cargo_capacity} kg
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Consumables:</span> {weapon.consumables}
        </p>
        <p className="text-lg mb-2">
          <span className="font-bold">Vehicle Class:</span>{" "}
          {weapon.vehicle_class}
        </p>
        <div className="mt-4 h-10 flex justify-end items-start">
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default WeaponDetailsPage;
