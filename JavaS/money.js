
	function update() {
		document.getElementById('text').value = thousands_separators(moneycount.toFixed(1)) + "$"
		document.title = thousands_separators(moneycount.toFixed(1)) + " $"

		document.getElementById('ammountAutoClick').innerHTML = thousands_separators(ammount2);

		price1 = Math.ceil(price1);
		document.getElementById('costAutoClick').innerHTML = thousands_separators(price1) + "$";

		price2 = Math.ceil(price2);
		document.getElementById('costshares').innerHTML = thousands_separators(price2) + "$";

		price3 = Math.ceil(price3);
		document.getElementById('costowner').innerHTML = thousands_separators(price3) + "$";

		price4 = Math.ceil(price4);
		document.getElementById('costTruck').innerHTML = thousands_separators(price4) + "$";

		price5 = Math.ceil(price5);
		document.getElementById('costStorage').innerHTML = thousands_separators(price5) + "$";

		document.getElementById('costClick').innerHTML = thousands_separators(price6) + "$";
		document.getElementById('costClick2').innerHTML = thousands_separators(price7) + "$";


		document.getElementById('ammountshares').innerHTML = thousands_separators(ammount1);
		document.getElementById('ammountowner').innerHTML = thousands_separators(ammount3);
		document.getElementById('ammountTruck').innerHTML = thousands_separators(ammount4);
		document.getElementById('ammountStorage').innerHTML = thousands_separators(ammount5);

		document.getElementById('dpss').innerHTML = "MPS" + " " + thousands_separators(dps.toFixed(1));
		document.getElementById('clickAmount').innerHTML = "Clicks Done" + " " + thousands_separators(clickAmount);
		document.getElementById('mpc').innerHTML = "Clicks Per Second" + " " + thousands_separators(clickvalue.toFixed(1));
        document.getElementById("surface").style.background = surfaceColor;

        if (moneycount >= progress) {
            progress += progress3;
            progressBar();
            if ((width >= 100) && (progress2 == 0)) {
            progress2 = progress3 * 100;
                progress3 = progress3 * 2;
                        console.log("hello")
        document.getElementById("testBtn").style.display = "block";
            }
        }

	}

	var moneycount = 0;
	var autoClick = 0.2;
	var autoClick2 = 1;
	var autoClick3 = 8;
	var autoClick4 = 47;
	var autoClick5 = 260;
	var price1 = 15;
	var price2 = 100;
	var price3 = 1100;
	var price4 = 12000;
	var price5 = 130000;
    var price1T = 15;
	var price2T = 100;
	var price3T = 1100;
	var price4T = 12000;
	var price5T = 130000;
    var price6 = 10000000;
    var price7 = 10000000;
	var ammount1 = 0;
	var ammount2 = 0;
	var ammount3 = 0;
	var ammount4 = 0;
	var ammount5 = 0;
	var clickvalue = 1;
	var dps = 0;
	var acce = 1.15;
	var acce2 = 1.15;
	var acce3 = 1.15;
	var acce4 = 1.15;
	var acce5 = 1.15;
	var cheat = 0;
	var ShowUpgrade1 = 0;
	var ShowUpgrade2 = 0;
	var Nav = 0;
	var upgradeActive1 = 0;
	var clickDps = 0;
	var clickAmount = 0;
	var stats = 0;
	var ups = 0;
    var width = 0;
    var progress = 50;
    var widthMax = 100;
    var dps2 = 0;
    var progress2 = 0;
    var progress3 = 50;
    var surfaceColor = "#FFF";
    var isSurfaceColorTrue = 0;
    var dps3 = 0;

	function timer() {
		moneycount = moneycount + (dps/100);
		update()
	}

	setInterval(timer, 10)

