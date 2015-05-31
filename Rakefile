require 'sass'
require 'webrick'

desc 'Compile SCSS'
task :compile do
  Dir.glob('styles/**/[^_]*.scss') do |sass_file|
    Sass::compile_file(sass_file, sass_file.sub(/\..*$/,'.css'))
  end
end

desc 'Serve current directory on http://localhost:9090'
task :serve do
  s = WEBrick::HTTPServer.new(:Port => 9090,  :DocumentRoot => Dir::pwd)
  %w{TERM QUIT INT HUP}.each do |signal|
    trap(signal) { s.shutdown }
  end
  s.start
end

task :default => [:compile, :serve]
