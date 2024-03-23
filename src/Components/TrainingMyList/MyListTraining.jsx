import React, { useState, useEffect } from "react";
import { Button, Card, Space } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import MyList from "../MyList/MyList";

const MyListTraining = () => {
  const navigate = useNavigate();
  const myList = JSON.parse(localStorage.getItem("myList")) || [];
  const [currentWordIndex, setCurrentWordIndex] = useState(null);
  const [showTranslation, setShowTranslation] = useState(() =>
    myList.map(() => false)
  );

  useEffect(() => {
    setCurrentWordIndex(Math.floor(Math.random() * myList.length));
  }, [myList]);

  const handleNext = () => {
    const newIndex =
      currentWordIndex === myList.length - 1 ? 0 : currentWordIndex + 1;
    setCurrentWordIndex(newIndex);
    setShowTranslation((prev) =>
      prev.map((_, index) => (index === newIndex ? false : _))
    );
  };

  const handlePrev = () => {
    const newIndex =
      currentWordIndex - 1 < 0 ? myList.length - 1 : currentWordIndex - 1;
    setCurrentWordIndex(newIndex);
    setShowTranslation((prev) =>
      prev.map((_, index) => (index === newIndex ? false : _))
    );
  };

  const handleShowTranslation = () => {
    setShowTranslation((prev) =>
      prev.map((_, index) => (index === currentWordIndex ? true : _))
    );
  };

  const handleReturnClick = () => {
    navigate("/training");
  };

  const buttonStyle = {
    background: "#8F00FF",
    color: "#ffffff",
  };

  return (
    <div>
      <h1>Тренировка из Моего списка</h1>
      {myList.length > 0 && (
        <div>
          <Space direction="vertical">
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
                  <p>{myList[currentWordIndex].en}</p>
                  <p>{myList[currentWordIndex].tr}</p>
                  {showTranslation && <p>{myList[currentWordIndex].ru}</p>}
                  {!showTranslation && (
                    <Button onClick={handleShowTranslation}>
                      Показать перевод
                    </Button>
                  )}
                </Card>
              )}

              <Button icon={<RightCircleOutlined />} onClick={handleNext} />
            </Space>
            <Button style={buttonStyle} onClick={handleReturnClick}>
              Завершить тренировку
            </Button>
          </Space>
        </div>
      )}
      {myList.length === 0 && (
        <p>Ваш список слов пуст. Добавьте слова в Мой список для тренировки.</p>
      )}
    </div>
  );
};

export default MyListTraining;
