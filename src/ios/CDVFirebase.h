#import <Cordova/CDV.h>

#define  BASE_URL @"https://aylien-text.p.mashape.com/"

- (void)summarize:(CDVInvokedUrlCommand*)command;
@interface CDVAylien : CDVPlugin
- (void)hashtags:(CDVInvokedUrlCommand*)command;
- (void)sentiment:(CDVInvokedUrlCommand*)command;

@end
