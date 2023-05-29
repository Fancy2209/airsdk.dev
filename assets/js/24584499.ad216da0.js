"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[1784],{9910:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/08/05/air-release","metadata":{"permalink":"/news/2022/08/05/air-release","source":"@site/news/2022-08-05-air-release.md","title":"Release 33.1.1.929","description":"AIR SDK 33.1.1.929 has been released by Harman.","date":"2022-08-05T00:00:00.000Z","formattedDate":"August 5, 2022","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":0.755,"hasTruncateMarker":false,"authors":[{"name":"Michael","title":"Developer at distriqt","url":"https://github.com/marchbold","imageURL":"https://avatars3.githubusercontent.com/u/442356?s=460&v=4","key":"marchbold"}],"frontMatter":{"title":"Release 33.1.1.929","authors":["marchbold"],"tags":["airsdk","updates"]},"nextItem":{"title":"Release 33.1.1.889","permalink":"/news/2022/06/14/air-release"}},"content":"**AIR SDK 33.1.1.929** has been released by Harman.  \\r\\n\\r\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.929/release-notes/Release_Notes_AIR_SDK_33.1.1.929.pdf)  \\r\\n- [Download](https://airsdk.harman.com/download/33.1.1.929)  \\r\\n\\r\\n\\r\\n### Features  \\r\\n\\r\\n- AIR-5964: Reverting the merging of ABC blocks in SWCs\\r\\n- [github-1963](https://github.com/airsdk/Adobe-Runtime-Support/issues/1963): Allowing the app descriptor to limit the Direct3D version level (using a new descriptor option\\r\\n`<maxD3D>` under the `<windows>` section)\\r\\n- [github-2014](https://github.com/airsdk/Adobe-Runtime-Support/issues/2014): Adding \'ignore\' option for autoOrients to avoid using OrientationEventListener\\r\\n\\r\\n\\r\\n### Bug Fixes    \\r\\n\\r\\n- [github-402](https://github.com/airsdk/Adobe-Runtime-Support/issues/402): Sending ByteArray from Worker cause Adobe Scout show incorrect memory consumption\\r\\n- [github-1950](https://github.com/airsdk/Adobe-Runtime-Support/issues/1950): Cleaning up local JNI references to avoid Java OutOfMemory errors\\r\\n- [github-1965](https://github.com/airsdk/Adobe-Runtime-Support/issues/1965): Fixing runtimeClases.jar file format to remove directory entries, and enabling jetifier\\r\\n- [github-1973](https://github.com/airsdk/Adobe-Runtime-Support/issues/1973): Removing exe and dll files from the Linux and macOS SDK zips\\r\\n- [github-1974](https://github.com/airsdk/Adobe-Runtime-Support/issues/1974): Reworking omit-trace-statements to ensure the compiler still works within Flash Builder\\r\\n- [github-2010](https://github.com/airsdk/Adobe-Runtime-Support/issues/2010): Fixing error in Rectangle.unionToOutput if \'this\' object is the same as \'output\' parameter\\r\\n- [github-2042](https://github.com/airsdk/Adobe-Runtime-Support/issues/2042), [github-2047](https://github.com/airsdk/Adobe-Runtime-Support/issues/2047): Fixing problem with autoOrients setting being skipped"},{"id":"/2022/06/14/air-release","metadata":{"permalink":"/news/2022/06/14/air-release","source":"@site/news/2022-06-14-air-release.md","title":"Release 33.1.1.889","description":"AIR SDK 33.1.1.889 has been released by Harman.","date":"2022-06-14T00:00:00.000Z","formattedDate":"June 14, 2022","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":0.815,"hasTruncateMarker":false,"authors":[{"name":"Michael","title":"Developer at distriqt","url":"https://github.com/marchbold","imageURL":"https://avatars3.githubusercontent.com/u/442356?s=460&v=4","key":"marchbold"}],"frontMatter":{"title":"Release 33.1.1.889","authors":["marchbold"],"tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.929","permalink":"/news/2022/08/05/air-release"},"nextItem":{"title":"Release 33.1.1.856","permalink":"/news/2022/05/12/air-release"}},"content":"**AIR SDK 33.1.1.889** has been released by Harman.  \\r\\n\\r\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.889/release-notes/Release_Notes_AIR_SDK_33.1.1.889.pdf)  \\r\\n- [Download](https://airsdk.harman.com/download/33.1.1.889)  \\r\\n\\r\\n\\r\\n### Features  \\r\\n\\r\\n- AIR-5964: Updating Falcon2 compiler to merge ABC blocks within SWC libraries\\r\\n- [github-1829](https://github.com/airsdk/Adobe-Runtime-Support/issues/): Encrypted Local Store support on Linux\\r\\n\\r\\n\\r\\n### Bug Fixes    \\r\\n\\r\\n- AIR-5931: Fixing CRL issue \'Extension of the wrong type\' when signing an AIR package\\r\\n- AIR-5932: Switching AAB jar-signing JDK detection to new build configuration\\r\\n- AIR-5990: Fixing problem running ADL from Animate on Apple M1 hardware\\r\\n- [github-1856](https://github.com/airsdk/Adobe-Runtime-Support/issues/1856): Fixing URL session and connection reuse on macOS\\r\\n- [github-1875](https://github.com/airsdk/Adobe-Runtime-Support/issues/1875): Fixing crash on macOS caused by user home folder permissions\\r\\n- [github-1905](https://github.com/airsdk/Adobe-Runtime-Support/issues/1905): Ensuring Android \'queries\' manifest section supports \'intent\' sub-items\\r\\n- [github-1912](https://github.com/airsdk/Adobe-Runtime-Support/issues/1912): Implementing support for omit-trace-statements, by default omitting only in release mode\\r\\n- [github-1915](https://github.com/airsdk/Adobe-Runtime-Support/issues/1915): Fixing crash when calling Graphics.readGraphicsData() on Android-GPU\\r\\n- [github-1923](https://github.com/airsdk/Adobe-Runtime-Support/issues/1923): Ensuring apk-debug and aab-debug builds use the debug gradle configurations\\r\\n- [github-1936](https://github.com/airsdk/Adobe-Runtime-Support/issues/1936): Correcting StageWebView.isSupported to reflect availability of any native webview\\r\\n- [github-1952](https://github.com/airsdk/Adobe-Runtime-Support/issues/1952): Fixing Android crash when viewing Video after VideoTexture"},{"id":"/2022/05/12/air-release","metadata":{"permalink":"/news/2022/05/12/air-release","source":"@site/news/2022-05-12-air-release.md","title":"Release 33.1.1.856","description":"AIR SDK 33.1.1.856 has been released by Harman.","date":"2022-05-12T00:00:00.000Z","formattedDate":"May 12, 2022","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":1.02,"hasTruncateMarker":false,"authors":[{"name":"Michael","title":"Developer at distriqt","url":"https://github.com/marchbold","imageURL":"https://avatars3.githubusercontent.com/u/442356?s=460&v=4","key":"marchbold"}],"frontMatter":{"title":"Release 33.1.1.856","authors":["marchbold"],"tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.889","permalink":"/news/2022/06/14/air-release"},"nextItem":{"title":"Release 33.1.1.795","permalink":"/news/2022/03/08/new-air-release"}},"content":"**AIR SDK 33.1.1.856** has been released by Harman.  \\r\\n\\r\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.856/release-notes/Release_Notes_AIR_SDK_33.1.1.856.pdf)  \\r\\n- [Download](https://airsdk.harman.com/download/33.1.1.856)  \\r\\n\\r\\n\\r\\n### Features  \\r\\n\\r\\n- AIR-5912: Adding the ability to capture Android device logs via ADT\\r\\n- AIR-5878: Changes for new Android Scout companion app for Android 12 support\\r\\n- [github-1818](https://github.com/airsdk/Adobe-Runtime-Support/issues/1818): Adding new ADT targets \'android-studio\' and \'android-studio-debug\'\\r\\n- [github-1866](https://github.com/airsdk/Adobe-Runtime-Support/issues/1866): Add support for certificate generation with RSA-4096 keys\\r\\n\\r\\n\\r\\n### Bug Fixes    \\r\\n\\r\\n- AIR-331: Defaulting Android manifests to use a high max_aspect ratio\\r\\n- AIR-5864: BitmapData.draw doesn\'t cope above 8192 pixels\\r\\n- AIR-5895: Scout - add query section to AIR Android manifests\\r\\n- AIR-5901: Moving macOS ANE frameworks into Contents/Frameworks\\r\\n- [github-964](https://github.com/airsdk/Adobe-Runtime-Support/issues/964): Ensuring stage color changes force a refresh in direct mode\\r\\n- [github-1641](https://github.com/airsdk/Adobe-Runtime-Support/issues/1641): Ensuring StageWebView does not send navigation error events when the navigation was deliberately cancelled\\r\\n- [github-1742](https://github.com/airsdk/Adobe-Runtime-Support/issues/1742): Updating NAIB to display errors if an installer is used without the AIR runtime\\r\\n- [github-1824](https://github.com/airsdk/Adobe-Runtime-Support/issues/1824): Re-introducing support for HTML-based AIR applications via native StageWebView\\r\\n- [github-1847](https://github.com/airsdk/Adobe-Runtime-Support/issues/1847): Updating HTMLLoader to not throw on API errors - and 1x1 objects made invisible\\r\\n- [github-1860](https://github.com/airsdk/Adobe-Runtime-Support/issues/1860): Updating EGL configuration choice for depth/stencil buffers\\r\\n- [github-1875](https://github.com/airsdk/Adobe-Runtime-Support/issues/1875): Fixing crash on macOS caused by user home folder permissions\\r\\n- [github-1878](https://github.com/airsdk/Adobe-Runtime-Support/issues/1878): Updating default player/swf versions to 33.1/44 in the AS compiler"},{"id":"/2022/03/08/new-air-release","metadata":{"permalink":"/news/2022/03/08/new-air-release","source":"@site/news/2022-03-08-new-air-release.md","title":"Release 33.1.1.795","description":"AIR Runtime 33.1.1.795 has been released by Harman.","date":"2022-03-08T00:00:00.000Z","formattedDate":"March 8, 2022","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":1.08,"hasTruncateMarker":false,"authors":[{"name":"Jan","title":"Developer at Dallmeier electronic GmbH","url":"https://github.com/2jfw","imageURL":"https://avatars.githubusercontent.com/u/73781224?v=4"}],"frontMatter":{"title":"Release 33.1.1.795","author":"Jan","author_title":"Developer at Dallmeier electronic GmbH","author_url":"https://github.com/2jfw","author_image_url":"https://avatars.githubusercontent.com/u/73781224?v=4","tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.856","permalink":"/news/2022/05/12/air-release"},"nextItem":{"title":"Release 33.1.1.743","permalink":"/news/2022/01/17/new-air-release"}},"content":"**AIR Runtime 33.1.1.795** has been released by Harman.  \\r\\n\\r\\n\\r\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.795/release-notes/Release_Notes_AIR_SDK_33.1.1.795.pdf)  \\r\\n- [Download](https://airsdk.harman.com/download/33.1.1.795)  \\r\\n\\r\\n\\r\\n### Features  \\r\\n- [github-1724](https://github.com/airsdk/Adobe-Runtime-Support/issues/1724): Adding \'preventDeviceModelAccess\' tag in the \u2018android\u2019 section of the application descriptor to stop Build.MODEL call  \\r\\n- [github-1729](https://github.com/airsdk/Adobe-Runtime-Support/issues/1729): Enabling low/medium quality mode on desktop builds via an \u2018allowLowQuality\u2019 tag in the \u2018initialWindow\u2019 section of the application descriptor file.  \\r\\n\\r\\n\\r\\n### Bug Fixes    \\r\\n- AIR-5760: Fixing crash in Android font rendering with clip larger than bitmap  \\r\\n- [github-427](https://github.com/airsdk/Adobe-Runtime-Support/issues/427): Moving the adt.lic file into a user-specific folder rather than in the SDK  \\r\\n- [github-1001](https://github.com/airsdk/Adobe-Runtime-Support/issues/1001): Fixing StageVideo full screen viewport on MacOS Retina screens  \\r\\n- [github-1299](https://github.com/airsdk/Adobe-Runtime-Support/issues/1299): Fixing Android text rendering: invalid text width, and JNI error after long time running  \\r\\n- [github-1404](https://github.com/airsdk/Adobe-Runtime-Support/issues/1404): Fixing white-screen issue with Android non-full-screen content after the splash screen  \\r\\n- [github-1584](https://github.com/airsdk/Adobe-Runtime-Support/issues/1584): Handling empty R.java arrays in internal Android resource bytecode generator  \\r\\n- [github-1654](https://github.com/airsdk/Adobe-Runtime-Support/issues/1654): Removing spurious alpha channel from VideoTexture camera inputs  \\r\\n- [github-1666](https://github.com/airsdk/Adobe-Runtime-Support/issues/1666): Ensure we don\'t package multidex.jar from ANEs  \\r\\n- [github-1715](https://github.com/airsdk/Adobe-Runtime-Support/issues/1715): Updating URLs used in native installers to point to HARMAN AIR runtimes  \\r\\n- [github-1700](https://github.com/airsdk/Adobe-Runtime-Support/issues/1700): Ensuring Android arch overrides work with new gradle-based APK building  \\r\\n- [github-1704](https://github.com/airsdk/Adobe-Runtime-Support/issues/1704): Ensuring asset folders starting with underscores are packaged in Android  \\r\\n- [github-1709](https://github.com/airsdk/Adobe-Runtime-Support/issues/1709): Ensuring correct support for camera input on Linux  \\r\\n- [github-1721](https://github.com/airsdk/Adobe-Runtime-Support/issues/1721): Skipping APKSigner v2 process if running within JRE < 1.8"},{"id":"/2022/01/17/new-air-release","metadata":{"permalink":"/news/2022/01/17/new-air-release","source":"@site/news/2022-01-17-new-air-release.md","title":"Release 33.1.1.743","description":"AIR Runtime 33.1.1.743 has been released by Harman.","date":"2022-01-17T00:00:00.000Z","formattedDate":"January 17, 2022","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":0.6,"hasTruncateMarker":false,"authors":[{"name":"Jan","title":"Developer at Dallmeier electronic GmbH","url":"https://github.com/2jfw","imageURL":"https://avatars.githubusercontent.com/u/73781224?v=4"}],"frontMatter":{"title":"Release 33.1.1.743","author":"Jan","author_title":"Developer at Dallmeier electronic GmbH","author_url":"https://github.com/2jfw","author_image_url":"https://avatars.githubusercontent.com/u/73781224?v=4","tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.795","permalink":"/news/2022/03/08/new-air-release"},"nextItem":{"title":"Release 33.1.1.713","permalink":"/news/2021/12/14/new-air-release"}},"content":"**AIR Runtime 33.1.1.743** has been released by Harman.\\n\\n\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.743/release-notes/Release_Notes_AIR_SDK_33.1.1.743.pdf)\\n- [Download](https://airsdk.harman.com/download/33.1.1.743)\\n\\n\\n### Bug Fixes  \\n- [github-183](https://github.com/airsdk/Adobe-Runtime-Support/issues/183): Fixing crash when cleaning up Windows StageWebView when debugger is active  \\n- [github-1509](https://github.com/airsdk/Adobe-Runtime-Support/issues/1509)/[1522](https://github.com/airsdk/Adobe-Runtime-Support/issues/1522)/[1529](https://github.com/airsdk/Adobe-Runtime-Support/issues/1529): Correcting file dialog handling of properties such as filters and filenames  \\n- [github-1510](https://github.com/airsdk/Adobe-Runtime-Support/issues/1510): Protected the audio track \'stopped\' property from destroyed objects on Android  \\n- [github-1516](https://github.com/airsdk/Adobe-Runtime-Support/issues/1516): Fixing problem with ANE zips being closed before extracting all Android files  \\n- [github-1528](https://github.com/airsdk/Adobe-Runtime-Support/issues/1528): Using XML descriptor \'versionLabel\' for Android \'versionName\' field  \\n- [github-1531](https://github.com/airsdk/Adobe-Runtime-Support/issues/1531): Ensure event handlers are still called when lower-priority event listeners are added within an earlier handler  \\n- [github-1536](https://github.com/airsdk/Adobe-Runtime-Support/issues/1536): Detecting Windows 11 version in Capabilities information  \\n- [github-1541](https://github.com/airsdk/Adobe-Runtime-Support/issues/1541): Ensuring unnamed local variables can still be inspected via a debugger connection"},{"id":"/2021/12/14/new-air-release","metadata":{"permalink":"/news/2021/12/14/new-air-release","source":"@site/news/2021-12-14-new-air-release.md","title":"Release 33.1.1.713","description":"AIR Runtime 33.1.1.713 has been released by Harman.","date":"2021-12-14T00:00:00.000Z","formattedDate":"December 14, 2021","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":1.715,"hasTruncateMarker":false,"authors":[{"name":"Jan","title":"Developer at Dallmeier electronic GmbH","url":"https://github.com/2jfw","imageURL":"https://avatars.githubusercontent.com/u/73781224?v=4"}],"frontMatter":{"title":"Release 33.1.1.713","author":"Jan","author_title":"Developer at Dallmeier electronic GmbH","author_url":"https://github.com/2jfw","author_image_url":"https://avatars.githubusercontent.com/u/73781224?v=4","tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.743","permalink":"/news/2022/01/17/new-air-release"},"nextItem":{"title":"Release 33.1.1.698","permalink":"/news/2021/12/02/new-air-release"}},"content":"**AIR Runtime 33.1.1.713** has been released by Harman.\\n\\n\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.713/release-notes/Release_Notes_AIR_SDK_33.1.1.713.pdf)\\n- [Download](https://airsdk.harman.com/download/33.1.1.713)\\n\\n\\n\\n## Changes and Issues\\n3.1 Changes in this Release  \\n\\n### 3.1.1 Runtime  \\nNo changes \u2013 the below details will be fixed for all \u201c33.1\u201d version numbers:  \\nNamespace: 33.1  \\nSWF version: 44  \\n  \\nThe namespace and SWF version updates are made across all platforms and may be used to access the\\nupdated ActionScript APIs that will be introduced in future beta releases of 33.1.\\nNote that using \u201c33.0\u201d as a namespace is not valid, and is resulting in behaviors such as VerifyErrors being\\ndispatched at application start-up with built-in class names such as ExtensionContext, Context3D, and others.\\n  \\n### 3.1.2 Build Tools  \\nXcode 13 and the latest macOS and iphoneOS SDKs are now being used to build the AIR SDK.\\nThe build system for this is on a version of macOS that doesn\u2019t support 32-bit processes hence we cannot\\ngenerate the 32-bit versions of the stub files. This means that we can no longer support older 32-bit\\niPhone/iPad devices.\\n  \\n### 3.1.3 AS3 APIs  \\nUpdated AS3 APIs are described in section 12.\\n  \\n### 3.1.4 Features  \\ngithub-1432: Updating version of ADB to 1.0.41 to match recent Android platform-tools\\n  \\n### 3.1.5 Bug Fixes  \\ngithub-274: Updating Java bytecode generator to cope with Android styleable resources  \\ngithub-444: Allow additional languages to be used in AIR mobile apps  \\ngithub-1368: Failed to package Android APK using Java 17  \\ngithub-1392: Ensuring utf-8 based Android resources can be compiled with javac  \\ngithub-1405: Failed to package Android AAB using Java 17  \\ngithub-1409: Ensuring jarsigner process uses quotes around arguments and correct relative paths  \\ngithub-1418: Ensuring default APK build is targeting armv7  \\ngithub-1424: Ensuring correct ANE .so files are placed in the correct ABI subfolders  \\ngithub-1426: Gradle java process to use the higher of ADT memory vs config setting  \\ngithub-1429: APKs generated without legacy build mode will include all ABIs  \\ngithub-1430: ADT failing to launch an Android application when using new build mechanism  \\ngithub-1431: Better error handling for invalid license files  \\nAIR-5449: AIR Android packaging using ADT should work with compatible major/minor AIR releases"},{"id":"/2021/12/02/new-air-release","metadata":{"permalink":"/news/2021/12/02/new-air-release","source":"@site/news/2021-12-02-new-air-release.md","title":"Release 33.1.1.698","description":"AIR Runtime 33.1.1.698 has been released by Harman.","date":"2021-12-02T00:00:00.000Z","formattedDate":"December 2, 2021","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":1.915,"hasTruncateMarker":false,"authors":[{"name":"Jan","title":"Developer at Dallmeier electronic GmbH","url":"https://github.com/2jfw","imageURL":"https://avatars.githubusercontent.com/u/73781224?v=4"}],"frontMatter":{"title":"Release 33.1.1.698","author":"Jan","author_title":"Developer at Dallmeier electronic GmbH","author_url":"https://github.com/2jfw","author_image_url":"https://avatars.githubusercontent.com/u/73781224?v=4","tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.713","permalink":"/news/2021/12/14/new-air-release"},"nextItem":{"title":"Community and Showcase Sections","permalink":"/news/2021/10/14/new-additions"}},"content":"**AIR Runtime 33.1.1.698** has been released by Harman.\\r\\n\\r\\n\\r\\n- [Release Notes](https://airsdk.harman.com/api/versions/33.1.1.698/release-notes/Release_Notes_AIR_SDK_33.1.1.698.pdf)\\r\\n- [Download](https://airsdk.harman.com/download/33.1.1.698)\\r\\n\\r\\n\\r\\n\\r\\n## Changes and Issues\\r\\n3.1 Changes in this Release  \\r\\n\\r\\n### 3.1.1 Runtime  \\r\\nNo changes \u2013 the below details will be fixed for all \u201c33.1\u201d version numbers:  \\r\\nNamespace: 33.1  \\r\\nSWF version: 44  \\r\\n  \\r\\nThe namespace and SWF version updates are made across all platforms and may be used to access the\\r\\nupdated ActionScript APIs that will be introduced in future beta releases of 33.1.\\r\\nNote that using \u201c33.0\u201d as a namespace is not valid, and is resulting in behaviors such as VerifyErrors being\\r\\ndispatched at application start-up with built-in class names such as ExtensionContext, Context3D, and others.\\r\\n  \\r\\n### 3.1.2 Build Tools  \\r\\nXcode 13 and the latest macOS and iphoneOS SDKs are now being used to build the AIR SDK.\\r\\nThe build system for this is on a version of macOS that doesn\u2019t support 32-bit processes hence we cannot\\r\\ngenerate the 32-bit versions of the stub files. This means that we can no longer support older 32-bit\\r\\niPhone/iPad devices.\\r\\n  \\r\\n### 3.1.3 AS3 APIs  \\r\\nUpdated AS3 APIs are described in section 12.\\r\\n  \\r\\n### 3.1.4 Features  \\r\\ngithub-1387: Switch APK builds so that they use Android Gradle plug-in. When an Android APK build is\\r\\nrequested, the default mechanism is now to use Gradle (similarly to how the AAB bundles are created). This\\r\\nbrings some parity to the two mechanisms which should help to ensure developers don\u2019t encounter problems\\r\\nwith deployed bundles that haven\u2019t been first spotted during local testing.\\r\\nFor developers who would prefer to keep using the earlier APK generation mechanisms, a flag can be added\\r\\nto the XML Descriptor File under the &lt;android&gt; section: \u201c&lt;BuildLegacyAPK&gt;true&lt;/BuildLegacyAPK&gt;\u201d.\\r\\n  \\r\\n### 3.1.5 Bug Fixes  \\r\\ngithub-972: Ensure signing of an App Bundle preserves the file permissions  \\r\\ngithub-1006: Adding support for \'webViewAllowFileAccess\' tag for Android local file access in WebView  \\r\\ngithub-1340: Ensuring \'resdir\' option in XML descriptor can use relative paths  \\r\\ngithub-1376: Ensuring no-compress settings are used in App Bundle packages  \\r\\ngithub-1391: Fixing signing block format for dynamic frameworks in macho binaries  \\r\\ngithub-1392: Android APK: updating Java code generation to target 1.8  \\r\\ngithub-1397: Ensuring Android package names don\'t include Java reserved words  \\r\\ngithub-apm40: Fixing crash when using command-line tools with nativeprocess  \\r\\nAIR-4740: Remove use of sun internal security classes for APK/AAB signing  \\r\\nAIR-5427: AIR Android security update for https certificate errors"},{"id":"/2021/10/14/new-additions","metadata":{"permalink":"/news/2021/10/14/new-additions","source":"@site/news/2021-10-14-new-additions.md","title":"Community and Showcase Sections","description":"Due to a lot of requests over the previous months we have added several new sections to promote developers and better direct people to the current resources available for AIR.","date":"2021-10-14T00:00:00.000Z","formattedDate":"October 14, 2021","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"},{"label":"updates","permalink":"/news/tags/updates"}],"readingTime":1.075,"hasTruncateMarker":false,"authors":[{"name":"Michael","title":"Developer at distriqt","url":"https://github.com/marchbold","imageURL":"https://avatars3.githubusercontent.com/u/442356?s=460&v=4","key":"marchbold"}],"frontMatter":{"title":"Community and Showcase Sections","authors":["marchbold"],"tags":["airsdk","updates"]},"prevItem":{"title":"Release 33.1.1.698","permalink":"/news/2021/12/02/new-air-release"},"nextItem":{"title":"Welcome","permalink":"/news/welcome"}},"content":"Due to a lot of requests over the previous months we have added several new sections to promote developers and better direct people to the current resources available for AIR.\\n\\nWe also have started creating a detailed [\\"Getting Started\\"](/docs/basics/getting-started) guide to walk new users through the installation of the AIR SDK and setup of a development environment.\\n\\nThe first of these is the [Community](/community) section. This section is aimed to direct developers to the resources and community channels that are available and active on the net.\\n\\nWe have initially added three of what we believe are the most important resources currently:\\n\\n- [Issue Tracker](https://github.com/airsdk/Adobe-Runtime-Support/issues)\\n- [Discussion Forum](https://github.com/airsdk/Adobe-Runtime-Support/discussions)\\n- [Starling Forum](https://forum.starling-framework.org/)\\n\\nAnd we will be adding the ever present stackoverflow reference as well. If you believe anything else should be added, please let us know! \\n\\n\\nThe second is the [Showcase](/showcase) section. The showcase is designed to be a place for AIR developers to not only promote their work but promote the AIR platform and show what is possible using the AIR SDK. You can add your own application through a pull request to the repository (or you can just email me your details).\\n\\nIf you have any feedback on the tutorials or guides we are writing (or if you would like to contribute) please reach out!"},{"id":"welcome","metadata":{"permalink":"/news/welcome","source":"@site/news/2021-05-25-welcome.md","title":"Welcome","description":"Welcome to the new AIR SDK developer portal.","date":"2021-05-25T00:00:00.000Z","formattedDate":"May 25, 2021","tags":[{"label":"airsdk","permalink":"/news/tags/airsdk"}],"readingTime":0.105,"hasTruncateMarker":false,"authors":[{"name":"Michael","title":"Developer at distriqt","url":"https://github.com/marchbold","imageURL":"https://avatars3.githubusercontent.com/u/442356?s=460&v=4","key":"marchbold"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["marchbold"],"tags":["airsdk"]},"prevItem":{"title":"Community and Showcase Sections","permalink":"/news/2021/10/14/new-additions"}},"content":"Welcome to the new AIR SDK developer portal. \\n\\nThis site is aimed to become the central location for all things AIR."}]}')}}]);