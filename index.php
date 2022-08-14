<?php

namespace WPPerfomance\PrismMyCode;

/**
 * Plugin Name:       Prism My Code
 * Description:       Block code with Prism highlighting
 * Update URI:        goodmotion-block-simple
 * Requires at least: 5.7
 * Requires PHP:      7.4
 * Version:           0.0.1
 * Author:            Faramaz Patrick <infos@goodmotion.fr>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       prism-my-code
 *
 * @package           wp-performance
 */


$PLUGIN_PATH = 'prism-my-code';
$PLUGIN_NAME = 'wp-performance/prism-my-code';
$VERSION = '0.0.1';

require_once(dirname(__FILE__) . '/inc/options.php');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function block_init()
{
  register_block_type_from_metadata(__DIR__);
}
add_action('init', __NAMESPACE__ . '\block_init');


/**
 * Load the plugin text domain for translation.
 *
 */ function load_textdomain()
{
  load_plugin_textdomain(
    'prism-my-code',
    false,
    basename(dirname(__FILE__)) . '/languages'
  );
}

/**
 * load translations
 */
function set_script_translations()
{
  wp_set_script_translations('prism-my-code', 'prism-my-code', plugin_dir_path(__FILE__) . 'languages');
}

add_action('init', __NAMESPACE__ . '\load_textdomain');
add_action('init', __NAMESPACE__ . '\set_script_translations');


/**
 * add scripts and styles if block is in content
 */
add_action('wp_enqueue_scripts', function () use ($PLUGIN_NAME, $PLUGIN_PATH, $VERSION) {
  $theme = get_option('prism-my-code-theme') ?? 'default';
  $id = get_the_ID();
  if (has_block($PLUGIN_NAME, $id)) {
    // add script only if shortcode is used
    $path = plugins_url() . '/' . $PLUGIN_PATH;
    wp_enqueue_script($PLUGIN_PATH . '-vendor', $path . '/assets/prism.js', array(), $VERSION, true);
    wp_enqueue_script($PLUGIN_PATH, $path . '/assets/scripts.js', array(), $VERSION, true);
    // default style
    wp_enqueue_style($PLUGIN_PATH, $path . '/assets/styles.css', array(), $VERSION);

    // theme
    wp_enqueue_style($PLUGIN_PATH . '-theme', $path . '/assets/themes/' . $theme . '.css', array(), $VERSION);
  }
});


add_action(
  'admin_print_styles',
  function () use ($PLUGIN_NAME, $PLUGIN_PATH, $VERSION) {
    $path = plugins_url() . '/' . $PLUGIN_PATH;
    wp_enqueue_script($PLUGIN_PATH . '-vendor', $path . '/assets/prism.js', array(), $VERSION, true);
    wp_enqueue_script($PLUGIN_PATH, $path . '/assets/scripts.js', array(), $VERSION, true);
    // default style
    wp_enqueue_style($PLUGIN_PATH, $path . '/assets/styles.css', array(), $VERSION);
    // theme
    $theme = get_option('prism-my-code-theme') ?? 'default';
    wp_enqueue_style($PLUGIN_PATH . '-theme', $path . '/assets/themes/' . $theme . '.css', array(), $VERSION);
  },
  11
);
