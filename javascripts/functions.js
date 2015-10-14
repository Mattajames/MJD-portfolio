
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//portfolio articals slide toggles
$(document).ready(function(){
function slide() {
   $(this).find(".articalDiscription").slideToggle("slow");

   return false;
}
$(".articalImage").hover(slide, slide);

});


//Slider in pop up
 $('.carousel').carousel();
    $('.carousel').on('slide.bs.carousel', function(e) {
        var from = $('#myCarousel .carousel-buttons .col-xs-3').index();
        var next = $(e.relatedTarget);
        var to =  next.index();
// $('#myCarousel .carousel-buttons .col-xs-3').removeClass('active').eq(to).addClass('active');
});


//Brain animation
function animateit(){
  $('.brainColour').animate({'height' : '82px', 'botom' : '0px' }, 2000, function(){
  });
}
animateit();

//modals
var hotelClub = {
    id : 'hotelClubModalPop',
    title : " Hotel Club iPad app",
    myCarousel : "hotelClubCarousel",
    image1 : "images/hc-icon.jpg",
    image2 : "images/hc-advert.jpg",
    image3 : "images/hc-home.jpg",
    alt1 : "Hotel Club iPad Example 1",
    alt2 : "Hotel Club iPad Example 2",
    alt3 : "Hotel Club iPad Example 3",
    product : " OS iPad App",
    territories : " Com | Australia | China",
    comentsText : " HotelClub Explorer is an App that brings an up-to-the-minute travel magazines with content from TripAdvisor, YouTube, Foursquare, Flickr &amp; Twitter API’s. The design brief was to design an inspirational user experience to promote Hotel Club products.",
    link : "https://itunes.apple.com/gb/app/hotelclub-explorer/id702899237?mt=8",
}

var ebookers = {
    id : "ebookersPop",
    title : " ebookers Mobile Email",
    myCarousel : "ebookersCarousel",
    image1 : "images/eb-responsive.jpg",
    image2 : "images/eb-desk-close.jpg",
    image3 : "images/eb-mob-close.jpg",
    alt1 : "Ebookers Responsive Email 1",
    alt2 : "Ebookers Responsive Email 2",
    alt3 : "Ebookers Responsive Email 3",
    product : " Responsive Newsletter Template",
    territories : " .com | French | German | Sweden | Denmark | Belgium | Dutch ",
    comentsText : " ebookers mobile newsletter is sent monthly to promote ebookers apps and promotions on mobile. The newsletter was sent &amp; managed via Responsys, a web based CRM solution. Circulation of this newsletter would be sent to 32, 000 + email addresses. The work involved continual optimisation of the template where design and copy were tested to increase downloads and bookings.",
    link : false,
}


var featurebank = {
    id : "featurebankPop",
    title : " Featurebank Rebrand",
    myCarousel : "featurebankCarousel",
    image1 : "images/feature-bank.jpg",
    image2 : "images/feature-bank-1.jpg",
    image3 : "images/feature-bank-2.jpg",
    alt1 : "Featurebank logo",
    alt2 : "Featurebank Example Page",
    alt3 : "Featurebank Example Page 2",
    product : " PR Agency Rebrand",
    territories : " UK",
    comentsText : " Featurebank set the project of rebranding their PR agency. Logo, brand guidelines, as well as a cutting edge HTML5 responsive website &amp; video background was the end result.",
    link : "http://featurebank.co.uk/",
}

var sofarsounds = {
    id : "sofarPop",
    title : " Sofar Sounds",
    myCarousel : "sofarSoundsCarousel",
    image1 : "images/sofar-slide-1.jpg",
    image2 : "images/sofar-slide-2.jpg",
    image3 : false,
    alt1 : "Sofar landing page 1",
    alt2 : "Sofar landing page 2",
    alt3 : false,
    product : " Start up Music App",
    territories : " Worldwide",
    comentsText : " Sofar Sound set the task to create a contact form landing page in HTML &amp; LESS using the Twitter Bootstrap Framework, this then had to be uploaded to Git for Sofar Sounds to download.",
    link : "https://github.com/Mattajames/sofarsound",
}

var facebook = {
    id : "facebookPop",
    title : " Facebook Advertising",
    myCarousel : "facebookCarousel",
    image1 : "images/fb-1.jpg",
    image2 : "images/fb-2.jpg",
    image3 : "images/fb-3.jpg",
    alt1 : "Facebook timeline advert",
    alt2 : "Optimise Mobile Example 2",
    alt3 : "Facebook Custom Page",
    product : " Design | Mobile | Development",
    territories : " .com | French | German | Sweden | Denmark | Belgium | Dutch ",
    comentsText : "  ebookers have a strong social media presents, part of their social campaign was to build bespoke responsive landing pages as well as install and timeline banner adverts. Install adverts were continually revised and tested to optimise download performance.",
    link : false,
}

