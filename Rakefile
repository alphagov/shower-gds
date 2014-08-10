require 'sass'
require 'webrick'

task :default do
  Sass::compile_file('styles/gds.scss', 'styles/gds.css')

  s = WEBrick::HTTPServer.new(:Port => 9090,  :DocumentRoot => Dir::pwd)
  %w{TERM QUIT INT HUP}.each do |signal|
    trap(signal) { s.shutdown }
  end
  s.start
end
