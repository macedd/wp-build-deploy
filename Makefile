run:
	cd htdocs
	service mysql start
	php -S localhost:8000

install:
	git submodule init
	git submodule update
	cd htdocs/wordpress
	git checkout 3.7.1

language:
	echo 'Enter which language code do you want to install? (eg. pt_BR)'
	read LANG
	sed -i "s/define('WPLANG.*$/define('WPLANG', '${LANG}');/g" htdocs/wp-config.php
	mkdir htdocs/wp-content/languages
	cd htdocs/wp-content/languages
	wget http://i18n.svn.wordpress.org/$LANG/mu/trunk/$LANG.mo
	cd -
