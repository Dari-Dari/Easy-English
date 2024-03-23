import React, { useState, useEffect } from "react";
import { Table, Button, Input } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";

const { Search } = Input;

const MyList = () => {
  const [searchText, setSearchText] = useState("");
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList"));
    if (storedList) {
      setMyList(storedList);
    }
  }, []);

  const saveToLocalStorage = (updatedList) => {
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleRemoveFromMyList = (index) => {
    const updatedList = myList.filter((_, i) => i !== index);
    setMyList(updatedList);
    saveToLocalStorage(updatedList);
  };

  const columns = [
    {
      title: "Слово",
      dataIndex: "en",
      key: "en",
      width: 150,
    },
    {
      title: "Перевод",
      dataIndex: "ru",
      key: "ru",
      width: 150,
    },
    {
      title: "Транскрипция",
      dataIndex: "tr",
      key: "tr",
      width: 150,
    },
    {
      title: "",
      dataIndex: "remove",
      key: "remove",
      width: 50,
      render: (_, __, index) => (
        <Button
          icon={<MinusCircleOutlined />}
          onClick={() => handleRemoveFromMyList(index)}
        >
          Удалить из Моего списка
        </Button>
      ),
    },
  ];

  const data = myList.filter(
    (item) =>
      item.en.toLowerCase().includes(searchText.toLowerCase()) ||
      item.ru.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div style={{ marginTop: 5, marginLeft: 5, borderRadius: 10 }}>
      <Search
        placeholder="Поиск слова или перевода"
        onSearch={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MyList;
