---
title: "Devlog 23: Giaze Southern Roadtrip"
description: Gia and I travelled to Tampa Florida this week for spring break.
date: 2025-03-16
tags:
  - travel
  - home-server
draft: false
---

# At a glance 
- **Giaze Southern Road Trip**: Gia and I travelled to Tampa, FL this week to check out the beaches and Busch Gardens!
- **Claude for Trip Planning**: Claude has proven to be an interesting tool for trip ideation, planning and itinerary building.
- **Server Updates**: I added a ton of new self hosted software to try out on my server!


# Giaze Southern Roadtrip

We started out our time in Tampa checking out the downtown **Riverwalk**. It was quite busy with many people taking leisurely strolls along the path. Great exercise for Matcha and Mango though, and good opportunities for them to socialize with other dogs.

 **Busch Gardens** was cool. Very busy at the very start of the day when we first got there, but the crowds died down significantly after noon. We got to ride all of the rides except 4 that were closed: Kumba, SheiKra, Congo River Rapids, and Stanley Falls Flume. We were able to pickup a fun pass for cheap, so I imagine we'll definitely try to come back in the future and catch them sometime if we can! (Busch Gardens Tampa doesn't raise a candle to the Williamsburg, VA park though!)

Checking out **Fort De Soto Park** was nice. We saw a lot of living clams and sea snails (mollusks). We also got the chance to hop into a clear kayak and row to Shell Key. It was a bit more underwhelming that I had anticipated for a kayaking trip, but still cool none the less! We would definitely bring our own kayak in the future and explore more of the preserve ourselves on our own time.


# Claude for Trip Planning

In preparing to take this trip to Florida, we used Claude to quickly come up with a fun itinerary to maximize our time and plan out a couple of interesting stops during our drive. While it wasn't the best at always recommending specific restaurants along the trip, it excelled in breaking down our days by times, making clear and realistic itineraries, and taking in our feedback for edits and modifications to the travel plan. Using Claude we were able to get a markdown document containing the itinerary, create an iCal file containing calendar events that can be directly added to a calendar, and even creating detailed cost estimates.

We further tested Claude in this area by getting it to create rough draft itineraries for trips to Yellowstone National Park and Acadia National Park.


# Server Updates

It was cool talking to Armon about some of the stuff he was setting up on his home server. As a result I threw some more things onto my own!

New self hosted software that I added to my server includes: 
- **Paperless-ngx**: document management 
- **Traccar**: gps location tracking
- **Immich**: Google photos image backup
- **vikunja**: project management 
- **bookstack**: self hosted wiki 

Existing software:
- custom Reddit r/INAT monitoring daemon
- Custom google calendar monitor and updating daemon
- Custom server landing page hosted via Apache out of www/public directory 
- **Bind9** for domain name management 
- **gitea** for private version control and self hosted git
- **WireGuard** to establish vpn connection to my home server

Future Updates:
- research and investigate the process of setting up a nas
- Research opnsense router tool
- look at server ram and SSD upgrades