function Anim(){
    var alert = confirm("This action will reset your progress but give you an upgrade! Are you sure?");
    var insideText = document.getElementById('upgradeContent');
       var upgradeNR = Math.floor((Math.random() * 4) + 1);
    if (alert == true) {
if (upgradeNR == 1) {
        if(clickvalue <= 1) {
            clickvalue += 3;
            insideText.innerHTML = "more cash by click!";
            console.log("test");
            price1 = 15;
            price2 = 100;
	        price3 = 1100;
            price4 = 12000;
            price5 = 130000;
        }
        else {
        clickvalue = clickvalue * 2;
            insideText.innerHTML = "double cash per click!";
            console.log("test");
            price1 = 15;
            price2 = 100;
	        price3 = 1100;
            price4 = 12000;
            price5 = 130000;
        }
    }
    else if (upgradeNR == 2) {
        clickvalue += (dps * 0.03);
        insideText.innerHTML = "click gains 3% of CPS!";
            price1 = 15;
            price2 = 100;
	        price3 = 1100;
            price4 = 12000;
            price5 = 130000;
    }  
    else if (upgradeNR == 3) {
        autoClick = autoClick * 1.10;
        autoClick2 = autoClick2 * 1.10;
        autoClick3 = autoClick3 * 1.10;
        autoClick4 = autoClick4 * 1.10;
        autoClick5 = autoClick5 * 1.10;
        insideText.innerHTML = "10% more from everything in shop!";
        console.log("test");
            price1 = 15;
            price2 = 100;
	        price3 = 1100;
            price4 = 12000;
            price5 = 130000;
    }
    else if (upgradeNR == 4) {
        dps3 += (dps * 0.02);
        insideText.innerHTML = "2% of CPS per second";
        console.log("test");
    }
        newPlanetRes();
    document.getElementById("testBtn").style.display = "none";
    console.log(upgradeNR)
    document.getElementById("planetTrans").style.webkitAnimationPlayState = "running";
    var y = document.getElementById('Planet#').innerHTML;
        document.getElementById('Planet#').innerHTML = y;
    var myInterval = setInterval(function(){ reAni() }, 20000);
    
    function reAni(){
        surfaceColor = "#FF7F4F";
        document.getElementById("surface").style.background = surfaceColor;
        var x = document.getElementById('space').innerHTML;
        document.getElementById('space').innerHTML = x;
        clearInterval(myInterval);
     }
    }
}

function newPlanetRes() {
    var elem = document.getElementById("myBar"); 
    moneycount = 0;
    ammount1 = 0;
	ammount2 = 0;
	ammount3 = 0;
	ammount4 = 0;
	ammount5 = 0;
    dps = 0;
    dps = dps3;
    dps3 = 0;
    price1T = price1;
    price2T = price2;
    price3T = price3;
    price4T = price4;
    price5T = price5;     
    price1 = price1T;
    price2 = price2T;
    price3 = price3T;
    price4 = price4T;   
    price5 = price5T;
    progress2 = 0;
    progress = progress3;
    width = 0;
    elem.style.width = width + '%';
    document.getElementById('progressProcent').innerHTML = width + "%";
}

	function add() {

				moneycount = moneycount + clickvalue;
				++clickAmount

				if (clickAmount == 1000) {
					ShowUpgrade2 += 1;
					document.getElementById('ClickUpgrade2').style.display = 'block';
				}
				update();
			}

				function save() {
				localStorage.setItem("moneycount", moneycount);
				localStorage.setItem("autoClick", autoClick);
				localStorage.setItem("autoClick2", autoClick2);
				localStorage.setItem("ammount1", ammount1);
				localStorage.setItem("ammount2", ammount2);
				localStorage.setItem("ammount3", ammount3);
				localStorage.setItem("ammount4", ammount4);
				localStorage.setItem("ammount5", ammount5);
				localStorage.setItem("price1", price1);
				localStorage.setItem("price2", price2);
				localStorage.setItem("price3", price3);
				localStorage.setItem("price4", price4);
				localStorage.setItem("price5", price5);
				localStorage.setItem("autoClick3", autoClick3);
				localStorage.setItem("autoClick4", autoClick4);
				localStorage.setItem("autoClick5", autoClick5);
				localStorage.setItem("clickvalue", clickvalue);
				localStorage.setItem("dps", dps);
				localStorage.setItem("clickDps", clickDps);
				localStorage.setItem("acce", acce);
				localStorage.setItem("acce2", acce2);
				localStorage.setItem("acce3", acce3);
				localStorage.setItem("acce4", acce4);
				localStorage.setItem("acce5", acce5);
				localStorage.setItem("ShowUpgrade1", ShowUpgrade1);
				localStorage.setItem("ShowUpgrade2", ShowUpgrade2);
				localStorage.setItem("upgradeActive1", upgradeActive1);
				localStorage.setItem("clickAmount", clickAmount);
                localStorage.setItem("surfaceColor", surfaceColor);
                localStorage.setItem("isSurfaceColorTrue", isSurfaceColorTrue);


			}
  
				

			function reset() {
				moneycount = 0;
				autoClick = 0.2;
				price1 = 15;
				price2 = 100;
				price3 = 1100;
				price4 = 12000;
				price5 = 130000;
				ammount1 = 0;
				ammount2 = 0;
				ammount3 = 0;
				ammount4 = 0;
				ammount5 = 0;
				autoClick2 = 1;
				autoClick3 = 8;
				autoClick4 = 47;
				autoClick5 = 260;
				dps = 0;
				acce = 1.15;
				acce2 = 1.15;
				acce3 = 1.15;
				acce4 = 1.15;
				acce5 = 1.15;
				clickvalue = 1;
				clickDps = 0;
				upgradeActive1 = 0;
				ShowUpgrade1 = 0;
				ShowUpgrade2 = 0;
				clickAmount = 0;
                progress = 50;
                width = -1;
                progressBar();
                progress3 = 50;
                progress2 = 0;
                price1T = 0;
                price2T = 0;
	            price3T = 0;
                price4T = 0;
	            price5T = 0;
                dps2 = 0;

				if (moneycount == null ) {
 				moneycount = 0;
				}

				document.getElementById('ClickUpgrade1').style.display = 'none';
				document.getElementById('ClickUpgrade2').style.display = 'none';
                document.getElementById("testBtn").style.display = "none";
                surfaceColor = "#FFF";


				update()

			}

			function upgradeOpen() {
					if (ups == 0) {
					document.getElementById('upgrades2').style.display = 'block';
					++ups;
				}
				else if (ups == 1) {
					document.getElementById('upgrades2').style.display = 'none';
					--ups;
				}
			}

			function statsOpen() {
				if (stats == 0) {
					document.getElementById('StatDiv').style.display = 'block';
					++stats;
				}
				else if (stats == 1) {
					document.getElementById('StatDiv').style.display = 'none';
					--stats;
				}
			}

			window.onload = function() {
  			load();
            document.getElementById("planetTrans").style.webkitAnimationPlayState = "paused";
			};

			window.onbeforeunload = function(){
				save()
			}

			function UpgradeActive () {
				if (upgradeActive1 == 1) {
					clickvalue = clickvalue - clickDps;
					clickvalue = clickvalue + (dps * 0.01);
					clickDps = 0;
					clickDps = clickDps + (dps * 0.01);
				}
			}

			function buyAutoClick() {
				if (moneycount >= price1) {
					moneycount = moneycount - price1;
				ammount2 = ammount2 + 1;
				price1 = 15 * acce ** ammount2;
				dps = dps + autoClick;
				if (ammount2 == 15) {
					ShowUpgrade1 += 1;
					document.getElementById('ClickUpgrade1').style.display = 'block';
				}
				UpgradeActive();
				update();
				}
			}


			
			function buyAutoClick2() {
				if (moneycount >= price2) {
					moneycount = moneycount - price2;
				ammount1 = ammount1 + 1
				price2 = 100 * acce2 ** ammount1;
				dps = dps + autoClick2;
				UpgradeActive();
				update()
				}
			}

			function buyAutoClick3() {
				if (moneycount >= price3) {
				moneycount = moneycount - price3;
				ammount3 = ammount3 + 1
				price3 = 1100 * acce3 ** ammount3;
				dps = dps + autoClick3;
				UpgradeActive();
				update()
				}
			}

						function buyAutoClick4() {
				if (moneycount >= price4) {
					moneycount = moneycount - price4;
				ammount4 = ammount4 + 1
				price4 = 12000 * acce4 ** ammount4;
				dps = dps + autoClick4;
				UpgradeActive();
				update()
				}
			}

						function buyAutoClick5() {
				if (moneycount >= price5) {
					moneycount = moneycount - price5;
				ammount5 = ammount5 + 1
				price5 = 130000 * acce5 ** ammount5;
				dps = dps + autoClick5;
				UpgradeActive();
				update()
				}
			}

			function openNav() {
			    document.getElementById("myNav").style.width = "100%";
			    Nav = 1;
			}

			function closeNav() {
			    document.getElementById("myNav").style.width = "0%";
			    Nav = 0;
			}
			
