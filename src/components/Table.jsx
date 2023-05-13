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

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleEdit = (id) => {
    setEditingId(id);
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
                    defaultValue={item.word}
                    onChange={(e) => setNewWord(e.target.value)}
                  />
                ) : (
                  item.word
                )}
              </td>
              <td>
                {editingId === item.id ? (
                  <input
                    type="text"
                    defaultValue={item.translation}
                    onChange={(e) => setNewTranslation(e.target.value)}
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
          placeholder="Word"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <input
          type="text"
          placeholder="Translation"
          value={newTranslation}
          onChange={(e) => setNewTranslation(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Table;
