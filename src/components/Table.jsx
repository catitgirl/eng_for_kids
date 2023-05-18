import React, { useState, useEffect } from "react";
import "./Table.css";

const Table = () => {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("data");
    return localData
      ? JSON.parse(localData)
      : [
          { id: 1, word: "apple", translation: "яблоко" },
          { id: 2, word: "banana", translation: "банан" },
          { id: 3, word: "orange", translation: "апельсин" },
        ];
  });
  const [editingId, setEditingId] = useState(null);
  const [newWord, setNewWord] = useState("");
  const [newTranslation, setNewTranslation] = useState("");
  const [isEmptyField, setIsEmptyField] = useState(true);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleEdit = (id) => {
    const itemToEdit = data.find((item) => item.id === id);
    setEditingId(id);
    setNewWord(itemToEdit.word);
    setNewTranslation(itemToEdit.translation);
  };

  const handleSave = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          word: newWord || item.word,
          translation: newTranslation || item.translation,
        };
      }
      return item;
    });
    setData(newData);
    setEditingId(null);
    setNewWord("");
    setNewTranslation("");
  };

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleAdd = () => {
    if (newWord && newTranslation) {
      setData([
        ...data,
        { id: data.length + 1, word: newWord, translation: newTranslation },
      ]);
      setNewWord("");
      setNewTranslation("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "word") {
      setNewWord(value);
    } else if (name === "translation") {
      setNewTranslation(value);
    }
  };

  useEffect(() => {
    setIsEmptyField(!newWord || !newTranslation);
  }, [newWord, newTranslation]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    name="word"
                    value={newWord}
                    onChange={handleInputChange}
                    className={!newWord ? "empty-field" : ""}
                  />
                ) : (
                  item.word
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    name="translation"
                    value={newTranslation}
                    onChange={handleInputChange}
                    className={!newTranslation ? "empty-field" : ""}
                  />
                ) : (
                  item.translation
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <>
                    <button
                      className="save-button"
                      onClick={() => handleSave(item.id)}
                      disabled={isEmptyField}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-button"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <div className="actions">
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-button"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add new word</h3>
      <div className="add-button-container">
        <input
          type="text"
          name="word"
          placeholder="Word"
          value={newWord}
          onChange={handleInputChange}
          className={!newWord ? "empty-field" : ""}
        />
        <input
          type="text"
          name="translation"
          placeholder="Translation"
          value={newTranslation}
          onChange={handleInputChange}
          className={!newTranslation ? "empty-field" : ""}
        />
        <button
          className="add-button"
          onClick={handleAdd}
          disabled={isEmptyField}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Table;
