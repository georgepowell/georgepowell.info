---
layout: post
title: "Numerical Methods and the Green Brain Project"
date: 2014-08-10 10:23:02 +0100
comments: true
categories: blog maths programming research
---

[I posted about the Green Brain Project](/writing/i-for-one-welcome-our-new-insect-overlords/) a while ago before starting my placement there. Last week I finished, after spending 6 weeks working with the team investigating ways to improve their numerical simulation methods. For the interested I'll summarise the work I've done. The full report [can be found here](/docs/improving-simulation-methods.pdf).

## The Spine-Creator tool

Spine-creator is a tool for building and simulating biological neural networks, built by [Alex Cope](http://www.alexcope.co.uk/) of the Green Brain Project. It's designed to be powerful, flexible and usable by non-programmers, with a graphical user interface to visualise and build the networks. 'Components' can be designed and connected together with other components, and the system can be compiled and simulated from within the program. The tool is open source and can be [found on GitHub here](https://github.com/SpineML/SpineML_2_BRAHMS).

![Spine-Creator visual interface](/images/spine-creator.png =700x)

*The Spine-Creator visual interface*

The behaviour of components are usually specified with systems of [Ordinary Differential Equations (ODEs)](http://en.wikipedia.org/wiki/Ordinary_differential_equation): mathematical systems that start at a given state and progress through time acording to the differential equations. For neuron models, there would typically be variables and equations describing how voltages, resistances and chemical concetrations change over time from initial conditions.

Simulating these systems therefore requires *solving* these sets of equations, which usually isn't possible with the normal algebraic methods taught in school. Instead [numerical methods](http://en.wikipedia.org/wiki/Numerical_methods_for_ordinary_differential_equations) are used, these are methods that calculate accurate estimates of how the system will behave, and are usually parameterised to give simulations of any desired accuracy.

## Forward Euler

Forward Euler is the simplest and most common numerical method for solving ODEs, it is based on the definition of the differential, and can be written in a line or two of code (C#):


{% codeblock lang:csharp %}

// Takes the value of a variable (initial) along with the rate-of-chage at that point (differential),
// returns an estimate of the value of the variable after a time-period (dt).
double forwardEuler(double initial, double differential, double dt) {
	return initial + dt * differential;
}

{% endcodeblock %}

You can see that the amount the initial value changes by is proportional to the rate it is changing *(differential)* and the length of time it is changing for *(dt)*. This method works, and can achieve any desirable accuracy if iterated over and over again with tiny values for *dt*. But has a number of [stability problems](http://en.wikipedia.org/wiki/Numerical_stability) when simulating particular systems. For example if Forward Euler is used to solve a Sine-Cosine system...

![Sin-Cosine System](/images/forward-euler.png =500x)

The result wildly and exponentially oscilates rather than stably moving between +/- 1.0. The Spine-Creator tool used the Forward Euler method, and this problem (along with others) was the motivation for the research project.

## Runge Kutta methods

The main class of methods we investigated are called [Runge-Kutta methods](http://en.wikipedia.org/wiki/Runge%E2%80%93Kutta_methods). They work by calculating the differential at multiple points between the intitial time and *dt*, and calculating an estimate of the state at the *end* of the time-step using a linear combination of those differentials. There are a number of algorithms in this class, the most popular being **modified Euler** and **Runge-Kutta 4th Order**. These methods provide more accurate, efficient and stable solutions and can be used with much larger values for *dt*.

## Adaptive time-step methods

The methods described so far assume a value for *dt* has already been chosen. Adaptive time-step methods work by providing an estimate for the *error* introduced during a time period, and using that error estimate to suggest a new value for *dt* based on a given *error-tolerance*. These methods can, for example, use a very small *dt* during chaotic and difficult time-periods, and shift later to using a much larger *dt* when the system stabilises. The adaptive time-step method I investigated and implemented is called the [Dormand-Prince Method](http://en.wikipedia.org/wiki/Dormand%E2%80%93Prince_method). It can result in very efficient and very accurate solutions compared to similar fixed-time-step methods. Run on a single variable system (see the full report and code for details) the result clearly shows a changing time-step:

![Sin-Cosine System](/images/adaptive-step.png =500x)

Visually, the dots get further apart as the system progresses and becomes more linear.

## Parallelisation and Synaptic Delays

Part of the project's aims are to simulate the systems in paralell on GPUs. The bottleneck to doing this as it stands is to do with the large degree of connectivity within the network; sharing data between otherwise unconnected sub-systems prohibits simulating them in isolation, as their behaviour will always depend on other neurons from another part of the network. [We found a paper](http://material.brainworks.uni-freiburg.de/publications-brainworks/2007/journal%20papers/Morrison-neco-07_47.pdf) that describes a method for isolating subsystems for a maximum period of time, which restricts data-flow between components based on the *synaptic delays* in the network. Using this method could potentially aid the paralellisation of the simulation.

## Awesome!

So overall it was a super cool project and I learnt a lot. It's great to get back into mathsy-programming with an enthusiastic acedemic team. A big shoutout to the [Green Brain Project](http://greenbrain.group.shef.ac.uk/) and the [SURE scheme](http://www.shef.ac.uk/sure) for enabling this project and others for other students, I'm looking forward to working with the team again in my 3rd year at the University.

## Code and full report

 - The methods mentioned were implemented in an isolated C++ program [available on GitHub](https://github.com/georgepowell/numerical-methods).

 - The full report which was handed in at the end of the placement [is available here (pdf)](/docs/improving-simulation-methods.pdf). This includes tons of details and extras that aren't mentioned in this blog post.

