# Five Stars #

Fives Stars is a Ti library that counts the number of times the app has been opened and will display a "rate this app" alert dialog when it reaches the specified limit.

It's designed to be super easy and super awesome.

## How to Use ##

	Ti.include("FiveStars.js");
	
	FiveStars.displayRatePopup(2, "http://itunes.apple.com/gb/app/msw-surf-forecast/id322103952?mt=8#", {
		title: "Rate MSW Surf Forecast",
		message: "You've open MSW Surf Forecast %d times, rate it 5 stars?"
	});
	
You can specifiy in the options object any attributes for the Ti.AlertDialog that you want, however you cannot override the functions of the buttons.

You can however jump into the JavaScript file and modify it as you need to. This is why it isn't a true Ti module.

## Contribute ##

Fork it on GitHub. Add awesome. Send pull request. Receive high 5.

## License ##

Copyright Metcentral Ltd 2011

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.