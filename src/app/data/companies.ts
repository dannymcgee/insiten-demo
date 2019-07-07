import { Status } from './status.model';

const companies = [
{
	name: 'Mollit Partners',
	url: 'mollit.co',
	description: 'Qui eiusmod duis deserunt irure. Tempor dolor culpa voluptate aliqua.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Woodie'
			},
			position: 'President',
			phone: '(545) 663-6483',
			email: 'bwoodie@mollit.co'
		},
		{
			name: {
				first: 'Wilber',
				last: 'Oiler'
			},
			position: 'Vice President',
			phone: '(276) 538-1388',
			email: 'woiler@mollit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 119531,
				debt: 162555,
				ebitda: 27738,
				revenue: 110954
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 135107,
				debt: 231880,
				ebitda: 42480,
				revenue: 169921
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 55669,
				debt: 45732,
				ebitda: 78089,
				revenue: 229673
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Deserunt Eiusmod Unlimited',
	url: 'deserunteiusmod.org',
	description: 'Incididunt tempor elit dolore id. Elit ex cillum dolor laboris.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lela',
				last: 'Zahl'
			},
			position: 'CFO',
			phone: '(245) 588-8925',
			email: 'lzahl@deserunteiusmod.org'
		},
		{
			name: {
				first: 'Valarie',
				last: 'Conte'
			},
			position: 'President',
			phone: '(664) 163-9248',
			email: 'vconte@deserunteiusmod.org'
		},
		{
			name: {
				first: 'Adelina',
				last: 'Legendre'
			},
			position: 'Vice President',
			phone: '(861) 276-9684',
			email: 'alegendre@deserunteiusmod.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 145071,
				debt: 161517,
				ebitda: 40223,
				revenue: 143655
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 17935,
				debt: 254166,
				ebitda: 26986,
				revenue: 107946
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 24236,
				debt: 22849,
				ebitda: 36903,
				revenue: 97113
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Pariatur Partners',
	url: 'pariatur.net',
	description: 'Ipsum nulla excepteur cupidatat ad. Ut laborum consectetur sunt sit consectetur id nisi id commodo.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Dutra'
			},
			position: 'CFO',
			phone: '(241) 351-6756',
			email: 'ddutra@pariatur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 110303,
				debt: 145148,
				ebitda: 32600,
				revenue: 130398
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 102885,
				debt: 285680,
				ebitda: 12515,
				revenue: 50059
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 154691,
				debt: 63408,
				ebitda: 17298,
				revenue: 69193
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Lorem Consulting',
	url: 'lorem.co',
	description: 'Voluptate veniam nostrud deserunt eiusmod. Est nulla laboris cupidatat magna.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Reece'
			},
			position: 'Vice President',
			phone: '(101) 775-4388',
			email: 'sreece@lorem.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1836596,
				debt: 1949705,
				ebitda: 267530,
				revenue: 1070120,
				mc: 1648380
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 3277329,
				debt: 2640145,
				ebitda: 504267,
				revenue: 2017066,
				mc: 2303134
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 103477,
				debt: 3914253,
				ebitda: 1058049,
				revenue: 2784339,
				mc: 4449959
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Consectetur Digital',
	url: 'consectetur.net',
	description: 'Officia anim est eu ex. Pariatur tempor est reprehenderit cupidatat veniam sint enim labore culpa. Ut veniam enim '
		+ 'nisi eiusmod.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Nohemi',
				last: 'Cancel'
			},
			position: 'CFO',
			phone: '(768) 117-8513',
			email: 'ncancel@consectetur.net'
		},
		{
			name: {
				first: 'Malisa',
				last: 'Koppes'
			},
			position: 'President',
			phone: '(121) 246-9885',
			email: 'mkoppes@consectetur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1242741,
				debt: 1906197,
				ebitda: 647261,
				revenue: 1849316,
				mc: 1505120
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2233787,
				debt: 1068637,
				ebitda: 766086,
				revenue: 3064345,
				mc: 2599173
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2048203,
				debt: 208184,
				ebitda: 595126,
				revenue: 2380503,
				mc: 3169998
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Nostrud Digital',
	url: 'nostrud.co',
	description: 'Consequat ex sit ipsum et dolore. Amet nisi dolor non duis enim do incididunt ipsum sit. Exercitation cupidatat '
		+ 'nulla non culpa. Nisi sit nostrud deserunt magna sint.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Nohemi',
				last: 'Kee'
			},
			position: 'President',
			phone: '(142) 545-4143',
			email: 'nkee@nostrud.co'
		},
		{
			name: {
				first: 'Earle',
				last: 'Moyle'
			},
			position: 'Vice President',
			phone: '(101) 712-7124',
			email: 'emoyle@nostrud.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 148737,
				debt: 150082,
				ebitda: 39809,
				revenue: 159235
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 177160,
				debt: 87541,
				ebitda: 78281,
				revenue: 313126
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 256588,
				debt: 173830,
				ebitda: 16348,
				revenue: 51087
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Nostrud Scientific',
	url: 'nostrud.co',
	description: 'Laborum quis mollit enim magna. Dolore sit dolore irure ex consequat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Osvaldo',
				last: 'Oiler'
			},
			position: 'CFO',
			phone: '(963) 355-7333',
			email: 'ooiler@nostrud.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1417489,
				debt: 1127816,
				ebitda: 693902,
				revenue: 1734756
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1215460,
				debt: 1300435,
				ebitda: 688885,
				revenue: 2755539
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 910924,
				debt: 1882139,
				ebitda: 905213,
				revenue: 3620850
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Commodo Labs',
	url: 'commodo.org',
	description: 'Commodo dolore dolor aliqua aliqua consectetur sunt. Nostrud officia cillum ut duis non sunt do reprehenderit. Sit '
		+ 'eu veniam sint id.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Julieann',
				last: 'Mccallister'
			},
			position: 'Vice President',
			phone: '(781) 336-5392',
			email: 'jmccallister@commodo.org'
		},
		{
			name: {
				first: 'Marlo',
				last: 'Reece'
			},
			position: 'CFO',
			phone: '(167) 035-4693',
			email: 'mreece@commodo.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1251420,
				debt: 1543441,
				ebitda: 373925,
				revenue: 1206210
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1056795,
				debt: 2404754,
				ebitda: 375128,
				revenue: 937819
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 874067,
				debt: 3093982,
				ebitda: 339733,
				revenue: 1358933
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Incididunt Nostrud Digital',
	url: 'incididuntnostrud.net',
	description: 'Commodo non culpa nostrud sint. Reprehenderit ea ipsum ex occaecat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Milagro',
				last: 'Hou'
			},
			position: 'CEO',
			phone: '(806) 880-2453',
			email: 'mhou@incididuntnostrud.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 151295,
				debt: 144935,
				ebitda: 38317,
				revenue: 153269,
				mc: 167158
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 72895,
				debt: 146264,
				ebitda: 58210,
				revenue: 232840,
				mc: 188122
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 84885,
				debt: 1214,
				ebitda: 27828,
				revenue: 111313,
				mc: 199993
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Eu Aute Specialties',
	url: 'euaute.net',
	description: 'Aliquip veniam voluptate eiusmod esse. Eu et elit ipsum ex. Commodo do nulla consequat fugiat adipisicing.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Kennard'
			},
			position: 'Vice President',
			phone: '(418) 381-8115',
			email: 'lkennard@euaute.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 169683,
				debt: 198121,
				ebitda: 48521,
				revenue: 194084
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 23055,
				debt: 94667,
				ebitda: 1239,
				revenue: 3645
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 11172,
				debt: 166348,
				ebitda: 448,
				revenue: 1794
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Reprehenderit ea Services',
	url: 'reprehenderitea.co',
	description: 'Commodo ullamco irure incididunt sit labore qui enim. Cupidatat ipsum eu ipsum non.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bradford',
				last: 'Lariviere'
			},
			position: 'Vice President',
			phone: '(559) 788-5572',
			email: 'blariviere@reprehenderitea.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1424392,
				debt: 1125057,
				ebitda: 315833,
				revenue: 1263332
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1917590,
				debt: 504880,
				ebitda: 271840,
				revenue: 755111
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2730535,
				debt: 585237,
				ebitda: 328157,
				revenue: 1312627
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Labore Unlimited',
	url: 'labore.net',
	description: 'Est et excepteur ea sint dolore voluptate minim. Anim consequat sunt mollit incididunt qui commodo Lorem ea. '
		+ 'Cillum sit magna excepteur ex.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(020) 198-7845',
			email: 'bzahl@labore.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 110693,
				debt: 146761,
				ebitda: 40153,
				revenue: 160613
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 46489,
				debt: 227832,
				ebitda: 74356,
				revenue: 218695
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 23997,
				debt: 65186,
				ebitda: 43249,
				revenue: 131058
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Sunt do Creative',
	url: 'suntdo.net',
	description: 'Nulla laboris Lorem non dolore laboris Lorem elit. Est veniam tempor cillum ipsum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Ruckman'
			},
			position: 'President',
			phone: '(127) 157-7707',
			email: 'cruckman@suntdo.net'
		},
		{
			name: {
				first: 'Sergio',
				last: 'Giard'
			},
			position: 'CEO',
			phone: '(179) 721-3153',
			email: 'sgiard@suntdo.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 119619,
				debt: 120494,
				ebitda: 48331,
				revenue: 123926
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 12171,
				debt: 189139,
				ebitda: 11545,
				revenue: 31203
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 19037,
				debt: 247524,
				ebitda: 6445,
				revenue: 25782
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Pariatur Specialties',
	url: 'pariatur.co',
	description: 'Sit commodo duis officia non adipisicing. Consectetur culpa sint magna quis. Fugiat magna adipisicing est sit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Rudman'
			},
			position: 'President',
			phone: '(000) 443-3093',
			email: 'lrudman@pariatur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 193517,
				debt: 136712,
				ebitda: 34374,
				revenue: 137495
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 343114,
				debt: 236261,
				ebitda: 9966,
				revenue: 39863
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 271760,
				debt: 66395,
				ebitda: 3243,
				revenue: 12974
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Aliqua Inc.',
	url: 'aliqua.net',
	description: 'Pariatur esse pariatur laboris occaecat officia adipisicing. Culpa et qui culpa proident.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Kelli',
				last: 'Breitenstein'
			},
			position: 'President',
			phone: '(229) 484-3995',
			email: 'kbreitenstein@aliqua.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 127573,
				debt: 173012,
				ebitda: 55664,
				revenue: 159039
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 245347,
				debt: 111162,
				ebitda: 64586,
				revenue: 258346
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 36880,
				debt: 80375,
				ebitda: 42018,
				revenue: 161609
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Ipsum Limited',
	url: 'ipsum.net',
	description: 'Adipisicing id est culpa velit est qui fugiat et. Velit velit cupidatat nostrud fugiat amet in. Proident enim '
		+ 'laborum culpa est cillum elit Lorem nostrud fugiat. Proident veniam magna sit laboris nulla non aliquip eiusmod.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Dutra'
			},
			position: 'Vice President',
			phone: '(551) 508-2427',
			email: 'udutra@ipsum.net'
		},
		{
			name: {
				first: 'Kelli',
				last: 'Andrea'
			},
			position: 'President',
			phone: '(646) 109-7885',
			email: 'kandrea@ipsum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18765588,
				debt: 19226433,
				ebitda: 3488734,
				revenue: 12921237,
				mc: 13120035
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 20753792,
				debt: 10929501,
				ebitda: 4448113,
				revenue: 17792450,
				mc: 20852146
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 22024669,
				debt: 17198595,
				ebitda: 3396465,
				revenue: 13585861,
				mc: 14090610
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Reprehenderit Enterprises',
	url: 'reprehenderit.co',
	description: 'Enim minim aliquip deserunt sint. Elit consequat consectetur enim proident cupidatat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Rudman'
			},
			position: 'President',
			phone: '(545) 391-7344',
			email: 'srudman@reprehenderit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 180897,
				debt: 161529,
				ebitda: 43751,
				revenue: 175005,
				mc: 186241
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 295549,
				debt: 116992,
				ebitda: 28213,
				revenue: 76252,
				mc: 53282
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 401911,
				debt: 70728,
				ebitda: 11197,
				revenue: 44789,
				mc: 39226
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Consectetur Enterprises',
	url: 'consectetur.org',
	description: 'Sint id ad deserunt nisi. Id est cupidatat est voluptate. Officia adipisicing do voluptate adipisicing.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Emmett',
				last: 'Hou'
			},
			position: 'CFO',
			phone: '(569) 851-3116',
			email: 'ehou@consectetur.org'
		},
		{
			name: {
				first: 'Wilber',
				last: 'Lamarre'
			},
			position: 'President',
			phone: '(058) 286-2684',
			email: 'wlamarre@consectetur.org'
		},
		{
			name: {
				first: 'Diego',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(849) 389-8638',
			email: 'dzahl@consectetur.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1670036,
				debt: 1052853,
				ebitda: 307647,
				revenue: 1230589,
				mc: 1040655
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2025098,
				debt: 974602,
				ebitda: 283777,
				revenue: 1135108,
				mc: 2072529
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3351910,
				debt: 554470,
				ebitda: 233409,
				revenue: 933636,
				mc: 3010768
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Et Occaecat Solutions',
	url: 'etoccaecat.net',
	description: 'Culpa occaecat aliquip et exercitation deserunt veniam nostrud labore. Tempor consectetur incididunt ex dolor.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Hains'
			},
			position: 'CFO',
			phone: '(418) 214-4150',
			email: 'jhains@etoccaecat.net'
		},
		{
			name: {
				first: 'Bradford',
				last: 'Tallarico'
			},
			position: 'CEO',
			phone: '(548) 043-9077',
			email: 'btallarico@etoccaecat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 153136,
				debt: 170133,
				ebitda: 25947,
				revenue: 103786,
				mc: 141144
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 237362,
				debt: 168674,
				ebitda: 40434,
				revenue: 161734,
				mc: 96120
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 381132,
				debt: 279784,
				ebitda: 77788,
				revenue: 259294,
				mc: 83060
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Deserunt Dynamics',
	url: 'deserunt.net',
	description: 'Ipsum officia sint quis eu. Minim ullamco aute aliqua ad. Dolore esse pariatur in est esse. Aute cillum sit '
		+ 'reprehenderit nostrud.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Andrea'
			},
			position: 'President',
			phone: '(040) 855-2117',
			email: 'bandrea@deserunt.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18150373,
				debt: 19031739,
				ebitda: 4415244,
				revenue: 17660974
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 14035220,
				debt: 28649395,
				ebitda: 5104688,
				revenue: 20418753
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 14539470,
				debt: 54874721,
				ebitda: 6730812,
				revenue: 26923250
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Laborum & Co.',
	url: 'laborum.co',
	description: 'Sit eu dolore sit nisi. Lorem commodo nostrud exercitation ex.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Nicole',
				last: 'Keala'
			},
			position: 'Vice President',
			phone: '(971) 664-8258',
			email: 'nkeala@laborum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 165673,
				debt: 130331,
				ebitda: 44052,
				revenue: 176209,
				mc: 147042
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 64247,
				debt: 163639,
				ebitda: 77575,
				revenue: 209662,
				mc: 119745
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 91891,
				debt: 243064,
				ebitda: 6258,
				revenue: 19557,
				mc: 84411
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Eiusmod Nisi Group',
	url: 'eiusmodnisi.net',
	description: 'Mollit culpa aliqua consequat sint enim fugiat. Quis anim non irure aute.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Lamarre'
			},
			position: 'Vice President',
			phone: '(672) 170-6948',
			email: 'slamarre@eiusmodnisi.net'
		},
		{
			name: {
				first: 'Mirian',
				last: 'Dutra'
			},
			position: 'CFO',
			phone: '(320) 651-7395',
			email: 'mdutra@eiusmodnisi.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1402908,
				debt: 1997902,
				ebitda: 443734,
				revenue: 1774937
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 893125,
				debt: 1037818,
				ebitda: 498590,
				revenue: 1994361
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 850553,
				debt: 1954960,
				ebitda: 660820,
				revenue: 2643281
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Reprehenderit Unlimited',
	url: 'reprehenderit.net',
	description: 'Cillum qui tempor nostrud reprehenderit ad ea. Minim amet laborum duis ad. Veniam non eiusmod velit esse.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Tobie',
				last: 'Conte'
			},
			position: 'CEO',
			phone: '(236) 276-3316',
			email: 'tconte@reprehenderit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1542579,
				debt: 1356948,
				ebitda: 438400,
				revenue: 1217777
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 229568,
				debt: 1793286,
				ebitda: 130461,
				revenue: 521842
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 415627,
				debt: 576374,
				ebitda: 172962,
				revenue: 691849
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Culpa Dynamics',
	url: 'culpa.net',
	description: 'Pariatur ex incididunt consequat fugiat tempor proident Lorem. Ullamco aute aliquip ut ea pariatur incididunt.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Oiler'
			},
			position: 'President',
			phone: '(086) 898-2111',
			email: 'moiler@culpa.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1366647,
				debt: 1327430,
				ebitda: 265115,
				revenue: 1060458,
				mc: 1299591
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2576971,
				debt: 2468839,
				ebitda: 296793,
				revenue: 1187173,
				mc: 1346139
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3238610,
				debt: 3225756,
				ebitda: 149179,
				revenue: 596718,
				mc: 127763
			}
		}
	],
	status: Status.Researching
},
{
	name: 'Elit Lorem Specialties',
	url: 'elitlorem.co',
	description: 'In consequat quis id aliquip. Est sint magna duis ipsum eu fugiat nostrud.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Rudman'
			},
			position: 'Vice President',
			phone: '(676) 745-9679',
			email: 'crudman@elitlorem.co'
		},
		{
			name: {
				first: 'Nannie',
				last: 'Ellett'
			},
			position: 'President',
			phone: '(546) 700-9139',
			email: 'nellett@elitlorem.co'
		},
		{
			name: {
				first: 'Adelina',
				last: 'Mercado'
			},
			position: 'CFO',
			phone: '(356) 657-5507',
			email: 'amercado@elitlorem.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 16751705,
				debt: 17652931,
				ebitda: 3776989,
				revenue: 15107954,
				mc: 11227155
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 32407503,
				debt: 10276768,
				ebitda: 5155500,
				revenue: 18412501,
				mc: 7361929
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 49375005,
				debt: 3249379,
				ebitda: 8720372,
				revenue: 34881488,
				mc: 4432245
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Nostrud Unlimited',
	url: 'nostrud.org',
	description: 'Eiusmod ullamco ut nisi irure ex aliquip adipisicing. Sit excepteur est sunt duis.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Lariviere'
			},
			position: 'CEO',
			phone: '(505) 154-8538',
			email: 'alariviere@nostrud.org'
		},
		{
			name: {
				first: 'Nannie',
				last: 'Parkhill'
			},
			position: 'Vice President',
			phone: '(662) 771-2423',
			email: 'nparkhill@nostrud.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 116641,
				debt: 162489,
				ebitda: 45050,
				revenue: 155346,
				mc: 142336
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 199726,
				debt: 66544,
				ebitda: 8900,
				revenue: 29668,
				mc: 77295
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 330819,
				debt: 47886,
				ebitda: 6983,
				revenue: 21823,
				mc: 107866
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Voluptate Properties',
	url: 'voluptate.org',
	description: 'Eu officia deserunt excepteur eu magna aliquip cupidatat. Officia elit id anim fugiat. Ea non duis commodo '
		+ 'eiusmod.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Client'
			},
			position: 'CFO',
			phone: '(819) 777-8885',
			email: 'aclient@voluptate.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 18803042,
				debt: 19931293,
				ebitda: 5271357,
				revenue: 18826276,
				mc: 12374805
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 21869215,
				debt: 28375134,
				ebitda: 8802626,
				revenue: 35210505,
				mc: 12194385
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 33624308,
				debt: 642326,
				ebitda: 10991235,
				revenue: 43964940,
				mc: 20612509
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Aliqua Works',
	url: 'aliqua.net',
	description: 'Aute pariatur nostrud sint ad Lorem magna. Exercitation esse aliqua nostrud pariatur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Osvaldo',
				last: 'Mccallister'
			},
			position: 'President',
			phone: '(548) 794-0907',
			email: 'omccallister@aliqua.net'
		},
		{
			name: {
				first: 'Jin',
				last: 'Demoura'
			},
			position: 'Vice President',
			phone: '(543) 815-9498',
			email: 'jdemoura@aliqua.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1893701,
				debt: 1584513,
				ebitda: 399430,
				revenue: 1597718
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2986139,
				debt: 1586732,
				ebitda: 164236,
				revenue: 656945
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2704426,
				debt: 322410,
				ebitda: 34111,
				revenue: 136444
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Fugiat Creative',
	url: 'fugiat.co',
	description: 'Ea quis excepteur qui cupidatat. Voluptate ullamco ea reprehenderit aliquip quis. Non mollit aute dolor minim.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Nagata'
			},
			position: 'President',
			phone: '(478) 175-3442',
			email: 'dnagata@fugiat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 126149,
				debt: 124454,
				ebitda: 47724,
				revenue: 190896,
				mc: 121511
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 98898,
				debt: 165914,
				ebitda: 19641,
				revenue: 78566,
				mc: 228317
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 179934,
				debt: 26980,
				ebitda: 50181,
				revenue: 135624,
				mc: 256875
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Occaecat Properties',
	url: 'occaecat.co',
	description: 'Fugiat eu ex tempor elit. Quis ex enim reprehenderit dolor. Voluptate qui anim aute irure occaecat pariatur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Leona',
				last: 'Jeffords'
			},
			position: 'Vice President',
			phone: '(283) 652-1148',
			email: 'ljeffords@occaecat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 154396,
				debt: 110355,
				ebitda: 35739,
				revenue: 142957
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 302715,
				debt: 85054,
				ebitda: 17187,
				revenue: 68749
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 431813,
				debt: 1850,
				ebitda: 13119,
				revenue: 37482
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Occaecat LLC',
	url: 'occaecat.net',
	description: 'Ipsum culpa anim dolore in. Incididunt laborum amet proident eu qui sit in.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Jin',
				last: 'Rudman'
			},
			position: 'Vice President',
			phone: '(604) 882-7172',
			email: 'jrudman@occaecat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 124529,
				debt: 119266,
				ebitda: 53977,
				revenue: 199913
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 101586,
				debt: 150768,
				ebitda: 57662,
				revenue: 230648
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 159231,
				debt: 17938,
				ebitda: 91811,
				revenue: 367242
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Fugiat Creative',
	url: 'fugiat.net',
	description: 'Occaecat qui occaecat sunt amet consequat. Qui et incididunt sunt velit. Ex excepteur amet id commodo. Commodo '
		+ 'officia ex labore ut magna mollit amet.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Brady',
				last: 'Demoura'
			},
			position: 'CEO',
			phone: '(874) 821-1743',
			email: 'bdemoura@fugiat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 199598,
				debt: 131042,
				ebitda: 36668,
				revenue: 146673
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 327242,
				debt: 220144,
				ebitda: 47032,
				revenue: 188129
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 328774,
				debt: 419335,
				ebitda: 68539,
				revenue: 175740
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Nulla Partners',
	url: 'nulla.org',
	description: 'Ipsum ut sit dolore fugiat aliqua consequat. Consequat officia excepteur veniam excepteur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lelah',
				last: 'Kinard'
			},
			position: 'Vice President',
			phone: '(744) 331-8278',
			email: 'lkinard@nulla.org'
		},
		{
			name: {
				first: 'Nicole',
				last: 'Woodie'
			},
			position: 'President',
			phone: '(623) 535-3454',
			email: 'nwoodie@nulla.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 195103,
				debt: 163467,
				ebitda: 38203,
				revenue: 152813
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 160969,
				debt: 280189,
				ebitda: 14378,
				revenue: 39939
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 13091,
				debt: 126542,
				ebitda: 13258,
				revenue: 53031
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Proident Holdings',
	url: 'proident.org',
	description: 'Do non enim sit cupidatat. Consectetur commodo et ex ipsum. Mollit elit fugiat aute id commodo. Elit irure mollit '
		+ 'ex incididunt do ullamco irure.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Sones'
			},
			position: 'CEO',
			phone: '(517) 134-3405',
			email: 'asones@proident.org'
		},
		{
			name: {
				first: 'Ching',
				last: 'Castagna'
			},
			position: 'CFO',
			phone: '(762) 247-2103',
			email: 'ccastagna@proident.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1679129,
				debt: 1688522,
				ebitda: 399533,
				revenue: 1109814
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1979642,
				debt: 3143994,
				ebitda: 170278,
				revenue: 608135
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1325873,
				debt: 2439926,
				ebitda: 196584,
				revenue: 655279
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Eiusmod Services',
	url: 'eiusmod.co',
	description: 'Fugiat enim proident commodo ut. Proident eu eu exercitation nostrud culpa in laborum cillum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Koppes'
			},
			position: 'Vice President',
			phone: '(285) 223-3254',
			email: 'lkoppes@eiusmod.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 122123,
				debt: 184407,
				ebitda: 36913,
				revenue: 147653
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 119099,
				debt: 13311,
				ebitda: 12265,
				revenue: 49059
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 171062,
				debt: 5549,
				ebitda: 7215,
				revenue: 28859
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Velit Veniam Ventures',
	url: 'velitveniam.net',
	description: 'Sunt nulla exercitation ut velit enim ullamco officia amet excepteur. Amet cupidatat excepteur sunt aute labore '
		+ 'laboris amet ullamco incididunt.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Suzi',
				last: 'Alegria'
			},
			position: 'President',
			phone: '(148) 199-9079',
			email: 'salegria@velitveniam.net'
		},
		{
			name: {
				first: 'Emmett',
				last: 'Woodie'
			},
			position: 'CEO',
			phone: '(811) 994-9618',
			email: 'ewoodie@velitveniam.net'
		},
		{
			name: {
				first: 'Bridgett',
				last: 'Kee'
			},
			position: 'Vice President',
			phone: '(448) 728-4167',
			email: 'bkee@velitveniam.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 159432,
				debt: 116086,
				ebitda: 48385,
				revenue: 193539
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 270208,
				debt: 84642,
				ebitda: 81381,
				revenue: 325525
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 295370,
				debt: 27473,
				ebitda: 224995,
				revenue: 624985
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Aliquip Logistics',
	url: 'aliquip.net',
	description: 'Est dolore aliqua enim laboris aliquip commodo reprehenderit reprehenderit. Fugiat occaecat reprehenderit nulla do '
		+ 'laborum eiusmod.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(762) 817-1918',
			email: 'dzahl@aliquip.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 12950152,
				debt: 14886242,
				ebitda: 4502274,
				revenue: 18009097
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 935635,
				debt: 21867274,
				ebitda: 10559176,
				revenue: 32997426
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1287246,
				debt: 41532258,
				ebitda: 7515222,
				revenue: 30060888
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Dolore Digital',
	url: 'dolore.co',
	description: 'Ipsum eu consequat labore consequat. Anim aliqua ipsum ea laboris consequat occaecat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Ileen',
				last: 'Castagna'
			},
			position: 'CEO',
			phone: '(390) 621-8703',
			email: 'icastagna@dolore.co'
		},
		{
			name: {
				first: 'Deeann',
				last: 'Moyle'
			},
			position: 'President',
			phone: '(254) 673-7436',
			email: 'dmoyle@dolore.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 109639,
				debt: 158897,
				ebitda: 30982,
				revenue: 119162,
				mc: 128136
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 71363,
				debt: 178109,
				ebitda: 23283,
				revenue: 93130,
				mc: 105997
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 133962,
				debt: 66667,
				ebitda: 5135,
				revenue: 20539,
				mc: 85340
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Non Proident Innovations',
	url: 'nonproident.net',
	description: 'Sit eu sunt dolor consectetur. Nostrud ut sint ipsum anim.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Mirian',
				last: 'Hou'
			},
			position: 'President',
			phone: '(415) 120-9232',
			email: 'mhou@nonproident.net'
		},
		{
			name: {
				first: 'Nicole',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(936) 250-3214',
			email: 'nmercado@nonproident.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1696483,
				debt: 1731883,
				ebitda: 623827,
				revenue: 1782362
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 3264049,
				debt: 3342429,
				ebitda: 41008,
				revenue: 164034
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 6083797,
				debt: 6441238,
				ebitda: 70917,
				revenue: 228763
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Aliquip Development',
	url: 'aliquip.com',
	description: 'Minim aliqua sit consequat exercitation deserunt est reprehenderit tempor eu. Culpa minim nisi sint minim aliqua. '
		+ 'Irure officia velit id amet anim est aliqua. Ex nostrud enim id ad.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Jeffords'
			},
			position: 'Vice President',
			phone: '(918) 558-8767',
			email: 'mjeffords@aliquip.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1187211,
				debt: 1556407,
				ebitda: 482453,
				revenue: 1929813
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 858526,
				debt: 1764093,
				ebitda: 415013,
				revenue: 1660051
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 629013,
				debt: 1609312,
				ebitda: 45441,
				revenue: 146584
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Labore Pariatur Consulting',
	url: 'laborepariatur.co',
	description: 'Dolore magna nostrud anim adipisicing do aliqua nisi exercitation. Ad in est sunt labore dolore. In excepteur '
		+ 'cupidatat fugiat exercitation.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Hellen'
			},
			position: 'CEO',
			phone: '(603) 327-7715',
			email: 'dhellen@laborepariatur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 141579,
				debt: 138136,
				ebitda: 44025,
				revenue: 146749
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 5095,
				debt: 22817,
				ebitda: 71558,
				revenue: 286231
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 5659,
				debt: 11382,
				ebitda: 58568,
				revenue: 234273
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Amet Anim Group',
	url: 'ametanim.net',
	description: 'Commodo ipsum ex ut elit. Excepteur ullamco proident anim commodo elit ipsum.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ileen',
				last: 'Ellett'
			},
			position: 'CEO',
			phone: '(203) 779-0636',
			email: 'iellett@ametanim.net'
		},
		{
			name: {
				first: 'Julieann',
				last: 'Keala'
			},
			position: 'President',
			phone: '(477) 553-3554',
			email: 'jkeala@ametanim.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1282746,
				debt: 1363707,
				ebitda: 285944,
				revenue: 1143774
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1411205,
				debt: 2629918,
				ebitda: 221675,
				revenue: 886701
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1107859,
				debt: 1633113,
				ebitda: 456768,
				revenue: 1473447
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Minim Properties',
	url: 'minim.com',
	description: 'Nostrud culpa dolor Lorem elit aliqua. Laboris est tempor proident eu.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ching',
				last: 'Rudman'
			},
			position: 'CFO',
			phone: '(638) 453-9827',
			email: 'crudman@minim.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 117057,
				debt: 151594,
				ebitda: 51907,
				revenue: 192249
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 68264,
				debt: 234137,
				ebitda: 93379,
				revenue: 259385
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 71274,
				debt: 318406,
				ebitda: 90324,
				revenue: 361297
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Ullamco Group',
	url: 'ullamco.net',
	description: 'Irure adipisicing duis commodo ipsum. Est excepteur excepteur Lorem et. Aute occaecat officia laboris ea.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Malisa',
				last: 'Anderton'
			},
			position: 'Vice President',
			phone: '(258) 842-1435',
			email: 'manderton@ullamco.net'
		},
		{
			name: {
				first: 'Marlo',
				last: 'Alegria'
			},
			position: 'CEO',
			phone: '(663) 823-3817',
			email: 'malegria@ullamco.net'
		},
		{
			name: {
				first: 'Sergio',
				last: 'Parkhill'
			},
			position: 'CFO',
			phone: '(575) 063-9630',
			email: 'sparkhill@ullamco.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 16697746,
				debt: 14818936,
				ebitda: 2764004,
				revenue: 10630786,
				mc: 14755932
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 29855694,
				debt: 17831595,
				ebitda: 3854387,
				revenue: 15417549,
				mc: 8531245
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 5579088,
				debt: 28436955,
				ebitda: 7413934,
				revenue: 29655736,
				mc: 16890179
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Lorem Unlimited',
	url: 'lorem.co',
	description: 'Cillum dolore qui incididunt mollit. Velit esse mollit non qui magna aute ad aliquip.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Barbera',
				last: 'Rudman'
			},
			position: 'President',
			phone: '(878) 967-2334',
			email: 'brudman@lorem.co'
		},
		{
			name: {
				first: 'Sergio',
				last: 'Leland'
			},
			position: 'Vice President',
			phone: '(262) 747-1052',
			email: 'sleland@lorem.co'
		},
		{
			name: {
				first: 'Barbera',
				last: 'Kennard'
			},
			position: 'CFO',
			phone: '(989) 170-4784',
			email: 'bkennard@lorem.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 185552,
				debt: 107427,
				ebitda: 36658,
				revenue: 146633
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 299054,
				debt: 114123,
				ebitda: 27399,
				revenue: 109597
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 68327,
				debt: 142537,
				ebitda: 37562,
				revenue: 150250
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Laboris Scientific',
	url: 'laboris.org',
	description: 'Lorem dolore ipsum anim cupidatat. Dolore do aliqua nisi exercitation.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Breitenstein'
			},
			position: 'President',
			phone: '(103) 847-2314',
			email: 'fbreitenstein@laboris.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1130045,
				debt: 1859827,
				ebitda: 455740,
				revenue: 1822958
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2186690,
				debt: 2643838,
				ebitda: 1053936,
				revenue: 3634262
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3024908,
				debt: 4676713,
				ebitda: 328141,
				revenue: 1312564
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Qui Deserunt Ventures',
	url: 'quideserunt.org',
	description: 'Non do nulla pariatur elit. Occaecat velit incididunt eu commodo. Laborum adipisicing veniam officia adipisicing.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Nannie',
				last: 'Mccallister'
			},
			position: 'CEO',
			phone: '(561) 812-6745',
			email: 'nmccallister@quideserunt.org'
		},
		{
			name: {
				first: 'Diego',
				last: 'Towle'
			},
			position: 'CFO',
			phone: '(352) 515-0366',
			email: 'dtowle@quideserunt.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 171254,
				debt: 185958,
				ebitda: 31672,
				revenue: 126690
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 68042,
				debt: 264294,
				ebitda: 37278,
				revenue: 149113
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 79530,
				debt: 401265,
				ebitda: 78467,
				revenue: 217964
			}
		}
	],
	status: Status.Approved
},
{
	name: 'Excepteur Services',
	url: 'excepteur.co',
	description: 'Ipsum ut cillum cillum do. Adipisicing ipsum tempor laborum qui.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Kennard'
			},
			position: 'CEO',
			phone: '(856) 904-9632',
			email: 'bkennard@excepteur.co'
		},
		{
			name: {
				first: 'Barbera',
				last: 'Tallarico'
			},
			position: 'CFO',
			phone: '(412) 631-1679',
			email: 'btallarico@excepteur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 157752,
				debt: 126097,
				ebitda: 39924,
				revenue: 159695
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 287771,
				debt: 16526,
				ebitda: 9789,
				revenue: 39158
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1268,
				debt: 18191,
				ebitda: 15966,
				revenue: 49894
			}
		}
	],
	status: Status.Pending
},
{
	name: 'Reprehenderit Works',
	url: 'reprehenderit.co',
	description: 'Exercitation amet minim anim pariatur. Incididunt commodo dolor laboris ex.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Demoura'
			},
			position: 'CEO',
			phone: '(888) 991-1171',
			email: 'sdemoura@reprehenderit.co'
		},
		{
			name: {
				first: 'Brady',
				last: 'Jeffords'
			},
			position: 'President',
			phone: '(728) 324-5017',
			email: 'bjeffords@reprehenderit.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 12051758,
				debt: 13186990,
				ebitda: 4228200,
				revenue: 15100715
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 4520906,
				debt: 13912790,
				ebitda: 9755600,
				revenue: 28692940
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 5297806,
				debt: 3756059,
				ebitda: 2407068,
				revenue: 6171968
			}
		}
	],
	status: Status.Declined
},
{
	name: 'Officia Enterprises',
	url: 'officia.com',
	description: 'Ullamco id adipisicing minim sit. Fugiat consectetur duis dolore mollit proident. Sunt consectetur aute dolore '
		+ 'culpa.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Hector',
				last: 'Zahl'
			},
			position: 'President',
			phone: '(241) 414-3297',
			email: 'hzahl@officia.com'
		},
		{
			name: {
				first: 'Ching',
				last: 'Perron'
			},
			position: 'Vice President',
			phone: '(260) 538-6403',
			email: 'cperron@officia.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 133439,
				debt: 170702,
				ebitda: 37054,
				revenue: 148214,
				mc: 179657
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 233172,
				debt: 25007,
				ebitda: 15533,
				revenue: 62134,
				mc: 254869
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 180189,
				debt: 18862,
				ebitda: 14341,
				revenue: 37739,
				mc: 60545
			}
		}
	],
	status: Status.Approved
},
];

export default companies;
