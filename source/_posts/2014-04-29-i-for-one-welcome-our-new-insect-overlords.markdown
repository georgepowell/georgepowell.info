---
layout: post
title: "I, for one, welcome our new insect overlords"
date: 2014-04-29 12:29:17 +0100
comments: true
categories: blog robotics
---

*This post was written as a university assignment April 2014. I've been offered a 6 week internship working for the Green Brain Project in Summer 2014.*

##Why creating autonomous honey bee quad-copters is the next logical step.

From **The Terminator's** cold hearted cyborg assassin, to the heart-throb operating system *Samantha* in **Her**, science fiction has long been predicting the rise of humanoid robots. The huge potential for AI and robotics to either improve or destroy our society has been illustrated countless times, including Isaac Asimov's dramatic I-robot - with a utopian work-free society turning quickly to a robot-controlled utilitarian dictatorship. However, regardless of the disruption these technologies will bring, research and innovation into autonomous robotics will continue at an always increasing rate.

[Sheffield's Green Brain project](http://greenbrain.group.shef.ac.uk/) aims to contribute to this revolution by reverse engineering the brain of a honey bee, and creating autonomous flying honey bee robots controlled by a simulation of the brain. Within the Kroto Innovation center at the University of Sheffield, their setup is impressive: A clinically white observation room, with a large window on one side, sits almost empty apart from three powerful, expensive gaming PCs stacked in the corner, and a grey metallic quad-copter sitting apprehensively in the center, tied down with string to keep it from - we can only assume - trying to escape.

![Quadcopter flying](https://pbs.twimg.com/media/BimDd5kCQAEjz8A.jpg)

*The Green Brain's Quad-copter*

The quad-copter is the honey bee - kitted up at every corner with sensors and receivers, mimicking accurately those of an actual bee. The gaming PCs are its *brain* - simulating a large and complex neural network on massively parallel GPUs.

This is the result of over two year's hard work from the Green Brain Team - a small but impressive team of academics and engineers working at Sheffield. This work, they claim, is the next logical step in driving forward our understanding of our minds, and perhaps bringing us closer to the society abound with robots predicted unanimously by science fiction.

<!-- more -->

##But why a bee?

You may have heard of [Colony collapse disorder](http://en.wikipedia.org/wiki/Colony_collapse_disorder), it's a name given to the very misunderstood mass-collapse of honey bee populations across the world. It's due to many complex interacting factors that have unfortunately resisted fitting into any sound-bite sized headlines. Bees play a vital role in many ecological systems, so its consequences could be dire: disrupting our food supply and many delicately sustained wildlife habitats that depend on them.

![Honey bee](http://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Apis_mellifera_flying.jpg/320px-Apis_mellifera_flying.jpg)

*A Honey Bee*

Here, some of the goals of the Green Brain Project become justified: If they can simulate a bee from scratch with an accuracy sufficient to reproduce characteristics and behaviours of actual honey bees, they will have developed an invaluable tool to understanding and countering colony collapse disorder. As James Marshall - the leader of the Green Brain project - says: "robots give behavioural biologists the freedom to explore the mind of an animal in ways that would not be possible with living subjects."

Replacing dying honey bees with ungainly flying quad-copters is farfetched at best. And although creating "artificial pollinators" has been mentioned as a potential direction for this technology, the act of researching and understanding the bee's behaviours is fortunately a more valid and realistic goal in and of itself.

##From worms to humans - choosing the scale of the next AI

The Green Brain Project is named after a more ambitious effort - [The Blue Brain Project](http://bluebrain.epfl.ch/page-52063.html) - which aims to simulate the entire human brain at a molecular level. The Blue Brain project is still in its early stages, having limited success in simulating a single cortical column of a rat. The Green and Blue brain projects are just two of many projects aiming to simulate brains at varying scales.

At the other extreme sits [The Open Worm Project](http://www.openworm.org/getting_started.html) aiming to simulate the neural and muscular workings of a microscopic worm, containing only **one-thousand cells** and about **three-hundred neurons**. Although this organism appears simple, the individuals working on the team believe it's the right scale to focus on given our current level of technology and biological understanding, and they might be right: even making quite basic predictions about the worm's movement based on their simulation has been very difficult.

![Worm](http://www.artificialbrains.com/images/openworm/openworm-nervous-system-3d-green.png)

*A Graphical representation of the Open Worm Simulation*

Although these projects have different ambitions, working at dramatically different scales, they are producing new results and knowledge that will help each other progress faster than they ever could alone. There is no single correct scale that brain simulation research should focus; it is only by tackling the questions from every angle at once that we can understand the problem space deeply.

##The reality is tough

Both the Blue Brain and Open Worm projects exist purely in a simulated world. This comes with a huge amount of freedom; it's easier to measure, manipulate and control virtual worlds - the temptation is obvious. However, the Green Brain is built to control a physical quad-copter in the real world.

A well-known joke goes as follows:

- *The problem with engineers is that they tend to cheat in order to get results.*

- *The problem with mathematicians is that they tend to work on toy problems in order to get results.*

- *The problem with computer scientists is that they tend tocheat at toy problems in order to get results.*

Simulating a brain should not be a toy problem. There's no reason a realistic simulation of the honey bee brain, or any other brain, should be clean and mathematically elegant - **it needs to work in real life**. Ensuring this focus on results in the messy and complicated real world is the reason behind the Green Brain's physical manifestation as a quad-copter. Virtual worlds and simulations are, by their definition, mere cleaned-up estimations of the real world. The team believe, with good reason, that pushing their simulation to work in real environments will force them to solve difficult problems that might have been simplified away in a virtual world.

![Green brain setup](https://pbs.twimg.com/profile_banners/2215802294/1385476024/web)

*The Green Brain Project's testing room*

##The rise of the quad

Although the first recorded quad-copter was built over 100 years ago, they have only recently become widely utilised. A number of popular videos and articles – including [an awe-inspiring TED talk](https://www.youtube.com/watch?v=w2itwFJCgFQ) claiming over 2.5 million views - popularised the quad-copter and initialised a large boom in funding for multi-copter related projects. This sudden utilisation of multi-copters became possible due to a number of advances in technology, including wide availability of cheap, light and small computers, powerful and compact LiPo batteries, and efficient propeller motors.

![](/images/trends.png)

*Popularity of the word ‘quadcopter’ over time on Google Trends*

##Why are quad-copters so popular?

The answer is mechanical simplicity. In layman terms, a helicopter can control its acceleration by changing the pitch of its blades *as they spin around. *This is called a *variable-pitch rotor. *It allows for a large degree of control and efficiency, but the mechanism is complicated and prone to failure, particularly at small scales.

![Helicopter](http://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Navy-hh1n-158256-070327-16cr-10.jpg/320px-Navy-hh1n-158256-070327-16cr-10.jpg)

*A variable-pitch rotor system on a helicopter; efficient but mechanically complex.*

Due to having 4 blades, quad-copters can control themselves without the need for a variable-pitch rotor. However, contrary to popular belief, quad-copters are less efficient and less stable than a classical helicopter. Stabilising a quad-copter in-flight requires a low-latency central control system which feeds instructions rapidly back to the motors based on sensors and measurements from its accelerometer, gyroscope, and sometimes even GPS. However, the lack of a complicated variable-pitch rotor system and the incredible power and versatility gained from a computerised control system has led to quad and multi-copters gaining a dominance within the world of small-scale drones.

##If you can’t beat them…

Robotics projects like the Green Brain will continue being funded, and general progress in robotics will increasingly influence our lives, but the transformations they bring will be complicated.

Richard Feynman described the limitations of science in his book *The Meaning of it All*:

> Science and moral questions are independent. The common human problem, the big question, always is “Should I do this?” It is a question of action. “What should I do?” How can we answer such a question? We can divide it into two parts: We can say, “If I do this what will happen?” and “Well, do I want that to happen?” The first question is the typical scientific question. The method is “Try it and see.” But the question “Do I want this to happen?” is not scientific. Well, you say, if I do this, I see that everybody is killed, and, of course, I don’t want that! Well, how do you know you don’t want people killed? You see, at the end you must have some ultimate judgment.

Science and technology are hailed by some as an ultimate solution to many of life’s problems, but technology provides indiscriminate power – neither intrinsically positive nor negative. History has shown power only leads to prosperity when placed into the right hands; the internet has revolutionised the free press, but nuclear weapons are a constant ongoing threat to world peace.

**The robots are coming**, and although science will be responsible for their arrival, it will not guide us on how they should be used. Nobody can predict the eventual consequences of autonomous robotics spreading into our society, but as I long as I have the choice, **I’d like to be on their side**.