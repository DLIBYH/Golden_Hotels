const newman = require('newman');

newman.run({
    collection: require('./golden-hotels.postman_collection.json'),
    reporters: ['cli', 'htmlextra'],
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html'
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }

    console.log('Collection run complete!');
});