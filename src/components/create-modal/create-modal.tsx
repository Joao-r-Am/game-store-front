import { useEffect, useState } from "react";
import { useGameDataMutate } from "../../hooks/useGameDataMutate";
import { GameData } from "../../interface/GameData";
import "./create-modal.css";

interface InputProps {
  label: string;
  value: number | string;
  updateValue(value: any): void;
}

interface ModalProps {
  closeModal(): void;
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    </>
  );
};

export function CreateModal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const { mutate, isSuccess, isLoading } = useGameDataMutate();

  const submit = () => {
    const gameData: GameData = {
      title,
      price,
      image,
    };
    mutate(gameData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess]);

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo jogo:</h2>
        <form className="input-container" action="">
          <Input label="Titulo" value={title} updateValue={setTitle}></Input>
          <Input label="Preço" value={price} updateValue={setPrice}></Input>
          <Input label="Imagem" value={image} updateValue={setImage}></Input>
        </form>
        <button onClick={submit} className="btn-secondary">
          {isLoading ? "Postando..." : "Postar"}
        </button>
      </div>
    </div>
  );
}
