require 'sinatra'

get '/' do
  File.read('./views/index.html')
end

get '/favorites' do
  puts 'do i make it here?'
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

#post '/favorites' do
  #puts 'or here?'
  #file = JSON.parse(File.read('data.json'))
  ##unless (params[:name] && params[:oid]) do
   ##return 'Invalid Request'
  ##end
  #movie = { name: params[:name], oid: params[:oid] }
  #file << movie
  #File.write('data.json',JSON.pretty_generate(file))
  #movie.to_json
#end
