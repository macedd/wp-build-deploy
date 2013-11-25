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
 
// Turn on debug for local environment and other settings
define('WP_DEBUG', true);
define('SAVEQUERIES', false);
define('WP_CACHE', false);