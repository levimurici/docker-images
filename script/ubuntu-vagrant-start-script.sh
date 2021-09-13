echo '-----------------------------------------------'
echo '------- Installing Vagrant and packages -------'
echo '-----------------------------------------------'
sleep 1
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install vagrant
sleep 1
echo '-----------------------------------------------'
echo '------------ Installing VirtualBox ------------'
echo '-----------------------------------------------'
sudo apt-key add oracle_vbox_2016.asc
sudo apt-key add oracle_vbox.asc
sudo apt-get update
sudo apt-get install virtualbox-6.1
