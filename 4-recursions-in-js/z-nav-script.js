function read(file_name) {
  console.clear();

  var head = document.getElementsByTagName('head')[0];
  while(head.firstChild){
    head.removeChild(head.firstChild);
  }

  var js = document.createElement("script");

  js.type = "text/javascript";

  js.src = file_name;

  head.appendChild(js);

  return 'loaded script ' + file_name;
}
