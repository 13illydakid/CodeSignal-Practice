var itemData = [
    { category: 'fruit',  itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn',  onSale: true  },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit',  itemName: 'melon', onSale: true  },
    { category: 'canned', itemName: 'soup',  onSale: false },
  ];

  function organizeItems(items) {
    // your code here
    let categoryArray = [];
    for(let elem of items){
      let obj = elem;
      let value = obj["category"];
      //console.log(value);
      if(!categoryArray.includes(value)){
        categoryArray.push(value);
      }
    }
    let object = {};
    for(let elem1 of categoryArray){
      object[elem1] = [];
    }
    for(let key in object){
      for(let i = 0; i < items.length; i++){
        let objt = items[i];
        let val = objt["category"];
        if(key === val){
          let name = objt["itemName"];
          if(objt["onSale"]){
            object[key].push(`${name}($)`);
          } else{
            object[key].push(name);
          }
        }
      }
    }
    //console.log(object);
    return object;
  }
  organizeItems(itemData);
