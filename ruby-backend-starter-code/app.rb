require 'sinatra'
require 'json'

get '/' do
  File.read('./views/index.html')
end

get '/favorites' do
  puts 'do i make it here?'
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

post '/favorites' do
  movie_object = JSON.parse(params['json'], symbolize_names: true)

  file = JSON.parse(File.read('data.json'))
  unless (movie_object[:name] && movie_object[:oid])
    puts 'invalid request'
   return 'Invalid Request'
  end
  movie = { name: movie_object[:name], oid: movie_object[:oid] }
  file << movie
  File.write('data.json',JSON.pretty_generate(file))
  movie.to_json
end
