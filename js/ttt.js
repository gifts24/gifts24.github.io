
var tabsObj,Act,Tab,Box,i,n;

function topics(num) {

	tabsObj = document.getElementById('tabs');
	n = tabsObj.getElementsByTagName('li').length;

	Act = 'tab' + num;

	for(i=1; i<n+1; i++){

		Tab = 'tab' + i;
		Box = 'topic' + i;

		if(Act == Tab) {

			//IE8、Firefox 等
			if(i == 1) { document.getElementById(Tab).setAttribute('class','first active'); }
			else if(i == n) { document.getElementById(Tab).setAttribute('class','last active'); }
			else { document.getElementById(Tab).setAttribute('class','active'); }

			//IE7以下
			if(i == 1) { document.getElementById(Tab).setAttribute('className','first active'); }
			else if(i == n) { document.getElementById(Tab).setAttribute('className','last active'); }
			else { document.getElementById(Tab).setAttribute('className','active'); }
			
			document.getElementById(Box).style.display = 'block';
			document.getElementById(Box).style.paddingTop = '0';
			document.getElementById(Box).style.borderBottom = 'none';

		}
		else {

			//IE8、Firefox 等
			if(i == 1) { document.getElementById(Tab).setAttribute('class','first passive'); }
			else if(i == n) { document.getElementById(Tab).setAttribute('class','last passive'); }
			else { document.getElementById(Tab).setAttribute('class','passive'); }

			//IE7以下
			if(i == 1) { document.getElementById(Tab).setAttribute('className','first passive'); }
			else if(i == n) { document.getElementById(Tab).setAttribute('className','last passive'); }
			else { document.getElementById(Tab).setAttribute('className','passive'); }

			document.getElementById(Box).style.display = 'none';

		}

	}

}
	window.onload = function(){
		topics(1);
	}

	$(document).ready(function() { topics(1); });	