var optimise = {
    id : "optimisePop",
    title : " Optimise Website Marketing",
    myCarousel : "optimiseCarousel",
    image1 : "images/optimise-slide.jpg",
    image2 : "images/optimise-slide-1.jpg",
    image3 : false,
    alt1 : "Optimise Mobile Example 1",
    alt2 : "Optimise Mobile Example 2",
    alt3 : false,
    product : " Design | SEO | PPC | Display | Mobile",
    territories : " UK",
    comentsText : "  A responsive website design that works at all screen resolutions. This site was built using the Genesis framework on a Wordpress build. Optimise is fully owned by myself, the site is an ongoing project and I am constantly updating the site for search engine optimisation and using for test ground for my user experience ideas. I was fully responsible for all branding, design and development.",
    link : false,
}

var concierge = {
    id : "conciergePop",
    title : " Concierge London SE1",
    myCarousel : "conciergeCarousel",
    image1 : "images/concierge-london-slide.jpg",
    image2 : "images/concierge-london-slide-1.jpg",
    image3 : "images/concierge-london-slide-2.jpg",
    alt1 : "Concierge Example 1",
    alt2 : "Concierge Example 2",
    alt3 : "Concierge Example 3",
    product : " Concierge services to the London Area of SE1",
    territories : " UK",
    comentsText : "  A small privately owned business website built on Wordpress with the Genesis framework. I designed, branded and coded the site. Currently project managing SEO and advertising for the site on an ongoing basis. The brief was to design a sophisticated luxurious website to display the different business areas of Concierge London SE1, this was achieved this by using textures and slow animations in JavaScript  to give an up market look and feel.",
    link : false,
}

var pokerStars = {
    id : "pokerStarsMobPop",
    title : " PokerStars Mobile",
    myCarousel : "pokerStarsCarousel",
    image1 : "images/pokerstars-slide.jpg",
    image2 : "images/pokerstars-slide-1.jpg",
    image3 : false,
    alt1 : "PokerStars Mobile Example 1",
    alt2 : "PokerStars Mobile Example 2",
    alt3 : false,
    product : " Mobile | iOS | Android",
    territories : " .com | French | Italian | Spanish | Belgium | Danish | Hungary",
    comentsText : "  These designs are part of a set of three, Mobile generic, IOS and Android. The pages were used as site pages as well as PPC landing pages. Displayed is the generic and IOS pages, from this you can see the designs are of similar style with branded buttons and content. The mobile pages were tested against different designs that varied in content and size but the best performing was this style that presented the user with a scrolling page that had engaging content.",
    link : false,
}

var unibet = {
    id : "unibetMobPop",
    title : " Unibet",
    myCarousel : "unibetCarousel",
    image1 : "images/unibet-slide.jpg",
    image2 : "images/unibet-slide-1.png",
    image3 : false,
    alt1 : "unibet Example 1",
    alt2 : "unibet Example 2",
    alt3 : false,
    product : " Unibet Websites and Print Design",
    territories : " .com | French | German | Netherlands | Nordics | Belgium | Danish",
    comentsText : "  Assigned to Unibet design team on a freelancing basis for a period of 3 months and undertook a varied amount of projects from web to print design. Displayed is the promotion “500 Euro Bonus” part of a set of branded Unibets material to be used on site and across advertising channels promotion the offer. Slide 2 is a print design of their playing card back that was to be used on the live poker games across the world.",
    link : false,
}

var youwin = {
    id : "youwinPop",
    title : " youwin.com",
    myCarousel : "youwinCarousel",
    image1 : "images/youwin-slide.jpg",
    image2 : "images/youwin-slide-1.jpg",
    image3 : false,
    alt1 : "youwin Mobile Example 1",
    alt2 : "youwin Mobile Example 2",
    alt3 : false,
    product : " Sport | Casino | Slots | Poker",
    territories : " English | German | Spanish",
    comentsText : "  As Creative Manager it was my responsibility for all design of pages, advertising and branding of youwin.com. My time at youwin.com saw a launch of new branding across sportsbook, casino &amp; poker.  I was involved at all stages from concepts to final launch. Key responsibilities were to liaise with an independent agency that was coding the back end to the sites and providing wire frames and PSDs. CMS and back end were handled by a third party agency which worked closely with myself to ensure layouts were implemented properly and stayed on brand.",
    link : false,
}

var pokerStarsMis = {
    id : "pokerStarsMisPop",
    title : " PokerStars MIS",
    myCarousel : "pokerStarsMisCarousel",
    image1 : "images/ps-ui-slide-1.jpg",
    image2 : "images/ps-ui-slide-2.jpg",
    image3 : "images/ps-ui-slide-3.jpg",
    alt1 : "PokerStars UI Database Example 1",
    alt2 : "PokerStars UI Database Example 2",
    alt3 : "PokerStars UI Database Example 3",
    product : " PokerStars Management Information System",
    territories : " .com | French | Italian | Spanish |Belgium | Danish | Hungary",
    comentsText : " Internal project for a Management Information System was the task set. I took the project from wire frame to front end development and then the back end and API installation was completed by another department.  A project sole aim was to collate information from all departments within online marketing for manages to analyse and cross reference data from the different sections of online marketing.  I came up with logical UI design to present the data in a easy to read user friendly interface.",
    link : false,
}

