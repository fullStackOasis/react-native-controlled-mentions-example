# react-native-controlled-mentions example

This example is copied directly from the []() project (example folder).

There's just a small difference between this App.js and the other one:

`isInsertSpaceAfterMention: true,`

## Bug

There's a bug in this example, at least on Android.

To demo the bug, clone this project.

This is what I'm using: `nvm use 14.20.0`.

`yarn install`

Then run the project. In one terminal:

`npx react-native start`

In another terminal:

`npx react-native run-android`

When the app opens, you'll see the default text. Prepare to demo the bug by selecting this text to the clipboard (long press and select, then copy it). Then the text will be in your clipboard.

`is a simple python script that uses yt-dlp to scrape all of a youtube channels`

Delete that text by tapping on the input (the entire screen has a white background so it's tough to see the input, but it's up at the top). Hit backspace until everything is deleted.

Now, type "@" and choose David's name.

Finally, long press, and select "paste as plain text".

See the entire text show up as a controlled mention, not just David's name. This is the bug.

**Important!!** This only happens the very first time you run the app. After you demo the bug, if you try to demo it again, it won't happen.

There may be something specific to the text that causes the bug. I tried pasting this text - `Conquer anger with love, evil with good, meanness with generosity, and lies with truth` - and that did not demo the bug.

https://github.com/fullStackOasis/react-native-controlled-mentions-example/assets/59945095/d91ab520-fe6a-4fab-87ff-b482b720a3e4

Comment on September 30 2023: This bug is still an issue on Samsung Galaxy A71 5G running Android 13.

## May 31 2025

The bug still exists. I cloned this project, and tried running it using the instructions above. The device is still my Samsung Galaxy A71 5G running Android 13.

I had to make a small change to the code to see the text properly when I tested. To start, the app had a text input with a white background and white text. When I changed the background to black, I could see what I was doing, and reproduced the issue.

As a note, I installed this using `npm install`, not `yarn`.

I've added a new screen recording below:

https://github.com/user-attachments/assets/a6d2dcd5-f420-425a-904c-0fa2fbc77125

After upgrading to v3 of react-native-user-mentions, the bug still exists. This was done with commit 79c0b3c. All I really did was copy the example code from react-native-user-mentions. I didn't want to have to upgrade in steps. The bug persists.

New screen recording with version 3 code:

https://github.com/user-attachments/assets/d032f226-6e07-4ee3-ba65-aba3af19ca99

## June 1 2025 testing GBoard

As requested by [David](https://github.com/dabakovich), I tried out [GBoard](https://play.google.com/store/apps/details?id=com.google.android.inputmethod.latin&hl=en_US), the Google keyboard, by installing that app and then repeating the manul test process described above.

Using Gboard "fixes" the bug! So, it appears that the problem is really due to the Samsung keyboard on Android, not a problem with react-native-user-mentions per se.

