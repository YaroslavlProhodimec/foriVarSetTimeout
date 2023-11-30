for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
for (var i = 0; i < 100; i++) {
  setTimeout(() => {
    console.log(i);
  },0,i);
}
