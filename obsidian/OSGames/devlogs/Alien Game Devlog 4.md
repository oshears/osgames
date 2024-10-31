---
tags:
  - "#devlog"
  - "#projects/untitled-alien-game"
description: Testing out Unity's new UI Toolkit and hooking up rooms and corridors to the map view!
title: 
date: 2024-10-27
---
![[osgames_logo_devlog.png]]
# Overview
This week I learned quite a bit about Unity's new UI Toolkit. It seems to be a great tool for easily making user interfaces in the style of websites. Since [[Untitled Alien Game]] will have quite a few menus, I am eager to try experimenting with the new toolkit and see if it is a good alternative to the way things are being managed now using Unity UI.

One of the features about UI Toolkit that I love is how I can build the UI out in UI Builder, and import the XML for that UI into my Unity scripts. I am looking forward to experimenting more with this and better grasp the power of this approach.

## Map View Rooms and Corridors

This week I also leveraged my newfound knowledge of editor scripts from last week ([[Alien Game Devlog 3]]) and created a bunch of editor helper methods to link the physical rooms in the scene to the information that is displayed on the UI. The room and corridors in the map view display various statuses concerning those locations (fire, malfunctions, destroyed doors, etc).

All of this work was done in the old Unity UI system however. I am looking forward to seeing how this approach can work with the new UI Toolkit.

Here's a sample image of the current map view!

# Experiments with the UI Toolkit

It turns out that the UI toolkit was not all that I hoped for. While it offers a great amount of easy customizability and extensibility, it is lacking in the following areas:
- clear documentation and examples of the Visual Elements
- a less error prone UI Builder
- out of the box support for automatic controller navigation 
- Lack of support for world space UIs out of the box

While these are not the worst issues and the UI toolkit is still powerful, I think it shines in simpler GUIs that don't live in world space or need extensive controller support. This, I've decided to stick with the original Unity UI because it has the features I need to build [[Untitled Alien Game]].

I feel a bit bummed that I spent a whole day diving into UI Toolkit only to be a bit underwhelmed, but I am excited about its prospect for making custom editors, and what the future has in store for it. I actually did a brief check to see how the UI designing experience was for Unreal Engine and did not find much that indicated it was better.

# Other Devlogs
- [[Alien Game Devlog 3]]
- [[Alien Game Devlog 2]]
- [[Alien Game Devlog 1]]