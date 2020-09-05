function outputfile(result) {
  alert();
  return document.write(
    '<a href="data:text/plain;charset=utf-8,%EF%BB%BF' +
      encodeURIComponent(result) +
      '" download="output.txt">output.txt</a>',
  );
}
module.exports = outputfile;
