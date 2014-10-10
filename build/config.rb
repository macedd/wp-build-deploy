# Require any additional compass plugins here.

# Set the theme folder
theme_dir = "../htdocs/wp-content/themes/wordpress-bootstrap/"

# Set this to the root of your project when deployed:
http_path = ""
css_dir = theme_dir + "/assets/css"
sass_dir = theme_dir + "/assets/sass"
images_dir = theme_dir + "/assets/images"
fonts_dir = theme_dir + "/assets/fonts"
javascripts_dir = theme_dir + "/assets/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed
output_style = (environment == :production) ? :compressed : :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = false

# Work with Sourcemaps
# sass_options = { :debug_info => true }

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
