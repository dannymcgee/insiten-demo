// tslint:disable

const companies = [
{
	name: 'Excepteur Cillum & Co.',
	url: 'excepteurcillum&.co',
	description: 'Deserunt aute consequat non nostrud. Exercitation ut sit velit nisi pariatur nisi nostrud id mollit. Amet et anim sunt do. Velit officia laboris id ullamco.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Bradford',
				last: 'Jeffords'
			},
			position: 'CEO',
			phone: '(517) 973-4445',
			email: 'bjeffords@excepteurcillum&.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 112076,
				debt: 191567,
				revenue: 104682,
				mc: 146646,
				ebitda: 28264
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 189571,
				debt: 106732,
				revenue: 202781,
				mc: 285526,
				ebitda: 54751
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 225652,
				debt: 197861,
				revenue: 395743,
				mc: 221215,
				ebitda: 102893
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Velit Industries',
	url: 'velit.net',
	description: 'Culpa consectetur ullamco pariatur qui ipsum eu. Ea consequat ad quis magna est labore elit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lela',
				last: 'Mccallister'
			},
			position: 'President',
			phone: '(224) 020-9734',
			email: 'lmccallister@velit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 182592,
				debt: 132636,
				revenue: 172367,
				mc: 143712,
				ebitda: 43092
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 315181,
				debt: 29661,
				revenue: 166464,
				mc: 274883,
				ebitda: 44945
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 303584,
				debt: 42797,
				revenue: 178583,
				mc: 195069,
				ebitda: 44646
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Irure Nostrud Development',
	url: 'irurenostrud.org',
	description: 'Cupidatat ea nostrud sint irure aliquip tempor labore laboris aliquip. Est proident esse aute consequat. Cupidatat fugiat enim in ullamco.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Osvaldo',
				last: 'Ruckman'
			},
			position: 'Vice President',
			phone: '(266) 077-4844',
			email: 'oruckman@irurenostrud.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1689063,
				debt: 1600818,
				revenue: 1553825,
				ebitda: 512762
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 463153,
				debt: 1842741,
				revenue: 3035221,
				ebitda: 849862
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 449424,
				debt: 261863,
				revenue: 2052747,
				ebitda: 513187
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Reprehenderit LLC',
	url: 'reprehenderit.net',
	description: 'Sint enim fugiat sint aliqua aliquip sint pariatur. Est et sint mollit sint id ullamco labore culpa.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Koppes'
			},
			position: 'CFO',
			phone: '(173) 241-4713',
			email: 'ekoppes@reprehenderit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 153433,
				debt: 111250,
				revenue: 163566,
				ebitda: 40891
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 179534,
				debt: 147133,
				revenue: 228101,
				ebitda: 57025
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 248273,
				debt: 125905,
				revenue: 121375,
				ebitda: 30344
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Adipisicing Systems',
	url: 'adipisicing.co',
	description: 'Sit sint aliqua ad anim. Adipisicing elit officia nulla ex consequat minim in tempor. Et ullamco ullamco proident tempor aliquip fugiat aliquip.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lashonda',
				last: 'Mercado'
			},
			position: 'CEO',
			phone: '(543) 036-2148',
			email: 'lmercado@adipisicing.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1766405,
				debt: 1378487,
				revenue: 1103137,
				ebitda: 275784
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2149920,
				debt: 2683828,
				revenue: 807029,
				ebitda: 201757
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2934946,
				debt: 1441004,
				revenue: 228197,
				ebitda: 63895
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Anim sit Enterprises',
	url: 'animsit.co',
	description: 'Tempor eiusmod commodo veniam aliqua. Cillum deserunt quis id reprehenderit consectetur officia.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Nannie',
				last: 'Castagna'
			},
			position: 'CEO',
			phone: '(471) 619-1221',
			email: 'ncastagna@animsit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1850468,
				debt: 1963545,
				revenue: 1951084,
				ebitda: 487771
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2763813,
				debt: 418009,
				revenue: 2933665,
				ebitda: 733416
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 5264197,
				debt: 37565,
				revenue: 407924,
				ebitda: 101981
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Culpa Aute Systems',
	url: 'culpaaute.net',
	description: 'Ut nostrud pariatur sunt elit. Est incididunt irure enim reprehenderit voluptate. Et amet duis amet et fugiat in laborum cupidatat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Seabury'
			},
			position: 'President',
			phone: '(411) 889-7372',
			email: 'eseabury@culpaaute.net'
		},
		{
			name: {
				first: 'Valarie',
				last: 'Nagata'
			},
			position: 'Vice President',
			phone: '(856) 664-3799',
			email: 'vnagata@culpaaute.net'
		},
		{
			name: {
				first: 'Lorri',
				last: 'Dutra'
			},
			position: 'CEO',
			phone: '(981) 271-0337',
			email: 'ldutra@culpaaute.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1202439,
				debt: 1328865,
				revenue: 1388765,
				ebitda: 430517
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1835238,
				debt: 2045030,
				revenue: 1487362,
				ebitda: 431335
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 412782,
				debt: 3848818,
				revenue: 2813926,
				ebitda: 703481
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Eu Mollit Scientific',
	url: 'eumollit.co',
	description: 'In aliqua reprehenderit cillum exercitation ullamco non. Incididunt tempor tempor ea officia.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Keala'
			},
			position: 'Vice President',
			phone: '(243) 417-2715',
			email: 'ekeala@eumollit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 102250,
				debt: 130593,
				revenue: 173038,
				ebitda: 43260
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 172821,
				debt: 106077,
				revenue: 9585,
				ebitda: 2684
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 96799,
				debt: 64819,
				revenue: 14344,
				ebitda: 3586
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Adipisicing Books',
	url: 'adipisicing.co',
	description: 'Veniam aliquip laboris minim ea. Irure deserunt consectetur tempor et. Laboris adipisicing sunt commodo voluptate.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Julieann',
				last: 'Koppes'
			},
			position: 'CEO',
			phone: '(248) 553-5517',
			email: 'jkoppes@adipisicing.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 10848486,
				debt: 16012173,
				revenue: 13082523,
				ebitda: 3270631
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1886426,
				debt: 18963067,
				revenue: 1624476,
				ebitda: 617301
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2136571,
				debt: 11411699,
				revenue: 2294412,
				ebitda: 573603
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Ullamco Online',
	url: 'ullamco.net',
	description: 'Amet Lorem Lorem sunt eu. Aliquip laborum do dolore sint. Aliquip voluptate ipsum magna elit proident ipsum. Qui commodo minim officia amet ea nulla.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Mccallister'
			},
			position: 'CFO',
			phone: '(172) 156-7479',
			email: 'lmccallister@ullamco.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1199914,
				debt: 1442760,
				revenue: 1497143,
				ebitda: 374286
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1076566,
				debt: 106574,
				revenue: 1271207,
				ebitda: 330514
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1306903,
				debt: 46730,
				revenue: 1992064,
				ebitda: 498016
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Culpa Specialties',
	url: 'culpa.org',
	description: 'Eu sit incididunt aliqua elit. Esse veniam amet in minim. Mollit voluptate dolor nostrud laborum nostrud. Exercitation ipsum aute cupidatat ut.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Nicole',
				last: 'Lariviere'
			},
			position: 'Vice President',
			phone: '(773) 588-5430',
			email: 'nlariviere@culpa.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 157824,
				debt: 156412,
				revenue: 121118,
				ebitda: 42391
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 96019,
				debt: 193421,
				revenue: 95628,
				ebitda: 27732
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 90727,
				debt: 139664,
				revenue: 172629,
				ebitda: 43157
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Irure Logistics',
	url: 'irure.com',
	description: 'Proident eu esse ea adipisicing eiusmod occaecat. Sunt cupidatat pariatur Lorem non.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Puig'
			},
			position: 'CEO',
			phone: '(406) 877-4664',
			email: 'bpuig@irure.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 104859,
				debt: 120302,
				revenue: 122678,
				ebitda: 38030
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 73041,
				debt: 207665,
				revenue: 45294,
				ebitda: 11323
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 117328,
				debt: 18569,
				revenue: 43678,
				ebitda: 14414
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Eiusmod Creative',
	url: 'eiusmod.net',
	description: 'Incididunt Lorem quis nisi sit. Enim est elit anim exercitation.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Jin',
				last: 'Demoura'
			},
			position: 'Vice President',
			phone: '(608) 630-5719',
			email: 'jdemoura@eiusmod.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 185978,
				debt: 121410,
				revenue: 174742,
				ebitda: 43686
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 15087,
				debt: 35763,
				revenue: 24198,
				ebitda: 6050
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 22548,
				debt: 1282,
				revenue: 3427,
				ebitda: 857
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Commodo LLC',
	url: 'commodo.org',
	description: 'Irure ut et cupidatat incididunt. Do sunt veniam ex laboris. Consectetur voluptate deserunt sint aliqua consequat laboris.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Castagna'
			},
			position: 'CEO',
			phone: '(345) 682-8943',
			email: 'bcastagna@commodo.org'
		},
		{
			name: {
				first: 'Nannie',
				last: 'Moyle'
			},
			position: 'President',
			phone: '(858) 387-5596',
			email: 'nmoyle@commodo.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 115377,
				debt: 187720,
				revenue: 138923,
				ebitda: 34731
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 97707,
				debt: 243022,
				revenue: 173331,
				ebitda: 43333
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 43873,
				debt: 309377,
				revenue: 104037,
				ebitda: 30171
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Mollit Group',
	url: 'mollit.com',
	description: 'In enim adipisicing excepteur quis. Enim fugiat sint labore est pariatur minim eu. Cupidatat cupidatat officia dolor voluptate laboris.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(178) 425-9433',
			email: 'emercado@mollit.com'
		},
		{
			name: {
				first: 'Milagro',
				last: 'Mccallister'
			},
			position: 'President',
			phone: '(694) 171-6500',
			email: 'mmccallister@mollit.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 179014,
				debt: 186022,
				revenue: 108479,
				mc: 193791,
				ebitda: 27120
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 337717,
				debt: 311374,
				revenue: 98104,
				mc: 135566,
				ebitda: 24526
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 171935,
				debt: 562286,
				revenue: 133530,
				mc: 37222,
				ebitda: 40059
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Consectetur Group',
	url: 'consectetur.net',
	description: 'Voluptate Lorem ad non voluptate ullamco exercitation adipisicing eu. Est do ea tempor proident.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Mccallister'
			},
			position: 'President',
			phone: '(243) 733-1851',
			email: 'cmccallister@consectetur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 17615358,
				debt: 14389000,
				revenue: 19881875,
				ebitda: 4970469
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 13122240,
				debt: 26783985,
				revenue: 1042921,
				ebitda: 260730
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1959342,
				debt: 27775433,
				revenue: 827474,
				ebitda: 206869
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Magna Collective',
	url: 'magna.co',
	description: 'Aliqua incididunt occaecat nisi commodo. Sit reprehenderit laborum reprehenderit veniam reprehenderit esse.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Nagata'
			},
			position: 'Vice President',
			phone: '(355) 263-3263',
			email: 'bnagata@magna.co'
		},
		{
			name: {
				first: 'Nannie',
				last: 'Kinard'
			},
			position: 'CFO',
			phone: '(387) 235-4566',
			email: 'nkinard@magna.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 16038657,
				debt: 13610487,
				revenue: 12757860,
				ebitda: 4337672
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 30230184,
				debt: 661442,
				revenue: 14159152,
				ebitda: 4530929
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 29913145,
				debt: 1299823,
				revenue: 20941197,
				ebitda: 5235299
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Aliqua Collective',
	url: 'aliqua.com',
	description: 'Amet ut nulla qui dolore consectetur amet fugiat. Ut enim ullamco duis et sit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Kelli',
				last: 'Nagata'
			},
			position: 'CEO',
			phone: '(128) 236-1765',
			email: 'knagata@aliqua.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 193873,
				debt: 159132,
				revenue: 158253,
				mc: 160208,
				ebitda: 39563
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 8167,
				debt: 119729,
				revenue: 106184,
				mc: 224572,
				ebitda: 26546
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 6975,
				debt: 109902,
				revenue: 136935,
				mc: 240278,
				ebitda: 34234
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Et Exercitation Tech',
	url: 'etexercitation.org',
	description: 'Incididunt culpa qui nulla tempor. Sit do occaecat velit sit. Et Lorem duis incididunt cillum deserunt et proident sint. Lorem qui ut minim Lorem occaecat magna ex ipsum.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Osvaldo',
				last: 'Blea'
			},
			position: 'CEO',
			phone: '(126) 163-6312',
			email: 'oblea@etexercitation.org'
		},
		{
			name: {
				first: 'Hector',
				last: 'Parkhill'
			},
			position: 'Vice President',
			phone: '(113) 795-0587',
			email: 'hparkhill@etexercitation.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 149281,
				debt: 159112,
				revenue: 128461,
				mc: 180730,
				ebitda: 44961
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 101135,
				debt: 215402,
				revenue: 158044,
				mc: 220856,
				ebitda: 39511
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 46358,
				debt: 405208,
				revenue: 85249,
				mc: 392471,
				ebitda: 30690
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Laborum Elit Foods',
	url: 'laborumelit.com',
	description: 'Ullamco aliqua qui aliqua quis. Reprehenderit id nulla laborum eu. Magna id magna ullamco in.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Nannie',
				last: 'Hains'
			},
			position: 'President',
			phone: '(140) 561-6776',
			email: 'nhains@laborumelit.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 126778,
				debt: 113516,
				revenue: 136584,
				mc: 120418,
				ebitda: 34146
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 134249,
				debt: 51124,
				revenue: 175294,
				mc: 92814,
				ebitda: 43824
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 83868,
				debt: 100888,
				revenue: 83669,
				mc: 152415,
				ebitda: 20917
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Exercitation Solutions',
	url: 'exercitation.com',
	description: 'Cupidatat cillum anim in aliquip laboris enim. Velit excepteur est adipisicing non enim ipsum. Aliqua Lorem cillum fugiat ut ad.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Jin',
				last: 'Dutra'
			},
			position: 'CFO',
			phone: '(981) 586-8876',
			email: 'jdutra@exercitation.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 135919,
				debt: 181211,
				revenue: 173507,
				mc: 140977,
				ebitda: 50317
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 209095,
				debt: 224214,
				revenue: 332203,
				mc: 121363,
				ebitda: 102983
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 141175,
				debt: 250191,
				revenue: 456777,
				mc: 230962,
				ebitda: 114194
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Dolore Dolore Systems',
	url: 'doloredolore.co',
	description: 'Fugiat eiusmod eiusmod occaecat fugiat. Ullamco cillum sit occaecat non qui sit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Tamie',
				last: 'Puig'
			},
			position: 'Vice President',
			phone: '(220) 534-7293',
			email: 'tpuig@doloredolore.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 117777,
				debt: 128771,
				revenue: 186730,
				ebitda: 52284
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 57152,
				debt: 187506,
				revenue: 138365,
				ebitda: 49812
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 11875,
				debt: 324110,
				revenue: 1573,
				ebitda: 393
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Commodo Digital',
	url: 'commodo.net',
	description: 'Id est ipsum nulla sit qui. Et in tempor magna voluptate.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Seabury'
			},
			position: 'Vice President',
			phone: '(298) 863-3576',
			email: 'sseabury@commodo.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 124717,
				debt: 187545,
				revenue: 108130,
				ebitda: 29195
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 75752,
				debt: 5510,
				revenue: 10194,
				ebitda: 3058
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 114344,
				debt: 6333,
				revenue: 928,
				ebitda: 232
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Voluptate Tempor Direct',
	url: 'voluptatetempor.org',
	description: 'Eu quis consequat cillum qui consectetur tempor ullamco. Cupidatat laborum ad excepteur consectetur cillum.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Nicole',
				last: 'Ellett'
			},
			position: 'CFO',
			phone: '(116) 336-3018',
			email: 'nellett@voluptatetempor.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 12976845,
				debt: 19799050,
				revenue: 17981508,
				mc: 18763723,
				ebitda: 4495377
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 13763644,
				debt: 28436893,
				revenue: 8471999,
				mc: 989132,
				ebitda: 2118000
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 10647300,
				debt: 12534988,
				revenue: 4572844,
				mc: 461474,
				ebitda: 1143211
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Laboris Digital',
	url: 'laboris.org',
	description: 'Labore reprehenderit laborum proident sit cillum irure aute. Sint enim voluptate laborum non.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Elia',
				last: 'Conte'
			},
			position: 'Vice President',
			phone: '(981) 015-8556',
			email: 'econte@laboris.org'
		},
		{
			name: {
				first: 'Bradford',
				last: 'Anderton'
			},
			position: 'CFO',
			phone: '(206) 212-7402',
			email: 'banderton@laboris.org'
		},
		{
			name: {
				first: 'Earle',
				last: 'Leland'
			},
			position: 'CEO',
			phone: '(153) 633-2663',
			email: 'eleland@laboris.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 130168,
				debt: 175164,
				revenue: 112387,
				ebitda: 28097
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 185429,
				debt: 101189,
				revenue: 199251,
				ebitda: 69738
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 117829,
				debt: 2394,
				revenue: 258234,
				ebitda: 64558
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Lorem Industrial',
	url: 'lorem.net',
	description: 'Culpa mollit quis cupidatat ullamco aliqua. Proident minim et consequat sit ea.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Deeann',
				last: 'Kee'
			},
			position: 'President',
			phone: '(223) 757-6091',
			email: 'dkee@lorem.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 119128,
				debt: 183134,
				revenue: 122513,
				ebitda: 30628
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 136982,
				debt: 335617,
				revenue: 79916,
				ebitda: 19979
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 123941,
				debt: 360753,
				revenue: 52014,
				ebitda: 20285
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Dolor Solutions',
	url: 'dolor.org',
	description: 'Incididunt ea aliqua adipisicing duis ipsum eiusmod deserunt labore. Pariatur est adipisicing sint magna. Non velit aliquip aute sit labore et anim ipsum consequat. Occaecat elit minim dolor incididunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Nohemi',
				last: 'Puig'
			},
			position: 'Vice President',
			phone: '(221) 718-5214',
			email: 'npuig@dolor.org'
		},
		{
			name: {
				first: 'Deeann',
				last: 'Nagata'
			},
			position: 'CEO',
			phone: '(988) 369-5450',
			email: 'dnagata@dolor.org'
		},
		{
			name: {
				first: 'Deeann',
				last: 'Koppes'
			},
			position: 'President',
			phone: '(012) 381-2269',
			email: 'dkoppes@dolor.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 165712,
				debt: 136191,
				revenue: 170174,
				ebitda: 42543
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 329854,
				debt: 111335,
				revenue: 96459,
				ebitda: 26044
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 483235,
				debt: 88401,
				revenue: 116222,
				ebitda: 37191
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Aliquip Enterprises',
	url: 'aliquip.co',
	description: 'Veniam magna anim labore ex excepteur enim sit pariatur. Laborum pariatur est aute laborum duis.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Jin',
				last: 'Alegria'
			},
			position: 'Vice President',
			phone: '(701) 751-8178',
			email: 'jalegria@aliquip.co'
		},
		{
			name: {
				first: 'Earle',
				last: 'Wilker'
			},
			position: 'CFO',
			phone: '(358) 722-1439',
			email: 'ewilker@aliquip.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1096760,
				debt: 1132878,
				revenue: 1881540,
				ebitda: 470385
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1564110,
				debt: 1432695,
				revenue: 935360,
				ebitda: 233840
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2006193,
				debt: 1109925,
				revenue: 938124,
				ebitda: 234531
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Labore Limited',
	url: 'labore.co',
	description: 'Nostrud nostrud tempor laboris laborum cupidatat sunt. Aliqua duis cupidatat enim commodo.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Hou'
			},
			position: 'President',
			phone: '(984) 838-9135',
			email: 'uhou@labore.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1875592,
				debt: 1216604,
				revenue: 1099582,
				ebitda: 274895
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1584282,
				debt: 1642275,
				revenue: 709668,
				ebitda: 177417
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2761352,
				debt: 976834,
				revenue: 1286166,
				ebitda: 321541
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Tempor Properties',
	url: 'tempor.net',
	description: 'Do culpa officia cillum ipsum veniam cupidatat velit ullamco nulla. Ea velit magna excepteur ex.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Oma',
				last: 'Hou'
			},
			position: 'Vice President',
			phone: '(277) 656-1857',
			email: 'ohou@tempor.net'
		},
		{
			name: {
				first: 'Leona',
				last: 'Andrea'
			},
			position: 'CEO',
			phone: '(239) 742-3347',
			email: 'landrea@tempor.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1633953,
				debt: 1785632,
				revenue: 1937372,
				mc: 1374984,
				ebitda: 736201
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2730361,
				debt: 2256099,
				revenue: 1166214,
				mc: 2104141,
				ebitda: 326540
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3754798,
				debt: 663278,
				revenue: 2276142,
				mc: 2060705,
				ebitda: 910457
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Ullamco Books',
	url: 'ullamco.co',
	description: 'Ipsum sit tempor ea velit. Aute culpa magna in velit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Sones'
			},
			position: 'President',
			phone: '(356) 751-3640',
			email: 'jsones@ullamco.co'
		},
		{
			name: {
				first: 'Imelda',
				last: 'Ellett'
			},
			position: 'CFO',
			phone: '(435) 786-1534',
			email: 'iellett@ullamco.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 186368,
				debt: 165016,
				revenue: 101225,
				mc: 182329,
				ebitda: 25306
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 348777,
				debt: 63727,
				revenue: 159110,
				mc: 260361,
				ebitda: 49324
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 447677,
				debt: 82116,
				revenue: 258274,
				mc: 175852,
				ebitda: 67151
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Consectetur LLC',
	url: 'consectetur.net',
	description: 'Ipsum ea reprehenderit ex ad. Duis nulla ex veniam dolore.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Jeffords'
			},
			position: 'Vice President',
			phone: '(543) 742-3922',
			email: 'ajeffords@consectetur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1096320,
				debt: 1872274,
				revenue: 1992490,
				mc: 1440188,
				ebitda: 498122
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2043845,
				debt: 188852,
				revenue: 3508869,
				mc: 1714656,
				ebitda: 877217
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 601729,
				debt: 236317,
				revenue: 3931390,
				mc: 555677,
				ebitda: 1218731
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Minim Development',
	url: 'minim.net',
	description: 'Officia eu nulla consequat dolore. Laborum consequat irure ut consequat do. Enim ipsum sint aute dolor nostrud deserunt veniam qui adipisicing. Mollit exercitation veniam officia non velit commodo aliqua.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Deeann',
				last: 'Jeffords'
			},
			position: 'Vice President',
			phone: '(608) 534-1384',
			email: 'djeffords@minim.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1227885,
				debt: 1733807,
				revenue: 1155215,
				ebitda: 381221
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1301882,
				debt: 3034076,
				revenue: 1950413,
				ebitda: 702149
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 634554,
				debt: 4512900,
				revenue: 2084955,
				ebitda: 521239
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Proident Development',
	url: 'proident.net',
	description: 'Cupidatat nulla elit ut Lorem. Non et minim fugiat laboris cupidatat commodo occaecat cupidatat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Giard'
			},
			position: 'CFO',
			phone: '(156) 042-4053',
			email: 'sgiard@proident.net'
		},
		{
			name: {
				first: 'Oma',
				last: 'Kennard'
			},
			position: 'Vice President',
			phone: '(622) 575-8620',
			email: 'okennard@proident.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1878429,
				debt: 1066939,
				revenue: 1071755,
				mc: 1088389,
				ebitda: 396549
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2388172,
				debt: 1768399,
				revenue: 1231407,
				mc: 1604055,
				ebitda: 418678
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1812150,
				debt: 1336749,
				revenue: 709996,
				mc: 1947418,
				ebitda: 177499
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Mollit Books',
	url: 'mollit.org',
	description: 'Deserunt ut fugiat sit quis. Nisi minim dolor do excepteur.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Rudman'
			},
			position: 'President',
			phone: '(537) 119-2551',
			email: 'drudman@mollit.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18009023,
				debt: 11071459,
				revenue: 18329992,
				mc: 16389003,
				ebitda: 4582498
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 18686522,
				debt: 5567404,
				revenue: 6761834,
				mc: 14675558,
				ebitda: 1690459
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 327052,
				debt: 3626293,
				revenue: 9931398,
				mc: 17768514,
				ebitda: 3773931
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Consectetur Books',
	url: 'consectetur.co',
	description: 'Irure labore et culpa sint id eiusmod ea velit. Incididunt reprehenderit laboris pariatur ullamco quis ut.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Sones'
			},
			position: 'CFO',
			phone: '(851) 331-4731',
			email: 'ssones@consectetur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 17264375,
				debt: 11883873,
				revenue: 11627182,
				mc: 10492323,
				ebitda: 2906795
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 28461185,
				debt: 14799319,
				revenue: 10193754,
				mc: 2412846,
				ebitda: 2548438
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 44493293,
				debt: 27480589,
				revenue: 3313918,
				mc: 3068581,
				ebitda: 828480
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Irure Voluptate Inc.',
	url: 'irurevoluptate.org',
	description: 'Aute laborum elit adipisicing id. Veniam eu cillum veniam aliquip fugiat excepteur. Duis velit deserunt reprehenderit commodo. Nisi ex dolore et duis sit Lorem ullamco incididunt esse.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Cancel'
			},
			position: 'President',
			phone: '(682) 962-5891',
			email: 'lcancel@irurevoluptate.org'
		},
		{
			name: {
				first: 'Lorri',
				last: 'Giard'
			},
			position: 'Vice President',
			phone: '(891) 533-3526',
			email: 'lgiard@irurevoluptate.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 158084,
				debt: 187195,
				revenue: 114029,
				mc: 162956,
				ebitda: 28507
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 58892,
				debt: 128233,
				revenue: 67332,
				mc: 137416,
				ebitda: 16833
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 334,
				debt: 231082,
				revenue: 63204,
				mc: 147123,
				ebitda: 15801
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Ut Nulla Labs',
	url: 'utnulla.org',
	description: 'Exercitation anim nisi quis quis. Eu consequat cillum dolore ex labore consequat sit irure ea.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Koppes'
			},
			position: 'Vice President',
			phone: '(672) 719-2443',
			email: 'akoppes@utnulla.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 137483,
				debt: 143112,
				revenue: 141235,
				ebitda: 49432
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 252900,
				debt: 51760,
				revenue: 195685,
				ebitda: 64576
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 202364,
				debt: 70189,
				revenue: 62800,
				ebitda: 18212
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Irure Development',
	url: 'irure.net',
	description: 'Commodo nostrud adipisicing consequat cillum ipsum ex nisi. Esse sunt consectetur ullamco ex incididunt mollit esse.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Nagata'
			},
			position: 'President',
			phone: '(266) 215-8075',
			email: 'lnagata@irure.net'
		},
		{
			name: {
				first: 'Deeann',
				last: 'Andrea'
			},
			position: 'CEO',
			phone: '(562) 351-2172',
			email: 'dandrea@irure.net'
		},
		{
			name: {
				first: 'Barbera',
				last: 'Leland'
			},
			position: 'CFO',
			phone: '(555) 023-8260',
			email: 'bleland@irure.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 136585,
				debt: 177229,
				revenue: 139422,
				ebitda: 34856
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 270789,
				debt: 236756,
				revenue: 278388,
				ebitda: 69597
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 303500,
				debt: 51384,
				revenue: 382046,
				ebitda: 95511
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Irure Industrial',
	url: 'irure.net',
	description: 'Eu irure et commodo eu consequat. Adipisicing enim non nulla aute esse nostrud magna. Voluptate incididunt ullamco dolore ipsum. Tempor sunt cillum ullamco consequat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Evens'
			},
			position: 'Vice President',
			phone: '(188) 265-3511',
			email: 'sevens@irure.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1422009,
				debt: 1502115,
				revenue: 1448516,
				ebitda: 362129
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 52802,
				debt: 1055385,
				revenue: 482964,
				ebitda: 120741
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 70633,
				debt: 1935017,
				revenue: 101050,
				ebitda: 25263
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Ullamco Industrial',
	url: 'ullamco.org',
	description: 'Nostrud ea enim velit mollit. Veniam labore esse anim culpa commodo non.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Kinard'
			},
			position: 'President',
			phone: '(647) 160-9738',
			email: 'lkinard@ullamco.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 180335,
				debt: 169349,
				revenue: 192581,
				mc: 130723,
				ebitda: 48145
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 294753,
				debt: 163139,
				revenue: 76380,
				mc: 107476,
				ebitda: 19095
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 533964,
				debt: 195791,
				revenue: 135928,
				mc: 122610,
				ebitda: 33982
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Cupidatat Works',
	url: 'cupidatat.net',
	description: 'Tempor enim dolor commodo non. Consectetur anim reprehenderit cillum quis.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Phylis',
				last: 'Alegria'
			},
			position: 'President',
			phone: '(111) 374-4518',
			email: 'palegria@cupidatat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 12467353,
				debt: 14292126,
				revenue: 19119041,
				mc: 11055978,
				ebitda: 4779760
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 6475509,
				debt: 21504504,
				revenue: 26515811,
				mc: 12061649,
				ebitda: 10076008
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 12677971,
				debt: 36369157,
				revenue: 34531037,
				mc: 2738643,
				ebitda: 8632759
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Dolor Partners',
	url: 'dolor.net',
	description: 'Veniam ad ad exercitation sit. Excepteur consectetur ex quis eiusmod. Eu officia esse enim sunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Perron'
			},
			position: 'President',
			phone: '(555) 821-6582',
			email: 'dperron@dolor.net'
		},
		{
			name: {
				first: 'Stefani',
				last: 'Evens'
			},
			position: 'Vice President',
			phone: '(316) 973-7958',
			email: 'sevens@dolor.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1008073,
				debt: 1012565,
				revenue: 1531438,
				ebitda: 382859
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1602710,
				debt: 173079,
				revenue: 192439,
				ebitda: 67354
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 57072,
				debt: 76556,
				revenue: 117867,
				ebitda: 29467
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Ut Proident Consulting',
	url: 'utproident.com',
	description: 'Sit velit labore dolor eu. Duis cupidatat sunt aute et. Sunt officia dolor labore laborum minim.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Kandis',
				last: 'Mercado'
			},
			position: 'President',
			phone: '(734) 341-5722',
			email: 'kmercado@utproident.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 16413581,
				debt: 10904417,
				revenue: 12106765,
				ebitda: 3026691
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 21474716,
				debt: 1730959,
				revenue: 5790956,
				ebitda: 2026835
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 31543324,
				debt: 106253,
				revenue: 201062,
				ebitda: 50266
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Exercitation Limited',
	url: 'exercitation.co',
	description: 'Aliqua qui sit do qui et tempor magna. Elit reprehenderit labore sit do. Ea occaecat elit proident laboris excepteur veniam duis exercitation.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Milagro',
				last: 'Legendre'
			},
			position: 'CFO',
			phone: '(229) 507-1468',
			email: 'mlegendre@exercitation.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1490421,
				debt: 1243417,
				revenue: 1485044,
				ebitda: 371261
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 275905,
				debt: 947692,
				revenue: 2490463,
				ebitda: 622616
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 131583,
				debt: 16137,
				revenue: 4963429,
				ebitda: 1240857
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Pariatur Scientific',
	url: 'pariatur.co',
	description: 'Irure mollit incididunt anim exercitation. Deserunt cupidatat sint adipisicing officia.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Cancel'
			},
			position: 'CEO',
			phone: '(249) 801-6681',
			email: 'fcancel@pariatur.co'
		},
		{
			name: {
				first: 'Veola',
				last: 'Tallarico'
			},
			position: 'President',
			phone: '(175) 662-0726',
			email: 'vtallarico@pariatur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 10592238,
				debt: 10427599,
				revenue: 16814396,
				mc: 19266920,
				ebitda: 4203599
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 8525362,
				debt: 1370501,
				revenue: 4937899,
				mc: 1899444,
				ebitda: 1234475
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 13928616,
				debt: 1341462,
				revenue: 8639637,
				mc: 1538966,
				ebitda: 2159909
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Incididunt Consulting',
	url: 'incididunt.co',
	description: 'Dolor veniam occaecat dolore sunt do aliqua et aliquip. Laboris consequat velit eu commodo. Reprehenderit eu aute cupidatat esse fugiat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Ellett'
			},
			position: 'CEO',
			phone: '(786) 475-5238',
			email: 'jellett@incididunt.co'
		},
		{
			name: {
				first: 'Brady',
				last: 'Andrea'
			},
			position: 'President',
			phone: '(155) 266-5654',
			email: 'bandrea@incididunt.co'
		},
		{
			name: {
				first: 'Wilber',
				last: 'Pridgeon'
			},
			position: 'CFO',
			phone: '(106) 224-2466',
			email: 'wpridgeon@incididunt.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 157226,
				debt: 106233,
				revenue: 155226,
				mc: 156736,
				ebitda: 41911
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 53779,
				debt: 106355,
				revenue: 250709,
				mc: 255825,
				ebitda: 62677
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 78722,
				debt: 58635,
				revenue: 450974,
				mc: 79643,
				ebitda: 117253
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Mollit Properties',
	url: 'mollit.com',
	description: 'Est duis aliqua nisi ut. Aliqua dolore tempor incididunt officia cupidatat ut nisi. Lorem id ad irure proident qui labore pariatur magna.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Tamie',
				last: 'Pridgeon'
			},
			position: 'President',
			phone: '(836) 165-7748',
			email: 'tpridgeon@mollit.com'
		},
		{
			name: {
				first: 'Suzi',
				last: 'Hou'
			},
			position: 'Vice President',
			phone: '(273) 897-2868',
			email: 'shou@mollit.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1162057,
				debt: 1624614,
				revenue: 1704071,
				mc: 1371093,
				ebitda: 647547
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 598266,
				debt: 961080,
				revenue: 3289723,
				mc: 2489909,
				ebitda: 822431
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 454587,
				debt: 1345553,
				revenue: 4743188,
				mc: 3074161,
				ebitda: 1185797
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Nostrud Limited',
	url: 'nostrud.org',
	description: 'Proident enim aliquip veniam dolor ipsum velit reprehenderit adipisicing ullamco. Consectetur ex nostrud ad sint. Reprehenderit reprehenderit adipisicing fugiat occaecat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Dutra'
			},
			position: 'Vice President',
			phone: '(134) 362-3406',
			email: 'udutra@nostrud.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 168886,
				debt: 116415,
				revenue: 194853,
				ebitda: 50662
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2604,
				debt: 231945,
				revenue: 214704,
				ebitda: 72999
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 4354,
				debt: 294629,
				revenue: 350006,
				ebitda: 87502
			}
		}
	],
	status: 'Researching'
},
{
	name: 'Veniam Foods',
	url: 'veniam.org',
	description: 'Id laboris et et officia velit proident do Lorem ullamco. Reprehenderit incididunt est ullamco anim.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Brady',
				last: 'Koppes'
			},
			position: 'CEO',
			phone: '(731) 904-9161',
			email: 'bkoppes@veniam.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1526402,
				debt: 1908303,
				revenue: 1205603,
				ebitda: 301401
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2297208,
				debt: 3596688,
				revenue: 2215658,
				ebitda: 753324
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1570724,
				debt: 4416610,
				revenue: 1951391,
				ebitda: 487848
			}
		}
	],
	status: 'Researching'
},
];

export default companies;
