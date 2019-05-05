export const FOOD_BANK = [
  {
    id: 1,
    name: "El Centro De La Raza",
    address: "2524 16th Ave S, Seattle, WA 98144",
    phone: "206-957-4609",
    website:
      "http://www.elcentrodelaraza.org/what-we-do/human-and-emergency-services/",
    distributionHours: [
      "Wednesdays: 3:30pm - 6:30pm",
      "Thursdays: 9:00am - 12:00pm & 1:30pm - 4:00pm",
      "Fridays: 2:00pm - 4:00pm"
    ],
    areaServed: "All Zip Codes",
    requirements: "Please bring photo ID",
    commodity: true,
    commodityDistribution:
      "Must meet income requirements, and live within the 98108, 98118, or 98144 zipcodes.",
    commodityDistributionDate: "Fridays: 10:00am - 12:00pm",
    lastUpdate: 'February 14, 2019'
  },
  {
    id: 2,
    name: "Asian Counseling and Referral Services Food Bank",
    address: "919 S King St, Seattle, WA 98104",
    phone: "206-292-5714",
    website:
      "https://acrs.org/services/aging-services-for-older-adults/acrs-food-bank/",
    distributionHours: ["Wednesdays: 10:30am - 1:00pm", "11:00am - 1:00pm"],
    areaServed: "All Zip Codes",
    requirements: "Please bring photo ID",
    commodity: false,
    // commodityDistribution: 'Must meet income requirements, and live within the 98108, 98118, or 98144 zipcodes.',
    // commodityDistributionDate: 'Fridays: 10:00am - 12:00pm',
    additionalInformation:
      "The Asian Counseling & Referral Service (A.C.R.S.) Food Bank regularly distributes foods for Asian and Pacific Islander diets.",
    lastUpdate: 'December 18, 2017'
  },
  {
    id: 3,
    name: "Ballard Food Bank",
    address: "5130 Leary Ave NW, Seattle, WA 98107",
    phone: "206-789-7800",
    website: "http://www.ballardfoodbank.org",
    distributionHours: [
      "Mondays: 2:00 pm - 7:00 pm",
      "Tuesdays: 11:00am - 4:00pm",
      "Wednesdays: 11:00am - 4:00pm",
      "Thursdays: 2:00 pm - 7:00pm"
    ],
    areaServed:
      "Zip codes 98107, 98109, 98117, 98119, 98177 (Seattle only), 98199",
    requirements:
      "Please bring a photo I.D. and a current proof of address (a piece of mail that you've received within the past 30 days) for yourself and others living in your household (school or medical records for children living with you) demonstrating you live in our geographic area.",
    commodity: true,
    commodityDistribution: "Yes to limited area - call for more information",
    // commodityDistributionDate: 'Fridays: 10:00am - 12:00pm',
    additionalInformation: [
      "Home delivery",
      "Weekend Food For Kids",
      "Community Connector",
      "Mail pick-up",
      "Emergency Rent",
      "Utility and ID assistance",
      "Hygiene bar"
    ],
    lastUpdate: 'February 14, 2019'
  },
  {
    id: 4,
    name: "Blessed Sacrament Food Bank",
    address: "5050 8th Ave. NE, Seattle, WA 98105",
    phone: "206-547-2885",
    website: "http://www.blessed-sacrament.org/foodbank.html",
    distributionHours: ["Fridays: 10:30am - 12:00pm"],
    areaServed:
      "Parts of zip codes 98105, 98103, 98115 (All are partial; serves the parish boundary)",
    requirements:
      "Live within the parish boundary or be a registered parishioner. Please present ID for all in household and proof of address.",
    commodity: false,
    additionalInformation:
      "Blessed Sacrament Food Bank has served the University District for over 47 years. We also serve a four course meal each Sunday 12:00pm - 2:00pm to which all are welcome. We have a shoe bank quarterly during food bank and our Sunday meal. We distribute toiletries regularly. Through our St. Vincent de Paul Conference we serve all in need of assistance within our parish boundaries or who are registered parishioners.",
    lastUpdate: "December 18, 2017"
  },
  {
    id: 5,
    address: "722 18th Ave, Seattle, WA 98122",
    name: "Byrd Barr Place Food Bank",
    phone: "206-812-4970",
    website: "https://byrdbarrplace.org/programs-services/food-bank/",
    distributionHours: [
      "Tuesdays: 11:00am - 4:00pm",
      "Wednesdays: 12:00pm - 4:00pm",
      "Thursdays: 9:00am - 1:00pm"
    ],
    areaServed: "All Zip Codes",
    requirements: "None.",
    commodity: true,
    commodityDistribution:
      "Zip codes 98102, 98112, 98122. Please bring a picture ID, utility or medical bill, or other printed document to verify your address.",
    additionalInformation:
      "Home Delivery: For elderly and verifiably homebound individuals. In order to receive this service, you must live within 98112, 98122, or 98102. If you or someone you know would benefit from having a food bag delivered one day per week, please call (206) 812-4970 to inquire about being placed on the list.",
    lastUpdate: "February 14, 2019"
  },
  {
    id: 6,
    address: "711 Cherry Street, Seattle, WA 98104",
    name: "Cherry Street Food Bank",
    phone: "206-625-0755",
    website: "http://www.northwestharvest.org/cherry-street-food-bank",
    distributionHours: [
      "Monday: 9:00am - 4:30pm",
      "Wednesday: 9:00am - 4:30pm",
      "Thursday: 9:00am - 12:00pm, Baby Day (Children under 5 & their families ONLY)",
      "Friday: 9:00am - 4:30pm"
    ],
    areaServed: "All Zip Codes",
    requirements:
      "Proof of address, income or need is never required. Clients are asked only for last name, total number of people in the family Number of family members who are infants, children, adults, or seniors **The presence of a child or proof of child's age (WIC card, birth certificate, immunization record, etc.) is required to receive Baby Day items.",
    commodity: false,
    // commodityDistribution: 'Zip codes 98102, 98112, 98122. Please bring a picture ID, utility or medical bill, or other printed document to verify your address.',
    additionalInformation: ["Baby Cupboard", "Mobile Food Bank"],
    lastUpdate: "February 22, 2019"
  },
  {
    id: 7,
    address: "1501 N 45th St., Seattle, WA 98103",
    name: "FamilyWorks - Wallingford Food Bank",
    phone: "206-694-6722",
    website: "https://www.familyworksseattle.org/food-bank",
    distributionHours: [
      "Tuesdays: 12:00pm - 2:00pm",
      "Thursdays: 3:00pm - 6:00pm",
      "Fridays: 11:00am - 1:00pm"
    ],
    areaServed: "Zip codes 98103, 98107, 98115, 98117, 98133, 98177",
    requirements:
      "First time customers are asked to bring a photo ID and proof of address.",
    commodity: true,
    commodityDistribution:
      "Must reside in Wallingford Food Bank zip codes (98103 only) - 3rd Saturday of the month: 10:00am - 12:00pm.",
    homeDelivery:
      "Must reside in Wallingford Food Bank zip codes (98103, 98107, 98115, 98117, 98133, 98177). Eligibility determined by difficulty in leaving home for food based on physical disability or incapacity.",
    additionalInformation:
      "The FamilyWorks Resource Center is a warm and inviting place where families and individuals are welcomed and encouraged to participate in programs designed to support and enhance a nurturing and vibrant community. Programs include: Parent/Child Playgroups, Single Parent Activities, Teen Parent Program, Parenting Classes, Life Skills Development, Individual and Family Advocacy Program, WIC",
    lastUpdate: " July 10, 2018"
  },
  {
    id: 8,
    address: "9501 Greenwood Ave N, Seattle, WA, 98103",
    name: "FamilyWorks - Greenwood Food Bank",
    phone: "206-694-6722",
    website: "https://www.familyworksseattle.org/greenwood-food-bank",
    distributionHours: [
      "Tuesdays: 4:30pm – 6:30pm",
      "Wednesdays: 12:00pm - 2:00pm for everyone, 11:00am - 2:00pm (Seniors)"
    ],
    areaServed: "Zip codes 98103, 98107, 98115, 98117, 98133, 98177",
    requirements:
      "First time customers are asked to bring a photo ID and proof of address.",
    commodity: false,
    // commodityDistribution: 'Must reside in Wallingford Food Bank zip codes (98103 only) - 3rd Saturday of the month: 10:00am - 12:00pm.',
    // homeDelivery: 'Must reside in Wallingford Food Bank zip codes (98103, 98107, 98115, 98117, 98133, 98177). Eligibility determined by difficulty in leaving home for food based on physical disability or incapacity.',
    additionalInformation:
      "The Greenwood Food Bank provides weekly groceries to people in need of food. The Greenwood Food Bank is a partnership between The Salvation Army and FamilyWorks that opened on April 20th, 2016.",
    lastUpdate: "July 10, 2018 "
  },
  {
    id: 9,
    address: "10510 Stone Ave. N Seattle, WA 98133",
    name: "Giving Room Food Bank @ Epic Life Church",
    phone: "206-552-9586",
    website: "http://epiclifechurch.org/",
    distributionHours: ["Mondays 11:00am - 12:45pm "],
    areaServed: "Zip Code 98133",
    requirements: "Bring your own bag or box!",
    commodity: false,
    lastUpdate: "June 6, 2018"
  },
  {
    id: 10,
    address: "1215 Thomas St., Seattle, WA 98109",
    name: "Immanuel Community Services",
    phone: "206-622-1930",
    website: "http://icsseattle.org",
    distributionHours: ["Mondays: 11:00am - 1:00pm"],
    areaServed: "Zip codes 98103, 98107, 98115, 98117, 98133, 98177",
    // requirements: 'First time customers are asked to bring a photo ID and proof of address.',
    commodity: false,
    // commodityDistribution: 'Must reside in Wallingford Food Bank zip codes (98103 only) - 3rd Saturday of the month: 10:00am - 12:00pm.',
    // homeDelivery: 'Must reside in Wallingford Food Bank zip codes (98103, 98107, 98115, 98117, 98133, 98177). Eligibility determined by difficulty in leaving home for food based on physical disability or incapacity.',
    additionalInformation: [
      "Hygiene Center available for visitors to wash clothes, take a shower and spend a few hours in a warm, safe and dry environment. The Hygiene Center is open weekdays from 8:00 am to 2:00 pm",
      "Recovery Program Shelter available for adult men who are working to overcome addiction to drugs and/or alcohol.",
      "Community Lunch available on the last Sunday of every month at noon from Jan-May & Sept-Dec, and at 11:00am from Jun-Aug"
    ],
    lastUpdate: "February 14, 2019"
  },
  {
    id: 11,
    address: "1601 16th Ave, Seattle, WA 98122",
    name: "Jewish Family Service",
    phone: "206-461-3240",
    website: "http://www.jfsseattle.org",
    distributionHours: [
      "Wednesdays: 10:00am - 12:00pm",
      "Thursdays: 2:00pm - 4:00pm",
      "Fridays: 10:00am - 12:00pm"
    ],
    areaServed: "Zip codes 98102, 98104, 98121, 98112, 98101, 98122",
    // requirements: 'First time customers are asked to bring a photo ID and proof of address.',
    commodity: false,
    // commodityDistribution: 'Must reside in Wallingford Food Bank zip codes (98103 only) - 3rd Saturday of the month: 10:00am - 12:00pm.',
    homeDelivery:
      "Sunday - Monday, 9:00am - 5:00pm. Central Seattle, clients must be unable to travel to the food bank due to age or disability",
    additionalInformation: [
      "Kosher Food - Contact contactus@jfsseattle.org",
      "Resource and referrals with case manager",
      "Cooking and nutrition classes and information",
      "Once-monthly visits",
      "Both adult and baby diapers available (first-time users must present birth certificate for each child)",
      "No-cook bags for clients without cooking facilities"
    ],
    lastUpdate: "February 14, 2019"
  },
  {
    id: 12,
    address: "1601 16th Ave, Seattle, WA 98122",
    name: "Jewish Family Service",
    phone: "206-461-3240",
    website: "http://www.jfsseattle.org",
    distributionHours: [
      "Wednesdays: 10:00am - 12:00pm",
      "Thursdays: 2:00pm - 4:00pm",
      "Fridays: 10:00am - 12:00pm"
    ],
    areaServed: "Zip codes 98102, 98104, 98121, 98112, 98101, 98122",
    // requirements: 'First time customers are asked to bring a photo ID and proof of address.',
    commodity: false,
    // commodityDistribution: 'Must reside in Wallingford Food Bank zip codes (98103 only) - 3rd Saturday of the month: 10:00am - 12:00pm.',
    homeDelivery:
      "Sunday - Monday, 9:00am - 5:00pm. Central Seattle, clients must be unable to travel to the food bank due to age or disability",
    additionalInformation: [
      "Kosher Food - Contact contactus@jfsseattle.org",
      "Resource and referrals with case manager",
      "Cooking and nutrition classes and information",
      "Once-monthly visits",
      "Both adult and baby diapers available (first-time users must present birth certificate for each child)",
      "No-cook bags for clients without cooking facilities"
    ],
    lastUpdate: "February 14, 2019"
  },
  {
    id: 13,
    address: "12736 33rd NE, Seattle, WA 98125",
    name: "North Helpline - Lake City Food Bank",
    phone: "206-367-3477",
    website: "http://www.northhelpline.org",
    distributionHours: [
      "Wednesdays: 10:00am-1:00pm",
      "Thursdays: 4:30pm - 6:30pm",
      "Saturdays: 10:00 am – 11:00am (senior and disabled clients); 11:00am - 1:00pm (all clients)"
    ],
    areaServed:
      "98115, 98125, 98133, 98155, 98177, 98011, and 98028. We do not turn anyone away who comes to us for food.",
    requirements:
      "To visit, our food bank clients need to register for a food bank card. All clients can receive food from North Helpline Food Bank once each week, during our distribution hours. For information on how to register for a food bank card, visit http://www.northhelpline.org/get-help/food-bank/",
    commodity: true,
    commodityDistribution:
      "For those living in zip code 98125 only. Wednesdays: 10:00am - 1:00pm, Thursdays: 4:30pm - 6:30pm, Saturdays: 10:00am - 1:00pm",
    homeDelivery:
      "Serves homebound adults in zip codes 98115, 98125, 98133, 98155, 98177.",
    additionalInformation: [
      "No Cook Bags",
      "Baby Cupboard",
      "Eviction and Utility Shut Off Prevention",
      "Mail Pick-up",
      "Referral Services",
      "Medical Clinic (Saturdays: 11:00am - 1:00pm)"
    ],
    lastUpdate: "February 14, 2019"
  },
  {
    id: 14,
    address: "13000 Linden Ave N, Seattle, WA 98133",
    name: "North Helpline - Bitter Lake Food Bank",
    phone: "206-367-3477",
    website: "http://www.northhelpline.org/get-help/bitter-lake/",
    distributionHours: ["Every Saturday, 10am - 2pm"],
    areaServed:
      "98115, 98125, 98133, 98155, 98177, 98011, and 98028. We do not turn anyone away who comes to us for food. ",
    requirements:
      "To visit, our food bank clients need to register for a food bank card. All clients can receive food from North Helpline Food Bank once each week, during our distribution hours. For information on how to register for a food bank card, visit http://www.northhelpline.org/get-help/food-bank/",
    commodity: false,
    // commodityDistribution: 'For those living in zip code 98125 only. Wednesdays: 10:00am - 1:00pm, Thursdays: 4:30pm - 6:30pm, Saturdays: 10:00am - 1:00pm',
    // homeDelivery: 'Serves homebound adults in zip codes 98115, 98125, 98133, 98155, 98177.',
    additionalInformation:
      "Since July 1, 2017 North Helpline operates a second food bank in the Bitter Lake neighborhood. We are excited about this opportunity to better serve our neighbors in Northwest Seattle.  In September, we scaled up distribution hours, and the food bank is now open every Saturday.",
    lastUpdate: "February 14, 2019"
  },
  {
    id: 15,
    address: "1316 SW Holden Street, Seattle, WA 98106",
    name: "Paradise of Praise",
    phone: "206-764-1053",
    website: "",
    distributionHours: ["Tuesdays: 10:00am - 12:00pm"],
    areaServed: "All",
    requirements: "One visit per week.",
    commodity: false,
    // commodityDistribution: 'For those living in zip code 98125 only. Wednesdays: 10:00am - 1:00pm, Thursdays: 4:30pm - 6:30pm, Saturdays: 10:00am - 1:00pm',
    // homeDelivery: 'Serves homebound adults in zip codes 98115, 98125, 98133, 98155, 98177.',
    // additionalInformation: 'Since July 1, 2017 North Helpline operates a second food bank in the Bitter Lake neighborhood. We are excited about this opportunity to better serve our neighbors in Northwest Seattle.  In September, we scaled up distribution hours, and the food bank is now open every Saturday.',
    lastUpdate: "April 10, 2015"
  },
  {
    id: 16,
    address: "7500 Greenwood Ave N, Seattle, WA 98103",
    name: "Phinney Ridge Food Bank",
    phone: "206-784-7964",
    website: "http://prlc.org/we-serve/food-bank/",
    distributionHours: [
      "Tuesdays: 2:00pm - 3:00pm",
      "Wednesdays 7:00pm - 8:00pm"
    ],
    areaServed: "All",
    // requirements: 'One visit per week.',
    commodity: false,
    // commodityDistribution: 'For those living in zip code 98125 only. Wednesdays: 10:00am - 1:00pm, Thursdays: 4:30pm - 6:30pm, Saturdays: 10:00am - 1:00pm',
    // homeDelivery: 'Serves homebound adults in zip codes 98115, 98125, 98133, 98155, 98177.',
    additionalInformation:
      " Anyone in need can call (206) 784-7964 on Monday between 1:00 and 3:00 p.m. to make an appointment. The appointments allows us to customize a healthy box of food to fit the needs of their family. We are also able to serve walk-ups. The food bank stocks a variety of food and personal care products for many different needs: low-sodium offerings, baby food, ethnic foods, pet food and a variety of foods designed people who are homeless.",
    lastUpdate: "December 18, 2017"
  },
  {
    id: 17,
    address: "1531 Western Avenue, Seattle, WA 98101",
    name: "Pike Market Food Bank",
    phone: "206-626-6462",
    website: "http://www.pmfb.org",
    distributionHours: [
      "Tuesdays: 10:00am - 1:00pm",
      "Wednesdays: 4:00pm - 6:00pm",
      "Thursdays: 10:00am - 1:00pm"
    ],
    areaServed: "Zip Codes 98101, 98104, 98121",
    requirements:
      "Must live in above zip code areas.  May only visit once per week.",
    commodity: true,
    commodityDistribution:
      "No separate commodity day.  Commodities available Tuesdays and Thursday during regular food bank hours.",
    homeDelivery:
      "Serves zip codes 98101, 98104, 98121.  Home delivery is intended for people who otherwise cannot access our food bank due to physical and/or mental limitations and is by referral of a health or housing professional only.",
    // additionalInformation: ' Anyone in need can call (206) 784-7964 on Monday between 1:00 and 3:00 p.m. to make an appointment. The appointments allows us to customize a healthy box of food to fit the needs of their family. We are also able to serve walk-ups. The food bank stocks a variety of food and personal care products for many different needs: low-sodium offerings, baby food, ethnic foods, pet food and a variety of foods designed people who are homeless.',
    lastUpdate: "June 6, 2018"
  },
  {
    id: 18,
    address: "8201 10th Ave S, Suite #6, Seattle, WA 98108",
    name: "Providence Regina House",
    phone: "206-763-9204",
    website:
      "https://washington.providence.org/locations-directory/r/regina-house",
    distributionHours: [
      "Thursdays: 12:30pm - 2:00pm",
      "Saturdays: 9:00am - 12:00pm"
    ],
    areaServed: "Zip Codes 98108, 98148, 98168, 98188",
    requirements: "Proof of area residency.",
    commodity: true,
    commodityDistribution:
      "Thursdays: 12:30pm - 2:00pm, Saturdays: 9:00am - 12:00pm",
    // homeDelivery: 'Serves zip codes 98101, 98104, 98121.  Home delivery is intended for people who otherwise cannot access our food bank due to physical and/or mental limitations and is by referral of a health or housing professional only.',
    additionalInformation: ["Clothing Bank", "Baby Cupboard", "Toddler Bags"],
    lastUpdate: "June 6, 2018"
  },
  {
    id: 19,
    address: "2800 1st Avenue, Room 126, Seattle, WA 98121",
    name: "Puget Sound Labor Agency",
    phone: "206-448-9277",
    website: "http://pslaonline.org",
    distributionHours: [
      "Mondays: 8:00am - 12:00pm",
      "Fridays: 8:00am - 12:00pm"
    ],
    areaServed: "Zip Codes 98121, 98101, 98109, 98199, 98134, 98111",
    requirements:
      "Most of our clientele are at or below 200% of federal poverty level but it is not required - no one is turned away. Must reside in one of our service zip codes to receive commodities.",
    commodity: true,
    commodityDistribution: [
      "Mondays: 8:00am - 12:00pm",
      "Fridays: 8:00am - 12:00pm"
    ],
    // homeDelivery: 'Serves zip codes 98101, 98104, 98121.  Home delivery is intended for people who otherwise cannot access our food bank due to physical and/or mental limitations and is by referral of a health or housing professional only.',
    additionalInformation: [
      "No-cook Bags for homeless clientele",
      "Hygiene products distribution on the first two Friday's of every month",
      "Baby and Toddler program",
      "Diabetes/blood pressure screening twice a year",
      "Cellphone distribution last two Friday's of October and November every year"
    ],
    lastUpdate: "February 14, 2019"
  },
  {
    id: 20,
    address: "232 Warren Avenue North, Seattle, WA 98109",
    name: "Queen Anne Food Bank at Sacred Heart",
    phone: "206-448-9277",
    website:
      "https://sacredheartseattle.org/learn-about-our-ministries?fbclid=IwAR0TGKA6q81eUtNtdt4k7Bi6plTSMdn8wOHKoXnrfD62o_3SMR1cUcw-EHU",
    distributionHours: ["Thursdays: 2:00pm - 4:00pm"],
    areaServed: "Zip Codes 98101, 98109, 98119, 98121",
    requirements:
      "Please provide proof of current address, such as a utility bill or rent receipt.",
    commodity: false,
    // commodityDistribution: ['Mondays: 8:00am - 12:00pm', 'Fridays: 8:00am - 12:00pm'],
    // homeDelivery: 'Serves zip codes 98101, 98104, 98121.  Home delivery is intended for people who otherwise cannot access our food bank due to physical and/or mental limitations and is by referral of a health or housing professional only.',
    additionalInformation: [
      "Meal Program- Monday-Thursday 8:30am - 11:30am. No eligibility requirements.",
      "Pack Program- Fridays 9:00am -11:00am. No eligibility requirements. Includes lunch and no-cook items.",
      "Farm Fresh Market- Fridays 11:00am - 12:30pm, June - October. No eligibility requirements."
    ],
    lastUpdate: "January 15, 2019"
  },
  {
    id: 21,
    address: "4205 Rainier Ave S, Seattle, WA 98118",
    name: "Rainier Valley Food Bank",
    phone: "206-723-4105",
    website: "http://rvfb.org",
    distributionHours: [
      "Wednesdays: 9:30am - 2:00pm",
      "Saturdays: 9:30am - 2:00pm"
    ],
    officeHours: "Tuesday - Saturday: 8:00am - 3:00pm",
    areaServed: "All",
    requirements: "Government-issued ID requested, but not required",
    commodity: true,
    commodityDistribution: [
      "Must reside in zip codes 98118 or 98178.",
      "Wednesdays: 9:30am - 2:00pm",
      "Saturdays: 9:30am - 2:00pm"
    ],
    homeDelivery:
      "Serves Southeast Seattle (primarily). Completed application form with physician's signature required.",
    additionalInformation: [
      "To-go bags for individuals and families without cooking facilities, five days a week (during office hours)",
      "Diapers distributed four days per month - 45 diapers per child per month (first-time users must present birth certificate for each child)"
    ],
    lastUpdate: "April 10, 2015"
  },
  {
    id: 22,
    address: "1101 Pike Street, Seattle, WA 98101",
    name: "Salvation Army Food Bank",
    phone: "206-442-8377",
    website: "http://www.salvationarmynw.org",
    distributionHours: [
      "Tuesdays: 9:00am-11:30am & 1:00pm - 3:00pm",
      "Wednesdays: 9:00am-11:30am & 1:00pm - 3:00pm",
      "Thursdays: 1:00pm - 5:45pm",
      "Fridays: 9:00am - 11:30am & 1:00pm - 3:00pm"
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed:
      "Zip Codes 98101, 98102, 98104, 98108 (except for South Park), 98109, 98112, 98118, 98119, 98122, 98121, 98134, 98144, 98199",
    requirements:
      "Must express a need, live within our service area, and present picture ID for household members (medical cards, ss cards, or paperwork showing household members for kids) each visit.  Those without ID or outside of our service area are eligible for bread/produce only.",
    commodity: false,
    // commodityDistribution: ['Must reside in zip codes 98118 or 98178.', 'Wednesdays: 9:30am - 2:00pm', 'Saturdays: 9:30am - 2:00pm'],
    // homeDelivery: 'Serves Southeast Seattle (primarily). Completed application form with physician\'s signature required.',
    additionalInformation: [
      "Baby cupboard",
      "Hygeine kits for those experiencing homelessness",
      "Pet food",
      "Rental assistance",
      "Utility assistance",
      "Women's shelter",
      "Community advocacy program"
    ],
    lastUpdate: "September 26, 2016"
  },
  {
    id: 23,
    address: "1265 South Main Street #108, Seattle, WA, 98144",
    name: "Seattle Indian Center",
    phone: "206-329-8700",
    website: "http://seattleindian.org/community-services/",
    distributionHours: [
      "Tuesdays: 1:30pm - 3:30pm",
      "Thursdays: 1:30pm - 3:30pm"
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed: "All",
    requirements: "Photo I.D.",
    commodity: false,
    // commodityDistribution: ['Must reside in zip codes 98118 or 98178.', 'Wednesdays: 9:30am - 2:00pm', 'Saturdays: 9:30am - 2:00pm'],
    // homeDelivery: 'Serves Southeast Seattle (primarily). Completed application form with physician\'s signature required.',
    additionalInformation: ["Baby cupboard", "Community meals Monday – Friday"],
    lastUpdate: "April 10, 2015"
  },
  {
    id: 24,
    address: "5972 4th Avenue South, Seattle, WA 98108",
    name: "St. Vincent de Paul Food Bank",
    phone: "206-686-5260",
    website: "http://www.svdpseattle.org",
    distributionHours: [
      "Tuesdays: 11:00am - 2:00pm",
      "Thursdays: 11:00am - 2:00pm",
      "Fridays: 11:00am - 2:00pm (Homeless/transitional housing clients only)",
      "Saturdays: 11:00am - 2:00pm"
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed: "All",
    requirements: "Photo ID reccomended but not required",
    commodity: true,
    commodityDistribution:
      "Must live in zip codes 98108, 98134, 98168, 98118, 98188",
    // homeDelivery: 'Serves Southeast Seattle (primarily). Completed application form with physician\'s signature required.',
    additionalInformation: [
      "Case management by appointment through Help Line only. Help Line number: 206-767-6449",
      "Clothing bank and health assessments during all food distribution hours",
      "Free Clothing, first come first served",
      "Mail pick up",
      "Baby cupboard when supplies exist",
      "Free haircuts for those experiencing homelessness (Fridays)",
      "Community Connectors"
    ],
    lastUpdate: " February 14, 2019"
  },
  {
    id: 25,
    address: "611 20th Avenue South, Seattle, WA 98144",
    name: "The Food Bank @ St. Mary's",
    phone: "206-324-7100",
    website: "http://www.thefbsm.org",
    distributionHours: [
      "Monday: 10:00am - 1:00pm",
      "Wednesday: 10:00am - 1:00pm",
      "Friday: 10:00am - 1:00pm",
      "We are open Monday through Saturday 7:00 am - 3:00 pm for drop off donations."
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed:
      "Seattle residents only for Baby Corner and protein (meat & eggs). No one is turned away for other items",
    requirements: "Photo ID recommended but not required",
    commodity: true,
    commodityDistribution:
      "Must live in the east side of 98144 to qualify. Same hours as regular distribution hours.",
    homeDelivery:
      "Seattle residents who live within a three mile radius of the food bank may be qualified. This program is designed to serve the elderly, disabled, and sick who are unable to get to the food bank and has no one available to come to the food bank for them. One must apply and be approved to receive Home Delivery as long as there is space available. Otherwise, they are put on a waiting list. Deliveries are made Wednesdays from 9:00am-5:00pm.",
    additionalInformation: [
      "Baby Corner",
      "Toddler Bags",
      "No Cook Bags",
      "Hygiene program",
      "Hygiene program"
    ],
    lastUpdate: "February 7, 2018 "
  },
  {
    id: 26,
    address: "5017 Roosevelt Way NE, Seattle, WA 98105",
    name: "University District Food Bank",
    phone: "206-523-7060",
    website: "http://www.udistrictfoodbank.org/",
    distributionHours: [
      "Mondays: 9:00am - 3:00pm",
      "Tuesday: 2:00pm – 8:00pm",
      "Thursday: 2:00 pm - 8:00pm",
      "Fridays: 11:00am - 4:00pm"
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed: "Zip codes 98102, 98103, 98105, 98115, 98125, 98112",
    requirements: "Proof of address, I.D.",
    commodity: true,
    commodityDistribution:
      "Commodities given out with regular food distribution to zip codes 98105, 98115, 98125 only.",
    homeDelivery:
      "Must live within zip codes 98102, 98103, 98105, 98115, 98125, or 98112",
    additionalInformation: ["Baby cupboard"],
    lastUpdate: "April 18, 2018"
  },
  {
    id: 27,
    address: "3419 SW Morgan St., Seattle, WA 98126",
    name: "West Seattle Food Bank",
    phone: "206-932-9023",
    website: "http://www.westseattlefoodbank.org",
    distributionHours: [
      "Tuesdays: 9:00am - 1:00pm (Seniors 55 & Over Only)",
      "Wednesdays: 12:00pm - 7:00pm",
      "Thursdays: 9:00am - 2:00pm",
      "Fridays: 10:00am - 2:00pm"
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed: "Zip codes 98106, 98116, 98126, 98136",
    requirements:
      "We ask families to provide a photo identification and proof of address such as a recent piece of mail with a West Seattle zip code (phone or utility bill) on their first visit.",
    commodity: false,
    // commodityDistribution: 'Commodities given out with regular food distribution to zip codes 98105, 98115, 98125 only.',
    homeDelivery: "Serves West Seattle area home bound and disabled.",
    additionalInformation: [
      "Bookcase Program",
      "Baby Corner",
      "Community Connector",
      "Weekend food for students in need in Seattle Public Schools",
      "Mobile Food Bank"
    ],
    lastUpdate: "February 22, 2019"
  },
  {
    id: 28,
    address: "10829 8th Ave SW, Seattle, WA 98146",
    name: "White Center Food Bank",
    phone: "206-762-2848",
    website: "https://www.whitecenterfoodbank.org/",
    distributionHours: [
      "Monday: 12:00am - 4:00pm",
      "Wednesday: 10:00am - 2:00pm, 4:00pm - 7:00pm (2nd & 4th Weds only)",
      "Thursday: 10:00am - 2:00pm Seniors Only (60+)",
      "Friday: 10:00am - 2:00pm"
    ],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed:
      "Residents in the community bordered by SW Myrtle St. (to the north, in West Seattle) to 140th St. SW (to the south, in burien) between Puget Sound and HWY 509.",
    requirements:
      "Visits are by appointment only. Click here to make an appointment. Must bring proof of address and I.D *Three visits per month*",
    commodity: false,
    // commodityDistribution: 'Commodities given out with regular food distribution to zip codes 98105, 98115, 98125 only.',
    homeDelivery: "Serves West Seattle area home bound and disabled.",
    additionalInformation: [
      "Baby Pantry",
      "Mobile Food Bank Program",
      "Home Delivery Program",
      "After-Hours Bags & No-Cook Bags",
      "Community Garden"
    ],
    lastUpdate: "February 22, 2019"
  },
  {
    id: 29,
    address: "2820 E. Cherry St., Seattle, WA 98122",
    name: "White Center Food Bank",
    phone: "206-957-2020",
    website: "http://www.ywcaworks.org/foodbank",
    distributionHours: ["Wednesdays: 12:00pm - 3:00pm"],
    // officeHours: 'Tuesday - Saturday: 8:00am - 3:00pm',
    areaServed: "All",
    requirements:
      "Visits are by appointment only. Click here to make an appointment. Must bring proof of address and I.D *Three visits per month*",
    commodity: true,
    commodityDistribution: "Must live within zip codes 98122, 98121, or 98118.",
    homeDelivery: "Must be a YWCA client.",
    additionalInformation: [""],
    lastUpdate: "February 14, 2019"
  }
];
