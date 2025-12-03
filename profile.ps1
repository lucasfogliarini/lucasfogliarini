# ====================================================================
#  PROFILE DO POWERSHELL - Lucas Fogliarini
# ====================================================================
#  Execute este comando para criar/carregar este profile se ele não existir:
#  if (!(Test-Path $PROFILE)) { Invoke-WebRequest -Uri "https://raw.githubusercontent.com/lucasfogliarini/lucasfogliarini/main/profile.ps1" -OutFile $PROFILE  } . $PROFILE Get-Alias
# ====================================================================

# ====================================================================
#  Remover este profile completamente:
#  Remove-Item -Path $PROFILE -Force

function k { kubectl @args }
function nodes { kubectl get nodes -o wide @args }
function pods { kubectl get pods -o wide @args }
function h { helm @args }
function d { docker @args }
function gs { git status @args }
