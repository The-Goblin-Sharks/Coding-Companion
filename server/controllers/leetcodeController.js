const leetcodeController = {};

leetcodeController.getUpdatedStats = async (req, res, next) => {  
	const leetcodeUsername = res.locals.currentUser.leetcodeusername;
	const myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');
	myHeaders.append('Cookie', 'csrftoken=m06z48k77gKdOaf1jS0M0CuOJcDM5A0uhAqVyCYMsHc0Muoit2NpNF3KgmaVLpn7');
  
	const graphql = JSON.stringify({
		query: `{ \n    matchedUser(username: "${leetcodeUsername}") \n    {\n        username\n        profile {\n           ranking \n        }\n        submitStats: submitStatsGlobal \n        {\n            acSubmissionNum \n            {\n                difficulty\n                count\n                submissions\n            }\n        }\n    }\n}`,
		variables: {}
	});
	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: graphql,
		redirect: 'follow'
	};
	try {
		const response = await fetch('https://leetcode.com/graphql\n\n', requestOptions);
		const data = await response.json();
		res.locals.currentStats = data.data.matchedUser.submitStats.acSubmissionNum;
		return next();
	} catch (err) {
		return next(err);
	}
};

module.exports = leetcodeController;