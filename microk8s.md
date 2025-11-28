# Instalação do MicroK8s no Windows com WSL2

Este guia descreve os passos essenciais para preparar um ambiente Kubernetes local no Windows utilizando **WSL2 + Ubuntu + MicroK8s**, e conectá-lo à interface gráfica **Lens**.

---

## 1. Habilitar WSL2 e instalar Ubuntu

No PowerShell **como administrador**, execute:

```powershell
wsl --install -d Ubuntu
```

Ao finalizar a instalação, reinicie o computador se solicitado.

---

## 2. Definir a distribuição Ubuntu como padrão

Ainda no PowerShell:

```powershell
wsl --set-default Ubuntu
```

---

## 3. Entrar na distribuição Ubuntu

Abra o terminal Linux executando:

```powershell
wsl
```

Na primeira execução, crie seu usuário e senha Linux.

---

## 4. Atualizar o sistema Ubuntu

No terminal do Ubuntu:

```bash
sudo apt update && sudo apt upgrade -y
```

---

## 5. Instalar o MicroK8s

Ainda no Ubuntu:

```bash
sudo snap install microk8s --classic
sudo usermod -a -G microk8s $USER
newgrp microk8s
microk8s status --wait-ready
```

Verifique o cluster:

```bash
microk8s kubectl get nodes
```

---

## 6. Instalar o Lens (interface gráfica para Kubernetes)

1. Baixe e instale o Lens Desktop:
   [https://k8slens.dev](https://k8slens.dev)

2. Abra o aplicativo após a instalação.

---

## 7. Conectar o Lens ao MicroK8s

No Ubuntu, exporte a configuração do cluster:

```bash
microk8s config > ~/.kube/config
```

Ou exporte para o Windows (PowerShell):

```powershell
wsl microk8s config > $HOME\.kube\config
```

No Lens:

1. Abra o Lens.
2. Clique em **Add Cluster**.
3. Escolha a opção **Browse Kubeconfig**.
4. Selecione o arquivo `config` exportado.
5. Salve e conectar.

---

## Pronto!

Você agora tem um cluster Kubernetes local com MicroK8s rodando dentro do WSL2, acessível via Lens.
