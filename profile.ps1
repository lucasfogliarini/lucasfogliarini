# ====================================================================
#  PROFILE DO POWERSHELL - Lucas Fogliarini
# ====================================================================
#  Execute este comando para criar/carregar este profile forçado:
#  Invoke-WebRequest -Uri "https://raw.githubusercontent.com/lucasfogliarini/lucasfogliarini/main/profile.ps1" -OutFile $PROFILE; . $PROFILE; Get-Alias | Where-Object { $_.Name -in @('nodes','pods','services', 'gs', 'h', 'd', 'k') }
# ====================================================================

function nodes { kubectl get nodes -o wide @args }
function services { kubectl get services -o wide @args }
function pods { kubectl get pods -o wide @args }
function d { docker @args }
function k { kubectl @args }
function gs { git status @args }
