function saveDiv(divId, title) {
  var element = document.getElementById(divId);
  var opt = {
    filename: `${title}.pdf`,
    margin: 4,
  };

  // New Promise-based usage:
  //   html2pdf().set(opt).from(element).save();

  // Old monolithic-style usage:
  html2pdf(element, opt);
}
