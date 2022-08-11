<?php

namespace WPPerfomance\PrismMyCode\inc\options;

require_once(dirname(__FILE__) . '/../options.php');

function register_settings()
{
  add_option('prism-my-code-theme', 'default');
  register_setting('prism-my-code_options_group', 'prism-my-code-theme');
}


function register_options_page($optionsThemes)
{
  add_options_page('Prism My Code', 'Prism My Code', 'manage_options', 'prism-my-code', function () use ($optionsThemes) {
    namespace\options_page($optionsThemes);
  });
}


function options_page($optionsThemes)
{
?>
  <div>
    <h2>Prism My Code</h2>
    <form method="post" action="options.php">
      <?php settings_fields('prism-my-code_options_group'); ?>
      <table>
        <tr valign="top">
          <th scope="row"><label for="prism-my-code-theme">Theme</label></th>
          <td><select id="prism-my-code-theme" name="prism-my-code-theme" required>
              <?php foreach ($optionsThemes as $key => $theme) {
                echo '<option ' . (get_option('prism-my-code-theme') === $theme['value'] ? 'selected="selected"' : '') . ' value="' . $theme['value'] . '">' . $theme['label'] . '</option>';
              } ?>
            </select></td>
        </tr>
      </table>
      <?php submit_button(); ?>
    </form>
  </div>
<?php
}
//value="<?php echo get_option('prism-my-code-theme');

add_action('admin_menu', function () use ($optionsThemes) {
  namespace\register_options_page($optionsThemes);
});

add_action('admin_init', __NAMESPACE__ . '\register_settings');
