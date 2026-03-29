import orderByProps from '../orderByProps';

describe('orderByProps', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  };
  
  test('should order properties according to order array', () => {
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });
  
  test('should handle different order array', () => {
    const order = ['health', 'attack'];
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([
      { key: 'health', value: 10 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]);
  });
  
  test('should handle empty order array', () => {
    const order = [];
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
      { key: 'level', value: 2 },
      { key: 'name', value: 'мечник' }
    ]);
  });
  
  test('should handle order array with non-existent keys', () => {
    const order = ['name', 'nonexistent', 'level'];
    const result = orderByProps(obj, order);
    
    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });
  
  test('should handle object with different property types', () => {
    const complexObj = {
      a: 1,
      c: 'string',
      b: true,
      d: null
    };
    const order = ['c'];
    const result = orderByProps(complexObj, order);
    
    expect(result).toEqual([
      { key: 'c', value: 'string' },
      { key: 'a', value: 1 },
      { key: 'b', value: true },
      { key: 'd', value: null }
    ]);
  });
  
  test('should handle empty object', () => {
    const emptyObj = {};
    const order = ['name', 'level'];
    const result = orderByProps(emptyObj, order);
    
    expect(result).toEqual([]);
  });
});