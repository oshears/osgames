---
title: "Devlog 21: Gameplay planning for Lonnie's Fishtank and Claude AI Experiments"
date: 2025-03-02
description: This week I experimented with Claude AI quite a bit. I also made a little bit of progress on Lonnie's Fishtank using Claude.
tags:
  - lonnies-fishtank
  - home-server
  - generative-ai
draft: false
---

# At a glance 
- [[#Lonnie's Fishtank]]: I tested out some new ideas for challenging players in this game with managing their fish and keeping them alive.
- [[#Claude Sonet 3.7]]: I implemented a bunch of different projects on my home server by getting Claude AI to program some solutions.

# Lonnie's Fishtank

This week progress was a bit slow for me with Lonnie's Fishtank. The main thing I achieved was brainstorming new ways to challenge players within the game. Using ideas generated from [[#Claude Sonet 3.7]], we were able to develop a simple but challenging gameplay system where players have to balance fish diets, stress, and training in order to maximize their fish caretaking score. I was impressed with the general gameplay systems that Claude developed and think that I will end up carrying them over to the actual Unity project.

I also added the ability to pet the fish in the game. The fish now emit certain emojis based on how they received the petting. Lastly, I used Claude a bit more to help me develop the script for one of the characters that players can encounter on their walks around the neighborhood.

# Claude Sonet 3.7

This week I paid for a one month subscription to Claude AI. While generally I haven't been very impressed with generative AI, this one really changed my perspective. 

I've had a lot of hobby projects on my mind that I've eventually wanted to get to at some point, but always deprioritized them because of the time they would require from me to actually execute them. Many of them were simple ideas such as setting up a server daemon that would annotate my calendar events, making a website monitor to survey Reddit for new posts and making very simple app ideas like an epub reading app that multiple people could sign into and collaboratively annotate the document. 

The past few days I've asked Claude to help me implement several ideas like these and it was always able to give me an answer to these questions with seemingly flawless code. I've been able to setup my own server with a VPN, the daemons, and I'm working on getting pinhole setup now for network wide as blocking. I've felt very empowered and more curious than ever implementing these mini projects, and I can't wait to think of even more cool ideas to finally implement! 

I was a bit disappointed when I learned more about how challenging it is to implement some software defined radio projects. I was interested in creating a custom GPS receiver by sampling data using my old BladeRF 2.0, but Claude kept telling me that it was a complicated undertaking when it came to tracking the GPS satellites. Similarly, I wanted to make an ATSC TV receiver, but it wasn't quite able to give me an end to end solution, instead giving me a partial solution and explaining the challenges with creating a complete solution.

The next set of ideas will probably be in the form of progressive web apps (PWAs) that I can quickly set up on my phone. This will be interesting because I won't need a Mac to build the apps, which was the major limitation for me getting these custom so ideas working. 