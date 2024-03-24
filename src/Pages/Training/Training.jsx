import React from "react";
import { Button, Card, Space } from "antd";
import { useNavigate } from "react-router-dom";

import AllTraining from "../../Components/TrainingAll/AllTraining";
import MyListTraining from "../../Components/TrainingMyList/MyListTraining";

const Training = () => {
  const navigate = useNavigate();

  const handleAllTrainingClick = () => {
    navigate("/alltraining");
  };

  const handleMyListTrainingClick = () => {
    navigate("/mylisttraining");
  };

  const showTrainingResults = () => {
    const trainingResults = JSON.parse(localStorage.getItem("trainingResults"));
    if (trainingResults) {
      return (
        <div>
          <p>Поздравляем, тренировка окончена!</p>
          <p>Вы уже знаете: {trainingResults.knowCount} слов!</p>
          <p>Вам не удалось запомнить: {trainingResults.dontKnowCount} слов!</p>
        </div>
      );
    }
  };

  const buttonStyle = {
    background: "#8F00FF",
    color: "#ffffff",
  };
  return (
    <div
      style={{
        marginTop: 100,
      }}
    >
      <Space size="large">
        <Card
          title="Тренировка Весь словарь"
          bordered={false}
          style={{ width: 500 }}
        >
          <Button style={buttonStyle} onClick={handleAllTrainingClick}>
            Start!
          </Button>
        </Card>
        <Card
          title="Тренировка со словами из Моего списка"
          bordered={false}
          style={{ width: 500 }}
        >
          <Button style={buttonStyle} onClick={handleMyListTrainingClick}>
            Start!
          </Button>
        </Card>
      </Space>
      {showTrainingResults()}
    </div>
  );
};

export default Training;
