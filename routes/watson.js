var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
var tone_analyzer = new ToneAnalyzerV3({
    username: '{a32ea9d2-b998-443b-87b7-6aef61ba95d3}',
    password: '{A2gBtjiGnf0A}',
    version_date: '{2017-09-21}'
});

tone_analyzer.tone({ text: 'Greetings from Watson Developer Cloud!' },
    function(err, tone) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(tone, null, 2));
    });