(function() {
	"use strict";


	var folhaKiller = {};
	// i can do this in manifest.json matches eky, but i'm lazy man
	if(document.location.host.match(/folha.uol.com.br/i)) {

		folhaKiller = {
			finish: function(win) {
				win.onscroll = win.onresize = function() { return true ; };
			},
			init: function () {
				var self 		= this ;
				this.wrapper 	= document.querySelector("body > span");
				if(this.wrapper != null) {
					this.walk(this.wrapper, function() {
						this.style.display = 'none';
					});
					this.removeBodyStyle();
					return true;
				};
				return false;
			},

			walk: function(element, applyCallback) {
				var childNodes = element.childNodes , nodesTotal = childNodes.length;
				for(var i=0;i<nodesTotal;i++) {
					var node = childNodes[i];
				   	applyCallback.call(node, node); 
				};
				applyCallback.call(element,element);
			},
			// override folha CSS, man
			removeBodyStyle: function() {
				document.querySelector('body').removeAttribute('style');
			}
		};

		// work it harder
		folhaKiller.init();

		// make it better
		window.addEventListener('load' , function() {
			folhaKiller.finish(window);
		});
	};
})();
