'use strict';

/* Settings file for Application */

module.exports = {
	environment : 'local',
	db : {
		hostname : 'ds025429.mlab.com:25429',
		name : 'icici-appathon',
		username : 'balasubramani29',
		password : 'Vespa123.',
		replicaSet: '',
		connectionTimeout : 4000
	},
	port: 4500
};

// module.exports = {
// 	environment : 'local',
// 	db : {
// 		hostname : 'localhost',
// 		name : 'icici-appathon',
// 		username : '',
// 		password : '',
// 		replicaSet: '',
// 		connectionTimeout : 4000
// 	},
// 	port: 4500
// };