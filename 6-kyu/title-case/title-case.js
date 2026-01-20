function titleCase(title, minorWords) {                                                                                    
    if (title === '') return '';                                                                                             
                                                                                                                                                                                
    minorWords = minorWords                                                                                              
      ? minorWords.toLowerCase().split(' ')                                                                                  
      : [];                                                                                                                  
                                                                                                                             
    return title                                                                                                             
      .toLowerCase()                                                                                                         
      .split(' ')                                                                                                            
      .map((word, index) => {                                                                                                                                               
        if (index === 0 || !minorWords.includes(word)) {                                                                       
          return word[0].toUpperCase() + word.slice(1);                                                                      
        }                                                                                                                    
        return word;                                                                                                         
      })                                                                                                                     
      .join(' ');                                                                                                            
  }        