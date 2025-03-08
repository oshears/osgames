---
title: "Devlog 22: Reflections on Claude and WIP Features for Lonnies"
description: This week I reflected a bit on the best ways to use Claude in its current state and give a brief update on upcoming Lonnie's Fishtank features
date: 2025-03-09
tags:
  - gamedev
  - lonnies-fishtank
draft: true
---
# Overview
- [[#Reflections on Claude AI]]: I give some in-depth reflections on the 
- **Upcoming Lonnies Fishtank Features**: Using some assistance from Claude, I was able to get the base mechanics for tug of way and fetch within Lonnie's added.


# Reflections on Claude AI

This week I used Claude a bit more for helping me to implement features in Lonnies Fishtank. From using it more and more I'm slowly learning the most effective ways to use it as a tool, especially since it can't get everything right (i.e., Unity URP shader code, precise VHDL hardware coding, compatible implementation of gameplay mechanics). Here's an overview of each effective use case:
- **Using Claude for gameplay planning and brainstorming has continued to be an effective way to use the tool.** Claude has helped me come up with great ideas for enhancing the gameplay for Lonnie's Fishtank and even created a great demonstration app for what the gameplay might look like.
- **Using Claude for conceptualizing things that you don't know how to do, but it could guide you on.** The most impactful thing that this has helped me with is creating complex shader graphs in Unity using URP. While Claude doesn't quite get the creation of shaders right because of the various syntax changes and lack of examples from Unity, it is able server as a tutor and guide for making these shaders. It was also useful to get an idea on how to implement certain complex mechanics in games (eg, implement fetch and tug of war mechanics).
- **Using Claude for diagnosing issues in code and recommending potential solutions.** Claude was quite insightful this week at work when I used it to help me diagnose potential issues with an open source hardware framework I've been using called ESP (Embedded Scalable Platforms). It was able to give some good suggestions about potential error points in both the software code in C, as a well as the hardware implementation in VHDL.

## Using Claude for Brainstorming 

I also used Claude to help me brainstorm ideas for a game concept I've been thinking about called **Funky Magic**. The concept is that it's a game that pays homage to the classic funk sounds of old in a fun and interesting world where magic is cast through music and funky dance moves. Right now I'm picturing the game being a type of rogue like deck builder, similar to Shroom and Gloom, where you randomly earn ability cards and must play them wisely in order to advance through the game. I'd want the focus of this game to be more on the artistic side with good musical numbers, instead of heavily to complex gameplay.

Claude was able to give me some great starting ideas for the theme of this game and potential enemies and mechanics. I am also looking forward to using it for helping me compose funk music that fits the theme of the game and can be layered to create a complex and immersive environment that people will love to listen to and tap their feet to as they're playing.

## Using Claude for Conceptualization and Implementation Guidance

I asked Claude several times to make me a variety of different shaders in Unity. While it was able to give me code that theoretically could work, it never quite fit with what I needed it to do. I was trying to get it to make me a simple full screen lofi shader effect, but it didn't know enough about Unity's full screen render graph pipeline to create an effective solution.

## Using Claude for Debugging

It was interesting using Claude to debug issues with ESP because I was pretty much able to bring code in from GitHub directly and select the files I wanted it to use for reference. It worked flawlessly and Claude was able to give me contextual answers based on the code. I am looking forward to using it even more to help me with debugging various issues.

# Planned Home Server Additions
- self hosted project management using **vikunja**
- Self hosted wiki website using **wiki.js**
- public ip address monitoring daemon
- Itch gamejam monitoring daemon
- 