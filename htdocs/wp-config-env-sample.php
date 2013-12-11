<?php
// Local server settings
define( 'WP_LOCAL_DEV', true );

// Local Database
define('DB_NAME', 'wpsite');
define('DB_USER', 'wpsite');
define('DB_PASSWORD', 'wpsitep4ss');
define('DB_HOST', 'localhost');
define('DB_CHARSET', 'utf8');
define('DB_COLLATE', '');

// Sets  our local env domains
define('WP_HOME','http://local.website.com');
define('WP_CACHE', false);

// Turn on debug for local environment
define('WP_DEBUG', true);

// Save wp-content/debug.log and supress the debug info on pages
define('WP_DEBUG_LOG', true); 
define('WP_DEBUG_DISPLAY', false);
@ini_set('display_errors',0);

define('SAVEQUERIES', false);
define('SCRIPT_DEBUG', true);
