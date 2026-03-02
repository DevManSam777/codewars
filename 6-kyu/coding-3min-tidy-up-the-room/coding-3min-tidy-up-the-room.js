function sc(room) {
  let index = 0;
  const sundries = ('' + room).match(/[^ ,]/g) || [];
  return room.map(row => 
    row.map((_, i) => 
      i * i < sundries.length && sundries[index++] || ' '
    )
  );
}