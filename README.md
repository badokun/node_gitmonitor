Setup

In repo folder clone repo over http

	(http://stackoverflow.com/a/13944180)
	git fetch
	git log HEAD..origin/master
	git pull origin master

	
Setting up local dev

*	npm install grunt-cli -g
*	npm install
*   install rethinkdb (check web for linux instructions)

Setting up IDE
*	git config --global alias.co checkout
*	git config --global alias.ci commit
*	git config --global alias.st status
*	git config --global alias.br branch

Referencing this course - http://beta.pluralsight.com/courses/node-application-patterns

Javascript design patterns - http://addyosmani.com/resources/essentialjsdesignpatterns/book/


ReThinkDB

To have launchd start rethinkdb at login:
    ln -sfv /usr/local/opt/rethinkdb/*.plist ~/Library/LaunchAgents
Then to load rethinkdb now:
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.rethinkdb.plist

To run type: rethinkdb

Update packages on secondthought - http://stackoverflow.com/a/22849716

Testing with should
// https://github.com/shouldjs/should.js