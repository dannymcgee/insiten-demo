import { Status } from './status.model';

const companies = [
{
	name: 'Non Laborum Properties',
	url: 'nonlaborum.co',
	description: 'Nostrud duis occaecat ipsum adipisicing ut consectetur pariatur. Et aliqua in voluptate exercitation. Ut amet '
		+ 'ipsum sint nisi. Ut consectetur laboris et qui nisi ipsum cillum.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Nagata'
			},
			position: 'Vice President',
			phone: '(303) 133-4386',
			email: 'mnagata@nonlaborum.co'
		},
		{
			name: {
				first: 'Suzi',
				last: 'Conte'
			},
			position: 'President',
			phone: '(652) 226-3345',
			email: 'sconte@nonlaborum.co'
		},
		{
			name: {
				first: 'Deeann',
				last: 'Koppes'
			},
			position: 'CEO',
			phone: '(178) 571-2554',
			email: 'dkoppes@nonlaborum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 120931,
				debt: 193691,
				revenue: 171871,
				mc: 116725,
				ebitda: 42968
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 93056,
				debt: 237128,
				revenue: 218221,
				mc: 145266,
				ebitda: 54555
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3872,
				debt: 197293,
				revenue: 275793,
				mc: 55701,
				ebitda: 68948
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Ipsum Limited',
	url: 'ipsum.co',
	description: 'Non non exercitation pariatur et cupidatat. Qui pariatur exercitation esse deserunt. Nisi in laborum ex in.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Yoshiko',
				last: 'Keala'
			},
			position: 'Vice President',
			phone: '(873) 186-4768',
			email: 'ykeala@ipsum.co'
		},
		{
			name: {
				first: 'Kelli',
				last: 'Pridgeon'
			},
			position: 'President',
			phone: '(145) 329-4383',
			email: 'kpridgeon@ipsum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 194184,
				debt: 146899,
				revenue: 159035,
				ebitda: 55662
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 208305,
				debt: 156675,
				revenue: 139381,
				ebitda: 34845
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 408446,
				debt: 1907,
				revenue: 261092,
				ebitda: 78328
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Laborum Industrial',
	url: 'laborum.net',
	description: 'Amet labore ipsum consequat nisi. Laborum aliquip qui sit labore sunt ea proident.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Mccallister'
			},
			position: 'CEO',
			phone: '(541) 136-0858',
			email: 'smccallister@laborum.net'
		},
		{
			name: {
				first: 'Leona',
				last: 'Hou'
			},
			position: 'President',
			phone: '(011) 818-7796',
			email: 'lhou@laborum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 193569,
				debt: 150970,
				revenue: 162203,
				ebitda: 40551
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 6312,
				debt: 147667,
				revenue: 295257,
				ebitda: 91530
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 8704,
				debt: 289886,
				revenue: 396668,
				ebitda: 99167
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Id ex Development',
	url: 'idex.net',
	description: 'Anim mollit quis amet irure nisi laborum. Laborum ullamco incididunt sint excepteur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Kee'
			},
			position: 'CFO',
			phone: '(596) 219-3487',
			email: 'ukee@idex.net'
		},
		{
			name: {
				first: 'Wilber',
				last: 'Lariviere'
			},
			position: 'CEO',
			phone: '(214) 457-5767',
			email: 'wlariviere@idex.net'
		},
		{
			name: {
				first: 'Nicole',
				last: 'Woodie'
			},
			position: 'Vice President',
			phone: '(262) 218-5551',
			email: 'nwoodie@idex.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18534379,
				debt: 10379550,
				revenue: 10123493,
				ebitda: 2530873
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 7480338,
				debt: 4280293,
				revenue: 3501768,
				ebitda: 1050530
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 12308605,
				debt: 3584172,
				revenue: 4859676,
				ebitda: 1214919
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Mollit Services',
	url: 'mollit.co',
	description: 'Do esse voluptate id esse nulla ipsum ut nisi. Mollit exercitation fugiat aute irure. Proident fugiat est ullamco '
		+ 'minim.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(776) 137-2455',
			email: 'fmercado@mollit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 17978667,
				debt: 12287401,
				revenue: 13905400,
				mc: 19135040,
				ebitda: 3476350
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 28846650,
				debt: 12884855,
				revenue: 13722681,
				mc: 23890684,
				ebitda: 3430670
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 36658542,
				debt: 8827283,
				revenue: 26999339,
				mc: 24647640,
				ebitda: 6749835
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Ex Sunt Industrial',
	url: 'exsunt.org',
	description: 'Sint cillum qui veniam cupidatat. Minim mollit anim anim veniam.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Brady',
				last: 'Zahl'
			},
			position: 'CEO',
			phone: '(221) 048-6454',
			email: 'bzahl@exsunt.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 181355,
				debt: 174831,
				revenue: 183644,
				ebitda: 45911
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 180089,
				debt: 325149,
				revenue: 158238,
				ebitda: 60130
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 190617,
				debt: 429797,
				revenue: 190782,
				ebitda: 47696
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Cillum Dolore Labs',
	url: 'cillumdolore.net',
	description: 'Amet aliqua sint ea reprehenderit. Do deserunt pariatur laboris incididunt. Esse adipisicing pariatur proident '
		+ 'veniam.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ileen',
				last: 'Kee'
			},
			position: 'President',
			phone: '(588) 235-2196',
			email: 'ikee@cillumdolore.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1884403,
				debt: 1087566,
				revenue: 1098770,
				ebitda: 307656
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 488304,
				debt: 1211702,
				revenue: 1811713,
				ebitda: 452928
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 700217,
				debt: 353965,
				revenue: 50106,
				ebitda: 12526
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Consequat Industrial',
	url: 'consequat.net',
	description: 'Mollit magna occaecat ipsum ea esse. Minim laboris esse voluptate magna.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Blea'
			},
			position: 'President',
			phone: '(357) 111-8856',
			email: 'mblea@consequat.net'
		},
		{
			name: {
				first: 'Valarie',
				last: 'Ellett'
			},
			position: 'Vice President',
			phone: '(012) 674-5188',
			email: 'vellett@consequat.net'
		},
		{
			name: {
				first: 'Lucrecia',
				last: 'Client'
			},
			position: 'CFO',
			phone: '(814) 646-2501',
			email: 'lclient@consequat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 198628,
				debt: 168247,
				revenue: 144075,
				ebitda: 36019
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 363585,
				debt: 219749,
				revenue: 233563,
				ebitda: 58391
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 627786,
				debt: 342274,
				revenue: 291908,
				ebitda: 72977
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Commodo Specialties',
	url: 'commodo.net',
	description: 'Commodo eiusmod sit dolor elit. Ut sunt occaecat deserunt veniam. Voluptate enim consectetur proident qui '
		+ 'incididunt culpa in incididunt nulla. Amet sunt proident consequat adipisicing.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Koppes'
			},
			position: 'Vice President',
			phone: '(815) 923-3892',
			email: 'dkoppes@commodo.net'
		},
		{
			name: {
				first: 'Malisa',
				last: 'Parkhill'
			},
			position: 'CFO',
			phone: '(356) 527-9876',
			email: 'mparkhill@commodo.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 101388,
				debt: 128390,
				revenue: 157290,
				mc: 162673,
				ebitda: 39323
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 184664,
				debt: 74959,
				revenue: 137970,
				mc: 268783,
				ebitda: 34492
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 82698,
				debt: 18615,
				revenue: 199097,
				mc: 182855,
				ebitda: 75657
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Irure Inc.',
	url: 'irure.org',
	description: 'Nostrud aute qui ut ut. Do ex consequat id id laborum ipsum est.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Andrea'
			},
			position: 'Vice President',
			phone: '(381) 029-5357',
			email: 'dandrea@irure.org'
		},
		{
			name: {
				first: 'Fleta',
				last: 'Zahl'
			},
			position: 'President',
			phone: '(881) 886-1100',
			email: 'fzahl@irure.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 129382,
				debt: 157993,
				revenue: 199112,
				ebitda: 59734
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 203694,
				debt: 67466,
				revenue: 367550,
				ebitda: 91887
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 184640,
				debt: 108932,
				revenue: 614068,
				ebitda: 184220
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Veniam & Co.',
	url: 'veniam.co',
	description: 'Excepteur aliquip eiusmod adipisicing aliqua velit mollit ad cupidatat tempor. Aliqua ad do anim proident sunt '
		+ 'laborum commodo aute. Elit ut ea et ut. Non nulla ex elit esse.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Milagro',
				last: 'Alegria'
			},
			position: 'President',
			phone: '(977) 222-8443',
			email: 'malegria@veniam.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1780135,
				debt: 1992665,
				revenue: 1963992,
				ebitda: 490998
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 400674,
				debt: 3470210,
				revenue: 292627,
				ebitda: 108272
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 239896,
				debt: 3071300,
				revenue: 451800,
				ebitda: 180720
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Minim Solutions',
	url: 'minim.net',
	description: 'Cupidatat fugiat cillum commodo consectetur ea amet. Aliquip ad aliqua eiusmod commodo laboris sint velit cillum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fidelia',
				last: 'Hains'
			},
			position: 'CFO',
			phone: '(233) 755-8380',
			email: 'fhains@minim.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 158171,
				debt: 123547,
				revenue: 196925,
				ebitda: 49231
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 181636,
				debt: 76511,
				revenue: 30098,
				ebitda: 7825
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 277588,
				debt: 107735,
				revenue: 8513,
				ebitda: 2128
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Magna Amet Properties',
	url: 'magnaamet.net',
	description: 'Sunt ea minim ullamco incididunt. Qui id veniam duis voluptate.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Tallarico'
			},
			position: 'Vice President',
			phone: '(276) 054-3632',
			email: 'ltallarico@magnaamet.net'
		},
		{
			name: {
				first: 'Bridgett',
				last: 'Lamarre'
			},
			position: 'President',
			phone: '(618) 716-7319',
			email: 'blamarre@magnaamet.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 117138,
				debt: 105219,
				revenue: 150375,
				ebitda: 37594
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 94158,
				debt: 173707,
				revenue: 96297,
				ebitda: 38519
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 13495,
				debt: 218247,
				revenue: 94098,
				ebitda: 23525
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Laborum Labs',
	url: 'laborum.net',
	description: 'Excepteur esse proident magna velit. Id et excepteur et eiusmod irure.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Tallarico'
			},
			position: 'President',
			phone: '(863) 643-6324',
			email: 'btallarico@laborum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 103100,
				debt: 146943,
				revenue: 188915,
				ebitda: 47229
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 36176,
				debt: 184800,
				revenue: 153185,
				ebitda: 38296
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 7791,
				debt: 313470,
				revenue: 169042,
				ebitda: 42260
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Veniam Books',
	url: 'veniam.co',
	description: 'Ipsum deserunt aliqua exercitation incididunt. Consectetur qui ullamco ut do velit aute sunt.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Kinard'
			},
			position: 'President',
			phone: '(684) 903-1117',
			email: 'fkinard@veniam.co'
		},
		{
			name: {
				first: 'Denver',
				last: 'Perron'
			},
			position: 'Vice President',
			phone: '(944) 203-7410',
			email: 'dperron@veniam.co'
		},
		{
			name: {
				first: 'Antony',
				last: 'Lantz'
			},
			position: 'CEO',
			phone: '(419) 281-8201',
			email: 'alantz@veniam.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 152038,
				debt: 157234,
				revenue: 190854,
				mc: 152974,
				ebitda: 49622
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 231419,
				debt: 249798,
				revenue: 191474,
				mc: 297380,
				ebitda: 47869
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 285979,
				debt: 291739,
				revenue: 237349,
				mc: 94462,
				ebitda: 59337
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Magna Dynamics',
	url: 'magna.co',
	description: 'Pariatur in velit est consectetur. Nisi in id exercitation in mollit nisi mollit veniam. Ex anim commodo '
		+ 'consectetur amet.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Lantz'
			},
			position: 'CEO',
			phone: '(276) 823-6384',
			email: 'dlantz@magna.co'
		},
		{
			name: {
				first: 'Kelli',
				last: 'Client'
			},
			position: 'President',
			phone: '(206) 768-5114',
			email: 'kclient@magna.co'
		},
		{
			name: {
				first: 'Fidelia',
				last: 'Keala'
			},
			position: 'Vice President',
			phone: '(434) 137-6221',
			email: 'fkeala@magna.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1128628,
				debt: 1644616,
				revenue: 1136399,
				ebitda: 284100
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1124951,
				debt: 1246419,
				revenue: 948895,
				ebitda: 351091
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 938302,
				debt: 1003277,
				revenue: 579264,
				ebitda: 144816
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Deserunt Properties',
	url: 'deserunt.net',
	description: 'Veniam consequat velit excepteur deserunt eiusmod adipisicing anim veniam. Cupidatat consectetur eu cupidatat '
		+ 'nostrud. Sunt voluptate excepteur sit est sit dolore anim. Dolore nostrud reprehenderit laborum eiusmod.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Fidelia',
				last: 'Cancel'
			},
			position: 'Vice President',
			phone: '(116) 358-4320',
			email: 'fcancel@deserunt.net'
		},
		{
			name: {
				first: 'Bradford',
				last: 'Lariviere'
			},
			position: 'President',
			phone: '(235) 878-1256',
			email: 'blariviere@deserunt.net'
		},
		{
			name: {
				first: 'Marlo',
				last: 'Seabury'
			},
			position: 'CEO',
			phone: '(032) 680-1755',
			email: 'mseabury@deserunt.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 197495,
				debt: 112868,
				revenue: 119006,
				mc: 170758,
				ebitda: 42842
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 227359,
				debt: 68635,
				revenue: 209754,
				mc: 155777,
				ebitda: 52439
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 240426,
				debt: 90510,
				revenue: 233872,
				mc: 37726,
				ebitda: 58468
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Fugiat Aliquip Enterprises',
	url: 'fugiataliquip.co',
	description: 'Ullamco id pariatur proident dolore sit culpa commodo. Voluptate nulla nostrud ex duis.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Koppes'
			},
			position: 'President',
			phone: '(643) 778-7182',
			email: 'skoppes@fugiataliquip.co'
		},
		{
			name: {
				first: 'Fleta',
				last: 'Hellen'
			},
			position: 'CEO',
			phone: '(791) 416-5728',
			email: 'fhellen@fugiataliquip.co'
		},
		{
			name: {
				first: 'Bridgett',
				last: 'Lamarre'
			},
			position: 'Vice President',
			phone: '(825) 331-8028',
			email: 'blamarre@fugiataliquip.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18147879,
				debt: 10102501,
				revenue: 15419825,
				ebitda: 6013732
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 22371463,
				debt: 419756,
				revenue: 15165877,
				ebitda: 3791469
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 43379377,
				debt: 671256,
				revenue: 3611254,
				ebitda: 902813
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Deserunt Creative',
	url: 'deserunt.co',
	description: 'Sit do veniam pariatur ex. Nulla ipsum ad non sint. Pariatur aliqua laborum veniam nisi. Ad magna esse quis dolore '
		+ 'ea incididunt labore voluptate cillum.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Kinard'
			},
			position: 'CEO',
			phone: '(643) 863-6856',
			email: 'ekinard@deserunt.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 131867,
				debt: 139564,
				revenue: 129713,
				mc: 182422,
				ebitda: 32428
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 209862,
				debt: 194045,
				revenue: 71482,
				mc: 154582,
				ebitda: 17870
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 166647,
				debt: 387574,
				revenue: 105545,
				mc: 86215,
				ebitda: 26386
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Reprehenderit Adipisicing Dynamics',
	url: 'reprehenderitadipisicing.co',
	description: 'Cillum duis adipisicing consequat reprehenderit. Et occaecat cupidatat labore pariatur.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Evens'
			},
			position: 'CFO',
			phone: '(458) 744-2838',
			email: 'devens@reprehenderitadipisicing.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1733140,
				debt: 1966593,
				revenue: 1182995,
				mc: 1555013,
				ebitda: 295749
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 505767,
				debt: 2420188,
				revenue: 1743385,
				mc: 94189,
				ebitda: 592751
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 248181,
				debt: 1485905,
				revenue: 3148492,
				mc: 25074,
				ebitda: 850093
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Ea Laborum Digital',
	url: 'ealaborum.net',
	description: 'Consectetur duis velit sint fugiat nisi. Magna reprehenderit qui aliqua consequat. Incididunt voluptate labore '
		+ 'excepteur ut mollit commodo do ut.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Lamarre'
			},
			position: 'CEO',
			phone: '(313) 228-6037',
			email: 'alamarre@ealaborum.net'
		},
		{
			name: {
				first: 'Adelina',
				last: 'Hunte'
			},
			position: 'President',
			phone: '(475) 733-9250',
			email: 'ahunte@ealaborum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 111921,
				debt: 184937,
				revenue: 191918,
				ebitda: 61414
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 104606,
				debt: 141252,
				revenue: 281408,
				ebitda: 92865
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 104445,
				debt: 247875,
				revenue: 92394,
				ebitda: 23099
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Eiusmod Development',
	url: 'eiusmod.org',
	description: 'Nostrud velit fugiat excepteur ea. Occaecat reprehenderit adipisicing sit et veniam proident.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Oiler'
			},
			position: 'President',
			phone: '(038) 374-4517',
			email: 'coiler@eiusmod.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 10699155,
				debt: 13440585,
				revenue: 10425327,
				mc: 16995826,
				ebitda: 3336105
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 17376046,
				debt: 23822118,
				revenue: 5739394,
				mc: 3296025,
				ebitda: 2008788
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3069076,
				debt: 10969817,
				revenue: 4913839,
				mc: 4348932,
				ebitda: 1228460
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Cillum Online',
	url: 'cillum.net',
	description: 'Anim duis qui ex pariatur culpa. Fugiat cupidatat in minim id excepteur occaecat laboris elit. Dolor ex nisi duis '
		+ 'mollit cillum voluptate elit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Woodie'
			},
			position: 'CEO',
			phone: '(641) 623-1042',
			email: 'bwoodie@cillum.net'
		},
		{
			name: {
				first: 'Mirian',
				last: 'Ruckman'
			},
			position: 'Vice President',
			phone: '(081) 428-8136',
			email: 'mruckman@cillum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 170193,
				debt: 147698,
				revenue: 165617,
				ebitda: 41404
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 219838,
				debt: 64488,
				revenue: 237339,
				ebitda: 68828
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 167560,
				debt: 82157,
				revenue: 77100,
				ebitda: 20817
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Magna Industrial',
	url: 'magna.org',
	description: 'Aute sunt mollit laboris id eiusmod. Voluptate minim ea nisi minim. Eu non veniam amet qui cillum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Kelli',
				last: 'Sones'
			},
			position: 'President',
			phone: '(285) 466-3632',
			email: 'ksones@magna.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 146098,
				debt: 129397,
				revenue: 187813,
				ebitda: 46953
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 199299,
				debt: 3703,
				revenue: 23623,
				ebitda: 9449
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 275795,
				debt: 2473,
				revenue: 24030,
				ebitda: 6969
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Laborum Systems',
	url: 'laborum.org',
	description: 'Voluptate aliqua enim reprehenderit ullamco. Exercitation culpa in incididunt laborum mollit adipisicing. Mollit '
		+ 'mollit culpa reprehenderit sit dolore ipsum elit. Non et cillum quis occaecat exercitation.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Wilker'
			},
			position: 'President',
			phone: '(253) 632-1603',
			email: 'bwilker@laborum.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1217705,
				debt: 1566382,
				revenue: 1905735,
				mc: 1568677,
				ebitda: 476434
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2284197,
				debt: 2917370,
				revenue: 2521863,
				mc: 1396904,
				ebitda: 630466
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2857746,
				debt: 193292,
				revenue: 4458161,
				mc: 2430985,
				ebitda: 1114540
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Consequat Enterprises',
	url: 'consequat.co',
	description: 'Laborum sunt duis fugiat excepteur. Veniam pariatur pariatur irure nulla commodo.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sebrina',
				last: 'Puig'
			},
			position: 'Vice President',
			phone: '(148) 274-1218',
			email: 'spuig@consequat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1431972,
				debt: 1162573,
				revenue: 1003220,
				ebitda: 250805
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1456748,
				debt: 180553,
				revenue: 536301,
				ebitda: 134075
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1654311,
				debt: 145637,
				revenue: 486567,
				ebitda: 121642
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Tempor Online',
	url: 'tempor.net',
	description: 'Occaecat ut et aute cupidatat ut exercitation excepteur veniam ut. Consectetur est ut in nulla. Aliquip do dolore '
		+ 'qui consectetur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Mccallister'
			},
			position: 'President',
			phone: '(683) 150-9837',
			email: 'fmccallister@tempor.net'
		},
		{
			name: {
				first: 'Malisa',
				last: 'Cancel'
			},
			position: 'Vice President',
			phone: '(229) 325-4846',
			email: 'mcancel@tempor.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 197681,
				debt: 123596,
				revenue: 162593,
				ebitda: 40648
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 289499,
				debt: 36644,
				revenue: 96647,
				ebitda: 26095
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 195050,
				debt: 7751,
				revenue: 42690,
				ebitda: 10673
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Deserunt Online',
	url: 'deserunt.co',
	description: 'Cillum laboris officia aliquip elit. Velit consectetur ea deserunt labore.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Elia',
				last: 'Demoura'
			},
			position: 'Vice President',
			phone: '(404) 062-4298',
			email: 'edemoura@deserunt.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 121223,
				debt: 194383,
				revenue: 111960,
				mc: 192504,
				ebitda: 36947
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 181134,
				debt: 368136,
				revenue: 175513,
				mc: 218462,
				ebitda: 59674
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 227303,
				debt: 459251,
				revenue: 99072,
				mc: 253213,
				ebitda: 24768
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Officia Bureau',
	url: 'officia.net',
	description: 'Velit non reprehenderit ipsum veniam ex. Anim sit veniam veniam labore deserunt aliquip.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Tobie',
				last: 'Wilker'
			},
			position: 'CEO',
			phone: '(753) 351-2374',
			email: 'twilker@officia.net'
		},
		{
			name: {
				first: 'Joseph',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(544) 760-1556',
			email: 'jmercado@officia.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1074828,
				debt: 1962443,
				revenue: 1710275,
				mc: 1264442,
				ebitda: 598596
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1690211,
				debt: 2632143,
				revenue: 1167231,
				mc: 2362823,
				ebitda: 291808
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1452461,
				debt: 4489170,
				revenue: 1559483,
				mc: 2020346,
				ebitda: 389871
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Cillum LLC',
	url: 'cillum.org',
	description: 'Laborum consequat sint sit aliquip ea. Qui adipisicing ut consequat elit. Laboris aliquip exercitation voluptate '
		+ 'ullamco.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fidelia',
				last: 'Mercado'
			},
			position: 'President',
			phone: '(265) 548-6023',
			email: 'fmercado@cillum.org'
		},
		{
			name: {
				first: 'Earle',
				last: 'Seabury'
			},
			position: 'Vice President',
			phone: '(735) 524-8016',
			email: 'eseabury@cillum.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 115562,
				debt: 123878,
				revenue: 133040,
				ebitda: 33260
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 15596,
				debt: 203444,
				revenue: 101683,
				ebitda: 25421
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 25993,
				debt: 311845,
				revenue: 38012,
				ebitda: 10643
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Reprehenderit Industrial',
	url: 'reprehenderit.org',
	description: 'Aliqua qui esse irure commodo. Dolore ea laboris sit enim.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fidelia',
				last: 'Alegria'
			},
			position: 'Vice President',
			phone: '(318) 285-6613',
			email: 'falegria@reprehenderit.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1028108,
				debt: 1623067,
				revenue: 1384172,
				ebitda: 346043
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1543372,
				debt: 3154551,
				revenue: 1055592,
				ebitda: 285010
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 652636,
				debt: 140171,
				revenue: 960757,
				ebitda: 307442
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Mollit Innovations',
	url: 'mollit.org',
	description: 'Consectetur cupidatat commodo aliquip aliqua. Cillum id ea mollit voluptate dolore officia mollit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Puig'
			},
			position: 'CEO',
			phone: '(181) 683-1627',
			email: 'spuig@mollit.org'
		},
		{
			name: {
				first: 'Nicole',
				last: 'Hellen'
			},
			position: 'President',
			phone: '(137) 360-3278',
			email: 'nhellen@mollit.org'
		},
		{
			name: {
				first: 'Sergio',
				last: 'Oiler'
			},
			position: 'CFO',
			phone: '(883) 295-2561',
			email: 'soiler@mollit.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 120499,
				debt: 192126,
				revenue: 198864,
				ebitda: 49716
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 128885,
				debt: 382873,
				revenue: 173672,
				ebitda: 43418
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 76420,
				debt: 529034,
				revenue: 230265,
				ebitda: 75987
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Fugiat Innovations',
	url: 'fugiat.co',
	description: 'Sunt officia eiusmod id ullamco dolore culpa. Irure quis commodo laborum aliqua.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lashonda',
				last: 'Kee'
			},
			position: 'President',
			phone: '(678) 260-6364',
			email: 'lkee@fugiat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 194463,
				debt: 184298,
				revenue: 106938,
				ebitda: 26735
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 81365,
				debt: 351522,
				revenue: 112480,
				ebitda: 41618
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 117965,
				debt: 586058,
				revenue: 126152,
				ebitda: 31538
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Exercitation Group',
	url: 'exercitation.org',
	description: 'Eu nulla laboris proident cillum. Officia nostrud magna veniam in duis et eiusmod. Laborum cupidatat sunt nisi '
		+ 'anim voluptate excepteur sunt enim.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Valarie',
				last: 'Parkhill'
			},
			position: 'CEO',
			phone: '(312) 531-8911',
			email: 'vparkhill@exercitation.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 115364,
				debt: 111257,
				revenue: 106068,
				mc: 134875,
				ebitda: 26517
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 30033,
				debt: 74726,
				revenue: 64400,
				mc: 33678,
				ebitda: 16100
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 18706,
				debt: 17874,
				revenue: 81050,
				mc: 35026,
				ebitda: 20262
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Nulla Solutions',
	url: 'nulla.net',
	description: 'Ipsum minim irure esse aliqua. Cupidatat dolore cupidatat fugiat labore qui nulla exercitation pariatur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lashonda',
				last: 'Evens'
			},
			position: 'CFO',
			phone: '(683) 224-8014',
			email: 'levens@nulla.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 185866,
				debt: 101069,
				revenue: 139302,
				ebitda: 54328
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 91911,
				debt: 116892,
				revenue: 111235,
				ebitda: 44494
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 50293,
				debt: 66372,
				revenue: 24454,
				ebitda: 6113
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Ullamco Development',
	url: 'ullamco.co',
	description: 'Ex amet dolor pariatur adipisicing eiusmod. Nostrud ex id minim aliqua veniam nostrud.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Yoshiko',
				last: 'Perron'
			},
			position: 'CFO',
			phone: '(248) 140-3371',
			email: 'yperron@ullamco.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 195245,
				debt: 194533,
				revenue: 183525,
				ebitda: 62399
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 262828,
				debt: 366293,
				revenue: 12500,
				ebitda: 3125
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 121190,
				debt: 619650,
				revenue: 12917,
				ebitda: 4908
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Aliqua Dynamics',
	url: 'aliqua.co',
	description: 'Reprehenderit cillum irure commodo aliqua. Excepteur excepteur sit deserunt qui do minim dolor.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Phylis',
				last: 'Towle'
			},
			position: 'President',
			phone: '(637) 313-1115',
			email: 'ptowle@aliqua.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1838547,
				debt: 1520847,
				revenue: 1878510,
				mc: 1661653,
				ebitda: 469627
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 212553,
				debt: 2373776,
				revenue: 659773,
				mc: 1952278,
				ebitda: 164943
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 12671,
				debt: 2914708,
				revenue: 566767,
				mc: 3053244,
				ebitda: 141692
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Nulla Dynamics',
	url: 'nulla.org',
	description: 'Nulla commodo culpa in consequat. Et consequat nulla dolore commodo. Consequat est ad est ex.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Woodie'
			},
			position: 'Vice President',
			phone: '(672) 800-7775',
			email: 'fwoodie@nulla.org'
		},
		{
			name: {
				first: 'Ileen',
				last: 'Jeffords'
			},
			position: 'President',
			phone: '(217) 471-8415',
			email: 'ijeffords@nulla.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 149435,
				debt: 126129,
				revenue: 157243,
				ebitda: 42456
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 98165,
				debt: 55691,
				revenue: 23658,
				ebitda: 5915
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 127280,
				debt: 68492,
				revenue: 34041,
				ebitda: 8510
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Exercitation Systems',
	url: 'exercitation.co',
	description: 'Laborum cupidatat et nostrud laboris. Non sunt et non cupidatat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Elia',
				last: 'Mercado'
			},
			position: 'President',
			phone: '(457) 150-8886',
			email: 'emercado@exercitation.co'
		},
		{
			name: {
				first: 'Fleta',
				last: 'Client'
			},
			position: 'CEO',
			phone: '(992) 366-0228',
			email: 'fclient@exercitation.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 111562,
				debt: 168201,
				revenue: 125076,
				mc: 106327,
				ebitda: 43776
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 56338,
				debt: 47160,
				revenue: 51468,
				mc: 117858,
				ebitda: 12867
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 86999,
				debt: 11238,
				revenue: 823,
				mc: 85035,
				ebitda: 206
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Nulla Services',
	url: 'nulla.net',
	description: 'Cupidatat sunt est nulla eiusmod. Elit esse ea aliquip nulla amet amet officia est reprehenderit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Yoshiko',
				last: 'Lamarre'
			},
			position: 'President',
			phone: '(249) 297-4052',
			email: 'ylamarre@nulla.net'
		},
		{
			name: {
				first: 'Sergio',
				last: 'Hunte'
			},
			position: 'Vice President',
			phone: '(857) 270-4045',
			email: 'shunte@nulla.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 176753,
				debt: 183649,
				revenue: 199597,
				ebitda: 49899
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 308627,
				debt: 86299,
				revenue: 21796,
				ebitda: 5449
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 59354,
				debt: 150716,
				revenue: 35701,
				ebitda: 14280
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Dolore qui Scientific',
	url: 'dolorequi.org',
	description: 'Elit deserunt in exercitation aute enim nisi pariatur. Et Lorem enim exercitation deserunt. Esse culpa id '
		+ 'reprehenderit incididunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Pridgeon'
			},
			position: 'President',
			phone: '(589) 753-6154',
			email: 'epridgeon@dolorequi.org'
		},
		{
			name: {
				first: 'Ileen',
				last: 'Hunte'
			},
			position: 'Vice President',
			phone: '(512) 427-8322',
			email: 'ihunte@dolorequi.org'
		},
		{
			name: {
				first: 'Milagro',
				last: 'Moyle'
			},
			position: 'CEO',
			phone: '(490) 833-7182',
			email: 'mmoyle@dolorequi.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1308422,
				debt: 1806868,
				revenue: 1756508,
				ebitda: 439127
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 400715,
				debt: 3173495,
				revenue: 881489,
				ebitda: 220372
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 791008,
				debt: 2812785,
				revenue: 157986,
				ebitda: 39496
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Nisi Fugiat Direct',
	url: 'nisifugiat.co',
	description: 'Minim eu cillum consequat aliqua consequat. Cupidatat minim est aute commodo dolor incididunt laboris. Aute '
		+ 'excepteur Lorem reprehenderit eiusmod laboris id proident aute.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lela',
				last: 'Alegria'
			},
			position: 'Vice President',
			phone: '(070) 742-2864',
			email: 'lalegria@nisifugiat.co'
		},
		{
			name: {
				first: 'Osvaldo',
				last: 'Wilker'
			},
			position: 'CFO',
			phone: '(007) 589-9105',
			email: 'owilker@nisifugiat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1865383,
				debt: 1547994,
				revenue: 1246511,
				ebitda: 311628
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2668798,
				debt: 2246724,
				revenue: 531134,
				ebitda: 169963
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 361856,
				debt: 4169380,
				revenue: 56731,
				ebitda: 19856
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Incididunt Laborum Industrial',
	url: 'incididuntlaborum.co',
	description: 'Lorem anim Lorem amet reprehenderit. Veniam dolor aliquip elit tempor.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Cancel'
			},
			position: 'CFO',
			phone: '(774) 376-3377',
			email: 'dcancel@incididuntlaborum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 124272,
				debt: 120476,
				revenue: 166594,
				ebitda: 61640
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 91539,
				debt: 140536,
				revenue: 206261,
				ebitda: 68066
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 106599,
				debt: 156031,
				revenue: 104502,
				ebitda: 37621
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Ipsum & Co.',
	url: 'ipsum.net',
	description: 'Proident quis enim pariatur magna. Et ipsum reprehenderit nulla dolor eu sint cupidatat consectetur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Earle',
				last: 'Mccallister'
			},
			position: 'CEO',
			phone: '(814) 316-4117',
			email: 'emccallister@ipsum.net'
		},
		{
			name: {
				first: 'Mirian',
				last: 'Mccallister'
			},
			position: 'Vice President',
			phone: '(144) 572-7825',
			email: 'mmccallister@ipsum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1576083,
				debt: 1917775,
				revenue: 1628416,
				ebitda: 537377
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1097433,
				debt: 1066349,
				revenue: 2475182,
				ebitda: 618795
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1980288,
				debt: 1707635,
				revenue: 414109,
				ebitda: 103527
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Reprehenderit Scientific',
	url: 'reprehenderit.net',
	description: 'Incididunt excepteur officia ea ut. Anim et dolor consectetur aute irure aute elit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Mirian',
				last: 'Moyle'
			},
			position: 'CEO',
			phone: '(681) 364-6018',
			email: 'mmoyle@reprehenderit.net'
		},
		{
			name: {
				first: 'Oma',
				last: 'Kinard'
			},
			position: 'Vice President',
			phone: '(546) 874-1636',
			email: 'okinard@reprehenderit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1693787,
				debt: 1423529,
				revenue: 1795532,
				ebitda: 448883
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1366262,
				debt: 2521108,
				revenue: 2364161,
				ebitda: 732890
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2308363,
				debt: 4003947,
				revenue: 1813548,
				ebitda: 453387
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Cupidatat Amet Innovations',
	url: 'cupidatatamet.net',
	description: 'Occaecat cupidatat aliquip anim id aliqua labore laboris. Nulla officia eu commodo do ut magna. Incididunt enim '
		+ 'consectetur aliqua laboris veniam duis. Dolor aute aute amet in.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lelah',
				last: 'Mccallister'
			},
			position: 'Vice President',
			phone: '(222) 830-6079',
			email: 'lmccallister@cupidatatamet.net'
		},
		{
			name: {
				first: 'Yoshiko',
				last: 'Jeffords'
			},
			position: 'President',
			phone: '(122) 906-4483',
			email: 'yjeffords@cupidatatamet.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 19418431,
				debt: 19587046,
				revenue: 12125333,
				mc: 10622545,
				ebitda: 3031333
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 20028484,
				debt: 18086007,
				revenue: 9816749,
				mc: 5064423,
				ebitda: 2650522
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 29901802,
				debt: 13662825,
				revenue: 4843331,
				mc: 35781,
				ebitda: 1695166
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Veniam Creative',
	url: 'veniam.net',
	description: 'Laboris eiusmod dolor dolore ullamco commodo qui excepteur est id. In fugiat et consectetur qui. Et sint sunt '
		+ 'irure nisi dolor.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Demoura'
			},
			position: 'Vice President',
			phone: '(963) 636-2563',
			email: 'cdemoura@veniam.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 170674,
				debt: 129899,
				revenue: 159601,
				ebitda: 41496
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 87066,
				debt: 112436,
				revenue: 55309,
				ebitda: 13827
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 134482,
				debt: 46230,
				revenue: 34242,
				ebitda: 8561
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Nulla Productions',
	url: 'nulla.com',
	description: 'Incididunt qui quis dolore qui nostrud deserunt nulla anim. Culpa id officia cupidatat adipisicing reprehenderit '
		+ 'est nisi. Magna aliqua sunt nostrud culpa elit incididunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Julieann',
				last: 'Keala'
			},
			position: 'President',
			phone: '(996) 034-4138',
			email: 'jkeala@nulla.com'
		},
		{
			name: {
				first: 'Antony',
				last: 'Andrea'
			},
			position: 'CFO',
			phone: '(662) 398-1328',
			email: 'aandrea@nulla.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 101149,
				debt: 106229,
				revenue: 124074,
				ebitda: 31018
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 129349,
				debt: 168702,
				revenue: 114052,
				ebitda: 28513
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 187160,
				debt: 142449,
				revenue: 218622,
				ebitda: 59028
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Mollit Creative',
	url: 'mollit.co',
	description: 'Nulla nisi Lorem irure aliquip commodo enim. Anim amet ullamco nostrud mollit duis eiusmod.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Brady',
				last: 'Dutra'
			},
			position: 'CFO',
			phone: '(199) 484-9333',
			email: 'bdutra@mollit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1752458,
				debt: 1247507,
				revenue: 1907583,
				mc: 1906744,
				ebitda: 476896
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2539020,
				debt: 1949714,
				revenue: 556712,
				mc: 600777,
				ebitda: 139178
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3862574,
				debt: 2743252,
				revenue: 148916,
				mc: 833626,
				ebitda: 37229
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Exercitation Inc.',
	url: 'exercitation.co',
	description: 'Elit nisi veniam consectetur tempor commodo laborum consectetur est. Aute sunt ipsum culpa tempor proident et.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Client'
			},
			position: 'Vice President',
			phone: '(354) 445-5831',
			email: 'eclient@exercitation.co'
		},
		{
			name: {
				first: 'Barbera',
				last: 'Reece'
			},
			position: 'CFO',
			phone: '(495) 778-7365',
			email: 'breece@exercitation.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18852673,
				debt: 10706631,
				revenue: 19452038,
				mc: 16299621,
				ebitda: 7586295
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 32605147,
				debt: 18587984,
				revenue: 37037633,
				mc: 13923753,
				ebitda: 14815053
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 17009223,
				debt: 14731411,
				revenue: 18475123,
				mc: 22980539,
				ebitda: 6466293
			}
		}
	],
	status: Status.Pending
},
];

export default companies;
