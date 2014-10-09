<?php

// todo: implement dual env (pro/dev)
//		allow production config 

// Local server settings
define( 'WP_LOCAL_DEV', true );

// Local Database
define('DB_NAME', 'wpsite');
define('DB_USER', 'wpsite');
define('DB_PASSWORD', 'wpsitep4ss');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');


//define('WP_POST_REVISIONS', 3);
//define('CONCATENATE_SCRIPTS', false);

// Sets  our local env domains
define('WP_HOME','http://local.website.com');
define('WPLANG', 'en_US');

define('SAVEQUERIES', false);
define('WP_CACHE', false);

// Turn on debug for local environment and other settings
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', false);
define('WP_DEBUG_DISPLAY', false);
define('SCRIPT_DEBUG', true);

@ini_set('display_errors', 0);
@ini_set('error_reporting', E_ALL ^ E_STRICT);
//define('WP_MEMORY_LIMIT', '64M');
//ini_set('date.timezone', 'America/Sao_Paulo');
