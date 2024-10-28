echo "Building app.."
npm run build;

echo "Deploying files to server ..."
scp -r build/* ploi@167.86.68.168:/var/www/perfumster.ca/

echo "Done" 