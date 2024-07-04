const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    
    extractTime(string,format){
        let reg = new RegExp(`\\d{1,2}${format}\\d{2}`,'g')
           let match = string.match(reg);
           let result = match.map((elem)=>{
               return elem.replace(format==":"?":":".",format==":"?".":":");
           });
           
           match.map((elem, index)=>{
             string = string.replace(elem,`<span class="highlight">${result[index]}</span>`);
           });
       
           return string;
         
       }

    american_to_british(text){
        
       let newText = text
        .split(" ")
        .map((elem, index, array)=>{
            // Check americanOnly mapping
            let point;
           
        if(index==array.length-1){
            if(/[^a-zA-Z0-9]/.test(elem[elem.length-1])){
                point = elem[elem.length-1];
                elem = elem.slice(0,elem.length-1);
            }
        }
        
        let result=elem;

        if (americanOnly.hasOwnProperty(elem)) {
            result=`<span class="highlight">${americanOnly[elem]}</span>`;
        }
        // Check americanToBritishSpelling mapping
        if (americanToBritishSpelling.hasOwnProperty(elem)) {
            result=`<span class="highlight">${americanToBritishSpelling[elem]}</span>`;
        }
        // Check americanToBritishTitles mapping
        if (americanToBritishTitles.hasOwnProperty(elem.toLowerCase())) {
            // Titles should retain their capitalization
            result=americanToBritishTitles[elem.toLowerCase()];
            result=result[0].toUpperCase()+result.slice(1,result.length);
            result=`<span class="highlight">${result}</span>`;
        }
        if(/\d{1,2}:\d{2}/g.test(elem)){
          result = this.extractTime(elem,":");
        }
        // Return the original element if no mapping is found
        if(!point){
        return result;
        }
        else{
            return result+point
        }
    })
    .join(" "); 

        return newText
    
    }

    british_to_american(text){
   function condition(condi,elem){
           return Object.entries(condi).filter((element)=>element[1]==elem.toLowerCase());
            
   }
        let newText = text
         .split(" ")
         .map((elem, index, array)=>{
             // Check americanOnly mapping
             let point;
          
           
             if(index==array.length-1){
                 if(/[^a-zA-Z0-9]/.test(elem[elem.length-1])){
                     point = elem[elem.length-1];
                     elem = elem.slice(0,elem.length-1);
                 }
             }

         let result=elem;
         if (britishOnly.hasOwnProperty(elem.toLowerCase())) {
             result=`<span class="highlight">${britishOnly[elem.toLowerCase()]}</span>`;
         }
         // Check americanToBritishSpelling mapping
         if (condition(americanToBritishSpelling, elem).length > 0) {

             result=`<span class="highlight">${condition(americanToBritishSpelling,elem)[0][0]}</span>`;
             
         }
         // Check americanToBritishTitles mapping
         if (condition(americanToBritishTitles,elem).length > 0) {
             // Titles should retain their capitalization
             result = condition(americanToBritishTitles,elem)[0][0];
             result = result[0].toUpperCase()+result.slice(1,result.length);
             result=`<span class="highlight">${result}</span>`;
         }
         if(/\d{1,2}\.\d{2}/g.test(elem)){
            result=this.extractTime(elem,".");
        }
         if(!point){
            return result;
            }
            else{
                return result+point
            }
         // Return the original element if no mapping is found
     })
     
     .join(" ");
 
         
        return newText;
     
     }
    
}

module.exports = Translator;