import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

const Main = () => {
  const navigate = useNavigate(); // Используем useNavigate для навигации

  const handleCardClick = (path) => {
    navigate(path); // Используем navigate для перехода по пути
  };

  return (
    <div>
      <div style={{ marginTop: 30, marginBottom: 50, fontSize: 36 }}>
        <h1>Welcome!</h1>
      </div>
      <Row gutter={[52, 16]} justify="center" align="middle">
        <Col onClick={() => handleCardClick("/list")}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/dictionary.jpg" />}
          >
            <Meta title="Словарь" description="Смотри и переводи!" />
          </Card>
        </Col>
        <Col onClick={() => handleCardClick("/training")}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/training.png" />}
          >
            <Meta title="Тренировка" description="Изучи много новых слов!" />
          </Card>
        </Col>
        <Col onClick={() => handleCardClick("/mylist")}>
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src="/myList.png" />}
          >
            <Meta title="Мой список" description="Создай свой список слов!" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Main;
