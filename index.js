
  const data = [
    [
      { id: 1, name: 'John', age: 24 },
      { id: 2, name: 'Jane', age: 31 },
    ],
    [
      { id: 3, name: 'Bob', age: 19 },
      { id: 4, name: 'Alice', age: 25 },
    ],
  ];

  const names = data.flat().map((item) => {
    return item.name;
  });

  console.log(names);
  // Output: ['John', 'Jane', 'Bob',