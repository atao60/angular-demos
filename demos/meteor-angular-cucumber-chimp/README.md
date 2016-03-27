# Meteor, Angular, Cucumber and Chimp

This is a super simple application with integration tests.

It's based on this [Test Driven Development with Cucumber & Chimp](http://www.mhurwi.com/tutorial-test-driven-development-with-meteor-cucumber-chimp/), but with AngularJS in place of Blaze + React.

By default, [Chimp](https://chimp.readme.io/) uses the assertions of [Jasmine](http://jasmine.github.io/), a simple JavaScript testing framework.

Here, *Chimp* is used with [Cucumber](https://cucumber.io/), a tool for executable specifications (Behaviour-Driven Development). 


## Tools

Check git, node, nmp and a JKD 1.8 are available:
```
$ git --version
git version 1.9.1

$ nodejs -v
v4.4.0

$ npm --version
3.8.3

$ meteor --version
Meteor 1.2.1

$ java -version
java version "1.8.0_40"
Java(TM) SE Runtime Environment (build 1.8.0_40-b25)
Java HotSpot(TM) 64-Bit Server VM (build 25.40-b25, mixed mode)

$ javac -version
javac 1.8.0_40
```

The JDK is required by *Cucumber*.

## Chimp

Install *Chimp*:
```
$ sudo npm install -g chimp
```

Even if avoiding use of "sudo" is strongly recommended by the [Chimp manual](https://chimp.readme.io/docs/installation#section-global-installation), it's the only way I found out working under Ubuntu 14.04. 

The installation will be really finished only after the first run of *Chimp*, see below. 

## Development

Clone and run the project from Github:
```
$ git clone https://github.com/mhurwi/meteor-cucumber-chimp-tutorial.git
$ cd meteor-cucumber-chimp-tutorial
$ meteor
```

From a second console, run *Chimp*:
```
$ cd [any requied path]/meteor-cucumber-chimp-tutorial
$ sudo chimp --ddp=http://localhost:3000 --watch --path=tests --browser=phantomjs
```

By default, *Chimp* (in fact [Selenium](http://www.seleniumhq.org/)), uses *Chrome* as browser. If you want to see the browser view as *Chimp* is working, but e.g. only *Firefox* is available, then replace "phantomjs" by "firefox".

The "sudo" command is required with the first run, to allow *Chimp* to install *selenium-standalone*.
With the following runs, *Chimp* can be launched without it.

Everything is now ready to change the code and check the tests in real time.



