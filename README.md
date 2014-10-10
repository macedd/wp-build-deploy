wp-build-deploy
===============

Build and Deploy WordPress sites with the garantee of `git` and the quality of `grunt` in the environment of your choice.

Its structure is built to run WordPress from a git repository.

###Installing

    git clone https://github.com/thiagof/wp-build-deploy.git
    cd wp-build-deploy

    git submodule init
    git submodule update

Check the `build` folder for its setup instructions.

###TODO

- Apache/nginx config files
- htaccess
- WP Backup script
    - database, application, uploads
    - rsync, git, ..
    - restore!
    - fab? grunt? bash!
- Better sass performance (http://benfrain.com/lightning-fast-sass-compiling-with-libsass-node-sass-and-grunt-sass/)
