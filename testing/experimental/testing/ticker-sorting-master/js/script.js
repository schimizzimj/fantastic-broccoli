$(document).ready(function(){
  // HANDLE TICKER MOVEMENT
  // attach dragger element to nav divs to allow user dragging
    $('.scrollDiv').liMarquee({
      scrollAmount: 10, // number of pixels scrolled in each interval
      scrollDelay: 85 // length of each interval 
    });

  // HANDLE ANIMATION
  // compute height of elements above the newsbox newsbox elements
  // header + 2 navs + title + extra padding (20px here)
  var topMargin = $(".header").outerHeight() + $(".hide-overflow").outerHeight() * 2 + $(".pagetitle").outerHeight() + 42;
  // space between last newsbox row and footer -- left at 0 for now
  var bottomMargin = 0;
  var cardWidth = ($(window).width() > 600) ? 270 : 145;
  var cardHeight = ($(window).width() > 600) ? 390 : 256;
  var gutterSize = 20; // size of gap between cards
  var breakpoint = 1200; // size of window where columns jump from 4 to 2
  var perLine = ($(window).width() > breakpoint) ? 4 : 2;
  var parent = document.getElementById("newsboxset"); //
  var items = getItems();
  var nAds = parseInt(items.length / 4); // get the number of ads based on # of newsboxes
  if (items.length % 4 == 0) {
    // if the very last item will be an ad, remove it
    nAds--;
  }
  var ads = createAds(nAds);
  // space on either side of newbox grid, used to center newsboxes
  var edgeWidth = ($(window).width() - ((perLine * cardWidth) + (gutterSize * (perLine - 1)))) / 2;
  setViews(items); // generate random view counts for each item
  items = sortNodes(items); // sort items by views
  items = addAds(ads, items); // put ads on screen
  setPositions(items); // compute proper positioning for each element
  setInterval(function() {
    // will randomize view count every 5 seconds and resort the elements to show page is working properly
    items = removeAds(items); // remove ads from current items list to allow for proper sorting
    updateViews(items); // update views of each element with new random values
    items = sortNodes(items);
    items = addAds(ads, items);
    setPositions(items);
  }, 5000);

  $(window).resize(function() { // updates positions on window resize to reflect proper column count and center newsboxes
    perLine = ($(window).width() > breakpoint) ? 4 : 2;
    edgeWidth = ($(window).width() - ((perLine * cardWidth) + (gutterSize * (perLine - 1)))) / 2;
    cardWidth = ($(window).width() > 600) ? 270 : 145;
    cardHeight = ($(window).width() > 600) ? 390 : 256;
    console.log(edgeWidth);
    setPositions(items);
  });

  function getItems() {
    // get list of newsbox elements
    var items = parent.childNodes;
    var itemsArr = [];
    for (var i in items) {
        if (items[i].nodeType == 1) { // ignore whitespace nodes
            itemsArr.push(items[i]);
        }
    }
    return itemsArr;
  }

  function setViews(items) {
    // set attribute views to random value for each element and assign unique tokens to each element
    for (var i in items) {
      items[i].setAttribute("views",  Math.floor((Math.random() * 100) + 1)) // assign random views value to each element
      items[i].setAttribute("token", i)
      // used to show sorting is working, will create a display of the views at the bottom of each newsbox
      // just remove the next three lines to remove this debugging feature
      var views = document.createElement("h3");
      views.innerHTML = items[i].getAttribute("views");
      items[i].appendChild(views);
    }
  }

  function removeAds(elements) {
    // remove ads from element list to allow sorting functin to work properly
    var newItems = []
    for (var i in elements) {
      if (elements[i].getAttribute("class") != "newsbox ad") {
        newItems.push(elements[i]);
      }
    }

    return newItems;
  }

  function updateViews(items) {
    // set new views value
    for (var i in items) {
      items[i].setAttribute("views", Math.floor((Math.random() * 100) + 1));
      $(items[i]).find("h3").html(items[i].getAttribute("views")) // remove if you remove the header on the newboxes to display the view count
    }
  }

  function setPositions(items) {
    // properly positions the newsboxes and the footer on the page
    for (var i in items) {
      items[i].style.left = (edgeWidth + ((i % perLine) * (cardWidth + gutterSize))) + "px";
      items[i].style.top = (parseInt(i / perLine) * (cardHeight + gutterSize) + topMargin) + "px";
    }
    $('#footer').css("top", (topMargin + bottomMargin + parseInt(items.length / perLine) * (cardHeight + gutterSize)) + "px");
  }

  function sortNodes (elements) {
    // sort and return the list of nodes
    elements.sort(function(a, b) {
    var value = parseInt(a.getAttribute("views")) == parseInt(b.getAttribute("views")) ? 0 : (parseInt(a.getAttribute("views")) > parseInt(b.getAttribute("views")) ? 1 : -1);
    return value;
    });
    return elements;
  }

  function createAdElement(image) { // create a placeholder ad element
    var ad = document.createElement("div");
    ad.setAttribute("class","newsbox ad")
    ad.style.backgroundImage = "url(" + image + ")";
    return ad;
  }

  function createAds(num) {
    // create list of ads based on proper ads number
    adsList = [];
    for (var i = 0; i < num; i++) {
      var ad = createAdElement("http://via.placeholder.com/" + cardWidth + "x" + cardHeight + "?text=AD");
      parent.appendChild(ad);
      adsList[i] = ad;
    }
    return adsList;
  }

  function addAds(adsList, elements) {
    // add the list of ads to the list of elements on the page
    var adCount = 0;
    var newElements = elements;
    for (var i in elements) {
      if (i % 4 == 0 && i != 0) {
        var index = parseInt(i) + adCount;
        newElements.splice(index, 0, adsList[adCount]);
        adCount++;
      }
    }
    elements = newElements;
    return elements;
  }
});
