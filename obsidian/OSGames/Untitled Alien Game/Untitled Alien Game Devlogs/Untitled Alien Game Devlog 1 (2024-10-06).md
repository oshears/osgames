---
date: 2024-10-06
tags:
  - projects/untitled-alien-game
description: My first devlog for Untitled Alien Game!
title: Untitled Alien Game Devlog 1
---
![[osgames_logo_devlog.png]]

# What is this project?

In August 2024, I went to go see an amazing movie called [[Alien Romulus]]. I had always been a moderate fan of the Alien universe because of its retrofuturist aesthetic, it deep and mysterious lore, and it's awesome horror sequence; However, this movie took it to the next level with visuals, sound design and story telling. Some of my most favorite sequences from the film include when the tensions ramps up to an 11 and the excellently composed soundtrack kicks in - subconsciously signalling to the audience that sh** has hit the fan real quick! 

This movie was deeply inspiring to me as someone who has been getting increasing involved in content creation, video game design and story telling. Storytelling - I loved the dynamic between Raines and her brotherly android figure, Andy (appropriately named 😄). Content creation - everything about the visuals and audio design were compelling and the movie was well produced! Video game - this would be a rich and ***AWESOME*** universe to continue to explore and tell stories within.

[[Alien Isolation]], a survival horror game released way back in 2014, effectively did a nearly perfect job at capturing this universe in a digital and interactive form. While I was too afraid to play it myself, I watched a good number of lets plays on the game and liked its interactive aspects. I am not aware of other games that have been able to recapture the spirit of the franchise as well as Alien Isolation. It uniquely blends strategic elements, tension, suspense and shock! As a result, I would like to take a stab at creating a game that is able to achieve some of these elements, especially in a multiplayer context!

# What have I been up to?

My first step in delving into this realm of creating a game inspired by the [[Alien Franchise]] was to find out what video games already existed. Some cool games to note include:

- [Alien Isolation](https://store.steampowered.com/app/214490/Alien_Isolation/): a first person survival horror game in which you complete a series of objectives and play through a linear story.
- [Alien Dark Descent](https://store.steampowered.com/app/1150440/Aliens_Dark_Descent/): a top down real time strategy game in which you control a group of marines completing objectives along a linear story.

These two games were great starting points, but I was curious about other types of games that included more dynamic elements like role-playing games. This is when I expanded my search beyond video games and found my two most critical sources of inspiration:

- [Nemesis Board Game](https://boardgamegeek.com/boardgame/167355/nemesis) a turn based multiplayer board game in which players are either collaborating or competing to fulfill their objectives and survive the alien presence on their ship
- [Alien The Roleplaying Game](https://freeleaguepublishing.com/games/alien/): a story based tabletop rpg in the spirit of dungeons and dragons where the game master leads a crew of survivors through situations in the [[Alien Franchise]] universe

These are my biggest two inspirations for my game at the moment because they focus on story telling, dynamics between multiple players, and offer a strategic element. At best, [[Alien Isolation]] and [[Alien Dark Descent]] provide these things in their own ways, but are missing a big element - the multiplayer component. I want to make these stories and this universe able to be experienced as a group because I love playing games and experiencing things with friends. Furthermore, I am looking to make this game playable in multiple different formats - whether people want to play online remotely, or in a couch co-op situation. I would also like to maintain the maximum amount of immersion while delivering this experience too.

Thus, with all of these great sources of inspiration, I now began my journey into making [[Untitled Alien Game]]!

# What is the end goal?

My end goal is to develop this game with control support for the Nintendo Switch and Steam Deck. I have been dying to make a game for Nintendo all my life, so I hope a project of this scale and scope will be interesting enough to permit me access to the Nintendo Developer Program and Nintendo Switch Dev Kit. I feel like this is a perfect time to start making this game for the switch too given the imminent announcement of the Nintendo Switch 2!
# How's progress going?

In September I did a lot of work setting up the foundation of the game. I create a basic player heads up display (HUD) inspired by [[Dead Space]]. This was my big idea for trying to make common elements of board games and RPGs, and bring them closer to being part of the world in the game, without losing that sense of immersion and crowding the user with overlay menus. Using this action system, players can select actions to perform, not too dissimilar from turn based tactical rpgs like [[Baldur's Gate 3]].

This week I added a lot of cool features to the game! I am very excited about getting a solid architecture going that is pretty easy to build upon! Check out the videos below to see where things are at!

<iframe src="https://drive.google.com/file/d/1MuZjClF3s7DxqJNocTXcU7OiNZSMXPrb/preview" height="480" allow="autoplay" style="overflow:hidden;height:100%;width:100%"></iframe>
_Here's some early general footage of the game and what it looks like so far!_


<iframe src="https://drive.google.com/file/d/1BTpZMsmpWlHfHCGifEcZ1bVhkK_Tm3pG/preview" height="480" allow="autoplay" style="overflow:hidden;height:100%;width:100%"></iframe>
_This early footage shows the new fire control, door control, and navigation control systems that I added. I was able to very quickly make these in only about 5-10 hours total!_

This week I put in a lot of work on the systems of the ship. As shown in the clips above, I created in game menus for the following systems:
- Igniting and extinguishing fires in the fire control room
- Updating the ship's route via the navigation control room
- Configuring the state of the engines using the engine control terminal
- Opening and closing doors on the ship using the door control terminal 

These were all relatively easy systems to implement, especially thanks to the prefabs and general game architecture that I was able to set up.

Some of the major remaining systems that I still have to implement include the following:
- The combat systems for engaging with the aliens.
- The item system for using items in your inventory. This includes crafting items as well.
- The alien system for managing alien movements throughout the ship.
- The player health system for managing critical and light wounds.
- The infection and contamination system.
- Player specific actions

Some more minor interactable systems include:
- Interacting with the escape pods
- Interacting with the hibernation control
- Traversal through technical corridors

# What's the plan for next week?

While working with my team at [[Triple Calvera]], Evan introduced to me the concept of *Agile Development*. I really resonated with the idea of sprints and stories and would like to continue this project management style. Thus, here's the story I am hoping to fulfill for this week's sprint:


> [!summary] Untitled Alien Game Sprint 2 (2024-10-14)
> - Players will be able to smoothly move between at least 4 rooms in a loop and interact with their systems.
> - Players will trigger an alien encounter when they make too much noise in the rooms. The aliens will approach the player and cause the combat phase to begin.
> 

I think this is a good next story to work on because it will give me more of the backbone for the game. I'll be able to actually have the main feature of the gameplay in place - the horrific alien encounters. If I can get this system set up, then I can continue working towards the final game by implementing all of the small subsystems, while having the base of a playable game in tact.

In addition to getting this up and running, for the story after this one, I would like to get the basics of multiplayer implemented. I will consider starting with a couch coop version that I can easily prototype with Gia, then I will move on to an online networked version that I can begin sharing with others.


## Working Schedule for Next Week

| Date                   | Main Tasks                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Wednesday, October 9th | Finish basic combat system and encounters with aliens                                                          |
| Thursday, October 10th | Implement local multiplayer turn switching between players and cycling between alien event loop                |
| Friday, October 11th   | Add player locations and alien locations to map<br><br>_Bonus_: Add room names to the map as they are revealed |
| Saturday, October 12th | Search action and collect items<br><br>_Basic_: Basic crafting                                                 |
