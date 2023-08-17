import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/card";
import { useGameData } from "./hooks/useGameData";
import { CreateModal } from "./components/create-modal/create-modal";

function App() {
  const { data } = useGameData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <h1>GAME STORAGER</h1>
        <div className="card-grid">
          {data?.map((gameData) => (
            <Card
              price={gameData.price}
              image={gameData.image}
              title={gameData.title}
            />
          ))}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button onClick={handleOpenModal}>Adicionar</button>
      </div>
    </>
  );
}

export default App;
