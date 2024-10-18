---
description: Just a placeholder note for next week!
date: 2024-10-13
tags:
  - projects/untitled-alien-game
---
![[osgames_logo_devlog.png]]

# Overview
This week I focused on brainstorming future tasks and doing more infrastructure setup. For the development of [[Untitled Alien Game]], one of my goals is to great an extensible game architecture that I can turn into a Unity Package and use as a base for making future games. During the development of this architecture, I am attempting to leverage design principles such as those laid out in [game programming pattens](https://gameprogrammingpatterns.com/contents.html) and SOLID. The new architecture I am attempting to follow is highlighted below:

## Board Game Hierarchy
- **Gameplay director**: concept of directors subscriber interfaces but nothing underneath them, do reference the smaller atomic units
	- Example: phase director
- **directors**: no concept of other directors, but control the controllers
- **Controllers**: reference other controllers and models, no concept of director 
- **Models**: smallest unit, no dependencies, self contained assemblies

The base template code for these classes is being actively [developed on my GitHub](https://github.com/oshears/boardgame)

### Assembly Definitions
I am planning to split a lot of the code for these types up into assemblies to help reduce domain reloading and compile times. There should be about 5 different types of assemblies:
- **Model Assemblies**
	- No references to other models, controllers, directors, or commands
	- Should be able to exist in their own assemblies with references to used Unity and other packages
- **controller assemblies**
	- References to relevant model and other controller assemblies 
	- Controllers that are co-reliant should go within the same assembly
	- Controls have no concept of directors but do have a concept of their own local controller commands perhaps
	- Send generic event signals up to their subscribers (e.g., directors) to notify about events that happened to them
- **Director assemblies**
	- Reference relevant controller assemblies 
	- Likely don't need any context about other directors
	- Have a set of commands at this level that they can execute with knowledge about the controllers they direct
	- I might be able to get away with having a vague association between controllers and their specific implementation - thus removing the need to associate the assemblies in the actual Unity project (only need to reference the board game package assemblies)
- **Gameplay director assemblies**
	- the highest level
	- References the director assemblies, or at least the generic versions of the directors
	- Controls the flow of the game and which systems to activate at which times
- **command assemblies**
	- reference various parts of the aforementioned assemblies based on who they belong to.
	- Ideal if they could be developed separate of the base code
	- Assembly could also contain implemented generic factories that supply these commands when invoked by the other classes
	- These factories could serve as scriptable objects that are plugged into the relevant controllers to provide the custom commands when make is called


## User Interaction: The Ultimate Challenge 

The mechanics behind the game are pretty clear and straightforward to me now that I have taken the time to review the entire Nemesis instruction manual. It's a big game, with a lot of small conditional rules, but it should pretty much guide itself and the players through its plentiful instructions in both the manual and on the cards. There's even a mobile app to help players play the game and feel more immersed.

I believe the hardest part of the game to code up is the human interaction. Having to provide players with a reliable way to interface with the game and allow them to engage is certainly where the bulk of the lift is for this design. The other bulk of the lift is of course the art side of things, but I am deliberately choosing to push this to the side for now and focus on making a clean and reliable product first, then adding individuality and artistic choices on top of it second.

As far as user interaction, I believe that I have a lot of the foundational systems set up from all the work I've done in the previous weeks. The main challenges remaining include the following in order to allow players to fully engage with the game:
- a search command to look for items in the rooms
- a crafting system to create items
- a set of commands associated with each item when a player attempts to use them
- a way for players to trade with each other

I believe that once I get these tasks hashed out, I will have crossed the last major girder of getting the game up and running. As such, I've decided to focus the next three weeks for implementing all of the player commands and actions since these are the largest lift for getting the game working. They've been outlined in [[Untitled Alien Game#^development-roadmap|the roadmap on the project page.]]


## Basic Combat

This week the most visual change I added to the games included:
- Players can not engage in combat with an alien. 
- The game will cycle through event (alien) and player phases. The player performs an action, then the game transitions to the event phase. The aliens then perform their actions followed by the events. Afterwards, the phase shifts back to the players.
## Alien Aesthetic Research

### Lore

#### Alien RPG
- YouTube series
##### public home brews

#### mothership

### Sound Effects

#### Analog Computing and CRT Computers
- typing sound effects
- Boot up

#### CRT Shaders and Old School Terminal Aesthetics
- Alien isolation
- GitHub repos

### Visuals

#### Alien-Eddie Retro Futuristic Maps

#### Mini cutscenes for events
- Shortcoming of the Nemesis Lockdown game

#### wishlist
- Enagaging AI / NPCs with personal secret objectives 

## Other Devlogs
- [[Untitled Alien Game Devlogs]]
- [[Untitled Alien Game Devlog 1 (2024-10-06)]]