# frozen_string_literal: true

# name: discourse-custom-category
# about: Custom the continent navigation
# version: 1.0
# authors: Louis Pixodeo
# url: https://pixodeo.com/

#hide_plugin if self.respond_to?(:hide_plugin)

enabled_site_setting :custom_header_nav_enabled

register_asset "assets/javascripts/discourse/components/custom-header-nav.js.es6"
register_asset "stylesheets/custom-category.scss"
register_asset "stylesheets/custom-category-mobile.scss", :mobile
