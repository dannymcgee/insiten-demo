import { Status } from './status.model';

const companies = [
{
	name: 'Laborum Specialties',
	url: 'laborum.co',
	description: 'Adipisicing commodo ex sunt magna. Proident fugiat fugiat culpa magna. Nostrud ullamco ex cillum pariatur sit '
		+ 'occaecat amet aliqua commodo. Sint tempor id exercitation commodo enim do excepteur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Breitenstein'
			},
			position: 'Vice President',
			phone: '(846) 108-1677',
			email: 'jbreitenstein@laborum.co'
		},
		{
			name: {
				first: 'Lashonda',
				last: 'Legendre'
			},
			position: 'President',
			phone: '(638) 027-5852',
			email: 'llegendre@laborum.co'
		},
		{
			name: {
				first: 'Bradford',
				last: 'Hains'
			},
			position: 'CFO',
			phone: '(463) 785-8553',
			email: 'bhains@laborum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 17130482,
				debt: 14555460,
				revenue: 17440695,
				ebitda: 4360174
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 6914151,
				debt: 4418512,
				revenue: 5723720,
				ebitda: 1430930
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2727609,
				debt: 8150886,
				revenue: 8262575,
				ebitda: 2148269
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Ullamco Creative',
	url: 'ullamco.co',
	description: 'Elit pariatur qui excepteur qui pariatur magna dolore est. Duis do enim aliqua laborum. Ullamco pariatur voluptate '
		+ 'ipsum cillum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Phylis',
				last: 'Moyle'
			},
			position: 'Vice President',
			phone: '(783) 862-7327',
			email: 'pmoyle@ullamco.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1000131,
				debt: 1333168,
				revenue: 1873329,
				ebitda: 468332
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1518951,
				debt: 2248420,
				revenue: 302965,
				ebitda: 75741
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1199548,
				debt: 3849649,
				revenue: 48496,
				ebitda: 12124
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Minim Tech',
	url: 'minim.org',
	description: 'Anim officia quis nostrud elit ea. Reprehenderit reprehenderit incididunt aliquip incididunt Lorem tempor magna.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lela',
				last: 'Evens'
			},
			position: 'CEO',
			phone: '(371) 369-1783',
			email: 'levens@minim.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 132450,
				debt: 143321,
				revenue: 148141,
				ebitda: 37035
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 49040,
				debt: 165508,
				revenue: 118708,
				ebitda: 29677
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 94661,
				debt: 16078,
				revenue: 179911,
				ebitda: 66567
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Nostrud Services',
	url: 'nostrud.org',
	description: 'Do sunt quis do eu. Consectetur commodo pariatur duis Lorem. Exercitation deserunt ea non nulla Lorem labore irure '
		+ 'sit. Mollit velit anim adipisicing ullamco.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Zahl'
			},
			position: 'CEO',
			phone: '(450) 273-2344',
			email: 'mzahl@nostrud.org'
		},
		{
			name: {
				first: 'Nohemi',
				last: 'Hains'
			},
			position: 'President',
			phone: '(680) 924-5670',
			email: 'nhains@nostrud.org'
		},
		{
			name: {
				first: 'Osvaldo',
				last: 'Dutra'
			},
			position: 'CFO',
			phone: '(218) 716-7783',
			email: 'odutra@nostrud.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18209768,
				debt: 16033081,
				revenue: 14732427,
				ebitda: 3683107,
				mc: 11853360
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 10466925,
				debt: 10361897,
				revenue: 16027674,
				ebitda: 4006918,
				mc: 13891040
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 20328302,
				debt: 11988844,
				revenue: 24587379,
				ebitda: 6146845,
				mc: 5434190
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Esse Fugiat Brands',
	url: 'essefugiat.com',
	description: 'Pariatur magna consectetur deserunt laborum. Dolore dolor consectetur officia non eiusmod voluptate. Ex ullamco '
		+ 'ullamco nostrud irure.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ileen',
				last: 'Keala'
			},
			position: 'Vice President',
			phone: '(936) 744-7133',
			email: 'ikeala@essefugiat.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 125553,
				debt: 136472,
				revenue: 180955,
				ebitda: 66953
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 11962,
				debt: 232214,
				revenue: 262576,
				ebitda: 78773
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 19452,
				debt: 317680,
				revenue: 378162,
				ebitda: 94541
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Aliquip Creative',
	url: 'aliquip.net',
	description: 'Non sit do cillum enim. Deserunt id amet sunt incididunt magna. Reprehenderit excepteur mollit in quis aliquip ut '
		+ 'Lorem veniam. Enim et culpa minim dolore sint est irure adipisicing.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Valarie',
				last: 'Alegria'
			},
			position: 'CFO',
			phone: '(185) 652-9003',
			email: 'valegria@aliquip.net'
		},
		{
			name: {
				first: 'Julieann',
				last: 'Puig'
			},
			position: 'Vice President',
			phone: '(804) 075-1758',
			email: 'jpuig@aliquip.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1498052,
				debt: 1863351,
				revenue: 1270253,
				ebitda: 317563,
				mc: 1987875
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2122792,
				debt: 770279,
				revenue: 1736649,
				ebitda: 434162,
				mc: 947642
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1498360,
				debt: 1314568,
				revenue: 1162197,
				ebitda: 290549,
				mc: 18988
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Magna Adipisicing Ventures',
	url: 'magnaadipisicing.com',
	description: 'Sint ea irure mollit velit. Officia ea exercitation consequat ad. Reprehenderit irure Lorem id quis occaecat eu ut '
		+ 'occaecat ea. Laborum minim cupidatat exercitation laboris.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Deeann',
				last: 'Lantz'
			},
			position: 'President',
			phone: '(585) 490-1231',
			email: 'dlantz@magnaadipisicing.com'
		},
		{
			name: {
				first: 'Yoshiko',
				last: 'Alegria'
			},
			position: 'CEO',
			phone: '(419) 686-0925',
			email: 'yalegria@magnaadipisicing.com'
		},
		{
			name: {
				first: 'Barbera',
				last: 'Andrea'
			},
			position: 'Vice President',
			phone: '(067) 503-8422',
			email: 'bandrea@magnaadipisicing.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 110905,
				debt: 155835,
				revenue: 171024,
				ebitda: 42756,
				mc: 110068
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 32954,
				debt: 115321,
				revenue: 307636,
				ebitda: 76909,
				mc: 33982
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 44814,
				debt: 103922,
				revenue: 390057,
				ebitda: 97514,
				mc: 32469
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Magna Services',
	url: 'magna.org',
	description: 'Ut elit ut mollit Lorem mollit ea fugiat. Sunt cupidatat eiusmod adipisicing exercitation. In est id non mollit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Lariviere'
			},
			position: 'President',
			phone: '(195) 520-1250',
			email: 'llariviere@magna.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 119268,
				debt: 101342,
				revenue: 171498,
				ebitda: 42875,
				mc: 166617
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 7358,
				debt: 95063,
				revenue: 144811,
				ebitda: 36203,
				mc: 329793
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 10956,
				debt: 140824,
				revenue: 158304,
				ebitda: 39576,
				mc: 166666
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Cupidatat Dynamics',
	url: 'cupidatat.co',
	description: 'Id sit mollit sint Lorem Lorem. Nisi laborum tempor dolore eu.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Kandis',
				last: 'Parkhill'
			},
			position: 'Vice President',
			phone: '(110) 187-4506',
			email: 'kparkhill@cupidatat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1548902,
				debt: 1323942,
				revenue: 1868994,
				ebitda: 467248
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1505954,
				debt: 2501767,
				revenue: 211918,
				ebitda: 55099
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1481823,
				debt: 2835580,
				revenue: 342454,
				ebitda: 85614
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Sint Nulla Inc.',
	url: 'sintnulla.co',
	description: 'Esse veniam mollit culpa proident. Laboris irure velit Lorem eu dolore. Commodo deserunt est est eu sint '
		+ 'cupidatat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Hellen'
			},
			position: 'CFO',
			phone: '(711) 385-9889',
			email: 'shellen@sintnulla.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1407848,
				debt: 1764308,
				revenue: 1506800,
				ebitda: 376700,
				mc: 1351911
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1331849,
				debt: 1288062,
				revenue: 539924,
				ebitda: 151179,
				mc: 616838
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 870594,
				debt: 1406362,
				revenue: 773606,
				ebitda: 193402,
				mc: 1037417
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Velit Digital',
	url: 'velit.net',
	description: 'Non tempor excepteur est ullamco. Ad elit nostrud esse in. Nulla reprehenderit laboris Lorem aliquip nostrud '
		+ 'eiusmod velit in ut.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Earle',
				last: 'Kinard'
			},
			position: 'Vice President',
			phone: '(248) 125-5468',
			email: 'ekinard@velit.net'
		},
		{
			name: {
				first: 'Kandis',
				last: 'Ellett'
			},
			position: 'CFO',
			phone: '(024) 880-9753',
			email: 'kellett@velit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1757172,
				debt: 1958864,
				revenue: 1444238,
				ebitda: 361059
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 117640,
				debt: 2638191,
				revenue: 968809,
				ebitda: 242202
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 124431,
				debt: 3788065,
				revenue: 590825,
				ebitda: 224513
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Consequat Holdings',
	url: 'consequat.co',
	description: 'In nisi laborum ea excepteur. Incididunt sit aute minim consectetur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Woodie'
			},
			position: 'President',
			phone: '(431) 732-2264',
			email: 'cwoodie@consequat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1517549,
				debt: 1361821,
				revenue: 1632824,
				ebitda: 408206
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2953808,
				debt: 209260,
				revenue: 2779513,
				ebitda: 1056215
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 4422434,
				debt: 368185,
				revenue: 3211683,
				ebitda: 802921
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Cupidatat Aliquip Development',
	url: 'cupidatataliquip.com',
	description: 'Nostrud sunt mollit laborum ipsum. Cillum ea minim eiusmod incididunt minim.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Bradford',
				last: 'Ellett'
			},
			position: 'President',
			phone: '(751) 112-7517',
			email: 'bellett@cupidatataliquip.com'
		},
		{
			name: {
				first: 'Marlo',
				last: 'Alegria'
			},
			position: 'Vice President',
			phone: '(050) 248-4540',
			email: 'malegria@cupidatataliquip.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 197195,
				debt: 147392,
				revenue: 106877,
				ebitda: 26719,
				mc: 139084
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 273624,
				debt: 117147,
				revenue: 194370,
				ebitda: 48592,
				mc: 232056
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 53463,
				debt: 196209,
				revenue: 108632,
				ebitda: 27158,
				mc: 18456
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Consequat Group',
	url: 'consequat.co',
	description: 'Laboris officia sit esse quis. Mollit sit ullamco aliqua sint. Laborum cupidatat est ea dolor. Eu exercitation '
		+ 'veniam ullamco ea ex consequat magna.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Andrea'
			},
			position: 'CFO',
			phone: '(424) 484-2249',
			email: 'mandrea@consequat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 172039,
				debt: 178140,
				revenue: 181451,
				ebitda: 45363
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 281750,
				debt: 260190,
				revenue: 62666,
				ebitda: 15667
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 500130,
				debt: 255473,
				revenue: 104587,
				ebitda: 26147
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Labore Enterprises',
	url: 'labore.co',
	description: 'Sint ipsum mollit est consectetur. Cillum qui exercitation occaecat dolor.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Anderton'
			},
			position: 'Vice President',
			phone: '(285) 621-5599',
			email: 'landerton@labore.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1992515,
				debt: 1224183,
				revenue: 1190971,
				ebitda: 297743,
				mc: 1577188
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 677897,
				debt: 790343,
				revenue: 1286911,
				ebitda: 321728,
				mc: 1196069
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1330207,
				debt: 416808,
				revenue: 839828,
				ebitda: 209957,
				mc: 2247625
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Cupidatat et Holdings',
	url: 'cupidatatet.net',
	description: 'Laboris occaecat irure anim ipsum. Ex deserunt nisi voluptate sit. Sunt sit commodo consectetur ut. Commodo culpa '
		+ 'ipsum mollit aliquip.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Julieann',
				last: 'Hains'
			},
			position: 'CEO',
			phone: '(279) 493-7865',
			email: 'jhains@cupidatatet.net'
		},
		{
			name: {
				first: 'Lelah',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(571) 371-0005',
			email: 'lzahl@cupidatatet.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1125158,
				debt: 1484422,
				revenue: 1424307,
				ebitda: 356077,
				mc: 1283012
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2249873,
				debt: 2150009,
				revenue: 1682861,
				ebitda: 437544,
				mc: 1335123
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 4025006,
				debt: 3837440,
				revenue: 2405122,
				ebitda: 889895,
				mc: 2508474
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Nulla Sint Unlimited',
	url: 'nullasint.co',
	description: 'Labore magna ut aliquip ea do elit. Sunt adipisicing laborum pariatur pariatur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Yoshiko',
				last: 'Andrea'
			},
			position: 'CFO',
			phone: '(405) 453-8847',
			email: 'yandrea@nullasint.co'
		},
		{
			name: {
				first: 'Diego',
				last: 'Client'
			},
			position: 'Vice President',
			phone: '(934) 808-6818',
			email: 'dclient@nullasint.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 198278,
				debt: 151373,
				revenue: 199795,
				ebitda: 69928
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 204358,
				debt: 175299,
				revenue: 165428,
				ebitda: 41357
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 383865,
				debt: 71946,
				revenue: 316608,
				ebitda: 79152
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Occaecat Group',
	url: 'occaecat.net',
	description: 'Magna enim Lorem velit duis elit. In dolore anim do irure.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Kelli',
				last: 'Morgan'
			},
			position: 'Vice President',
			phone: '(347) 822-8839',
			email: 'kmorgan@occaecat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 162438,
				debt: 167834,
				revenue: 131601,
				ebitda: 32900,
				mc: 188281
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 172956,
				debt: 49725,
				revenue: 137407,
				ebitda: 34352,
				mc: 151200
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 140826,
				debt: 70515,
				revenue: 67652,
				ebitda: 16913,
				mc: 152959
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Esse Aliquip Works',
	url: 'essealiquip.co',
	description: 'Officia consectetur labore veniam dolor. Eiusmod est dolor anim ea aliqua.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Cancel'
			},
			position: 'CEO',
			phone: '(232) 514-2136',
			email: 'jcancel@essealiquip.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1299633,
				debt: 1152558,
				revenue: 1875901,
				ebitda: 468975
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 796056,
				debt: 1963226,
				revenue: 3060869,
				ebitda: 765217
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 444111,
				debt: 3005103,
				revenue: 2487089,
				ebitda: 621772
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Labore Enterprises',
	url: 'labore.org',
	description: 'Irure enim deserunt esse voluptate. Veniam aute ipsum incididunt deserunt dolore eu dolor elit aute.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Bradford',
				last: 'Moyle'
			},
			position: 'CFO',
			phone: '(175) 210-0616',
			email: 'bmoyle@labore.org'
		},
		{
			name: {
				first: 'Malisa',
				last: 'Nagata'
			},
			position: 'President',
			phone: '(838) 561-6087',
			email: 'mnagata@labore.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 167889,
				debt: 153152,
				revenue: 160439,
				ebitda: 40110,
				mc: 184306
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 35552,
				debt: 186495,
				revenue: 247157,
				ebitda: 61789,
				mc: 353640
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 52674,
				debt: 266404,
				revenue: 34904,
				ebitda: 9773,
				mc: 294147
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Culpa Unlimited',
	url: 'culpa.com',
	description: 'Reprehenderit aliquip culpa et amet. Ea culpa et cupidatat velit sint commodo anim quis. Do velit commodo pariatur '
		+ 'esse irure reprehenderit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Koppes'
			},
			position: 'President',
			phone: '(813) 266-8106',
			email: 'lkoppes@culpa.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1075394,
				debt: 1203977,
				revenue: 1364577,
				ebitda: 395727,
				mc: 1283088
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1609870,
				debt: 391584,
				revenue: 1774918,
				ebitda: 585723,
				mc: 797998
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1696163,
				debt: 432780,
				revenue: 2593772,
				ebitda: 648443,
				mc: 1418496
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Fugiat Digital',
	url: 'fugiat.net',
	description: 'Ea dolor et dolore eu. Sint consequat officia magna aute non laborum veniam tempor ipsum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Mirian',
				last: 'Bergevin'
			},
			position: 'Vice President',
			phone: '(532) 194-1669',
			email: 'mbergevin@fugiat.net'
		},
		{
			name: {
				first: 'Bradford',
				last: 'Ellett'
			},
			position: 'President',
			phone: '(163) 765-3155',
			email: 'bellett@fugiat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 125255,
				debt: 127964,
				revenue: 136045,
				ebitda: 34011
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 108147,
				debt: 104814,
				revenue: 191295,
				ebitda: 47824
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 163968,
				debt: 99201,
				revenue: 108616,
				ebitda: 27154
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Dolore Productions',
	url: 'dolore.co',
	description: 'Enim amet non laborum officia ex commodo. Sunt labore aute aliquip occaecat anim cupidatat consectetur incididunt. '
		+ 'Est non Lorem irure eu.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Towle'
			},
			position: 'President',
			phone: '(123) 852-3844',
			email: 'stowle@dolore.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1768301,
				debt: 1874617,
				revenue: 1542608,
				ebitda: 385652,
				mc: 1994992
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2162176,
				debt: 800226,
				revenue: 2541758,
				ebitda: 787945,
				mc: 404459
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1684588,
				debt: 206462,
				revenue: 531715,
				ebitda: 191417,
				mc: 336520
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Culpa Officia Specialties',
	url: 'culpaofficia.org',
	description: 'Reprehenderit ex ut anim in. Non aliqua id qui deserunt ut. Sit eu sunt Lorem adipisicing. Do fugiat et eiusmod '
		+ 'magna.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Tamie',
				last: 'Legendre'
			},
			position: 'CFO',
			phone: '(807) 703-2357',
			email: 'tlegendre@culpaofficia.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1056240,
				debt: 1146984,
				revenue: 1341189,
				ebitda: 496240
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1475647,
				debt: 983041,
				revenue: 1089723,
				ebitda: 424992
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2941476,
				debt: 1810763,
				revenue: 2014421,
				ebitda: 785624
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Aliquip Enterprises',
	url: 'aliquip.net',
	description: 'Minim adipisicing nisi laboris reprehenderit consectetur do labore pariatur duis. Dolore fugiat consectetur Lorem '
		+ 'veniam laboris veniam ut.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Leona',
				last: 'Hellen'
			},
			position: 'CFO',
			phone: '(288) 118-8473',
			email: 'lhellen@aliquip.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1213950,
				debt: 1383974,
				revenue: 1351882,
				ebitda: 337971,
				mc: 1841295
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 281313,
				debt: 1793952,
				revenue: 1267687,
				ebitda: 354952,
				mc: 192497
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 502080,
				debt: 3166621,
				revenue: 2049671,
				ebitda: 676391,
				mc: 253298
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Eiusmod Logistics',
	url: 'eiusmod.org',
	description: 'Amet ad eu et adipisicing. Laborum tempor ut minim cupidatat ad.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Valarie',
				last: 'Morgan'
			},
			position: 'Vice President',
			phone: '(461) 241-0185',
			email: 'vmorgan@eiusmod.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 191851,
				debt: 171547,
				revenue: 130180,
				ebitda: 48167
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 177877,
				debt: 196385,
				revenue: 105293,
				ebitda: 26323
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 68940,
				debt: 388758,
				revenue: 35104,
				ebitda: 8776
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Ullamco Scientific',
	url: 'ullamco.org',
	description: 'Fugiat nulla enim dolore mollit do exercitation tempor. Ullamco id incididunt quis reprehenderit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sebrina',
				last: 'Parkhill'
			},
			position: 'CEO',
			phone: '(473) 042-7702',
			email: 'sparkhill@ullamco.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1172447,
				debt: 1433851,
				revenue: 1839172,
				ebitda: 606927
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 684957,
				debt: 1269185,
				revenue: 2309065,
				ebitda: 785082
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 445536,
				debt: 2058203,
				revenue: 2585225,
				ebitda: 878976
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Exercitation Limited',
	url: 'exercitation.net',
	description: 'Eiusmod nisi elit occaecat aliqua. Mollit officia qui do commodo. Anim excepteur cillum consectetur aute velit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Morgan'
			},
			position: 'CEO',
			phone: '(137) 933-5825',
			email: 'bmorgan@exercitation.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1533122,
				debt: 1152248,
				revenue: 1479060,
				ebitda: 369765,
				mc: 1614703
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1632902,
				debt: 1846709,
				revenue: 2266427,
				ebitda: 566607,
				mc: 2645009
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 978299,
				debt: 1422463,
				revenue: 42152,
				ebitda: 15596,
				mc: 618624
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Magna Brands',
	url: 'magna.net',
	description: 'Elit enim commodo in mollit. Cillum consequat proident consequat do. Ut non eiusmod irure dolore veniam nostrud '
		+ 'pariatur anim nulla.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Moyle'
			},
			position: 'CFO',
			phone: '(343) 233-1968',
			email: 'smoyle@magna.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1039575,
				debt: 1534099,
				revenue: 1096272,
				ebitda: 274068
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 22693,
				debt: 2014405,
				revenue: 1186496,
				ebitda: 296624
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 32476,
				debt: 866402,
				revenue: 2065514,
				ebitda: 516379
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Occaecat & Co.',
	url: 'occaecat.net',
	description: 'Exercitation consectetur Lorem excepteur consequat. Deserunt enim dolore dolore dolore. Elit magna in in '
		+ 'exercitation esse.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Elia',
				last: 'Alegria'
			},
			position: 'CEO',
			phone: '(903) 499-8496',
			email: 'ealegria@occaecat.net'
		},
		{
			name: {
				first: 'Diego',
				last: 'Nagata'
			},
			position: 'President',
			phone: '(957) 162-4824',
			email: 'dnagata@occaecat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 107268,
				debt: 121229,
				revenue: 130072,
				ebitda: 39022
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 177596,
				debt: 125826,
				revenue: 216898,
				ebitda: 65069
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 15852,
				debt: 135607,
				revenue: 164465,
				ebitda: 41116
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Minim qui Dynamics',
	url: 'minimqui.net',
	description: 'Amet consequat velit anim dolor consectetur. Ut ipsum aliqua occaecat nulla.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Cancel'
			},
			position: 'CFO',
			phone: '(864) 976-7934',
			email: 'lcancel@minimqui.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1395048,
				debt: 1207201,
				revenue: 1670970,
				ebitda: 417743,
				mc: 1869099
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2724238,
				debt: 1145494,
				revenue: 1760973,
				ebitda: 440243,
				mc: 18357
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 4208426,
				debt: 271630,
				revenue: 731463,
				ebitda: 182866,
				mc: 22146
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Elit Irure Unlimited',
	url: 'elitirure.co',
	description: 'Esse proident mollit nisi ex dolor sint minim. Aute qui ipsum aliquip nostrud. Nisi magna ipsum sint sint '
		+ 'cupidatat laborum exercitation. Eu incididunt et sint sit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Earle',
				last: 'Demoura'
			},
			position: 'Vice President',
			phone: '(722) 573-2338',
			email: 'edemoura@elitirure.co'
		},
		{
			name: {
				first: 'Wilber',
				last: 'Towle'
			},
			position: 'CEO',
			phone: '(186) 851-6028',
			email: 'wtowle@elitirure.co'
		},
		{
			name: {
				first: 'Bradford',
				last: 'Morgan'
			},
			position: 'CFO',
			phone: '(793) 603-4153',
			email: 'bmorgan@elitirure.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 192614,
				debt: 157946,
				revenue: 148559,
				ebitda: 37140
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 185115,
				debt: 236442,
				revenue: 9184,
				ebitda: 2296
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 60936,
				debt: 175562,
				revenue: 9672,
				ebitda: 2515
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Officia & Co.',
	url: 'officia.net',
	description: 'Cillum laboris deserunt veniam est. Dolor aute est mollit amet incididunt elit proident veniam. Labore culpa '
		+ 'cillum proident Lorem.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Hector',
				last: 'Jeffords'
			},
			position: 'President',
			phone: '(404) 348-4479',
			email: 'hjeffords@officia.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 145255,
				debt: 132855,
				revenue: 111332,
				ebitda: 41193
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 282715,
				debt: 237579,
				revenue: 168761,
				ebitda: 42190
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 20858,
				debt: 51752,
				revenue: 16057,
				ebitda: 4817
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Tempor eu Development',
	url: 'temporeu.net',
	description: 'Voluptate nulla pariatur minim dolor. Labore laboris deserunt deserunt eu id.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Alegria'
			},
			position: 'President',
			phone: '(788) 262-6248',
			email: 'lalegria@temporeu.net'
		},
		{
			name: {
				first: 'Bridgett',
				last: 'Lantz'
			},
			position: 'Vice President',
			phone: '(229) 489-5311',
			email: 'blantz@temporeu.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 189771,
				debt: 141072,
				revenue: 154692,
				ebitda: 38673
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 280788,
				debt: 154124,
				revenue: 99011,
				ebitda: 26733
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 418900,
				debt: 156669,
				revenue: 192553,
				ebitda: 48138
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Culpa Properties',
	url: 'culpa.net',
	description: 'Sit minim velit occaecat sunt. Nisi in esse est incididunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Giard'
			},
			position: 'Vice President',
			phone: '(549) 141-6883',
			email: 'sgiard@culpa.net'
		},
		{
			name: {
				first: 'Fleta',
				last: 'Lariviere'
			},
			position: 'President',
			phone: '(332) 605-6921',
			email: 'flariviere@culpa.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 152529,
				debt: 114164,
				revenue: 166860,
				ebitda: 41715
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 271921,
				debt: 164748,
				revenue: 114498,
				ebitda: 28625
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 511052,
				debt: 266037,
				revenue: 152684,
				ebitda: 48859
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Pariatur Innovations',
	url: 'pariatur.com',
	description: 'Culpa cillum non eiusmod tempor. Adipisicing irure officia sunt do.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Nagata'
			},
			position: 'CFO',
			phone: '(368) 132-1710',
			email: 'snagata@pariatur.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 10624918,
				debt: 14169173,
				revenue: 11312711,
				ebitda: 3959449,
				mc: 15879597
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 5973412,
				debt: 24296462,
				revenue: 9640741,
				ebitda: 2892222,
				mc: 29163861
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 10467716,
				debt: 9702872,
				revenue: 17266280,
				ebitda: 4316570,
				mc: 19648544
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Consectetur Labs',
	url: 'consectetur.co',
	description: 'Lorem eu ex mollit in. Aliquip magna aliqua nostrud consectetur labore ea sit. Exercitation eu quis esse eu. Id '
		+ 'culpa culpa consequat sit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Veola',
				last: 'Morgan'
			},
			position: 'Vice President',
			phone: '(492) 756-8624',
			email: 'vmorgan@consectetur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 19426467,
				debt: 19930025,
				revenue: 19808602,
				ebitda: 4952151
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1184874,
				debt: 33310236,
				revenue: 1939578,
				ebitda: 698248
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 655214,
				debt: 53347372,
				revenue: 922373,
				ebitda: 230593
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Cupidatat Inc.',
	url: 'cupidatat.co',
	description: 'Est voluptate ipsum occaecat ullamco. Nisi mollit in aliquip velit ut culpa.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Leona',
				last: 'Keala'
			},
			position: 'President',
			phone: '(476) 652-7872',
			email: 'lkeala@cupidatat.co'
		},
		{
			name: {
				first: 'Phylis',
				last: 'Keala'
			},
			position: 'Vice President',
			phone: '(383) 380-2748',
			email: 'pkeala@cupidatat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 136672,
				debt: 191752,
				revenue: 120919,
				ebitda: 30230,
				mc: 125528
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 12283,
				debt: 278307,
				revenue: 205690,
				ebitda: 51423,
				mc: 20452
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3278,
				debt: 196885,
				revenue: 325303,
				ebitda: 81326,
				mc: 15913
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Proident Group',
	url: 'proident.net',
	description: 'Aliqua veniam quis sit reprehenderit id labore enim sunt occaecat. Officia labore occaecat officia esse et '
		+ 'exercitation minim.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Bergevin'
			},
			position: 'President',
			phone: '(276) 574-2013',
			email: 'mbergevin@proident.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 155211,
				debt: 180016,
				revenue: 170053,
				ebitda: 49315,
				mc: 140741
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 172203,
				debt: 113096,
				revenue: 292293,
				ebitda: 90611,
				mc: 67566
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 293340,
				debt: 105792,
				revenue: 212006,
				ebitda: 53002,
				mc: 47120
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Mollit Brands',
	url: 'mollit.co',
	description: 'Officia labore incididunt consequat commodo commodo et. Ut deserunt aliquip aliqua ut.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Antony',
				last: 'Morgan'
			},
			position: 'President',
			phone: '(475) 247-7669',
			email: 'amorgan@mollit.co'
		},
		{
			name: {
				first: 'Deeann',
				last: 'Kee'
			},
			position: 'Vice President',
			phone: '(582) 434-4147',
			email: 'dkee@mollit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 122782,
				debt: 103194,
				revenue: 116218,
				ebitda: 29055,
				mc: 175527
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 103648,
				debt: 72287,
				revenue: 76251,
				ebitda: 19063,
				mc: 348456
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 28886,
				debt: 50314,
				revenue: 30655,
				ebitda: 7664,
				mc: 62269
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Consequat Tech',
	url: 'consequat.net',
	description: 'Esse sunt labore fugiat aliqua. Occaecat non magna deserunt officia id sunt sit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Mccallister'
			},
			position: 'President',
			phone: '(984) 382-1655',
			email: 'umccallister@consequat.net'
		},
		{
			name: {
				first: 'Kandis',
				last: 'Lariviere'
			},
			position: 'Vice President',
			phone: '(879) 594-1566',
			email: 'klariviere@consequat.net'
		},
		{
			name: {
				first: 'Ute',
				last: 'Pridgeon'
			},
			position: 'CEO',
			phone: '(648) 144-4831',
			email: 'upridgeon@consequat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1621387,
				debt: 1072735,
				revenue: 1582182,
				ebitda: 395546
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2654425,
				debt: 889551,
				revenue: 346710,
				ebitda: 86677
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1520527,
				debt: 88472,
				revenue: 513705,
				ebitda: 159249
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Lorem Innovations',
	url: 'lorem.co',
	description: 'Laborum adipisicing pariatur voluptate nulla. Enim occaecat ex labore consectetur reprehenderit proident magna '
		+ 'cillum. Excepteur laboris laboris culpa excepteur cillum ad ex nulla.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Morgan'
			},
			position: 'CFO',
			phone: '(113) 144-8765',
			email: 'fmorgan@lorem.co'
		},
		{
			name: {
				first: 'Ileen',
				last: 'Hunte'
			},
			position: 'CEO',
			phone: '(645) 260-2164',
			email: 'ihunte@lorem.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 153307,
				debt: 137343,
				revenue: 147796,
				ebitda: 36949
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 9299,
				debt: 265619,
				revenue: 212372,
				ebitda: 53093
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1161,
				debt: 219853,
				revenue: 52020,
				ebitda: 13005
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Eiusmod Limited',
	url: 'eiusmod.net',
	description: 'Duis qui sit cupidatat dolore aliqua incididunt. Ipsum laborum et culpa consectetur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Dutra'
			},
			position: 'CFO',
			phone: '(172) 501-0838',
			email: 'udutra@eiusmod.net'
		},
		{
			name: {
				first: 'Jin',
				last: 'Nagata'
			},
			position: 'CEO',
			phone: '(218) 259-6268',
			email: 'jnagata@eiusmod.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1730222,
				debt: 1662343,
				revenue: 1972976,
				ebitda: 493244
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 3233509,
				debt: 2538600,
				revenue: 2557951,
				ebitda: 767385
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2456012,
				debt: 2054066,
				revenue: 676044,
				ebitda: 263657
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Consequat Innovations',
	url: 'consequat.net',
	description: 'Dolore sunt enim magna qui. Voluptate laboris nisi Lorem consequat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Valarie',
				last: 'Legendre'
			},
			position: 'President',
			phone: '(811) 161-8454',
			email: 'vlegendre@consequat.net'
		},
		{
			name: {
				first: 'Sebrina',
				last: 'Evens'
			},
			position: 'CFO',
			phone: '(407) 174-8559',
			email: 'sevens@consequat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1240494,
				debt: 1048972,
				revenue: 1119765,
				ebitda: 279941
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2185650,
				debt: 1178458,
				revenue: 889233,
				ebitda: 275662
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1080530,
				debt: 1466590,
				revenue: 36903,
				ebitda: 11440
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Adipisicing Unlimited',
	url: 'adipisicing.com',
	description: 'Elit consectetur mollit enim laboris laborum duis enim sunt reprehenderit. Quis aliqua ex eiusmod quis pariatur '
		+ 'nostrud deserunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Conte'
			},
			position: 'CEO',
			phone: '(671) 613-2454',
			email: 'sconte@adipisicing.com'
		},
		{
			name: {
				first: 'Nicole',
				last: 'Dutra'
			},
			position: 'President',
			phone: '(361) 573-4446',
			email: 'ndutra@adipisicing.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1796113,
				debt: 1089149,
				revenue: 1866835,
				ebitda: 466709
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2609788,
				debt: 1028934,
				revenue: 3119296,
				ebitda: 873403
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2854824,
				debt: 1602485,
				revenue: 1884652,
				ebitda: 471163
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Eiusmod Magna Creative',
	url: 'eiusmodmagna.org',
	description: 'Commodo fugiat fugiat id esse. Ad ea sunt irure labore.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Deeann',
				last: 'Hunte'
			},
			position: 'President',
			phone: '(743) 327-6369',
			email: 'dhunte@eiusmodmagna.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 152202,
				debt: 179136,
				revenue: 106971,
				ebitda: 27813
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 254136,
				debt: 294063,
				revenue: 150393,
				ebitda: 37598
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 507314,
				debt: 362512,
				revenue: 231782,
				ebitda: 57945
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Excepteur & Co.',
	url: 'excepteur.co',
	description: 'Laboris aliqua do id ipsum enim elit proident proident dolore. Excepteur tempor eu qui ullamco exercitation '
		+ 'adipisicing Lorem enim. Voluptate in ex culpa ea. Ullamco labore esse Lorem duis adipisicing.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Demoura'
			},
			position: 'President',
			phone: '(848) 848-5148',
			email: 'sdemoura@excepteur.co'
		},
		{
			name: {
				first: 'Leona',
				last: 'Breitenstein'
			},
			position: 'CFO',
			phone: '(436) 887-2272',
			email: 'lbreitenstein@excepteur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 124881,
				debt: 164876,
				revenue: 128459,
				ebitda: 47530,
				mc: 148699
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 46312,
				debt: 26473,
				revenue: 61751,
				ebitda: 15438,
				mc: 50822
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 86628,
				debt: 17084,
				revenue: 52297,
				ebitda: 14643,
				mc: 48138
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Dolore Holdings',
	url: 'dolore.com',
	description: 'Ad duis mollit do qui. Elit consequat magna elit dolor. Ut ex occaecat duis eiusmod ipsum commodo.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fidelia',
				last: 'Demoura'
			},
			position: 'Vice President',
			phone: '(447) 731-5432',
			email: 'fdemoura@dolore.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1506483,
				debt: 1011397,
				revenue: 1603946,
				ebitda: 400986
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2202461,
				debt: 854083,
				revenue: 717896,
				ebitda: 179474
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 39269,
				debt: 961503,
				revenue: 584268,
				ebitda: 216179
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Laboris Tech',
	url: 'laboris.com',
	description: 'Proident tempor quis est esse dolore nulla laboris aliqua. Irure deserunt cillum quis enim.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Tobie',
				last: 'Ellett'
			},
			position: 'Vice President',
			phone: '(501) 648-5360',
			email: 'tellett@laboris.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 177836,
				debt: 138412,
				revenue: 180079,
				ebitda: 45020
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 235729,
				debt: 114515,
				revenue: 316288,
				ebitda: 79072
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 235180,
				debt: 91183,
				revenue: 488118,
				ebitda: 122029
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Excepteur Ventures',
	url: 'excepteur.net',
	description: 'Aliquip enim ipsum elit elit dolor mollit fugiat in. Excepteur elit minim cillum nisi exercitation dolor tempor.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Nagata'
			},
			position: 'CEO',
			phone: '(721) 684-3423',
			email: 'snagata@excepteur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1061565,
				debt: 1139835,
				revenue: 1217461,
				ebitda: 304365
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1409908,
				debt: 2029208,
				revenue: 979456,
				ebitda: 244864
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 948617,
				debt: 351991,
				revenue: 33377,
				ebitda: 13017
			}
		}
	],
	status: Status.Pending
},
];

export default companies;
