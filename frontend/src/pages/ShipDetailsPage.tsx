import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShipById } from "../services/api";
import { BackButton } from "../components/BackButton";

const ShipDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ship, setShip] = useState<any>(null);

  useEffect(() => {
    const getShip = async () => {
      const response = await fetchShipById(id!);
      setShip(response.data);
    };
    getShip();
  }, [id]);

  if (!ship)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex items-center bg-gray-950 p-8">
      <div className="container mx-auto max-w-4xl bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-white">{ship.name}</h1>
        <div className="space-y-4">
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Model:</span> {ship.model}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Manufacturer:</span> {ship.manufacturer}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Cost in Credits:</span>{" "}
            {ship.cost_in_credits}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Crew:</span> {ship.crew}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Passengers:</span> {ship.passengers}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Cargo Capacity:</span>{" "}
            {ship.cargo_capacity}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Consumables:</span> {ship.consumables}
          </p>
          <p className="text-xl font-medium text-white">
            <span className="font-bold">Starship Class:</span>{" "}
            {ship.starship_class}
          </p>
        </div>
        <div className="mt-4 h-10 flex justify-end items-start">
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default ShipDetailsPage;
