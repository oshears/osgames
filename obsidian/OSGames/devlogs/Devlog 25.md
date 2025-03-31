---
title: "Devlog 25: Thoughts on VR/AR in gaming and minor additions to Lonnies Fishtank"
description: I share my thoughts on where game developers should start spending their time to stand out in an oversaturated market, and provide minor updates on Lonnies Fishtank, NRV Game Dev, and life
date: 2025-03-30
tags:
  - community-outreach
  - nrv-game-dev
  - virtual-reality
  - outdoors
  - lonnies-fishtank
draft: false
---

# At a glance 
- **Gaming in VR/MR/XR**: thoughts on virtual reality and the future of gaming
- **Lonnies Fishtank**: We got dynamic bones in and it has given new life into the game!
- **NRV Game Dev Interest Group**: More people have joined the NRV game dev interest group and it appears that the first initial meeting on Friday will be a success!
- **New Kayak**: Gia and I finally got a hard shell kayak!


# Gaming In VR/AR/MR/XR

## Abstract

Gaming has become quite an oversaturated market. While there are new and revolutionary ideas that come out every few months or so, I believe that progress and innovation have slowed quite a bit. The Nintendo Wii took a strong grasp of the market when it was first released by brining in innovative new gameplay controls (i.e., the Wii Remote and Motion Plus) in an approachable way that lowered the barrier to entry for gaming and allowed more non-traditional gamers to get involved. The Switch somewhat iterated on this by focusing on making a singular portable console system accessible and playable to several players while on the go. Furthermore, the addition of gyroscopic controls further enhanced the way that players could engage with their games and opened the door for new ideas or further improving the intuitiveness of existing games (e.g. first person shoots and Splatoon).

## Thesis

**Thesis**: Game developers should spend more time developing VR/AR/MR/XR type games, to find more critical success and lead to better innovation and technological breakthroughs for gaming and interactive experiences. The challenges limiting development in this field must be overcome individually in the short term, and time should be sacrificed investing into this technology.

To address the challenges of XR, we propose **OpenXR**. OpenXR is an open source extended reality headset. Based on the features of the meta quest 3, we have developed an open source hardware architecture and software suite to provide researchers and developers access to this technology. The contributions of this research are as follows:
- an *open source XR headset system-on-module* (SoM) using 2.5D integration (chiplets)
- an *open source software architecture* written in rust providing easy and accessible development
- a *suite of example applications* that can be extended for research and commercial projects

## Challenges
- VR Headsets are *cost prohibitive*, but this is changing thanks to an ever increasing influx of consumer accessible devices, such as the **Meta Quest 3**.
- VR is *harder to develop for*, but this is improving thanks to increasing online resources and the assistance of LLMs like Claude AI.

## Hardware Architecture 

### SOM Chiplets

The SOM contains the following chiplets:
- *RISCV SoC*: Provides a basic multi core SoC for hosting the base software and facilitating data transactions. Alternatively, could host a more distributed architecture with an NoC type setup.
- *Graphics Processing Unit (GPU)*: performs standard graphics rendering for the applications.
- *Memory*: provides a location for main memory.
- *Neural Processing Unity (NPU)*: used for standard convolutional neural network data processing
- *Spiking Neural Processing Unit (sNPU)*: used for energy efficient spiking neural network processing of certain event / temporal data.
- *XR Accelerator*: provides hardware acceleration for all of the extended reality algorithms (SLAM, etc.)

### PCB

Provides connections from the SOM to the cameras and off chip memory. Also provides a JTAG TAP for debugging. A microSD card port is also provided for upgradable storage.

### Additional Modules

A mixture of event cameras for efficient motion processing and CMOS cameras for standard video feed streaming (pass through).

## 3D Printed Headset

The headset design files (.stl) can be 3D printed. Using this design, the PCB and cameras can simply be slid into place. Straps for this chassis must be purchased from a third party to affix the headset to the users head.

## Software Architecture

Provides open source spatial location and mapping (SLAM).