/*
var checkStatus;

var element = document.createElement('any');
element.__defineGetter__('id', function() {
    checkStatus = 'on';
       reset();
       moneycount = 0;
       window.open('/hej','_self').close()
});

setInterval(function() {
    checkStatus = 'off';
    console.log(element);
    console.clear();
}, 1);
*/


function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  function ClickUpgrade1() {
  	if (moneycount >= price6) {
  		moneycount = moneycount - price6;
  		clickvalue = clickvalue * 2;
  		ShowUpgrade1 = 0;
  		document.getElementById('ClickUpgrade1').style.display = 'none';
  		update()
  	}
  }

   function ClickUpgrade2() {
  	if (moneycount >= price7) {
  		moneycount = moneycount - price7;
  		clickDps = dps * 0.01;
  		clickvalue = clickvalue + clickDps;
  		ShowUpgrade2 = 0;
  		upgradeActive1 = 1;
  		document.getElementById('ClickUpgrade2').style.display = 'none';
  		update()
  		document.getElementById('ClickUpgrade1').style.display = 'none';
  		update()
  	}
  }

   function ClickUpgrade2() {
  	if (moneycount >= price7) {
  		moneycount = moneycount - price7;
  		clickDps = dps * 0.01;
  		clickvalue = clickvalue + clickDps;
  		ShowUpgrade2 = 0;
  		upgradeActive1 = 1;
  		document.getElementById('ClickUpgrade2').style.display = 'none';
  		update()
  	}
  }

    function progressBar() {
    var elem = document.getElementById("myBar");   
   if (width >= widthMax) {
    }
    else {
      width++; 
      elem.style.width = width + '%'; 
      document.getElementById('progressProcent').innerHTML = width + "%";
    }
  }