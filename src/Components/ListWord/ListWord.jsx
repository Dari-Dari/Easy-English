import React, { useState } from "react";
import list from "./list.json";
import { Table, Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Search } = Input;

const ListWord = ({ addToMyList }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleAddToMyList = (word) => {
    addToMyList(word);
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
    // {
    //   title: "",
    //   dataIndex: "edit",
    //   key: "edit",
    //   width: 50,
    //   render: () => <Button icon={<EditOutlined />} />,
    // },
    {
      title: "",
      dataIndex: "add",
      key: "add",
      width: 50,
      render: (_, record) => (
        <Button
          icon={<PlusCircleOutlined />}
          onClick={() => handleAddToMyList(record)}
        >
          Добавить в Мой список
        </Button>
      ),
    },
    // {
    //   title: "",
    //   dataIndex: "remove",
    //   key: "remove",
    //   width: 50,
    //   render: () => <Button icon={<MinusCircleOutlined />} />,
    // },
  ];

  const data = list.filter(
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

export default ListWord;
