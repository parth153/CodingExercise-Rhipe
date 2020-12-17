const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: 'reports/cucumber',
    reportPath: 'reports/cucumber',
    metadata:{
        browser: {
            name: 'chrome'
        },
        device: 'Local Machine',
        platform: {
            name: 'windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Coding Exercise – Test Automation Analyst'},
            {label: 'Release', value: '1.0.0'}
        ]
    }
});