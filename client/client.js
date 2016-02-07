Meteor.subscribe('userData');

var Loans = new Mongo.Collection("loans");

Template.mainScreen.helpers ({
	loans: function() {
		return Loans.findOne({});
	}
});

openNav = function () {
			var navPos = document.getElementsByClassName('navigation-bar')[0];
			if (navPos.style.left == "0px") {
				navPos.style.left = "-100%";
			} else {
				navPos.style.left = "0px";
			}
		};

loan1 = {plan1: {payment_amount: 500, payments: [
				{"January 2014": 11345}, 
				{"February 2014": 11242.075}, 
				{"March 2014": 11135.547625000001}, 
				{"April 2014": 11025.291791875}, 
				{"May 2014": 10911.177004590625}, 
				{"June 2014": 10793.068199751297}, 
				{"July 2014": 10670.825586742592}, 
				{"August 2014": 10544.304482278583}, 
				{"Septembre 2014": 10413.355139158333}, 
				{"October 2014": 10277.822569028875}, 
				{"November 2014": 10137.546358944885}, 
				{"December 2014": 9992.360481507956}, 
				{"January 2015": 9842.093098360734}, 
				{"February 2015": 9686.56635680336}, 
				{"March 2015": 9525.596179291477}, 
				{"April 2015": 9358.992045566678}, 
				{"May 2015": 9186.556767161512}, 
				{"June 2015": 9008.086254012165}, 
				{"July 2015": 8823.369272902592}, 
				{"August 2015": 8632.187197454183}, 
				{"Septembre 2015": 8434.31374936508}, 
				{"October 2015": 8229.514730592857}, 
				{"November 2015": 8017.5477461636065}, 
				{"December 2015": 7798.161917279333}, 
				{"January 2016": 7571.097584384109}, 
				{"February 2016": 7336.085999837553}, 
				{"March 2016": 7092.849009831867}, 
				{"April 2016": 6841.0987251759825}, 
				{"May 2016": 6580.537180557142}, 
				{"June 2016": 6310.8559818766425}, 
				{"July 2016": 6031.735941242325}, 
				{"August 2016": 5742.846699185806}, 
				{"Septembre 2016": 5443.8463336573095}, 
				{"October 2016": 5134.380955335316}, 
				{"November 2016": 4814.084288772052}, 
				{"December 2016": 4482.577238879074}, 
				{"January 2017": 4139.467442239841}, 
				{"February 2017": 3784.3488027182357}, 
				{"March 2017": 3416.801010813374}, 
				{"April 2017": 3036.389046191842}, 
				{"May 2017": 2642.662662808557}, 
				{"June 2017": 2235.1558560068565}, 
				{"July 2017": 1813.3863109670965}, 
				{"August 2017": 1376.854831850945}, 
				{"Septembre 2017": 925.0447509657281}, 
				{"October 2017": 457.42131724952856}
			]
		},
		 plan2: {payment_amount: 600, payments: [
				{"January 2014": 11345},
				{"February 2014": 11142.075},
				{"March 2014": 10932.047625000001},
				{"April 2014": 11314.669291875001},
				{"May 2014": 11710.682717090627},
				{"June 2014": 11520.556612188799},
				{"July 2014": 11923.776093615406},
				{"August 2014": 11741.108256891946},
				{"Septembre 2014": 11552.047045883164},
				{"October 2014": 11356.368692489075},
				{"November 2014": 11753.841596726194},
				{"December 2014": 11565.22605261161},
				{"January 2015": 11370.008964453016},
				{"February 2015": 11767.959278208871},
				{"March 2015": 12179.837852946182},
				{"April 2015": 12006.1321777993},
				{"May 2015": 11826.346804022276},
				{"June 2015": 11640.268942163057},
				{"July 2015": 11447.678355138763},
				{"August 2015": 11248.34709756862},
				{"Septembre 2015": 11042.039245983522},
				{"October 2015": 11428.510619592946},
				{"November 2015": 11228.508491278699},
				{"December 2015": 11621.506288473453},
				{"January 2016": 11428.259008570023},
				{"February 2016": 11228.248073869974},
				{"March 2016": 11021.236756455422},
				{"April 2016": 10806.980042931362},
				{"May 2016": 10585.22434443396},
				{"June 2016": 10355.70719648915},
				{"July 2016": 10118.15694836627},
				{"August 2016": 9872.29244155909},
				{"Septembre 2016": 9617.822677013657},
				{"October 2016": 9354.446470709136},
				{"November 2016": 9081.852097183955},
				{"December 2016": 8799.716920585393},
				{"January 2017": 8507.707012805882},
				{"February 2017": 8205.476758254088},
				{"March 2017": 7892.668444792981},
				{"April 2017": 7568.911840360735},
				{"May 2017": 7233.8237547733615},
				{"June 2017": 6887.007586190429},
				{"July 2017": 6528.052851707094},
				{"August 2017": 6756.534701516843},
				{"Septembre 2017": 6993.013416069933},
				{"October 2017": 6637.76888563238},
				{"November 2017": 6270.0907966295135},
				{"December 2017": 5889.543974511546},
				{"January 2018": 5495.67801361945},
				{"February 2018": 5088.026744096131},
				{"March 2018": 4666.107680139496},
				{"April 2018": 4229.421448944378},
				{"May 2018": 3777.4511996574315},
				{"June 2018": 3309.6619916454415},
				{"July 2018": 3425.500161353032},
				{"August 2018": 2945.3926670003884},
				{"Septembre 2018": 2448.481410345402},
				{"October 2018": 1934.178259707491},
				{"November 2018": 1401.8744987972532},
				{"December 2018": 850.940106255157},
				{"January 2019": 280.7230099740875}
			]
		 },
		 plan3: {payment_amount: 700, payments: [
				{"January 2014": 11345},
				{"February 2014": 11042.075},
				{"March 2014": 10728.547625000001},
				{"April 2014": 10404.046791875002},
				{"May 2014": 10068.188429590627},
				{"June 2014": 9720.5750246263},
				{"July 2014": 9360.79515048822},
				{"August 2014": 8988.422980755307},
				{"Septembre 2014": 8603.017785081744},
				{"October 2014": 8204.123407559604},
				{"November 2014": 7791.2677268241905},
				{"December 2014": 7363.962097263037},
				{"January 2015": 6921.700770667244},
				{"February 2015": 6463.960297640598},
				{"March 2015": 5990.198908058019},
				{"April 2015": 5499.855869840049},
				{"May 2015": 4992.350825284451},
				{"June 2015": 4467.083104169407},
				{"July 2015": 3923.4310128153365},
				{"August 2015": 3360.7510982638732},
				{"Septembre 2015": 2778.3773867031086},
				{"October 2015": 2175.6205952377177},
				{"November 2015": 1551.7673160710378},
				{"December 2015": 906.0791721335241},
				{"January 2016": 237.79194315819745}
			]}};
