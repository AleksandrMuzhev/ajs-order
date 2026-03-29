export default function orderByProps(obj, order) {
  const result = [];
  const processedKeys = new Set();
  
  // Сначала добавляем свойства в порядке из order
  for (const key of order) {
    if (key in obj) {
      result.push({ key, value: obj[key] });
      processedKeys.add(key);
    }
  }
  
  // Собираем остальные свойства
  const remainingKeys = [];
  for (const key in obj) {
    if (!processedKeys.has(key)) {
      remainingKeys.push(key);
    }
  }
  
  // Сортируем оставшиеся ключи по алфавиту
  remainingKeys.sort();
  
  // Добавляем отсортированные оставшиеся свойства
  for (const key of remainingKeys) {
    result.push({ key, value: obj[key] });
  }
  
  return result;
}