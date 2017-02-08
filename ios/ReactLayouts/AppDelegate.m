/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import <CodePush/CodePush.h>

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
  
#if defined(__i386__)  || defined(__x86_64__) // #ifdef DEBUG
  /* Run code if in Simulator */
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

#else
  /* Run code if in device */
  jsCodeLocation = [CodePush bundleURL];
#endif

  
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ReactLayouts"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  
  // DEBUG
//  UIAlertController * alert = [UIAlertController alertControllerWithTitle:@"debug" message:[jsCodeLocation path] preferredStyle:(UIAlertControllerStyleAlert)];
//  [alert addAction:[UIAlertAction actionWithTitle:@"ok" style:(UIAlertActionStyleDefault) handler:^(UIAlertAction * _Nonnull action) {
//    ;
//  }]];
//  [rootViewController presentViewController:alert animated:NO completion:nil];
  
  return YES;
}

@end
