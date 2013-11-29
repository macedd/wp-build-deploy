run: install
	cd htdocs
	service mysql start
	php -S localhost:8000

install:
	git submodule init
	git submodule update
	cd htdocs/wordpress
	git checkout 3.7.1
