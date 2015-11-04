module.exports = function(app) {

	var jsonArr = require('../jobSites.json');
	var sevArr = require('../severity.json');
	var statArr = require('../status.json');
	var tradeArr = require('../trade.json');

	var JobSites = app.models.JobSites;
	var Severity = app.models.Severity;
	var Status = app.models.Status;
	var Trade = app.models.Trade;

	JobSites.destroyAll();
	Severity.destroyAll();
	Status.destroyAll();
	Trade.destroyAll();

	jsonArr.forEach(function(JobSitesDict){
		JobSites.create(JobSitesDict, function(err, record) {
			if (err) return console.log(err);
		});
	});
    sevArr.forEach(function(SeverityDict){
        Severity.create(SeverityDict, function(err, record) {
            if (err) return console.log(err);
        });
    });
    statArr.forEach(function(StatusDict){
        Status.create(StatusDict, function(err, record) {
            if (err) return console.log(err);
        });
    });
    tradeArr.forEach(function(TradeDict){
        Trade.create(TradeDict, function(err, record) {
            if (err) return console.log(err);
        });
    });
	console.log("Models inserted successfully");
};
