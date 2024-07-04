'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const {text, locale}=req.body;
      if(text===undefined || locale===undefined){
        res.json({ error: 'Required field(s) missing' });
      }
      if(text==''){
       return res.json({ error: 'No text to translate' });
      }
      if(locale != 'american-to-british' && locale != 'british-to-american'){
       return res.json({ error: 'Invalid value for locale field' });
      }
   
     
    let translation;
    if (locale === 'american-to-british') {
      translation = translator.american_to_british(text);
      
    } else if (locale === 'british-to-american') {
      translation = translator.british_to_american(text);
     
    }
   
    if (translation === text) {
      return res.json({
        text,
        translation: "Everything looks good to me!"
      });
    } else {
      return res.json({
        text,
        translation
      });
    }
  
    });

};
