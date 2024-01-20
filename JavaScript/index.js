const countVariable=(str)=>{
  let count = 0;
  for (const iterator of str) {
    if (
      iterator === "a" ||
      iterator === "e" ||
      iterator === "i" ||
      iterator === "o" ||
      iterator === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

countVariable("chetu")