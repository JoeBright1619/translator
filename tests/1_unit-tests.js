const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
    const translate = new Translator;
    suite('Translate to British English', () => {
        test('Mangoes are my favorite fruit:', () => {
            assert.equal(translate.american_to_british('Mangoes are my favorite fruit'), 'Mangoes are my <span class="highlight">favourite</span> fruit');
        });
        
        test('I ate yogurt for breakfast:', () => {
            assert.equal(translate.american_to_british('I ate yogurt for breakfast'), 'I ate <span class="highlight">yoghurt</span> for breakfast');
        });
        
        test("We had a party at my friend's condo:", () => {
            assert.equal(translate.american_to_british("We had a party at my friend's condo"), "We had a party at my friend's <span class=\"highlight\">flat</span>");
        });
        
        test('Can you toss this in the trashcan for me?:', () => {
            assert.equal(translate.american_to_british('Can you toss this in the trashcan for me'), 'Can you toss this in the <span class="highlight">bin</span> for me');
        });
        
        test('The parking lot was full:', () => {
            assert.equal(translate.american_to_british('The parking lot was full'), 'The parking lot was full');
        });
        
        test('Like a high tech Rube Goldberg machine:', () => {
            assert.equal(translate.american_to_british('Like a high tech Rube Goldberg machine'), 'Like a high tech Rube Goldberg machine');
        });
        
        test('To play hooky means to skip class or work:', () => {
            assert.equal(translate.american_to_british('To play hooky means to skip class or work'), 'To play hooky means to skip class or work');
        });
        
        test('No Mr. Bond, I expect you to die:', () => {
            assert.equal(translate.american_to_british('No Mr. Bond, I expect you to die'), 'No <span class="highlight">Mr</span> Bond, I expect you to die');
        });
        
        test('Dr. Grosh will see you now:', () => {
            assert.equal(translate.american_to_british('Dr. Grosh will see you now'), '<span class="highlight">Dr</span> Grosh will see you now');
        });
        
        test('Lunch is at 12:15 today:', () => {
            assert.equal(translate.american_to_british('Lunch is at 12:15 today'), 'Lunch is at <span class="highlight">12.15</span> today');
        });

        suite('Translate to American English', () => {
            test('We watched the footie match for a while:', () => {
                assert.equal(translate.british_to_american('We watched the footie match for a while'), 'We watched the <span class="highlight">soccer</span> match for a while');
            });
            test('Paracetamol takes up to an hour to work:', () => {
                assert.equal(translate.british_to_american('Paracetamol takes up to an hour to work'), '<span class="highlight">Tylenol</span> takes up to an hour to work');
            });
            test('First, caramelise the onions:', () => {
                assert.equal(translate.british_to_american('First, caramelise the onions'), 'First, <span class="highlight">caramelize</span> the onions');
            });
            test('I spent the bank holiday at the funfair:', () => {
                assert.equal(translate.british_to_american('I spent the bank holiday at the funfair'), 'I spent the bank holiday at the <span class="highlight">carnival</span>');
            });
            test('I had a bicky then went to the chippy:', () => {
                assert.equal(translate.british_to_american('I had a bicky then went to the chippy'), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>');
            });
            test("I've just got bits and bobs in my bum bag:", () => {
                assert.equal(translate.british_to_american("I've just got bits and bobs in my bum bag"), 'I\'ve just got bits and bobs in my bum bag');
            });
            test('The car boot sale at Boxted Airfield was called off:', () => {
                assert.equal(translate.british_to_american('The car boot sale at Boxted Airfield was called off'), 'The car boot sale at Boxted Airfield was called off');
            });
            test('Have you met Mrs Kalyani?:', () => {
                assert.equal(translate.british_to_american('Have you met Mrs Kalyani'), 'Have you met <span class="highlight">Mrs.</span> Kalyani');
            });
            test("Prof Joyner of King's College, London:", () => {
                assert.equal(translate.british_to_american("Prof Joyner of King's College, London"), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London");
            });
            test('Tea time is usually around 4 or 4.30:', () => {
                assert.equal(translate.british_to_american('Tea time is usually around 4 or 4.30'), 'Tea time is usually around 4 or <span class="highlight">4:30</span>');
            });
        });
        
        suite('Highlight translations', () => {
            test('Highlight translation in Mangoes are my favorite fruit:', () => {
                assert.equal(translate.american_to_british('Mangoes are my favorite fruit'), 'Mangoes are my <span class="highlight">favourite</span> fruit');
            });
            test('Highlight translation in I ate yogurt for breakfast:', () => {
                assert.equal(translate.american_to_british('I ate yogurt for breakfast'), 'I ate <span class="highlight">yoghurt</span> for breakfast');
            });
            test('Highlight translation in We watched the footie match for a while:', () => {
                assert.equal(translate.british_to_american('We watched the footie match for a while'), 'We watched the <span class="highlight">soccer</span> match for a while');
            });
            test('Highlight translation in Paracetamol takes up to an hour to work:', () => {
                assert.equal(translate.british_to_american('Paracetamol takes up to an hour to work'), '<span class="highlight">Tylenol</span> takes up to an hour to work');
            });
        });
    })
});
