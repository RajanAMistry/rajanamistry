/*
	Listen to navigation links
		- Toggle active link 
		- Toggle clicked link
		- Collapses nav bar 
		*/
		$('.nav-link').on('click', function (evt) {
			$('.nav-link.active').toggleClass('active');
			$(this).toggleClass('active');
			$('.navbar-collapse').collapse('hide');
		});

/*
	Rating data
	*/
	const getRatingData = () => {
		return {
			"frontend": 
			[
			{
				"name": "html5",
				"displayName": "HTML5",
				"rating": 10
			},
			{
				"name": "css3",
				"displayName": "CSS3",
				"rating": 8
			},		
			{
				"name": "javascript",
				"displayName": "JavaScript",
				"rating": 8
			},
			{
				"name": "extjs" ,
				"displayName": "ExtJS 4.2.1",
				"rating": 7
			},
			{
				"name": "angular" ,
				"displayName": "Angular 10",
				"rating": 8
			},
			{
				"name": "vue3" ,
				"displayName": "Vue 3",
				"rating": 4
			}
			],
			"backend": [
			{
				"name": "java",
				"displayName": "Java 7",
				"rating": 7
			},
			{
				"name": "sql" ,
				"displayName": "PL/SQL",
				"rating": 8
			},
			{
				"name": "spring" ,
				"displayName": "Spring boot",
				"rating": 5
			},
			{
				"name": "nodejs" ,
				"displayName": "NodeJS",
				"rating": 4
			},
			{
				"name": "mongodb" ,
				"displayName": "Mongo DB",
				"rating": 5
			}
			]
		};
	};

	const ratingValue = (value) => {
		switch(value){
			case 1:
				return 'Beginner';
			case 2:
				return 'Beginner';
			case 3:
				return 'Beginner';
			case 4:
				return 'Intermediate';
			case 5:
				return 'Intermediate';
			case 6:
				return 'Intermediate';
			case 7:
				return 'Intermediate';
			case 8:
				return 'Advanced';
			case 9:
				return 'Advanced';
			case 10:
				return 'Advanced';
			default:
				return 'Beginner';										
		}
	};

	const createSelectLabel = (name) => {	
		let selectLabel = document.createElement("label");		
		selectLabel.innerHTML = name;
		return selectLabel;
	};
	const createSelect = (target) => {	
		let selectRating = document.createElement("select");
		selectRating.id = target + "Select";

		for (let i=1;i<=10;i++) {
			let option = document.createElement("option");
			option.value = i;
			option.text = i;
			selectRating.appendChild(option);
		}
		return selectRating;
	};

	const renderRating = (target, items) => {	
		const container = document.getElementById(target);

		let selectArray = [];
		for (let item of items) {
			const selectRating = createSelect(target + item.name);			
			const selectLabel = createSelectLabel(item.displayName);	
			container.appendChild(selectLabel);	
			container.appendChild(selectRating);	
			selectRating.value = item.rating;
			selectArray.push({'id': selectRating.id, 'data': item});		
		}

		for(let selectItem of selectArray){
			$('#'+selectItem.id).barrating({theme:'bars-1to10', readonly:true, intialRating: selectItem.data.rating});
		}


	};

	const renderTecnologiesRating = () => {
		const ratingData = getRatingData();
	/*
		render frontend rating
		*/
		renderRating('frontendRating', ratingData['frontend']);
	/*
		render backend rating
		*/
		renderRating('backendRating', ratingData['backend']);
	};

/*
	On document load it 
	 - renders rating
	 */
	 $(document).ready(function() {
	 	renderTecnologiesRating();      
	 });