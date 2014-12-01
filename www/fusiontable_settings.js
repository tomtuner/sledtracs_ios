/*!
 * Customization file for Fusion Table Mobile Templates
 * See maps_lib.js for license and repository
 *
 * REPLACE THE SETTINGS BELOW TO REFER TO YOUR OWN DATA.
 *
 * Required:
 * 1. Fusion Table IDs
 *
 * Overrides (optional):
 * 2. Search Settings
 *   - Default is a field for every column if you don't set this
 * 3. Custom Content
 *   - Title
 *   - About Page
 *   - Infobox (popup when you click on a location)
 * 4. Map Preferences
 *   - How It Should Use Your Nearby Location
 */

var MapsLib = MapsLib || {};


  /////////////////////////
  // 1. FUSION TABLE IDs //
  /////////////////////////

  // Using v1 Fusion Tables API
  // See https://developers.google.com/fusiontables/docs/v1/migration_guide for more info

  // The encrypted Table ID of your Fusion Table (found under File => About)
// BELOW IS TRIALS 2013-2014
 MapsLib.fusionTableId = "1EUhXHZ2Y0Y3zi6Ulfv-bOs4BsWk0bQbnUd9pO3E";

  //BELOW IS 2013-2014 Trail Junctions
//  MapsLib.fusionTableId = "1e67HHM4JOAiPuKMO3_dG9GH9m-efoEl_Y-mu7Qw";


// BELOW IS 2012 TRAIL DATA
//  MapsLib.fusionTableId = "1ma6ummpJ0GJFNBkiyuCavzgGNjWzK30yMd2VwGw";

  // *New Fusion Tables Requirement* API key. found at https://code.google.com/apis/console/
  // *Important* this key is for demonstration purposes. please register your own.
  MapsLib.googleApiKey ="AIzaSyAMVBSXes-6P-gWaxRj20GK8NT6WDVpozM";
  

  // DONE!  YOU COULD DELETE EVERYTHING AFTER THIS POINT AND STILL HAVE A WORKING APP.
  // BELOW ARE CUSTOM OVERRIDES TO MAKE YOUR APP MORE AWESOME.  UNCOMMENT EACH SECTION AS YOU GO.

  // IF YOU GET STUCK, PLEASE VISIT https://github.com/sfbrigade/Mobile-Fusion-Tables
  // YOU CAN SUBMIT AN ISSUE OR CONTACT AN AUTHOR.


