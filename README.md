WP-Build-Deploy
===============

This is a deployment structure and facilities to build and deploy WordPress applications with `git` and `grunt` in the environment of your choice.

Its structure is built to run WordPress from a git repository.

###Getting Started

Create your project repository

    mkdir myproj
    cd myproj

    git init

    # Add your project repository
    git remote add origin https://github.com/thiagof/myproj.git

Pull the **wp-build-deploy** repository

    git remote add wpbuild https://github.com/thiagof/wp-build-deploy.git
    git pull wpbuild master
    git submodule init
    git submodule update


Push to your repo the new structure

    git push origin master

Now you can run it in your server and start developing.

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
