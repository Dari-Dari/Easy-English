import React, { useState, useEffect } from "react";
import { Button, Card, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import list from "../../list.json";

const AllTraining = ({ addToMyList }) => {
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [knowCount, setKnowCount] = useState(0);
  const [dontKnowCount, setDontKnowCount] = useState(0);
  const whiteText = { color: "#ffffff" };
  const greenBackground = { background: "#388e3c" };
  const redBackground = { background: "#ef5350" };

  useEffect(() => {
    setCurrentWordIndex(Math.floor(Math.random() * list.length));
  }, []);

  const handleReturnClick = () => {
    // Сохраняем результаты тренировки в localStorage
    localStorage.setItem(
      "trainingResults",
      JSON.stringify({ knowCount, dontKnowCount })
    );
    navigate("/training");
  };

  const handleKnowClick = () => {
    setKnowCount((prev) => prev + 1);
  };

  const handleDontKnowClick = () => {
    setDontKnowCount((prev) => prev + 1);
  };

  const handleNext = () => {
    const newIndex =
      currentWordIndex === list.length - 1 ? 0 : currentWordIndex + 1;
    setCurrentWordIndex(newIndex);
    setShowTranslation(false);
  };

  const handlePrev = () => {
    const newIndex =
      currentWordIndex - 1 < 0 ? list.length - 1 : currentWordIndex - 1;
    setCurrentWordIndex(newIndex);
    setShowTranslation(false);
  };

  const handleShowTranslation = () => {
    setShowTranslation(true);
  };

  const handleAddToMyList = () => {
    const word = list[currentWordIndex];
    addToMyList(word);
  };

  const buttonStyle = {
    background: "#8F00FF",
    color: "#ffffff",
    marginTop: 30,
  };

  return (
    <div>
      <h1>Тренировка Весь словарь</h1>
      <div>
        <Space direction="vertical" style={{ marginTop: 30 }}>
          <Space>
            <Button icon={<LeftCircleOutlined />} onClick={handlePrev} />

            {currentWordIndex !== null && (
              <Card
                style={{
                  width: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p>{list[currentWordIndex].en}</p>
                <p>{list[currentWordIndex].tr}</p>
                {showTranslation && <p>{list[currentWordIndex].ru}</p>}
                {!showTranslation && (
                  <Button style={buttonStyle} onClick={handleShowTranslation}>
                    Показать перевод
                  </Button>
                )}
              </Card>
            )}

            <Button icon={<RightCircleOutlined />} onClick={handleNext} />
          </Space>

          <Space style={{ marginTop: 30 }}>
            <Button
              style={{ ...whiteText, ...greenBackground }}
              onClick={handleKnowClick}
            >
              Знаю
            </Button>
            <Button
              style={{ ...whiteText, ...redBackground }}
              onClick={handleDontKnowClick}
            >
              Не знаю
            </Button>
          </Space>

          <Button style={buttonStyle} onClick={handleAddToMyList}>
            Добавить в Мой список
          </Button>
        </Space>
      </div>
      <Button style={buttonStyle} onClick={handleReturnClick}>
        Завершить тренировку
      </Button>
    </div>
  );
};

export default AllTraining;
