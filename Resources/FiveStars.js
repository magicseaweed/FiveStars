var FiveStars = (function () {
	var namespace = "5Stars",
			openLimit = 5;

	var getOpenCount = function () {
		return Ti.App.Properties.getInt(namespace+"_COUNT", 0);
	};
	
	var incrementOpenCount = function () {
		var now = getOpenCount();
		now++;
		
		Ti.App.Properties.setInt(namespace+"_COUNT", now);
	};
	
	var allowedToDisplay = function () {
		return Ti.App.Properties.getBool(namespace+"_NEVER", true);
	};

	return {
		extend: function (obj) {
			for (var i = 1; i < arguments.length; i++) {
				for (var prop in arguments[i]) {
					if (arguments[i].hasOwnProperty(prop)) {
						obj[prop] = arguments[i][prop];
					}
				}
			}
			
			return obj;
		},
		displayRatePopup: function (openCount, itms, o) {
			incrementOpenCount();
			var count = getOpenCount();

			if (o.message) {
				o.message = String.format(o.message, count);
			}

			if (count >= openCount && allowedToDisplay()) {
				var ask = Ti.UI.createAlertDialog(FiveStars.extend({
					title: "Rate App",
					message: String.format("You've opened the app %d times would you like to rate it 5 stars?", count),
					buttonNames: ["Rate Now", "Later", "Never"],
					cancel: 1
				}, o));
				
				ask.show();
				
				ask.addEventListener("click", function (e) {
					if (e.index == 0) {
						Ti.Platform.openURL(itms);
						Ti.App.Properties.setBool(namespace+"_NEVER", false); // opened to rate thus disable.
					} else if (e.index == 2) {
						Ti.App.Properties.setBool(namespace+"_NEVER", false);
					}
				});
			}
		}
	};
})();