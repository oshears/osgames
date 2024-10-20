---
tags:
  - project/alien-game
description: A summary of the new movement capabilities and item system.
title:
---
![[osgames_logo_devlog.png]]
# Overview
This was a very informative week. I learned quite a bit about making custom editor windows in Unity.

Here's a peek of some gameplay footage from my progress this week:


## Custom Editors
My main motivation for making custom editors was to automate the process of linking rooms, corridors and interactables. This was *critical* because I'm often going to be changing things about the game as I am developing it - this leading to a lot of broken fields that may be linked via serialized editor fields.

With this new approach, the editor can perform the following tasks:
- add all nearby interactables to a room 
- add all destination rooms to the movement indicators 

This now allows me to navigate through the entire map - without having done any manual linking.

It was also very interesting to learn about serialization of game objects in Unity. I now more firmly understand how the editor modified the properties of serialized game objects, and what is required to display those serialized fields and objects in the editor windows.

## Items
I have also added the ability to pick up and drop items. Doing this adds the relevant item actions to the player's possible actions.

In future updates, I would like to update the action menu to have the following:
- **interactable buttons via mouse**: this would allow me to prototype more quickly, but still have a visible prompt for what to press when using a controller to perform an action
- **Hierarchical menus**: I have some nice canvas management code in place. Now I think that I need to organizing the menu a bit better to separate basic actions from item actions from room actions; this is a tricky challenge because I don't want to loose too much of the clean and simple aesthetic 


# Reflections
Sometimes the project can feel quite large. I can estimate the amount of time it takes to implement some features, but there's always the unexpected bug that might modify this time estimate.

My aim is to release the game by the end of December, but I would not be surprised or upset if I had to take more time.

At the end of the day, the most important thing is to keep working towards the vision and make the game I want to play! There still isn't much visually that the game is offering, but I hope to continue building out the systems and then work on visuals afterwards to make the game look more appealing. 

I believe that since I spent the past few weeks coding up basic actions and the flow for executing them, it will be easy to add the item actions, special player actions, and even the ship actions moving forward.

I am also finding that my code is taking even longer to get through domain reloading, so I will want to investigate assemblies. I think I have a solid idea moving forward about how I would like to setup my future projects to support this:
- Have generic classes implement most of the functionality (Generic Player, Room, Interactable) - specific to the type of game
- Have specific implementations or variants / child classes only reference the generic classes, but exist in their own assemblies
- Have the commands reside in groups for the top level assembly. They typically depend on everything else and can be compiled at the top level. Keeping things generic in the action commands abstracts the specific command implementation.


## Risk versus Reward

Often times when developing I have to decide whether to spend time investing in a better more scalable system with high risk but high reward, or continue with the inefficient approach with low risk and low reward. I saw a nice graphic drawn by one of my old supervisors describing this phenomena, but have quite been able to find anything like it. This one is somewhat close to it:

![](https://www2.trainingbible.com/joesblog/uploaded_images/Risk-Reward-775722.png)

![[Drawing 2024-10-19 08.02.40.excalidraw]]

## Board Game Prototyping
One important thing that I am beginning for value more with the game design process is prototyping things in a low fidelity format. The game that is inspiring me, Nemesis, is a board game with all of these complex and interesting systems that interact with each other. It would take quite a bit of development effort to come up with both the design for this game, playtest it and then develop the art and video game versions for them alone. But by having the game in a simple board game format they can have complex and engaging gameplay without having to write a bunch of code.

A video that one of my former collaborators, Evan Cheng, shared talked about this game that made an office basically go to war with each other. This is another example of simple offline prototyping that can be used to inspire the making of the video game you actually want to make.
# Player Story for Next Week


> [!NOTE] Player Story
> - players can move around the ship, search for items and use those items to have an effect on the ship, the aliens, and other players
> - Players can move around the ship and interact with its systems to have an effect on the ship, the aliens and other players