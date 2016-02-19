---
layout: post
title: "Has Apple really been asked to write a backdoor?"
date: 2016-02-18 22:43:53 +0000
comments: true
categories: blog security
---

Tim Cook [released a statement today](http://www.apple.com/customer-letter/) objecting to [an FBI court order](https://assets.documentcloud.org/documents/2714005/SB-Shooter-Order-Compelling-Apple-Asst-iPhone.pdf) they recieved related to the San Bernardino shootings. The open letter claims the FBI is asking them to build a backdoor to their iOS operating system:

> The government suggests this tool could only be used once, on one phone. But that’s simply not true. Once created, the technique could be used over and over again, on any number of devices. In the physical world, it would be the equivalent of a master key, capable of opening hundreds of millions of locks — from restaurants and banks to stores and homes. No reasonable person would find that acceptable.

My initial reaction to reading this was confusion. The term "backdoor" usually refers to a security *vulnerability* purposefully placed in software, indended to be exploited later by the parties aware of it. So is this suggesting iOS already has a backdoor that the government wants access to? Are apple being asked to *build* a backdoor into iOS in an update?

[Neither](https://blog.trailofbits.com/2016/02/17/apple-can-comply-with-the-fbi-court-order/). The encryption software built into the iPhones in question (5C) appears to be uncrackable by both the FBI and Apple, and the FBI are not suggesting Apple release any new software to the general public. They are only concered with breaking the pin code on a specific device, and the only option available to bypass the security protections on the phone is to install *new software* on the device which *removes those protections completely*. And since the phone requires apple to digitally sign this new software, **Apple has to create the software**.

## The software would be a master key

The point on which I agree with Apple is that this software would certainly be equivalent to an **iPhone 5C master key**. However Apple, by having the ability to sign arbitrary software updates, have **always** had the master key. If it's Apple you wanted to keep the master key from, **well they've been able to create it all along**.

So how about keeping the master key away from the FBI? That's certainly a valid concern. But the court order specifically suggests that the compromised iPhone and software *would never need to leave Apple's headquarters*:

> ... Apple shall provide the government with remote access to the SUBJECT DEVICE through a computer allowing the government to conduct passcode recovery analysis.

## It's all about the precedent

So let's say Apple create the master key. They install it on the device and give the FBI remote access. What's changed?

Firstly, the master key now *exists*. This is of course not an ideal situation, but it can be kept in the hands of the organisation we already trust, and presumably locked down using similar mechanisms they secure their own private keys with. Due to this, normal iPhone 5C users are not subjected to weakened security. Gaining access to this master key is not as simple as exploiting a backdoor. They would need to infiltrate Apple and gain access to secret software. The FBI do not have to be trusted with the key.

Secondly, and much more importantly, this would **create a legal precedent**. But how broadly could this precedent be applied in future cases?

 - At the very least, Apple would be required to use the software on other iPhone 5Cs recovered from other serious criminals. This is not a negative thing.
 - Almost definitely, tech companies would now be required to use their own privalaged positions to compromise the security of *individual criminal's* data. This is limited to the case where the privalaged position is used against the criminal in an isolated way that doesn't compromise the security of innocent users.
 - It would *probably not* mean tech companies would be legally required to install actual vulnerabilities on innocent customer's phones. This scenario is a farcry away from what the FBI is currently requesting, yet is the image usually invoked with the term "backdoor".

 
## It's not a backdoor

Tim Cook has chosen to use the term backdoor because of the strong response it would invoke. But what the FBI is asking does not require apple to compromise the security of their publically used devices, and doesn't even appear to require giving a master key to the FBI. I'm unsure what the best result is for this case, but it doesn't seem reasonable for it to be labelled as the FBI requesting a backdoor.