function domainName(url){
    //your code here
    if(url.startsWith("http") || url.startsWith("www")){
    let isDoubleU = url.includes("www");
    let start;
    let end;
    console.log(url);
    if(isDoubleU){
      start = url.indexOf(".") + 1;
      let newUrl = url.split("");
      //console.log(url);
      newUrl.splice(start-1, 1);
      newUrl = newUrl.join("");
      console.log(newUrl);
      end = newUrl.indexOf(".");
    return url.slice(start, end+1);
    } else{
      start = url.indexOf("//") + 2;
      end = url.indexOf(".");
      return url.slice(start, end);
    }
    } else {
      let i = url.indexOf(".");
      return url.slice(0, i);
    }
  }
