'use strict';

$(document).ready(function(){

var masyvas = [
		{
			link: ''
			title: [
				{
					image: 'home.jpg',
					vardas: 'Name Surname'
					date: 'Nov 28, 2017',
					time: '6 hrs',
				}
					]
			tekstas: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.',
			interactions: [
					{
					likes: 'like',
					comments: 'comment',
					}
				]
			
		}
	];

function masyvo_generavimas( masyvas ){
	var HTML = '',
		masyvo_dydis = masyvas.length;
	
	for ( var i=0; i<masyvo_dydis; i++ ) {
		HTML += '<div class="feed-item">\
					<div class="title">'+masyvas[i].title.image+' - '+masyvas[i].title.vardas+' - '+masyvas[i].title.date+'</div>'\
					<div class="text">'+masyvas[i].tekstas+'</div>\
					<i class="far fa-thumbs-up"></i>';<i class="fal fa-comment"></i>
			
			for ( var n=0; n<masyvas[i].hashtags.length; n++ ) {
				HTML += '<a href="'+masyvas[i].hashtags[n].hashtag_link+'" style="margin-right:20px;">'+masyvas[i].hashtags[n].hashtag_title+'</a>';	
			}
			
			HTML += '</div>\
				</div>';
	}
	
	$('.facebook-feed').html( HTML );
}

masyvo_generavimas(masyvas);





});

