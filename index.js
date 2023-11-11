const axios = require('axios');

const baseURL = 'http://localhost:3000/items';

// アイテムの取得 (Read)
const getItems = async () => {
  try {
    const response = await axios.get(baseURL);
    console.log('Get Items:', response.data);
  } catch (error) {
    console.error('Error in getItems:', error);
  }
};

// アイテムの作成 (Create)
const createItem = async (itemName) => {
  try {
    const response = await axios.post(baseURL, { name: itemName });
    console.log('Create Item:', response.data);
  } catch (error) {
    console.error('Error in createItem:', error);
  }
};

// アイテムの更新 (Update)
const updateItem = async (id, newName) => {
  try {
    const response = await axios.put(`${baseURL}/${id}`, { name: newName });
    console.log('Update Item:', response.data);
  } catch (error) {
    console.error('Error in updateItem:', error);
  }
};

// アイテムの削除 (Delete)
const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${baseURL}/${id}`);
    console.log('Delete Item:', response.data);
  } catch (error) {
    console.error('Error in deleteItem:', error);
  }
};

// デモ実行
const runDemo = async () => {
  await getItems();              // 全アイテムの取得
  await createItem('New Item');   // 新しいアイテムの作成
  await updateItem(1, 'Updated Item'); // アイテムの更新
  await deleteItem(2);           // アイテムの削除
  await getItems();              // 更新されたアイテムリストの取得
};

runDemo();
