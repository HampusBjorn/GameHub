function load() {
					if (localStorage.moneycount >= 0) {
				moneycount = localStorage.getItem("moneycount");
				moneycount = parseFloat(moneycount);
				}

				else {
				localStorage.setItem("moneycount", moneycount);
			}


				if (localStorage.autoClick >= 0) {
				autoClick = localStorage.getItem("autoClick");
				autoClick = parseFloat(autoClick);
				}

				else {
				localStorage.setItem("autoClick", autoClick);
			}

				if (localStorage.price1 >= 0) {
				price1 = localStorage.getItem("price1");
				price1 = parseFloat(price1);
				}

				else {
				localStorage.setItem("price1", price1);
			}

				if (localStorage.autoClick2 >= 0) {
				autoClick2 = localStorage.getItem("autoClick2");
				autoClick2 = parseFloat(autoClick2);
				}

				else {
				localStorage.setItem("autoClick2", autoClick2);
			}

				if (localStorage.autoClick3 >= 0) {
				autoClick3 = localStorage.getItem("autoClick3");
				autoClick3 = parseFloat(autoClick3);
				}

				else {
				
				localStorage.setItem("autoClick3", autoClick3);
			}

				if (localStorage.autoClick4 >= 0) {
				autoClick4 = localStorage.getItem("autoClick4");
				autoClick4 = parseFloat(autoClick4);
				}

				else {
				
				localStorage.setItem("autoClick4", autoClick4);
			}

				if (localStorage.autoClick5 >= 0) {
				autoClick5 = localStorage.getItem("autoClick5");
				autoClick5 = parseFloat(autoClick5);
				}

				else {
				
				localStorage.setItem("autoClick5", autoClick5);
			}

				if (localStorage.ammount1 >= 0) {
				ammount1 = localStorage.getItem("ammount1");
				ammount1 = parseFloat(ammount1);
				}

				else {
				localStorage.setItem("ammount1", ammount1);
				
			}

				if (localStorage.ammount2 >= 0) {
				ammount2 = localStorage.getItem("ammount2");
				ammount2 = parseFloat(ammount2);
				}

				else {
				localStorage.setItem("ammount2", ammount2);
				
			}

				if (localStorage.ammount3 >= 0) {
				ammount3 = localStorage.getItem("ammount3");
				ammount3 = parseFloat(ammount3);
				}

				else {
				localStorage.setItem("ammount3", ammount3);
				
			}

				if (localStorage.ammount4 >= 0) {
				ammount4 = localStorage.getItem("ammount4");
				ammount4 = parseFloat(ammount4);
				}

				else {
				localStorage.setItem("ammount4", ammount4);
			}

				if (localStorage.ammount5 >= 0) {
				ammount5 = localStorage.getItem("ammount5");
				ammount5 = parseFloat(ammount5);
				}

				else {
				
				localStorage.setItem("ammount5", ammount5);
			}

				if (localStorage.price2 >= 0) {
				price2 = localStorage.getItem("price2");
				price2 = parseFloat(price2);
				}

				else {
				localStorage.setItem("price2", price2);
			}

				if (localStorage.price3 >= 0) {
				price3 = localStorage.getItem("price3");
				price3 = parseFloat(price3);
				}

				else {
				
				localStorage.setItem("price3", price3);
			}

				if (localStorage.price4 >= 0) {
				price4 = localStorage.getItem("price4");
				price4 = parseFloat(price4);
				}

				else {
				
				localStorage.setItem("price4", price4);
			}

				if (localStorage.price5 >= 0) {
				price5 = localStorage.getItem("price5");
				price5 = parseFloat(price5);
				}

				else {
				
				localStorage.setItem("price5", price5);
			}

				if (localStorage.clickvalue >= 0) {
				clickvalue = localStorage.getItem("clickvalue");
				clickvalue = parseFloat(clickvalue);
				}

				else {
				localStorage.setItem("clickvalue", clickvalue);
			}

				if (localStorage.dps >= 0) {
				dps = localStorage.getItem("dps");
				dps = parseFloat(dps);
				}

				else {
				localStorage.setItem("dps", dps);
			}

			if (localStorage.clickDps >= 0) {
				clickDps = localStorage.getItem("clickDps");
				clickDps = parseFloat(clickDps);
				}

				else {
				localStorage.setItem("clickDps", clickDps);
			}

			if (localStorage.acce >= 0) {
				acce = localStorage.getItem("acce");
				acce = parseFloat(acce);
				}

				else {
				
				localStorage.setItem("acce", acce);
			}

				if (localStorage.acce2 >= 0) {
				acce2 = localStorage.getItem("acce2");
				acce2 = parseFloat(acce2);
				}

				else {
				
				localStorage.setItem("acce2", acce2);
			}

				if (localStorage.acce3 >= 0) {
				acce3 = localStorage.getItem("acce3");
				acce3 = parseFloat(acce3);
				}

				else {
				
				localStorage.setItem("acce3", acce3);
			}

				if (localStorage.acce4 >= 0) {
				acce4 = localStorage.getItem("acce4");
				acce4 = parseFloat(acce4);
				}

				else {
				
				localStorage.setItem("acce4", acce4);
			}

				if (localStorage.acce5 >= 0) {
				acce5 = localStorage.getItem("acce5");
				acce5 = parseFloat(acce5);
				}

				else {
				
				localStorage.setItem("acce5", acce5);
			}

			if (localStorage.ShowUpgrade1 >= 0) {
				ShowUpgrade1 = localStorage.getItem("ShowUpgrade1");
				ShowUpgrade1 = parseFloat(ShowUpgrade1);
				}

				else {
				localStorage.setItem("ShowUpgrade1", ShowUpgrade1);
			}


			if (ShowUpgrade1 == 1) {
					document.getElementById('ClickUpgrade1').style.display = 'block';
				}

				if (localStorage.ShowUpgrade2 >= 0) {
				ShowUpgrade2 = localStorage.getItem("ShowUpgrade2");
				ShowUpgrade2 = parseFloat(ShowUpgrade2);
				}

				else {
				localStorage.setItem("ShowUpgrade2", ShowUpgrade2);
			}

			if (ShowUpgrade2 == 1) {
					document.getElementById('ClickUpgrade2').style.display = 'block';
				}

				if (localStorage.upgradeActive1 >= 0) {
				upgradeActive1 = localStorage.getItem("upgradeActive1");
				upgradeActive1 = parseFloat(upgradeActive1);
				}

				else {
				localStorage.setItem("upgradeActive1", upgradeActive1);
			}
    
           if (localStorage.isSurfaceColorTrue >= 0) {
				isSurfaceColorTrue = localStorage.getItem("isSurfaceColorTrue");
				isSurfaceColorTrue = parseFloat(isSurfaceColorTrue);
                console.log("h")
				}

				else {
				localStorage.setItem("isSurfaceColorTrue", isSurfaceColorTrue);
                    console.log("d")
			}

			if ("surfaceColor" in localStorage) {
				surfaceColor = localStorage.getItem("surfaceColor");
                console.log("h")
				}

				else {
				localStorage.setItem("surfaceColor", surfaceColor);
                    console.log("d")
			}
    
            if (localStorage.clickAmount >= 0) {
				clickAmount = localStorage.getItem("clickAmount");
				clickAmount = parseFloat(clickAmount);
				}

				else {
				localStorage.setItem("clickAmount", clickAmount);
			}
    
            if (localStorage.updated >= 0) {
				updated = localStorage.getItem("updated");
				updated = parseFloat(updated);
				}

				else {
				localStorage.setItem("updated", updated);
			}
    
    if (localStorage.progress2 >= 0) {
				progress2 = localStorage.getItem("progress2");
				progress2 = parseFloat(progress2);
				}

				else {
				localStorage.setItem("progress2", progress2);
			}
    if (localStorage.progress3 >= 0) {
				progress3 = localStorage.getItem("progress3");
				progress3 = parseFloat(progress3);
                progress = progress3;
				}

				else {
				localStorage.setItem("progress3", progress3);
                progress = progress3;
			}
				update();
			

			}
			