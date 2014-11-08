The build system make use of `Grunt` in order to compile css and javascript files. You should install and configure the environment and this process is described in this document.

##Grunt Setup

**Dependencies**

    cd ./build

    # Ruby + Compass
    apt-get install rubygems
    gem install sass compass

    # DEBIAN nodejs
    echo "deb http://ftp.us.debian.org/debian wheezy-backports main" >> /etc/apt/sources.list.d/backports.list
    apt-get update
    apt-get install nodejs
    # UBUNTU nodejs
    sudo add-apt-repository ppa:chris-lea/node.js  
    sudo apt-get update  
    sudo apt-get install nodejs
    # OSX nodejs
	wget --> http://nodejs.org/download/
	$ export NODE_PATH=/usr/local/lib/node_modules
    
    # NPM Setup
    curl https://www.npmjs.org/install.sh | sh

    # Grunt finally
    npm install -g grunt-cli
    # Install project packages.json
    npm install

**Configuration**

Change the array `dirs` inside themeConfig to represent your theme locations

    # Configure your theme locations
    nano Gruntfile.js

##Using it

    # To Watch the scss changes
    cd build
    grunt watch

    # Compile it all (sprites, minify..)
    grunt

