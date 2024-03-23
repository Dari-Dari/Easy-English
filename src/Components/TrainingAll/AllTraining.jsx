import React, { useState, useEffect } from "react";
import { Button, Card, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import list from "../../list.json";

const AllTraining = () => {
  const navigate = useNavigate();
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const whiteText = { color: "#ffffff" };
  const greenBackground = { background: "#008000" };
  const redBackground = { background: "#ff0000" };

  useEffect(() => {
    // Choose a random word index when the component mounts
    setCurrentWordIndex(Math.floor(Math.random() * list.length));
  }, []);

  const handleReturnClick = () => {
    navigate("/training");
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
            <Button style={{ ...whiteText, ...greenBackground }}>Знаю</Button>
            <Button style={{ ...whiteText, ...redBackground }}>Не знаю</Button>
          </Space>

          <Button style={buttonStyle}>Добавить в Мой список</Button>
        </Space>
      </div>
      <Button style={buttonStyle} onClick={handleReturnClick}>
        Завершить тренировку
      </Button>
    </div>
  );
};

export default AllTraining;
