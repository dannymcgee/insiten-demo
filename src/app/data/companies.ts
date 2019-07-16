import { Status } from '@data/status.model';

const companies = [
{
	id: 'oSfvS7bJCjqtgbOqdPPK1KOqPvvmFiLD',
	name: 'Consequat Ventures',
	url: 'consequat.co',
	description: 'Nulla aute enim magna consequat. Dolore nisi aliquip ullamco commodo. Occaecat excepteur velit est nulla.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Leona',
				last: 'Giard'
			},
			position: 'President',
			phone: '(570) 579-8673',
			email: 'lgiard@consequat.co'
		},
		{
			name: {
				first: 'Leona',
				last: 'Castagna'
			},
			position: 'CEO',
			phone: '(351) 511-6366',
			email: 'lcastagna@consequat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1494378,
				debt: 1145864,
				revenue: 1846322,
				ebitda: 572360
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2148087,
				debt: 577756,
				revenue: 2217693,
				ebitda: 554423
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2523682,
				debt: 470429,
				revenue: 1234776,
				ebitda: 308694
			}
		}
	],
	status: Status.Pending
},
{
	id: 'MQyQmDpF9B5XV8N2HfMSsTxufhmboyBg',
	name: 'Labore Consulting',
	url: 'labore.net',
	description: 'Esse adipisicing incididunt nulla est. Nisi voluptate irure et proident commodo deserunt consequat nostrud ea.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Kandis',
				last: 'Breitenstein'
			},
			position: 'Vice President',
			phone: '(787) 787-8624',
			email: 'kbreitenstein@labore.net'
		},
		{
			name: {
				first: 'Nohemi',
				last: 'Rudman'
			},
			position: 'CEO',
			phone: '(527) 270-8567',
			email: 'nrudman@labore.net'
		},
		{
			name: {
				first: 'Suzi',
				last: 'Woodie'
			},
			position: 'President',
			phone: '(974) 012-1400',
			email: 'swoodie@labore.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 113844,
				debt: 183222,
				revenue: 170275,
				ebitda: 42569
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 87303,
				debt: 68509,
				revenue: 94917,
				ebitda: 23729
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 86338,
				debt: 28222,
				revenue: 14469,
				ebitda: 4919
			}
		}
	],
	status: Status.Pending
},
{
	id: 'cifl1pEp8IenChFycnL8rTq7BLYlFfmg',
	name: 'Nulla Properties',
	url: 'nulla.net',
	description: 'Do quis id et cillum. Deserunt occaecat qui laborum amet sint.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Milagro',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(257) 883-5937',
			email: 'mmercado@nulla.net'
		},
		{
			name: {
				first: 'Stefani',
				last: 'Alegria'
			},
			position: 'President',
			phone: '(131) 956-9693',
			email: 'salegria@nulla.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1021072,
				debt: 1236744,
				revenue: 1780242,
				ebitda: 640887,
				mc: 1950219
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 937447,
				debt: 282044,
				revenue: 1075210,
				ebitda: 322563,
				mc: 385431
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1822392,
				debt: 460950,
				revenue: 60480,
				ebitda: 15120,
				mc: 256274
			}
		}
	],
	status: Status.Researching
},
{
	id: 'E8ZQM7i2l3nwDU37wv4PaiXoMnKRTmH6',
	name: 'Tempor Holdings',
	url: 'tempor.net',
	description: 'Sunt incididunt irure ea qui enim proident fugiat ad. Et esse nulla fugiat officia.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Kandis',
				last: 'Hunte'
			},
			position: 'CFO',
			phone: '(013) 306-0872',
			email: 'khunte@tempor.net'
		},
		{
			name: {
				first: 'Earle',
				last: 'Leland'
			},
			position: 'Vice President',
			phone: '(583) 554-3182',
			email: 'eleland@tempor.net'
		},
		{
			name: {
				first: 'Kandis',
				last: 'Hellen'
			},
			position: 'President',
			phone: '(971) 757-5012',
			email: 'khellen@tempor.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 14932125,
				debt: 17325283,
				revenue: 10024124,
				ebitda: 2506031
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 3128081,
				debt: 14077216,
				revenue: 2561689,
				ebitda: 640422
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1169244,
				debt: 18765297,
				revenue: 731727,
				ebitda: 182932
			}
		}
	],
	status: Status.Researching
},
{
	id: 'm2aVLfgRhvsCN6LdxOqEeZDuq0scdNk9',
	name: 'Fugiat Scientific',
	url: 'fugiat.net',
	description: 'In ad est cillum sint. Officia exercitation adipisicing sunt nisi.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Fleta',
				last: 'Jeffords'
			},
			position: 'President',
			phone: '(614) 723-3081',
			email: 'fjeffords@fugiat.net'
		},
		{
			name: {
				first: 'Malisa',
				last: 'Perron'
			},
			position: 'CEO',
			phone: '(405) 619-3376',
			email: 'mperron@fugiat.net'
		},
		{
			name: {
				first: 'Fidelia',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(465) 788-2152',
			email: 'fzahl@fugiat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 13402465,
				debt: 14142931,
				revenue: 18889371,
				ebitda: 4722343
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 213688,
				debt: 4068612,
				revenue: 11660277,
				ebitda: 4197700
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 152272,
				debt: 6203148,
				revenue: 6383183,
				ebitda: 1595796
			}
		}
	],
	status: Status.Pending
},
{
	id: 'UCewE8DcVsUj6NfmrOujxQVJZeVwJOPd',
	name: 'Adipisicing Holdings',
	url: 'adipisicing.co',
	description: 'Eu incididunt adipisicing deserunt eiusmod. Nisi minim ut aute ut labore.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(758) 652-3826',
			email: 'lzahl@adipisicing.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 16044906,
				debt: 12985854,
				revenue: 11262020,
				ebitda: 4392188
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 13265116,
				debt: 3400894,
				revenue: 22398955,
				ebitda: 5599739
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 382344,
				debt: 2593124,
				revenue: 26223642,
				ebitda: 10227220
			}
		}
	],
	status: Status.Approved
},
{
	id: 'Uhkz1CBbV2WNvHk4wHRFpHYs2m2LWKPa',
	name: 'Aliqua Ventures',
	url: 'aliqua.org',
	description: 'Incididunt laborum enim eu adipisicing commodo officia eu velit. Adipisicing sit Lorem ullamco officia. Cillum '
		+ 'tempor eiusmod aute cupidatat. Tempor exercitation occaecat officia ipsum ut sunt.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Alegria'
			},
			position: 'President',
			phone: '(323) 238-4032',
			email: 'dalegria@aliqua.org'
		},
		{
			name: {
				first: 'Diego',
				last: 'Lantz'
			},
			position: 'Vice President',
			phone: '(138) 709-4583',
			email: 'dlantz@aliqua.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 10753304,
				debt: 12586804,
				revenue: 19902201,
				ebitda: 4975550,
				mc: 19454498
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 17730806,
				debt: 23411630,
				revenue: 23311162,
				ebitda: 5827791,
				mc: 7215179
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 10711528,
				debt: 12749477,
				revenue: 24686721,
				ebitda: 6171680,
				mc: 8346836
			}
		}
	],
	status: Status.Pending
},
{
	id: 'QVpKLumdLW8vPEODrXQqqHP0NsyxquEw',
	name: 'Cupidatat Consulting',
	url: 'cupidatat.com',
	description: 'Excepteur reprehenderit in irure consequat. Nisi esse ipsum officia cillum. Anim cupidatat exercitation incididunt '
		+ 'consequat voluptate incididunt cillum consectetur culpa.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Earle',
				last: 'Pridgeon'
			},
			position: 'Vice President',
			phone: '(253) 838-9451',
			email: 'epridgeon@cupidatat.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 147833,
				debt: 146798,
				revenue: 174026,
				ebitda: 60909
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 250299,
				debt: 243997,
				revenue: 306256,
				ebitda: 76564
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 62120,
				debt: 130866,
				revenue: 202058,
				ebitda: 68700
			}
		}
	],
	status: Status.Pending
},
{
	id: 'oCcPzcUhjbWKqCVIsCwyKevI0tv8WVkR',
	name: 'Lorem Labs',
	url: 'lorem.co',
	description: 'Mollit do sunt irure Lorem. Deserunt commodo proident eu quis.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Parkhill'
			},
			position: 'CFO',
			phone: '(016) 318-4189',
			email: 'aparkhill@lorem.co'
		},
		{
			name: {
				first: 'Adelina',
				last: 'Dutra'
			},
			position: 'President',
			phone: '(719) 719-0178',
			email: 'adutra@lorem.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 110698,
				debt: 192913,
				revenue: 105252,
				ebitda: 26313
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 52811,
				debt: 304215,
				revenue: 99991,
				ebitda: 24998
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 101468,
				debt: 366859,
				revenue: 172109,
				ebitda: 43027
			}
		}
	],
	status: Status.Approved
},
{
	id: 'dXF3gcK4tyqBXp2CVyKp9AA8uw0mpEWK',
	name: 'Tempor Commodo Group',
	url: 'temporcommodo.com',
	description: 'Dolore eiusmod fugiat incididunt culpa. Eu eiusmod cupidatat mollit duis.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Moyle'
			},
			position: 'Vice President',
			phone: '(284) 448-5784',
			email: 'jmoyle@temporcommodo.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 161281,
				debt: 101493,
				revenue: 130877,
				ebitda: 32719,
				mc: 198015
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 239527,
				debt: 128257,
				revenue: 29560,
				ebitda: 8572,
				mc: 34644
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 88573,
				debt: 93481,
				revenue: 54616,
				ebitda: 13654,
				mc: 44728
			}
		}
	],
	status: Status.Approved
},
{
	id: 'mIJSc01FCPxhTbyfuPENR5KS4y3n3SNy',
	name: 'Proident LLC',
	url: 'proident.co',
	description: 'Exercitation irure cupidatat cillum veniam. Tempor est pariatur exercitation commodo nulla nisi eiusmod. Aliqua '
		+ 'aute nisi exercitation proident aliqua veniam anim irure aliqua.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lashonda',
				last: 'Seabury'
			},
			position: 'President',
			phone: '(428) 754-7946',
			email: 'lseabury@proident.co'
		},
		{
			name: {
				first: 'Yoshiko',
				last: 'Sones'
			},
			position: 'Vice President',
			phone: '(823) 721-8551',
			email: 'ysones@proident.co'
		},
		{
			name: {
				first: 'Joseph',
				last: 'Giard'
			},
			position: 'CFO',
			phone: '(782) 155-4857',
			email: 'jgiard@proident.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1246213,
				debt: 1929445,
				revenue: 1379916,
				ebitda: 344979
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2194354,
				debt: 1651423,
				revenue: 2175706,
				ebitda: 543927
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 4277148,
				debt: 182400,
				revenue: 92482,
				ebitda: 26820
			}
		}
	],
	status: Status.Approved
},
{
	id: '9FCq3Z0ScMcPEqYo6KobAH7Q0vwXWd3n',
	name: 'Pariatur Development',
	url: 'pariatur.org',
	description: 'Fugiat commodo aute dolore aute. Et incididunt et Lorem tempor fugiat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lucrecia',
				last: 'Cancel'
			},
			position: 'CFO',
			phone: '(552) 644-1161',
			email: 'lcancel@pariatur.org'
		},
		{
			name: {
				first: 'Fleta',
				last: 'Andrea'
			},
			position: 'President',
			phone: '(576) 985-3567',
			email: 'fandrea@pariatur.org'
		},
		{
			name: {
				first: 'Adelina',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(087) 956-0825',
			email: 'amercado@pariatur.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 137115,
				debt: 113493,
				revenue: 110111,
				ebitda: 36337
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 245863,
				debt: 77665,
				revenue: 208709,
				ebitda: 58438
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 253565,
				debt: 19890,
				revenue: 199034,
				ebitda: 49759
			}
		}
	],
	status: Status.Approved
},
{
	id: 'Qwv47eQpZ6F5rnJADGoiWQaOO00hsV4y',
	name: 'Irure Solutions',
	url: 'irure.org',
	description: 'Veniam aute dolore quis est. Officia dolor commodo nulla consectetur.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Puig'
			},
			position: 'Vice President',
			phone: '(185) 159-1754',
			email: 'spuig@irure.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1455788,
				debt: 1071546,
				revenue: 1502495,
				ebitda: 600998,
				mc: 1996688
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2243605,
				debt: 773976,
				revenue: 882761,
				ebitda: 220690,
				mc: 36792
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1614162,
				debt: 287302,
				revenue: 1585754,
				ebitda: 586729,
				mc: 52104
			}
		}
	],
	status: Status.Approved
},
{
	id: 'aDCGJwUjUd3qNuL7UvjH3wtTBqP64ndQ',
	name: 'Fugiat Brands',
	url: 'fugiat.org',
	description: 'Eu occaecat duis aliqua in deserunt in velit. Exercitation do exercitation cillum do ipsum officia aute anim '
		+ 'aliquip.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Castagna'
			},
			position: 'CFO',
			phone: '(667) 703-5868',
			email: 'bcastagna@fugiat.org'
		},
		{
			name: {
				first: 'Yoshiko',
				last: 'Seabury'
			},
			position: 'President',
			phone: '(942) 935-8590',
			email: 'yseabury@fugiat.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 194067,
				debt: 130844,
				revenue: 194662,
				ebitda: 60345
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 165671,
				debt: 218985,
				revenue: 238219,
				ebitda: 69083
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 256479,
				debt: 161306,
				revenue: 180589,
				ebitda: 45147
			}
		}
	],
	status: Status.Pending
},
{
	id: 'TXqHQoU8lKZjayYVPfkAHFRDYAawdwpO',
	name: 'Voluptate Ventures',
	url: 'voluptate.co',
	description: 'Mollit dolore fugiat sint dolor do ipsum nostrud. Elit id ullamco Lorem adipisicing proident et sit Lorem.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Mirian',
				last: 'Oiler'
			},
			position: 'President',
			phone: '(316) 049-7526',
			email: 'moiler@voluptate.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1767091,
				debt: 1509176,
				revenue: 1720067,
				ebitda: 481619
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2685411,
				debt: 1670465,
				revenue: 2767329,
				ebitda: 691832
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1432821,
				debt: 933965,
				revenue: 4627438,
				ebitda: 1619603
			}
		}
	],
	status: Status.Approved
},
{
	id: 'JZQ1cnvg0H2UdULgyPGC0BKahZRn75NV',
	name: 'Incididunt Inc.',
	url: 'incididunt.co',
	description: 'Laborum ex ullamco officia est. Amet nostrud nulla dolore incididunt culpa consequat nostrud. Labore adipisicing '
		+ 'nulla est elit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Bradford',
				last: 'Ellett'
			},
			position: 'Vice President',
			phone: '(831) 017-1112',
			email: 'bellett@incididunt.co'
		},
		{
			name: {
				first: 'Lela',
				last: 'Kee'
			},
			position: 'CFO',
			phone: '(679) 628-8981',
			email: 'lkee@incididunt.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1054025,
				debt: 1303900,
				revenue: 1090284,
				ebitda: 272571,
				mc: 1402725
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 57522,
				debt: 564539,
				revenue: 433174,
				ebitda: 164606,
				mc: 1936474
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 20753,
				debt: 386591,
				revenue: 349051,
				ebitda: 97734,
				mc: 95805
			}
		}
	],
	status: Status.Approved
},
{
	id: 'HdvmfSt03kBPvkCBrlMlilxicWnIDyxH',
	name: 'Tempor Scientific',
	url: 'tempor.org',
	description: 'Enim sunt voluptate ut quis. Est tempor elit nulla ad.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Diego',
				last: 'Blea'
			},
			position: 'Vice President',
			phone: '(711) 786-8430',
			email: 'dblea@tempor.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1102384,
				debt: 1859742,
				revenue: 1458900,
				ebitda: 364725
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 434672,
				debt: 1460979,
				revenue: 666635,
				ebitda: 166659
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 69134,
				debt: 2072151,
				revenue: 1195783,
				ebitda: 298946
			}
		}
	],
	status: Status.Approved
},
{
	id: '36ZohSo9Gz0ywUK3i716dpcLHCmo0SOL',
	name: 'Occaecat Inc.',
	url: 'occaecat.co',
	description: 'Id adipisicing consectetur do et consectetur veniam esse. Minim commodo exercitation amet velit dolore consequat '
		+ 'reprehenderit dolor.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Client'
			},
			position: 'President',
			phone: '(053) 343-2743',
			email: 'bclient@occaecat.co'
		},
		{
			name: {
				first: 'Nohemi',
				last: 'Parkhill'
			},
			position: 'CFO',
			phone: '(576) 445-8384',
			email: 'nparkhill@occaecat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 148286,
				debt: 193019,
				revenue: 105051,
				ebitda: 30465
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 237674,
				debt: 136611,
				revenue: 84534,
				ebitda: 21134
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 251514,
				debt: 260717,
				revenue: 153098,
				ebitda: 38275
			}
		}
	],
	status: Status.Researching
},
{
	id: 'vBvyJbzpINIwvBxMR8BPM87F5kpBvNwx',
	name: 'Reprehenderit Ventures',
	url: 'reprehenderit.net',
	description: 'Est mollit magna incididunt consequat. Irure exercitation consectetur in do.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Valarie',
				last: 'Leland'
			},
			position: 'President',
			phone: '(807) 433-3168',
			email: 'vleland@reprehenderit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1406172,
				debt: 1387323,
				revenue: 1359170,
				ebitda: 339793
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1801592,
				debt: 1569887,
				revenue: 1747280,
				ebitda: 436820
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3314915,
				debt: 2183937,
				revenue: 1703992,
				ebitda: 613437
			}
		}
	],
	status: Status.Pending
},
{
	id: 'FJPAtfrrdBgQHGN8IC50j7eugRdhMszc',
	name: 'Consectetur Creative',
	url: 'consectetur.net',
	description: 'Veniam Lorem esse eu veniam adipisicing incididunt. Cillum ea deserunt fugiat labore culpa. Lorem irure est anim '
		+ 'dolore non aliqua. Eiusmod ipsum veniam eiusmod anim.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Sergio',
				last: 'Andrea'
			},
			position: 'President',
			phone: '(577) 386-5505',
			email: 'sandrea@consectetur.net'
		},
		{
			name: {
				first: 'Jin',
				last: 'Conte'
			},
			position: 'Vice President',
			phone: '(491) 249-5852',
			email: 'jconte@consectetur.net'
		},
		{
			name: {
				first: 'Veola',
				last: 'Blea'
			},
			position: 'CEO',
			phone: '(283) 814-4617',
			email: 'vblea@consectetur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 19303692,
				debt: 16724441,
				revenue: 10449842,
				ebitda: 2612460,
				mc: 19068147
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 9708851,
				debt: 14375260,
				revenue: 14521913,
				ebitda: 5518327,
				mc: 12215092
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 5523536,
				debt: 21952554,
				revenue: 17667124,
				ebitda: 6360165,
				mc: 13108179
			}
		}
	],
	status: Status.Declined
},
{
	id: 'Kx6RBhXGg5AgDCGCdBSnyFMZRfoyKD7S',
	name: 'Reprehenderit Esse Dynamics',
	url: 'reprehenderitesse.com',
	description: 'Cupidatat velit eu culpa eiusmod veniam Lorem magna. Nulla nostrud enim dolor ex.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Jin',
				last: 'Puig'
			},
			position: 'CFO',
			phone: '(966) 981-7006',
			email: 'jpuig@reprehenderitesse.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1835375,
				debt: 1771161,
				revenue: 1382671,
				ebitda: 345668
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2901580,
				debt: 1199590,
				revenue: 1534394,
				ebitda: 383599
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 5355562,
				debt: 652535,
				revenue: 2435068,
				ebitda: 657468
			}
		}
	],
	status: Status.Researching
},
{
	id: 'NGHKlmJI6juPIGPKLdSFO01RPle9rMql',
	name: 'Nostrud Dynamics',
	url: 'nostrud.com',
	description: 'Et ipsum laborum fugiat do. Mollit fugiat amet anim esse.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Oma',
				last: 'Jeffords'
			},
			position: 'President',
			phone: '(555) 571-7471',
			email: 'ojeffords@nostrud.com'
		},
		{
			name: {
				first: 'Joseph',
				last: 'Sones'
			},
			position: 'Vice President',
			phone: '(624) 246-7412',
			email: 'jsones@nostrud.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 176538,
				debt: 158514,
				revenue: 198377,
				ebitda: 67448
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 194691,
				debt: 15640,
				revenue: 320535,
				ebitda: 83339
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 361888,
				debt: 25849,
				revenue: 549363,
				ebitda: 137341
			}
		}
	],
	status: Status.Approved
},
{
	id: 'yggYHiU8dZwkMDhRZHfta5sNz7nIzIvt',
	name: 'Irure Logistics',
	url: 'irure.com',
	description: 'Ad ex adipisicing proident reprehenderit. Minim sunt esse ex Lorem veniam eiusmod sint. Excepteur consectetur '
		+ 'veniam id ut et fugiat mollit. Consequat dolore fugiat id irure.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Tobie',
				last: 'Morgan'
			},
			position: 'Vice President',
			phone: '(223) 114-5510',
			email: 'tmorgan@irure.com'
		},
		{
			name: {
				first: 'Marlo',
				last: 'Alegria'
			},
			position: 'CFO',
			phone: '(857) 209-3355',
			email: 'malegria@irure.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 114556,
				debt: 103940,
				revenue: 147023,
				ebitda: 57339
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 28697,
				debt: 187007,
				revenue: 13023,
				ebitda: 3256
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 16022,
				debt: 279433,
				revenue: 15986,
				ebitda: 3997
			}
		}
	],
	status: Status.Researching
},
{
	id: 'SHwWVmAQ2q0Tsgl6lKTDxW4RYL8bzQTj',
	name: 'Elit Officia Labs',
	url: 'elitofficia.net',
	description: 'Fugiat laborum do reprehenderit sunt enim esse. Excepteur fugiat commodo elit deserunt Lorem consequat.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Hellen'
			},
			position: 'Vice President',
			phone: '(837) 148-6254',
			email: 'mhellen@elitofficia.net'
		},
		{
			name: {
				first: 'Valarie',
				last: 'Blea'
			},
			position: 'President',
			phone: '(387) 220-3537',
			email: 'vblea@elitofficia.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1633216,
				debt: 1637749,
				revenue: 1915491,
				ebitda: 478873,
				mc: 1849247
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2181403,
				debt: 2093388,
				revenue: 3301370,
				ebitda: 825342,
				mc: 2223701
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3995961,
				debt: 2654841,
				revenue: 6339671,
				ebitda: 1838505,
				mc: 273917
			}
		}
	],
	status: Status.Approved
},
{
	id: 'zub6YS4LUznSBK7dj9OBLi5O6GwN5epd',
	name: 'Occaecat Enterprises',
	url: 'occaecat.co',
	description: 'Ex eiusmod Lorem anim adipisicing. Sit anim excepteur deserunt proident.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Kelli',
				last: 'Perron'
			},
			position: 'Vice President',
			phone: '(983) 523-8113',
			email: 'kperron@occaecat.co'
		},
		{
			name: {
				first: 'Veola',
				last: 'Evens'
			},
			position: 'President',
			phone: '(118) 703-5475',
			email: 'vevens@occaecat.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1577469,
				debt: 1859214,
				revenue: 1573956,
				ebitda: 393489,
				mc: 1549714
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 972669,
				debt: 104303,
				revenue: 893978,
				ebitda: 223494,
				mc: 1868046
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 841597,
				debt: 178145,
				revenue: 1693592,
				ebitda: 423398,
				mc: 2621820
			}
		}
	],
	status: Status.Declined
},
{
	id: 'NDUMUxVuCTvGrGOH0ONMgw6NSQWhXZfl',
	name: 'Aliqua Services',
	url: 'aliqua.net',
	description: 'Voluptate eiusmod non ullamco nisi. Ad proident eiusmod occaecat laborum. Non Lorem proident ex eu.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Castagna'
			},
			position: 'Vice President',
			phone: '(268) 818-1212',
			email: 'lcastagna@aliqua.net'
		},
		{
			name: {
				first: 'Oma',
				last: 'Cancel'
			},
			position: 'CFO',
			phone: '(564) 389-6624',
			email: 'ocancel@aliqua.net'
		},
		{
			name: {
				first: 'Ute',
				last: 'Andrea'
			},
			position: 'CEO',
			phone: '(867) 918-4123',
			email: 'uandrea@aliqua.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1643256,
				debt: 1726738,
				revenue: 1015272,
				ebitda: 253818,
				mc: 1626326
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1224532,
				debt: 3356944,
				revenue: 460954,
				ebitda: 138286,
				mc: 2004089
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 627899,
				debt: 1388909,
				revenue: 834361,
				ebitda: 208590,
				mc: 3296093
			}
		}
	],
	status: Status.Approved
},
{
	id: 'Dt2yZDewGYs5nzSlyUQ417PXK7GhNet7',
	name: 'Aliquip Consulting',
	url: 'aliquip.net',
	description: 'Exercitation ex enim qui do nulla incididunt Lorem non. Incididunt ut in adipisicing irure.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Legendre'
			},
			position: 'CEO',
			phone: '(032) 446-2326',
			email: 'blegendre@aliquip.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 163631,
				debt: 106912,
				revenue: 112772,
				ebitda: 28193,
				mc: 132734
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 99558,
				debt: 3518,
				revenue: 205181,
				ebitda: 71813,
				mc: 5478
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 183177,
				debt: 515,
				revenue: 313758,
				ebitda: 125503,
				mc: 10830
			}
		}
	],
	status: Status.Researching
},
{
	id: 'lFSg6Xnp7gxLGuWlG0BkftZl3zxJfbEj',
	name: 'Cillum Tech',
	url: 'cillum.co',
	description: 'Minim minim consequat officia et. Nulla Lorem fugiat sint dolor non culpa elit.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Denver',
				last: 'Lamarre'
			},
			position: 'President',
			phone: '(787) 218-6789',
			email: 'dlamarre@cillum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1037111,
				debt: 1585384,
				revenue: 1652506,
				ebitda: 413126,
				mc: 1233535
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1824219,
				debt: 1197539,
				revenue: 753909,
				ebitda: 188477,
				mc: 220838
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 700386,
				debt: 592355,
				revenue: 436773,
				ebitda: 109193,
				mc: 161002
			}
		}
	],
	status: Status.Approved
},
{
	id: '0k7cioacTsLFaxsaADE06sqs3HrzYArU',
	name: 'Eiusmod Systems',
	url: 'eiusmod.org',
	description: 'Amet esse id amet reprehenderit labore enim. Quis ad ad commodo elit. Minim laborum cillum amet sit do.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Stefani',
				last: 'Hains'
			},
			position: 'CFO',
			phone: '(514) 824-2727',
			email: 'shains@eiusmod.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 12610832,
				debt: 14205808,
				revenue: 16670365,
				ebitda: 4167591
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 8143151,
				debt: 25175393,
				revenue: 24791424,
				ebitda: 8924913
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 11260122,
				debt: 23146180,
				revenue: 19791002,
				ebitda: 5937300
			}
		}
	],
	status: Status.Approved
},
{
	id: '4XpGKbsIORjCtUAaBVH3k2glC4pbbXKS',
	name: 'Fugiat Systems',
	url: 'fugiat.net',
	description: 'Ullamco aute nulla sit consectetur. Ullamco consectetur proident officia consequat adipisicing amet ex nulla. Est '
		+ 'veniam in anim commodo adipisicing ad.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Lorri',
				last: 'Puig'
			},
			position: 'Vice President',
			phone: '(866) 653-3767',
			email: 'lpuig@fugiat.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1794560,
				debt: 1776377,
				revenue: 1093650,
				ebitda: 404651,
				mc: 1596220
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 2321789,
				debt: 2486302,
				revenue: 1573620,
				ebitda: 629448,
				mc: 288744
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 291394,
				debt: 1022372,
				revenue: 2743745,
				ebitda: 685936,
				mc: 82915
			}
		}
	],
	status: Status.Approved
},
{
	id: 'avwc5ouyo9RKp0L1kf7LbX1eTuzllJpm',
	name: 'Tempor Consulting',
	url: 'tempor.com',
	description: 'Tempor veniam duis minim laboris. Non pariatur proident in commodo. Non sit eiusmod adipisicing dolore.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Adelina',
				last: 'Mercado'
			},
			position: 'CEO',
			phone: '(303) 615-9834',
			email: 'amercado@tempor.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 121387,
				debt: 196458,
				revenue: 166170,
				ebitda: 63145
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 63967,
				debt: 385271,
				revenue: 245530,
				ebitda: 61383
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 71883,
				debt: 289181,
				revenue: 318023,
				ebitda: 79506
			}
		}
	],
	status: Status.Declined
},
{
	id: 'pBTgFZY6UW9GmzdvSNnRvevQv7GVcQJo',
	name: 'Laboris Cillum Digital',
	url: 'laboriscillum.org',
	description: 'Fugiat labore eu labore sint. Sit voluptate anim dolor ad ea sint eiusmod.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Joseph',
				last: 'Towle'
			},
			position: 'CFO',
			phone: '(452) 851-5072',
			email: 'jtowle@laboriscillum.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1728016,
				debt: 1903486,
				revenue: 1313284,
				ebitda: 341454
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 673391,
				debt: 3674156,
				revenue: 1786321,
				ebitda: 446580
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 269249,
				debt: 6360651,
				revenue: 2720622,
				ebitda: 925011
			}
		}
	],
	status: Status.Approved
},
{
	id: 'lqu0tKizPcftonq4URGomMBWo1R3Uq8T',
	name: 'Minim Development',
	url: 'minim.net',
	description: 'Ad non eiusmod exercitation Lorem eu irure. Exercitation velit nulla id deserunt consequat velit consectetur.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Leona',
				last: 'Zahl'
			},
			position: 'Vice President',
			phone: '(472) 858-9512',
			email: 'lzahl@minim.net'
		},
		{
			name: {
				first: 'Elia',
				last: 'Perron'
			},
			position: 'CFO',
			phone: '(645) 610-5752',
			email: 'eperron@minim.net'
		},
		{
			name: {
				first: 'Fidelia',
				last: 'Reece'
			},
			position: 'CEO',
			phone: '(859) 186-3417',
			email: 'freece@minim.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 198763,
				debt: 101645,
				revenue: 181971,
				ebitda: 45493
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 5013,
				debt: 201811,
				revenue: 187735,
				ebitda: 46934
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 8467,
				debt: 353487,
				revenue: 164130,
				ebitda: 41033
			}
		}
	],
	status: Status.Approved
},
{
	id: 'efQSZM9Xr47W6Q6fHN7U2g0pSITXyU5R',
	name: 'Exercitation Amet Development',
	url: 'exercitationamet.net',
	description: 'Ex culpa aute ex in. Lorem et Lorem est Lorem excepteur. Lorem excepteur proident laborum qui minim. Laboris sint '
		+ 'enim consequat nisi.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Osvaldo',
				last: 'Moyle'
			},
			position: 'President',
			phone: '(888) 837-7162',
			email: 'omoyle@exercitationamet.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1139937,
				debt: 1797232,
				revenue: 1604428,
				ebitda: 401107,
				mc: 1128929
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 866560,
				debt: 3576734,
				revenue: 2945707,
				ebitda: 1089912,
				mc: 1994895
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 1346007,
				debt: 1111734,
				revenue: 5423258,
				ebitda: 1626977,
				mc: 3360401
			}
		}
	],
	status: Status.Approved
},
{
	id: 'DbpdOTbgPGznfqepzT30SPVjCgwpd1aY',
	name: 'Culpa Solutions',
	url: 'culpa.co',
	description: 'In est aliqua do deserunt esse. Id esse mollit officia culpa.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Sebrina',
				last: 'Castagna'
			},
			position: 'CEO',
			phone: '(481) 195-0232',
			email: 'scastagna@culpa.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1144996,
				debt: 1881646,
				revenue: 1367165,
				ebitda: 341791
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 1656104,
				debt: 2614153,
				revenue: 217219,
				ebitda: 54305
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2228495,
				debt: 4682793,
				revenue: 295270,
				ebitda: 103344
			}
		}
	],
	status: Status.Pending
},
{
	id: 'TUeXbYsTfwjKAcZwVmYDNmwzy0maiPs5',
	name: 'Dolore & Co.',
	url: 'dolore.net',
	description: 'Laborum veniam dolore commodo minim. Non officia consectetur deserunt exercitation dolor dolor.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Antony',
				last: 'Hunte'
			},
			position: 'President',
			phone: '(679) 361-2201',
			email: 'ahunte@dolore.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1199253,
				debt: 1692496,
				revenue: 1406839,
				ebitda: 351710
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 267421,
				debt: 2778083,
				revenue: 1523588,
				ebitda: 380897
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 504246,
				debt: 1111180,
				revenue: 519291,
				ebitda: 129823
			}
		}
	],
	status: Status.Pending
},
{
	id: 'i8NFkpQsfw9kel9M7ovavRYGENMw4bZ2',
	name: 'In Pariatur Creative',
	url: 'inpariatur.net',
	description: 'Dolore elit culpa sint irure. Duis ipsum tempor mollit eiusmod. Pariatur enim velit sunt laboris irure duis.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Lelah',
				last: 'Hains'
			},
			position: 'Vice President',
			phone: '(256) 735-4146',
			email: 'lhains@inpariatur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 102162,
				debt: 160563,
				revenue: 160297,
				ebitda: 57707
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 45872,
				debt: 303228,
				revenue: 242801,
				ebitda: 65556
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 52399,
				debt: 431234,
				revenue: 446786,
				ebitda: 156375
			}
		}
	],
	status: Status.Researching
},
{
	id: 'M3Xb0DqXR2U2jg2wBsbJTkoFgeP0Xw0S',
	name: 'Mollit Reprehenderit Group',
	url: 'mollitreprehenderit.org',
	description: 'Minim et excepteur culpa sint. Esse qui exercitation ut officia quis laborum minim. Velit elit ipsum proident esse '
		+ 'fugiat aute mollit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Lamarre'
			},
			position: 'Vice President',
			phone: '(317) 862-6268',
			email: 'mlamarre@mollitreprehenderit.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 148995,
				debt: 185316,
				revenue: 161941,
				ebitda: 40485
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 197935,
				debt: 84852,
				revenue: 190042,
				ebitda: 51311
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 66699,
				debt: 166661,
				revenue: 166900,
				ebitda: 65091
			}
		}
	],
	status: Status.Researching
},
{
	id: 'hPoP7Ap6IStRxzPnPFe6FxqCrxFjDZVQ',
	name: 'Ea Excepteur Scientific',
	url: 'eaexcepteur.net',
	description: 'Sunt sit amet cillum officia. Sit ut duis nisi velit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Bridgett',
				last: 'Mercado'
			},
			position: 'Vice President',
			phone: '(184) 333-7422',
			email: 'bmercado@eaexcepteur.net'
		},
		{
			name: {
				first: 'Sebrina',
				last: 'Perron'
			},
			position: 'President',
			phone: '(655) 706-4831',
			email: 'sperron@eaexcepteur.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 15608315,
				debt: 16028535,
				revenue: 17960508,
				ebitda: 5028942
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 10563019,
				debt: 3984195,
				revenue: 7614277,
				ebitda: 2893425
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 13679936,
				debt: 4763655,
				revenue: 10701240,
				ebitda: 2782322
			}
		}
	],
	status: Status.Researching
},
{
	id: 'RjvuE91H5J5BLUHPimcVlBXtDDgBcLlb',
	name: 'Eu Ipsum Partners',
	url: 'euipsum.co',
	description: 'Eiusmod tempor pariatur culpa irure velit. Reprehenderit sunt qui non reprehenderit cupidatat nisi.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Milagro',
				last: 'Hellen'
			},
			position: 'Vice President',
			phone: '(815) 061-0409',
			email: 'mhellen@euipsum.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 16625521,
				debt: 11218340,
				revenue: 12837615,
				ebitda: 3209404
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 21197783,
				debt: 2192636,
				revenue: 11409792,
				ebitda: 2852448
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 8872184,
				debt: 1507763,
				revenue: 22750892,
				ebitda: 5687723
			}
		}
	],
	status: Status.Researching
},
{
	id: 'yKQNuIzCYDVaU6gb8oVxPMLM3sf7LVFo',
	name: 'Cillum Holdings',
	url: 'cillum.net',
	description: 'Anim velit cillum nisi anim culpa eu. Eu quis do eu mollit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Nicole',
				last: 'Hunte'
			},
			position: 'Vice President',
			phone: '(308) 265-8341',
			email: 'nhunte@cillum.net'
		},
		{
			name: {
				first: 'Tamie',
				last: 'Puig'
			},
			position: 'President',
			phone: '(570) 337-4616',
			email: 'tpuig@cillum.net'
		},
		{
			name: {
				first: 'Ute',
				last: 'Moyle'
			},
			position: 'CEO',
			phone: '(475) 873-9116',
			email: 'umoyle@cillum.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 126494,
				debt: 191918,
				revenue: 125957,
				ebitda: 31489
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 130011,
				debt: 65856,
				revenue: 230767,
				ebitda: 57692
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 192625,
				debt: 70717,
				revenue: 194929,
				ebitda: 48732
			}
		}
	],
	status: Status.Researching
},
{
	id: 'bkYG63gCZ6glMpxvDfZ1Lw9KPFc6VINR',
	name: 'Cillum Innovations',
	url: 'cillum.com',
	description: 'Consectetur ut ut consectetur excepteur aliqua sit tempor id. Ullamco nisi ex reprehenderit magna mollit velit '
		+ 'adipisicing. Occaecat non est dolor sunt. Velit sunt reprehenderit officia adipisicing.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Ellett'
			},
			position: 'Vice President',
			phone: '(185) 374-9564',
			email: 'uellett@cillum.com'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 140301,
				debt: 130988,
				revenue: 184641,
				ebitda: 46160
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 249906,
				debt: 21432,
				revenue: 281659,
				ebitda: 87314
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 290052,
				debt: 16720,
				revenue: 258498,
				ebitda: 80134
			}
		}
	],
	status: Status.Approved
},
{
	id: 'dm5SgseekxeMw94ENMPFf8jLgPx9Eupl',
	name: 'Sint Adipisicing Solutions',
	url: 'sintadipisicing.net',
	description: 'Consequat quis sunt Lorem ullamco. Reprehenderit incididunt aliqua exercitation Lorem. Laborum pariatur ipsum sit '
		+ 'ex.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Veola',
				last: 'Ellett'
			},
			position: 'President',
			phone: '(642) 193-4259',
			email: 'vellett@sintadipisicing.net'
		},
		{
			name: {
				first: 'Nannie',
				last: 'Seabury'
			},
			position: 'Vice President',
			phone: '(385) 464-7661',
			email: 'nseabury@sintadipisicing.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1810929,
				debt: 1932026,
				revenue: 1270984,
				ebitda: 317746
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 551502,
				debt: 1548034,
				revenue: 2242058,
				ebitda: 560515
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 469392,
				debt: 1449727,
				revenue: 3717846,
				ebitda: 929461
			}
		}
	],
	status: Status.Approved
},
{
	id: 'lSdKAFhrGXlmMZJdUcw8aEVR3DyaOaLg',
	name: 'Mollit Consulting',
	url: 'mollit.net',
	description: 'Aliquip dolor sit exercitation sunt nostrud. Lorem ea elit ea dolore. Fugiat elit aute aute fugiat non consequat '
		+ 'nisi.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Marlo',
				last: 'Parkhill'
			},
			position: 'Vice President',
			phone: '(851) 282-6230',
			email: 'mparkhill@mollit.net'
		},
		{
			name: {
				first: 'Earle',
				last: 'Hou'
			},
			position: 'President',
			phone: '(189) 547-8386',
			email: 'ehou@mollit.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 13428438,
				debt: 16594381,
				revenue: 17221304,
				ebitda: 5510817
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 26705470,
				debt: 23794139,
				revenue: 17490868,
				ebitda: 4372717
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 20314758,
				debt: 40537162,
				revenue: 1621639,
				ebitda: 405410
			}
		}
	],
	status: Status.Approved
},
{
	id: 'Voixx6Ure8ghuAQwvMt9prcMQWHLXArE',
	name: 'Tempor Labs',
	url: 'tempor.co',
	description: 'Ex do nostrud nisi laboris. Sit Lorem ex elit sit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Ute',
				last: 'Pridgeon'
			},
			position: 'Vice President',
			phone: '(964) 277-1801',
			email: 'upridgeon@tempor.co'
		},
		{
			name: {
				first: 'Imelda',
				last: 'Pridgeon'
			},
			position: 'President',
			phone: '(285) 136-7934',
			email: 'ipridgeon@tempor.co'
		},
		{
			name: {
				first: 'Tamie',
				last: 'Kennard'
			},
			position: 'CEO',
			phone: '(641) 984-7723',
			email: 'tkennard@tempor.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 15701192,
				debt: 11693998,
				revenue: 17349186,
				ebitda: 5378248
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 3822351,
				debt: 12262762,
				revenue: 26638899,
				ebitda: 6659725
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 3692421,
				debt: 22969973,
				revenue: 21999578,
				ebitda: 5499894
			}
		}
	],
	status: Status.Pending
},
{
	id: 'BpHqyTgCTe2Ah2KwSDPHwf3QI9y2O5xZ',
	name: 'Pariatur Partners',
	url: 'pariatur.co',
	description: 'Minim cupidatat dolor duis qui fugiat occaecat. Ut labore commodo et commodo duis amet consequat reprehenderit.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Earle',
				last: 'Morgan'
			},
			position: 'CEO',
			phone: '(451) 403-7885',
			email: 'emorgan@pariatur.co'
		},
		{
			name: {
				first: 'Lucrecia',
				last: 'Kinard'
			},
			position: 'CFO',
			phone: '(486) 313-0978',
			email: 'lkinard@pariatur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 1534063,
				debt: 1631584,
				revenue: 1865064,
				ebitda: 466266
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 404147,
				debt: 1184473,
				revenue: 2523511,
				ebitda: 630878
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 291697,
				debt: 2179894,
				revenue: 2573537,
				ebitda: 643384
			}
		}
	],
	status: Status.Approved
},
{
	id: 'E6yZI8ct0esis0Hs3rbhvM9INy8pncho',
	name: 'Duis non Dynamics',
	url: 'duisnon.co',
	description: 'Minim officia ex quis nulla anim elit voluptate tempor dolore. Dolore reprehenderit sunt magna labore. Ullamco '
		+ 'aliqua et consequat amet. Consectetur deserunt nulla in et.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Malisa',
				last: 'Ruckman'
			},
			position: 'President',
			phone: '(488) 073-3972',
			email: 'mruckman@duisnon.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 166721,
				debt: 185087,
				revenue: 126489,
				ebitda: 31622
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 145344,
				debt: 303227,
				revenue: 143035,
				ebitda: 35759
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 213157,
				debt: 151952,
				revenue: 98627,
				ebitda: 24657
			}
		}
	],
	status: Status.Pending
},
{
	id: 'JSWHwH7q8zglVh60xVCgUCSOb8JXlxLc',
	name: 'Ipsum Ventures',
	url: 'ipsum.org',
	description: 'Reprehenderit eu veniam aliqua sunt. Aute mollit veniam do magna labore. Ipsum tempor id cupidatat nostrud '
		+ 'adipisicing reprehenderit eu. Dolore irure anim ea consequat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Brady',
				last: 'Zahl'
			},
			position: 'CFO',
			phone: '(634) 416-9121',
			email: 'bzahl@ipsum.org'
		},
		{
			name: {
				first: 'Fleta',
				last: 'Hou'
			},
			position: 'Vice President',
			phone: '(686) 522-4331',
			email: 'fhou@ipsum.org'
		},
		{
			name: {
				first: 'Diego',
				last: 'Zahl'
			},
			position: 'President',
			phone: '(172) 633-7376',
			email: 'dzahl@ipsum.org'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 127701,
				debt: 128763,
				revenue: 161904,
				ebitda: 45333
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 165070,
				debt: 127628,
				revenue: 136313,
				ebitda: 34078
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 78561,
				debt: 160640,
				revenue: 136528,
				ebitda: 34132
			}
		}
	],
	status: Status.Declined
},
{
	id: 'OadwzJJ8YYhx2KLijTLddtbrWocRzbQd',
	name: 'Excepteur Holdings',
	url: 'excepteur.co',
	description: 'Nostrud minim commodo excepteur deserunt et. Enim ullamco aute quis sint. Eiusmod in amet sunt enim laboris. '
		+ 'Consequat aute exercitation enim cupidatat.',
	isPublic: false,
	contacts: [
		{
			name: {
				first: 'Imelda',
				last: 'Breitenstein'
			},
			position: 'CFO',
			phone: '(278) 695-7551',
			email: 'ibreitenstein@excepteur.co'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 12274573,
				debt: 18704841,
				revenue: 14767393,
				ebitda: 3691848
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 11013589,
				debt: 31104979,
				revenue: 14229219,
				ebitda: 3557305
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 2572472,
				debt: 4030645,
				revenue: 11105733,
				ebitda: 3664892
			}
		}
	],
	status: Status.Pending
},
{
	id: 'rjA4F60Ocg0W7DUXr6iqQ0y5QGH1V43p',
	name: 'Minim Innovations',
	url: 'minim.net',
	description: 'Ea occaecat minim sint fugiat. Consequat eiusmod in pariatur deserunt labore commodo elit laboris.',
	isPublic: true,
	contacts: [
		{
			name: {
				first: 'Nicole',
				last: 'Ruckman'
			},
			position: 'Vice President',
			phone: '(211) 042-4446',
			email: 'nruckman@minim.net'
		},
		{
			name: {
				first: 'Denver',
				last: 'Moyle'
			},
			position: 'President',
			phone: '(788) 969-8051',
			email: 'dmoyle@minim.net'
		}
	],
	financials: [
		{
			key: 2018,
			metrics: {
				assets: 185544,
				debt: 132629,
				revenue: 126835,
				ebitda: 31709,
				mc: 136463
			}
		},
		{
			key: 2017,
			metrics: {
				assets: 136534,
				debt: 11224,
				revenue: 66563,
				ebitda: 25294,
				mc: 238774
			}
		},
		{
			key: 2016,
			metrics: {
				assets: 124913,
				debt: 10041,
				revenue: 50079,
				ebitda: 12520,
				mc: 261136
			}
		}
	],
	status: Status.Approved
},
];

export default companies;
