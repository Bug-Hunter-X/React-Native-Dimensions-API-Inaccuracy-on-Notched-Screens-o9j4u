# React Native Dimensions API Inaccuracy on Notched Screens

This repository demonstrates a common error when using the `Dimensions` API in React Native to obtain screen dimensions, particularly on devices with notches or system bars.  The incorrect usage of the `Dimensions.get('window')` method leads to inaccurate calculations and layout issues.

The provided code shows how to reproduce this problem and illustrates the solution by using `Dimensions.get('screen')` to correctly obtain the physical screen dimensions, resolving layout problems.  The examples include responsive UI adaptation to handle different screen sizes and orientations.

## Problem

Using `Dimensions.get('window')` returns the application window's size, excluding the area occupied by system bars (status bar, navigation bar). This can cause layout problems, especially on devices with notches or larger system bars.

## Solution

To resolve this, utilize `Dimensions.get('screen')` which will provide the actual physical screen dimensions, ensuring accurate layout calculations irrespective of the device's system bars.

## Usage

Clone this repository and run the app on different devices (with and without notches) to observe the difference in behavior.  Observe how the solution corrects the layout to accurately fit the entire screen.