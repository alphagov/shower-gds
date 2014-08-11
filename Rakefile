require 'sass'
require 'webrick'

task :default do
  Dir.glob('styles/**/[^_]*.scss') do |sass_file|
    Sass::compile_file(sass_file, sass_file.sub(/\..*$/,'.css'))
  end

  s = WEBrick::HTTPServer.new(:Port => 9090,  :DocumentRoot => Dir::pwd)
  %w{TERM QUIT INT HUP}.each do |signal|
    trap(signal) { s.shutdown }
  end
  s.start
end