$.extend(MapsLib, {

/*

  ////////////////////////
  // 2. SEARCH SETTINGS //
  ////////////////////////
  
  // By default, you will get a text field for each column.
  // However, you can customize search settings using the following attributes:
  //
  //  - allColumns (default=true):             a text field will appear for each column.
  //
  //  - allColumnsExactMatch (default=false):  allColumns + exact matching of fields.
  //
  //  - addressShow (default=true):            show address field for centering search
  //
  //  - addressAutocomplete:                   autocomplete options for address field (set to false if you don't want autocomplete)
  //     - country (default="US"):             restrict autocomplete to search within said country (2-character country code)
  //     - useDefaultMapBounds (default=true): addresses within defaultMapBounds (see section 4) will be prioritized to the top of autocomplete results
  // 
  //  - distanceFilter: drop-down for restricting search results by distance to address (or nearby).  Comment this out to have no such drop-down.
  //     - filterSearchResults (default=true): limit search results to those within distance
  //     - filterListResults (default=true):   limit list results to those within distance (otherwise they're just ordered nearest-first)
  //     - dropDown:                           array of drop-down entries for distance from address.  Each entry is an array of:
  //          1. drop-down text
  //          2. radius length as "X miles" or "X meters" if the drop-down text wasn't already in this format.
  //          3. true if this is the default selection
  //       - You can specify "0" for radius length to not filter by distance, and leave zoom as-is.
  //
  //  - dropDowns: array of custom drop-downs, where an entry has the following attributes:
  //       - label
  //       - options: array of drop-down entries.  Each entry is an array of:
  //          1. drop-down text
  //          2. Fusion Table SQL-style WHERE clause (overrides template)
  //             - see https://developers.google.com/fusiontables/docs/v1/sql-reference for Fusion Table-friendly WHERE clauses
  //          3. true if this is the default selection
  //       - template (optional): template for WHERE clause, using {text} to insert drop-down text
  //         NOTE: if you use a template, a drop-down entry can be just the drop-down text instead of an array.
  //
  //  - columns: array of column fields, where a field has the following attributes:
  //       - label
  //       - column: name of column
  //       - exact_match (default=false, meaningless if options is specified): look for exact match instead of a contains match
  //       - range (numbers and dates only, default=true): use this if you want a range slider.  Looks up minimum and maximum values for column.
  //
  //  If "allColumns" is true, "columns" will simply override label/match settings for the specified columns
  //  Fields for numerical columns use exact match- they have no support for contains match.
  //    (Create a drop-down to search within ranges in numerical value.)
        */
  searchPage: { 
    allColumns: false,
    distanceFilter: { 
      dropDown: [ ["Anywhere", "0", true], ["1/2 mile", "5 miles"], ["10 mile"], ["20 miles"], ["50 miles"], ["100 miles"], ["200 miles"] ]
    },
    /*
    dropDowns: [ 
      { label: "Rating Filter", options: [
        ["Any Rating", "'last_score' > 0", true],
        ["Good", "'last_score' > 90"],
        ["Adequate", "'last_score' > 85 AND 'last_score' <= 90"],
        ["Needs Improvement", "'last_score' > 70 AND 'last_score' <= 85"],
        ["Poor", "'last_score' <= 70 AND 'last_score' > 0"]
      ] }
    ],
     */
    columns: [
      {label: "Town", column: "Town"},
      {label: "Trail Name", column: "Trail"},
      {label: "County Name", column: "County"},
      {label: "Club Name", column: "Club"},
      {label: "Length (miles)", column: "Mileage"},

    ],
  },

  

  ///////////////////////
  // 3. CUSTOM CONTENT //
  ///////////////////////

  
  // Title bar (including title of website)
 // title: "SF Food Inspections",

  // Contents of the About Page.  You can use "{title}" to insert your title.
  aboutPage: " \
    <h3>About TheRiderScope.com</h3> \
    <p>TRS is a bunch guys focused on helping to improve the snowmobile community by leveraging their knowledge in technology.<br/><br/>We cover everything from the local market to national race coverage and interviews. You can see it all for yourself over at our happy home on the web <a href='http://theriderscope.com' target='_blank'>TheRiderScope.com</a>.<br/><br/>If your interested in learning more about this mobile app or becoming a sponsor through our marketing program drop us a message and we will get right back to you after our ride <a href='http://theriderscope.com/home/contact-page/' target='_blank'>Contact Us.</a><br/><br/> Hope you find this app useful<br/><img src='images/TRS_header.png' alt='TheRiderScope' height='100'></p> \
    </p> \
    ",

  // This will go in your style block.  Useful if customizing your infoboxes.
  customCSS: " \
    .infobox-header, .ui-li-desc, li, #score-text { font-family: Arial, Helvetica, Geneva, sans-serif; white-space:normal;} \
    .infobox-map { width:220px; height:107px;} \
    .infobox-header { display:inline; padding-right: 10px; } \
    .infobox-subheader { padding-top: 5px; } \
    .moreinfo { margin-left:7px; min-width:18px; position:absolute; \
        top:45%; bottom:45%; min-height:18px; } \
    .score { float:left; font-size:medium; padding:5px; border:1px solid black; margin:2px 7px 5px 0px; } \
    .score.grn_blank { background-color: #00de3c; color: white; } \
    .score.ltblu_blank { background-color: #55d7d7; color: white; } \
    .score.orange_blank { background-color: #ff9c00; color: white; } \
    .score.red_blank { background-color: #fb6155; color: white; } \
  ",

  // customInfoboxHtml can be defined as a string or a function:
  //  STRING:   You can embed Handlebars expressions and variables.
  //  FUNCTION: Returns an HTML string and takes two params: row and isListView
  //  "":       No infobox.
  //  Default (leaving it undefined): falls back on the infobox format from Fusion Table
  //
  //  In either case, the variables are defined as follows:
  //  - row.COLUMN_NAME, returns value for given column in your FusionTable row
  //      - Note: COLUMN_NAME has periods omitted, and spaces replaced with underscores
  //      - Example: to get the value from the "U.S. Entity Type" column, use row.US_Entity_Type
  //  - isListView, which evaluates to:
  //      - false when populating a map infobox
  //      - true when populating a row in the "List" view

  // delimitedColumns (optional): specify delimiter per column, and row.COLUMN_NAME will return an array
   /*
  delimitedColumns: {"violations": ";"},

  customInfoboxHtml: " \
    {{#if isListView}} \
      <div> \
    {{else}} \
      <div class='infobox-map'> \
    {{/if}} \
    <div class='score {{row.TRAIL}}'><span id='score-text'>{{row.COUNTY}}</span></div> \
    <h4 class='infobox-header'>{{row.name}}</h4> \
    <p class='ui-li-desc infobox-subheader'> \
    {{#if isListView}} \
      {{row.address}}</p> \
    {{else}} \
      <strong>Last inspected: {{row.TRAIL}}</strong> \
      <br>{{row.address}}</p> \
      <p class='ui-li-desc infobox-subheader'> \
      {{#if row.COUNTY}} \
        <b>Recent violations ({{row.violations.length}}):</b> \
        {{#each row.violations}} \
          <br>- {{this}} \
        {{/each}} \
      {{else}} \
        <b>Recent violations:</b> None \
      {{/if}} \
    {{/if}} \
    </p></div>",
  
  // Infoboxes will also appear (unless blank) on your nearby or search address pins.
  // HTML is OK.  Use "{address}" to denote the entered address for addressPinInfobox.
  nearbyPinInfobox: "You are here.",
  addressPinInfobox: "{address}",

     */

  ////////////////////////
  // 4. MAP PREFERENCES //
  ////////////////////////

/*
  // Override the location column in your Fusion Table (useful if you have multiple columns)
  // NOTE: if you have "latitude" and "longitude" columns, just use "latitude"
  //locationColumn:     "latitude",

  // Center and zoom radius that your map defaults to when location services are off.
  // If useDefaultMapBounds is true (see section 2), this also determines which addresses get priority with autocomplete
  */
//  defaultMapBounds: {
    
    // Use [latitude, longitude] or address
//    center: "Rochester, NY",

    // "X miles" or "X meters"
//    radius: "125 miles"
//  },
    /*
  // Set useNearbyLocation to false if you don't want to get the user's location.
  useNearbyLocation: {
    startAtNearbyLocation:      true,

    // If true: use nearby location only if we're within default map bounds
    //          otherwise, post boundsExceededMessage (if non-empty) and use mapDefaultCenter.
    onlyWithinDefaultMapBounds: true,
    boundsExceededMessage:      "Your location is far away from our focus.  Defaulting to Western New York.",

    // use this zoom radius if starting at nearby location
    nearbyZoomRadius:           "200 meters",

    // Snap to nearby zoom radius when user hits "Nearby"?  Options are:
    // true             = always snap to zoom level
    // false (default)  = never snap to zoom level
    // int              = snap to zoom level if ratio between current and nearby zoom radii
    //                      is greater than this (in either direction)
    snapToNearbyZoomIfRatioGreaterThan: 8
  },

  // mapOverlays is an array of ground overlays, where an overlay has the following attributes:
  //       - imageURL: url to the image to overlay on the map
  //       - cornerNW: [latitude, longitude] of the overlay's NW corner
  //       - cornerSE: [latitude, longitude] of the overlay's SE corner
  //       - opacityPercent (default = 50):
  //            0 = completely invisible
  //            100 = completely opaque
    

   mapOverlays: [ 
    "1gMEFv2PnLI24A8of8eM4q2xkhmrCWLMilLPooxI", // FusionTable ID of another table
 //   { 
 //     imageURL: 'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
 //     cornerNW: [40.712216, -74.22655],
 //     cornerSE: [40.773941, -74.12544],
 //     opacityPercent: 60
 //   },
  ],

          */
          
});
