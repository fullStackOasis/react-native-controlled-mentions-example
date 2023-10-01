# react-native-controlled-mentions example

This example is copied directly from the [react-native-controlled-mentions](https://github.com/dabakovich/react-native-controlled-mentions/tree/master/example) project (example folder).

The file App.js has been removed, and replaced with App.tsx, and quite a lot of the original project is now different to accommodate the changes in https://github.com/dabakovich/react-native-controlled-mentions/releases/tag/v3.0.0-alpha.2

## Bug

The bug demonstrated on the main branch is still here in this branch.

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

New video for this branch!

https://github.com/fullStackOasis/react-native-controlled-mentions-example/assets/59945095/085a83c2-1382-4561-8184-3f7e9b87ffa9

Comment on September 30 2023: This bug is still an issue on Samsung Galaxy A71 5G running Android 13.