var pokerStarsLanding = {
    id : "pokerStarsLandingPop",
    title : " PokerStars Landing Page (CRO)",
    myCarousel : "pokerStarsLandingCarousel",
    image1 : "images/pokerstars-long-slide.jpg",
    image2 : "images/pokerstars-long-slide-1.jpg",
    image3 : false,
    alt1 : "PokerStars Landing Page Example 1",
    alt2 : "PokerStars Landing Page Example 2",
    alt3 : false,
    product : " PokerStars PPC Landing Pages",
    territories : " .com | French | Italian | Spanish |Belgium | Danish | Hungary",
    comentsText : " Displayed are PPC landing pages which sole purpose is to convert people searching on Google adverts and downloading PokerStars software. These pages are regularly tested and optimised to maintain a high level of conversions on individual keywords high in traffic for PokerStars search. My involvement is to design, code and implement tests using Google experiments and Maxymiser software and then reports on analytics and progress.",
    link : false,
}

function WorkModals(obj){
    for (var field in obj) {
         if (obj.hasOwnProperty(field)) {
           this[field] = obj[field];
         }
       }
    var headerHTML =    '<div id="' + id + '" class="modal fade" role="dialog">'
                        + '<div class="modal-dialog">'
                        + '<div class="modal-content">'
                        + '<div class="modal-header">'
                        + '<button type="button" class="close" data-dismiss="modal">&times;</button>'
                        + '<h4 class="modal-title">' + title + '</h4>'
                        + '</div>'
                        + '<div class="modal-body">'
                        + '<div id="' + myCarousel + '" class="carousel slide" data-ride="carousel">',

        slidesNoTwo =  '<ol class="carousel-indicators">'
                        + '<li data-target="#' + myCarousel + '" data-slide-to="0" class="active"></li>'
                        + '<li data-target="#' + myCarousel + '" data-slide-to="1"></li>',

        slidesNoThree = '<li data-target="#' + myCarousel + '" data-slide-to="2"></li>',

        slidesEnd = '</ol>' ,

        carouselItems = '<div class="carousel-inner">'
                        + '<div class="item active">'
                        + '<img src="' + image1 + '" alt="' + alt1 +'">'
                        + '</div>'
                        + '<div class="item">'
                        + '<img src="' + image2 + '" alt="' + alt2 +'">'
                        + '</div>',

       threeImg =        '<div class="item">'
                        + '<img src="' + image3 + '" alt="' + alt3 +'">'
                        + '</div>',

        comments =      '</div></div>'
                        + '<p>Product:' + product + '</p>'
                        + '<p>Territories:' + territories + '</p>'
                        + '<p>Comments:<br>' + comentsText + '</p>'
                        + '<a class="workLink" href="' + link + '"target="_blank">Visit' + title + '</a>'
                        + '</div></div></div></div>' ;

        //Checks if 3 images are true
        if(image3 === false){
            $(headerHTML +  slidesNoTwo + slidesEnd + carouselItems  + comments ).appendTo('.container-liquid');

        }else{
            $(headerHTML +  slidesNoTwo + slidesNoThree + slidesEnd + carouselItems  + threeImg  + comments ).appendTo('.container-liquid');
        }
        //changes link text for sofar
        $('div#sofarPop').find('a').text('See code on Github');
        //checks if links are present
        if(link === false){
            $('.workLink').hide();
        }
        //takes id from objects above
        $('#' + id).modal();
}


document.getElementById('HotelClubModal').addEventListener("click", function() { WorkModals(hotelClub) });
document.getElementById('ebookersModal').addEventListener("click", function() { WorkModals(ebookers) });
document.getElementById('featurebankModal').addEventListener("click", function() { WorkModals(featurebank) });
document.getElementById('sofarModal').addEventListener("click", function() { WorkModals(sofarsounds) });
document.getElementById('facebookModal').addEventListener("click", function() { WorkModals(facebook) });
document.getElementById('optimiseModal').addEventListener("click", function() { WorkModals(optimise) });
document.getElementById('conciergeModal').addEventListener("click", function() { WorkModals(concierge) });
document.getElementById('pokerStarsModal').addEventListener("click", function() { WorkModals(pokerStars) });
document.getElementById('unibetModal').addEventListener("click", function() { WorkModals(unibet) });
document.getElementById('youwinModal').addEventListener("click", function() { WorkModals(youwin) });
document.getElementById('pokerStarsMISModal').addEventListener("click", function() { WorkModals(pokerStarsMis) });
document.getElementById('pokerStarsLandingModal').addEventListener("click", function() { WorkModals(pokerStarsLanding) });



