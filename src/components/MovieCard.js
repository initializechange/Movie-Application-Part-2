import React from "react";
import "../styles.css";

export default function MovieCard() {
  return (
    <div className="container flex flex-row items-center shadow smallCardWidth hover:shadow-lg p-6">
      <div className="flex flex-col mr-10">
        <h1 className="text-2xl font-bold mb-6">The Joker</h1>
        <h1 className="text-gray-700">2019</h1>
      </div>

      <div className="flex flex-col">
        <img
          className="w-24 h-22"
          src="https://m.media-amazon.com/images/M/MV5BMTg3NzU5Mzg1MF5BMl5BanBnXkFtZTgwODIxMDg4MDI@._V1_SX300.jpg"
        />
      </div>
    </div>
  );
}
