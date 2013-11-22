<?php
/**
* Alow local environment configuration
* 
* Insert file wp-config-env.php with the above variables and constants
*/
if ( file_exists( dirname( __FILE__ ) . '/wp-config-env.php' ) ) {
    include( dirname( __FILE__ ) . '/wp-config-env.php' );
} else {
	die('You did not configured the system properly. Missing wp-config-env.php');
}

include 'wp-config-salt.php';

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
if (!$table_prefix)
	$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
if ( !defined( 'WPLANG' ) )
	define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if ( !defined( 'WP_DEBUG' ) )
	define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */


/**
* Define our default theme
*/
define('WP_DEFAULT_THEME', 'wordpress-bootstrap');

/**
* This lets WordPress know that the core files are in the wordpress directory
*/
define('WP_SITEURL', 'http://' . $_SERVER['SERVER_NAME'] . '/wordpress');
define('WP_HOME',    'http://' . $_SERVER['SERVER_NAME']);

/**
* Moving wp-content folder configuration
*/
define('WP_CONTENT_DIR', $_SERVER['DOCUMENT_ROOT'] . '/wp-content');
define('WP_CONTENT_URL', 'http://' . $_SERVER['SERVER_NAME'] . '/wp-content');



/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
