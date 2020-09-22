function dic(name){
 //create an empty object
    const dictionary={};
    //iterate over the object
    for(let i=0;i<name.length;i++){
        //if the item is not in the object, add it
        if(!dictionary[name[i]])
            dictionary[name[i]]=1;
            //else, it is already there, increase it's count
        else
           dictionary[name[i]]++; 
        
    }
console.log(dictionary);
}
