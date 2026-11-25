#!/usr/bin/env bash
set -e

echo "============================================="
echo "   KhmerFood EC2 Automated Deployment Setup  "
echo "============================================="

# 1. Setup 2GB Swap space (crucial for t2.micro/t3.micro during Docker builds)
if [ ! -f /swapfile ]; then
    echo ">> Configuring 2GB Swap Space..."
    sudo fallocate -l 2G /swapfile || sudo dd if=/dev/zero of=/swapfile bs=1M count=2048
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
    echo ">> Swap configured successfully."
else
    echo ">> Swap already exists."
fi

# 2. Install Docker & Docker Compose if not present
if ! command -v docker &> /dev/null; then
    echo ">> Installing Docker..."
    sudo apt-get update -y
    sudo apt-get install -y ca-certificates curl gnupg
    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg
    echo \
      "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
      $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
      sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update -y
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
    sudo systemctl enable docker
    sudo systemctl start docker
    sudo usermod -aG docker $USER
    echo ">> Docker installed successfully."
fi

# 3. Build & Run KhmerFood Containers
echo ">> Starting KhmerFood Stack with Docker Compose..."
sudo docker compose down || true
sudo docker compose up -d --build

echo "============================================="
echo ">> KhmerFood Deployment Complete!            "
echo ">> Checking running containers:              "
sudo docker compose ps
echo "============================================="
